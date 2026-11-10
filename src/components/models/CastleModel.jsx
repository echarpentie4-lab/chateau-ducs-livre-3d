// Château des ducs de Bretagne, procédural (low-poly), en deux finitions :
//   variant="stone" → maquette en pierre chaude et toits de bronze (posée sur le bureau)
//   variant="paper" → origami / pop-up en papier, arêtes dorées, animé par progress.u (0 → 1)
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import * as THREE from 'three'
import { makePaperTextures } from '../../three/materialsTextures'

// Plan simplifié (x, z) — environ 1 unité de large. +z = vers le lecteur.
const CORNERS = [[-0.5, -0.12], [-0.18, -0.46], [0.4, -0.42], [0.5, 0.28], [-0.28, 0.44]]
const CENTROID = CORNERS.reduce((a, c) => [a[0] + c[0] / 5, a[1] + c[1] / 5], [0, 0])
const WALL_H = 0.13
const TOWERS = [
  // x, z, rayon, hauteur, toit
  [-0.5, -0.12, 0.065, 0.2, 'cone'],
  [-0.18, -0.46, 0.07, 0.22, 'cone'],
  [0.4, -0.42, 0.075, 0.2, 'flat'],
  [0.5, 0.28, 0.085, 0.19, 'flat'],
  [-0.28, 0.44, 0.07, 0.21, 'cone'],
  [0.19, 0.344, 0.058, 0.25, 'cone'], // tours de l'entrée
  [0.03, 0.376, 0.058, 0.25, 'cone'],
]
const BUILDINGS = [
  // centre x, z, largeur, profondeur, hauteur, hauteur du toit, angle, lucarnes
  { x: 0.08, z: -0.3, w: 0.46, d: 0.13, h: 0.17, rh: 0.15, a: -0.07, dormers: 4 }, // Grand Logis
  { x: 0.33, z: -0.02, w: 0.36, d: 0.12, h: 0.15, rh: 0.11, a: -1.43, dormers: 3 }, // Grand Gouvernement
]

export const easeOutBack = (t) => {
  const c1 = 1.5
  const c3 = c1 + 1
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2
}

function wallGeometry(len, h, depth) {
  const s = new THREE.Shape()
  s.moveTo(0, 0)
  s.lineTo(len, 0)
  s.lineTo(len, h)
  const n = Math.max(3, Math.floor(len / 0.045))
  const step = len / n
  for (let i = n - 1; i >= 0; i--) {
    const x0 = i * step
    s.lineTo(x0 + step, h)
    s.lineTo(x0 + step, h + 0.022)
    s.lineTo(x0 + step * 0.45, h + 0.022)
    s.lineTo(x0 + step * 0.45, h)
  }
  s.lineTo(0, h)
  s.closePath()
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false })
  g.translate(0, 0, -depth / 2)
  return g
}

export function roofGeometry(w, d, rh) {
  const s = new THREE.Shape()
  s.moveTo(-d / 2 - 0.01, 0)
  s.lineTo(d / 2 + 0.01, 0)
  s.lineTo(0, rh)
  s.closePath()
  const g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false })
  g.rotateY(Math.PI / 2)
  g.translate(-w / 2, 0, 0)
  return g
}

export const dormerGeometry = (() => {
  const s = new THREE.Shape()
  s.moveTo(-0.03, 0)
  s.lineTo(0.03, 0)
  s.lineTo(0.03, 0.035)
  s.lineTo(0, 0.09)
  s.lineTo(-0.03, 0.035)
  s.closePath()
  return new THREE.ExtrudeGeometry(s, { depth: 0.02, bevelEnabled: false })
})()

// Dégradé "encre ancienne → ocre → blanc cassé" du bas vers le haut de chaque pièce.
function inkGradient(mat) {
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = 'varying float vPaperH;\n' + shader.vertexShader.replace(
      '#include <begin_vertex>',
      '#include <begin_vertex>\n  vPaperH = position.y;',
    )
    shader.fragmentShader = 'varying float vPaperH;\n' + shader.fragmentShader.replace(
      '#include <map_fragment>',
      `#include <map_fragment>
      float k = smoothstep(0.0, 0.2, vPaperH);
      vec3 ink = vec3(0.62, 0.48, 0.32);
      vec3 ochre = vec3(0.93, 0.82, 0.62);
      diffuseColor.rgb *= mix(mix(ink, ochre, smoothstep(0.0, 0.5, k)), vec3(1.0), smoothstep(0.4, 1.0, k));`,
    )
  }
  mat.customProgramCacheKey = () => 'paper-ink-gradient'
  return mat
}

// Feuille de papier teintée (même grain que les maquettes), pour les détails colorés.
let paperTex = null
const sheetCache = new Map()
export function paperSheet(color, { roughness = 0.9, ...opts } = {}) {
  const key = `${color}|${roughness}|${JSON.stringify(opts)}`
  if (sheetCache.has(key)) return sheetCache.get(key)
  paperTex ||= makePaperTextures()
  const mat = inkGradient(
    new THREE.MeshStandardMaterial({
      color, map: paperTex.map, bumpMap: paperTex.bumpMap, bumpScale: 2.5, roughness,
      flatShading: true, side: THREE.DoubleSide, ...opts,
    }),
  )
  sheetCache.set(key, mat)
  return mat
}

export function useMaterials(paper) {
  return useMemo(() => {
    if (paper) {
      const { map, bumpMap } = makePaperTextures()
      const sheet = (color, roughness = 0.9) =>
        inkGradient(
          new THREE.MeshStandardMaterial({
            color, map, bumpMap, bumpScale: 2.5, roughness, flatShading: true, side: THREE.DoubleSide,
          }),
        )
      return {
        wall: sheet('#fbf4e4'), // blanc cassé
        tower: sheet('#f3dfb6'), // ocre clair
        building: sheet('#fffaf0'), // tuffeau blanc
        roof: sheet('#c9a35e', 0.7), // papier kraft doré
        dark: new THREE.MeshStandardMaterial({ color: '#4a3220', roughness: 0.9 }),
      }
    }
    const stone = new THREE.MeshStandardMaterial({ color: '#b59877', roughness: 0.95 })
    const tuffeau = new THREE.MeshStandardMaterial({ color: '#e8dcc3', roughness: 0.9 })
    const bronze = new THREE.MeshStandardMaterial({ color: '#7a5a2e', metalness: 0.85, roughness: 0.35 })
    const dark = new THREE.MeshStandardMaterial({ color: '#2a1d14', roughness: 0.8 })
    return { wall: stone, tower: stone, building: tuffeau, roof: bronze, dark }
  }, [paper])
}

export function Part({ geometry, material, paper, children, ...props }) {
  return (
    <mesh geometry={geometry} material={material} castShadow receiveShadow {...props}>
      {children}
      {paper && <Edges threshold={25} color="#e8bd5f" />}
    </mesh>
  )
}

// Animation de dépliage partagée par toutes les maquettes pop-up.
// Chaque pièce s'enregistre avec un type de mouvement et un instant de départ.
export function usePopupPieces(paper, progress) {
  const pieces = useRef(new Map())
  useFrame(() => {
    if (!paper || !progress) return
    const u = progress.u
    for (const p of pieces.current.values()) {
      const raw = Math.min(1, Math.max(0, (u - p.start) / 0.42))
      const t = raw <= 0 ? 0 : easeOutBack(raw)
      p.obj.visible = raw > 0.001
      if (p.kind === 'wall') p.obj.rotation.x = p.sign * (Math.PI / 2) * (1 - t)
      else if (p.kind === 'tower') {
        p.obj.scale.y = Math.max(0.001, t)
        p.obj.rotation.y = (1 - t) * 1.4
      } else if (p.kind === 'building') p.obj.rotation.x = -(Math.PI / 2) * (1 - t)
      else if (p.kind === 'bridge') p.obj.scale.z = Math.max(0.001, t)
    }
  })
  return (id, kind, start, extra = {}) => (obj) => {
    if (obj) pieces.current.set(id, { obj, kind, start, ...extra })
    else pieces.current.delete(id)
  }
}

export function popupInteraction(paper, onInspect) {
  return paper && onInspect
    ? {
        onClick: (e) => {
          e.stopPropagation()
          if (e.delta < 6) onInspect()
        },
        onPointerOver: () => (document.body.style.cursor = 'pointer'),
        onPointerOut: () => (document.body.style.cursor = ''),
      }
    : {}
}

export default function CastleModel({ variant = 'stone', progress = null, onInspect, ...props }) {
  const paper = variant === 'paper'
  const m = useMaterials(paper)
  const reg = usePopupPieces(paper, progress)

  const geo = useMemo(() => {
    const depth = paper ? 0.006 : 0.032
    const walls = CORNERS.map((a, i) => {
      const b = CORNERS[(i + 1) % CORNERS.length]
      const dx = b[0] - a[0]
      const dz = b[1] - a[1]
      const len = Math.hypot(dx, dz)
      const angle = Math.atan2(-dz, dx)
      // côté extérieur → sens de pliage du mur
      const mid = [(a[0] + b[0]) / 2 - CENTROID[0], (a[1] + b[1]) / 2 - CENTROID[1]]
      const lz = [Math.sin(angle), Math.cos(angle)]
      const sign = mid[0] * lz[0] + mid[1] * lz[1] > 0 ? 1 : -1
      return { a, angle, sign, g: wallGeometry(len, WALL_H, depth) }
    })
    const towers = TOWERS.map(([x, z, r, h, roof]) => {
      const body = new THREE.CylinderGeometry(r, r * 1.05, h, 10)
      body.translate(0, h / 2, 0)
      const ring = new THREE.CylinderGeometry(r * 1.2, r * 1.08, 0.03, 10)
      ring.translate(0, h + 0.012, 0)
      const cap =
        roof === 'cone'
          ? new THREE.ConeGeometry(r * 1.25, h * 0.75, 10).translate(0, h + 0.027 + h * 0.375, 0)
          : new THREE.CylinderGeometry(r * 1.2, r * 1.2, 0.03, 10, 1, true).translate(0, h + 0.04, 0)
      return { x, z, r, h, body, ring, cap, roof }
    })
    const buildings = BUILDINGS.map((b) => {
      const body = new THREE.BoxGeometry(b.w, b.h, b.d)
      body.translate(0, b.h / 2, 0)
      const roof = roofGeometry(b.w, b.d, b.rh).translate(0, b.h, 0)
      return { ...b, body, roof }
    })
    const gate = new THREE.BoxGeometry(0.11, 0.17, 0.07).translate(0, 0.085, 0)
    const door = new THREE.BoxGeometry(0.045, 0.07, 0.01).translate(0, 0.035, 0)
    const bridge = new THREE.BoxGeometry(0.06, 0.012, 0.2).translate(0, 0.006, 0.1)
    // détails : meurtrières, mâchicoulis, merlons, épis de faîtage, fenêtres à croisée,
    // cheminées, tour de la Couronne d'Or et puits à couronne de fer forgé
    const detail = {
      slit: new THREE.BoxGeometry(0.008, 0.036, 0.006),
      corbel: new THREE.BoxGeometry(0.012, 0.014, 0.016),
      merlon: new THREE.BoxGeometry(0.018, 0.022, 0.012),
      finial: new THREE.ConeGeometry(0.006, 0.045, 6).translate(0, 0.0225, 0),
      window: new THREE.BoxGeometry(0.022, 0.034, 0.004),
      mullionV: new THREE.BoxGeometry(0.003, 0.034, 0.003),
      mullionH: new THREE.BoxGeometry(0.022, 0.003, 0.003),
      chimney: new THREE.BoxGeometry(0.022, 0.09, 0.032),
      pinnacle: new THREE.ConeGeometry(0.006, 0.03, 4).translate(0, 0.015, 0),
      crownTower: new THREE.CylinderGeometry(0.032, 0.034, 0.27, 8).translate(0, 0.135, 0),
      crownLoggia: new THREE.BoxGeometry(0.016, 0.03, 0.004),
      crownRoof: new THREE.ConeGeometry(0.042, 0.08, 8).translate(0, 0.04, 0),
      wellRim: new THREE.CylinderGeometry(0.03, 0.032, 0.03, 12).translate(0, 0.015, 0),
      wellPost: new THREE.CylinderGeometry(0.003, 0.003, 0.07, 4).translate(0, 0.035, 0),
      wellCrown: new THREE.TorusGeometry(0.026, 0.003, 4, 16, Math.PI),
    }
    return { walls, towers, buildings, gate, door, bridge, detail }
  }, [paper])


  const gateX = 0.11
  const gateZ = 0.36
  const gateA = Math.atan2(-(0.44 - 0.28), -0.28 - 0.5)

  const interact = popupInteraction(paper, onInspect)

  return (
    <group {...props} {...interact}>
      {geo.walls.map((w, i) => (
        <group key={`w${i}`} position={[w.a[0], 0, w.a[1]]} rotation={[0, w.angle, 0]}>
          <group ref={reg(`w${i}`, 'wall', 0.02 + i * 0.05, { sign: w.sign })}>
            <Part geometry={w.g} material={m.wall} paper={paper} />
          </group>
        </group>
      ))}
      {geo.towers.map((t, i) => (
        <group key={`t${i}`} position={[t.x, 0, t.z]}>
          <group ref={reg(`t${i}`, 'tower', 0.18 + i * 0.05)}>
            <Part geometry={t.body} material={m.tower} paper={paper} />
            <Part geometry={t.ring} material={m.tower} paper={paper} />
            <Part geometry={t.cap} material={t.roof === 'cone' ? m.roof : m.tower} paper={paper} />
            {[0.4, 2.5, 4.6].map((a) => (
              <Part key={`s${a}`} geometry={geo.detail.slit} material={m.dark} paper={false}
                position={[Math.sin(a) * t.r * 1.01, t.h * 0.45, Math.cos(a) * t.r * 1.01]} rotation={[0, a, 0]} />
            ))}
            {Array.from({ length: 10 }, (_, k) => {
              const a = (k / 10) * Math.PI * 2
              return (
                <Part key={`c${k}`} geometry={geo.detail.corbel} material={m.tower} paper={false}
                  position={[Math.sin(a) * t.r * 1.08, t.h - 0.008, Math.cos(a) * t.r * 1.08]} rotation={[0, a, 0]} />
              )
            })}
            {t.roof === 'cone' ? (
              <Part geometry={geo.detail.finial} material={m.roof} paper={false} position={[0, t.h + 0.027 + t.h * 0.75, 0]} />
            ) : (
              Array.from({ length: 8 }, (_, k) => {
                const a = (k / 8) * Math.PI * 2
                return (
                  <Part key={`m${k}`} geometry={geo.detail.merlon} material={m.tower} paper={paper}
                    position={[Math.sin(a) * t.r * 1.12, t.h + 0.065, Math.cos(a) * t.r * 1.12]} rotation={[0, a, 0]} />
                )
              })
            )}
          </group>
        </group>
      ))}
      {geo.buildings.map((b, i) => (
        <group key={`b${i}`} position={[b.x, 0, b.z]} rotation={[0, b.a, 0]}>
          {/* charnière sur l'arête arrière : le bâtiment se redresse comme un pop-up */}
          <group position={[0, 0, -b.d / 2]}>
            <group ref={reg(`b${i}`, 'building', 0.42 + i * 0.1)}>
              <group position={[0, 0, b.d / 2]}>
                <Part geometry={b.body} material={m.building} paper={paper} />
                <Part geometry={b.roof} material={m.roof} paper={paper} />
                {Array.from({ length: b.dormers }, (_, k) => {
                  const dx = -b.w / 2 + (b.w * (k + 0.5)) / b.dormers
                  return (
                    <group key={k}>
                      <Part geometry={dormerGeometry} material={m.building} paper={paper} position={[dx, b.h - 0.01, b.d / 2 - 0.008]} />
                      <Part geometry={geo.detail.pinnacle} material={m.roof} paper={false} position={[dx, b.h + 0.08, b.d / 2 + 0.002]} />
                      {/* deux étages de fenêtres à croisée de pierre */}
                      {[0.32, 0.68].map((fy) => (
                        <group key={fy} position={[dx, b.h * fy, b.d / 2 + 0.002]}>
                          <Part geometry={geo.detail.window} material={m.dark} paper={false} />
                          <Part geometry={geo.detail.mullionV} material={m.building} paper={false} position={[0, 0, 0.003]} />
                          <Part geometry={geo.detail.mullionH} material={m.building} paper={false} position={[0, 0.004, 0.003]} />
                        </group>
                      ))}
                    </group>
                  )
                })}
                {[-0.32, 0.32].map((f) => (
                  <Part key={f} geometry={geo.detail.chimney} material={m.building} paper={paper} position={[b.w * f, b.h + b.rh * 0.55, -b.d * 0.15]} />
                ))}
                {i === 0 && (
                  /* tour de la Couronne d'Or : escalier hors-œuvre à loggias */
                  <group position={[b.w * 0.12, 0, b.d / 2 + 0.03]}>
                    <Part geometry={geo.detail.crownTower} material={m.building} paper={paper} />
                    {[0.08, 0.15, 0.22].map((y) => (
                      <Part key={y} geometry={geo.detail.crownLoggia} material={m.dark} paper={false} position={[0, y, 0.033]} />
                    ))}
                    <Part geometry={geo.detail.crownRoof} material={m.roof} paper={paper} position={[0, 0.27, 0]} />
                  </group>
                )}
              </group>
            </group>
          </group>
        </group>
      ))}
      {/* le puits de la cour et sa couronne de fer forgé */}
      <group position={[-0.08, 0, 0.06]}>
        <group ref={reg('well', 'tower', 0.62)}>
          <Part geometry={geo.detail.wellRim} material={m.wall} paper={paper} />
          {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((a) => (
            <Part key={a} geometry={geo.detail.wellPost} material={m.dark} paper={false} position={[Math.sin(a) * 0.024, 0.03, Math.cos(a) * 0.024]} />
          ))}
          {[0, Math.PI / 2].map((a) => (
            <Part key={`k${a}`} geometry={geo.detail.wellCrown} material={m.dark} paper={false} position={[0, 0.1, 0]} rotation={[0, a, 0]} />
          ))}
        </group>
      </group>
      <group position={[gateX, 0, gateZ]} rotation={[0, gateA + Math.PI, 0]}>
        <group ref={reg('gate', 'tower', 0.55)}>
          <Part geometry={geo.gate} material={m.building} paper={paper} />
          <Part geometry={geo.door} material={m.dark} paper={false} position={[0, 0, 0.036]} />
        </group>
        <group ref={reg('bridge', 'bridge', 0.7)}>
          <Part geometry={geo.bridge} material={m.roof} paper={paper} position={[0, 0, 0.03]} />
        </group>
      </group>
    </group>
  )
}
