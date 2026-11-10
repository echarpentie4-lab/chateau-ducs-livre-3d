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
      return { x, z, body, ring, cap, roof }
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
    return { walls, towers, buildings, gate, door, bridge }
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
                {Array.from({ length: b.dormers }, (_, k) => (
                  <Part
                    key={k}
                    geometry={dormerGeometry}
                    material={m.building}
                    paper={paper}
                    position={[-b.w / 2 + (b.w * (k + 0.5)) / b.dormers, b.h - 0.01, b.d / 2 - 0.008]}
                  />
                ))}
              </group>
            </group>
          </group>
        </group>
      ))}
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
