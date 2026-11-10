// Maquettes pop-up détaillées en papier découpé : tour LU, cathédrale, Grand Éléphant,
// passage Pommeraye. Chaque pièce se déplie avec un léger rebond (usePopupPieces).
// Unités : ~1 = largeur de la maquette ; elle est posée sur la page de droite (y = 0).
import { useMemo } from 'react'
import * as THREE from 'three'
import { Part, usePopupPieces, popupInteraction, roofGeometry, paperSheet } from './CastleModel'

// ───────────────────────── Outils de découpe ─────────────────────────
const flat = (shape, depth = 0.006) => new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 10 })

function roundArch(w, h) {
  const s = new THREE.Shape()
  s.moveTo(-w / 2, 0)
  s.lineTo(w / 2, 0)
  s.lineTo(w / 2, h - w / 2)
  s.absarc(0, h - w / 2, w / 2, 0, Math.PI, false)
  s.closePath()
  return s
}
function lancet(w, h) {
  const s = new THREE.Shape()
  s.moveTo(-w / 2, 0)
  s.lineTo(w / 2, 0)
  s.lineTo(w / 2, h * 0.6)
  s.quadraticCurveTo(w / 2, h * 0.93, 0, h)
  s.quadraticCurveTo(-w / 2, h * 0.93, -w / 2, h * 0.6)
  s.closePath()
  return s
}
// anneau d'archivolte : lancette pleine moins lancette intérieure
function lancetRing(w, h, t) {
  const s = lancet(w, h)
  const inner = lancet(w - 2 * t, h - t)
  s.holes.push(new THREE.Path(inner.getPoints(16)))
  return s
}
function triangle(w, h) {
  const s = new THREE.Shape()
  s.moveTo(-w / 2, 0)
  s.lineTo(w / 2, 0)
  s.lineTo(0, h)
  s.closePath()
  return s
}
const box = (w, h, d, y = h / 2) => new THREE.BoxGeometry(w, h, d).translate(0, y, 0)

// Bandeau peint (enseigne) : lettres dorées sur fond d'encre.
const signCache = new Map()
function signMaterial(text) {
  if (signCache.has(text)) return signCache.get(text)
  const c = document.createElement('canvas')
  c.width = 1024
  c.height = 96
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#3a2614'
  ctx.fillRect(0, 0, 1024, 96)
  ctx.strokeStyle = '#d9b35c'
  ctx.lineWidth = 4
  ctx.strokeRect(6, 6, 1012, 84)
  ctx.fillStyle = '#e7c46e'
  ctx.font = '700 54px Cinzel, serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, 512, 52)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 })
  signCache.set(text, mat)
  return mat
}

function usePaper() {
  return useMemo(
    () => ({
      white: paperSheet('#fbf4e4'),
      cream: paperSheet('#f3e3c2'),
      ochre: paperSheet('#e9cf9c'),
      brick: paperSheet('#c98b62'),
      kraft: paperSheet('#c9a35e', { roughness: 0.7 }),
      gold: paperSheet('#d8b25a', { roughness: 0.45, metalness: 0.35 }),
      blue: paperSheet('#8fb0c8'),
      rose: paperSheet('#e3b8b4'),
      wood: paperSheet('#b07a4c'),
      ivory: paperSheet('#f6efdf', { roughness: 0.5 }),
      dark: new THREE.MeshStandardMaterial({ color: '#3a2a1f', roughness: 0.9 }),
      vellum: new THREE.MeshStandardMaterial({
        color: '#fff6e2', transparent: true, opacity: 0.22, roughness: 0.3, side: THREE.DoubleSide, depthWrite: false,
      }),
    }),
    [],
  )
}

// ═════════════════════════ Tour LU & usine Lefèvre-Utile ═════════════════════════
export function LuTowerModel({ progress, onInspect, ...props }) {
  const m = usePaper()
  const reg = usePopupPieces(true, progress)
  const g = useMemo(() => {
    const winArch = flat(roundArch(0.05, 0.1))
    return {
      wing: box(0.36, 0.24, 0.26),
      wingRoof: roofGeometry(0.36, 0.26, 0.08).translate(0, 0.24, 0),
      win: box(0.032, 0.05, 0.006, 0),
      sign: new THREE.PlaneGeometry(0.34, 0.035),
      luPanel: new THREE.PlaneGeometry(0.07, 0.05),
      base: box(0.26, 0.34, 0.22),
      pilaster: box(0.022, 0.34, 0.02),
      cornice: box(0.29, 0.025, 0.25),
      winArch,
      ray: new THREE.CircleGeometry(0.1, 24, 0, Math.PI),
      angel: new THREE.CircleGeometry(0.04, 12),
      drum: new THREE.CylinderGeometry(0.115, 0.12, 0.09, 16).translate(0, 0.045, 0),
      ring: new THREE.TorusGeometry(0.122, 0.008, 6, 24).rotateX(Math.PI / 2),
      dome: new THREE.SphereGeometry(0.12, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 1.45, 1),
      domeArch: flat(roundArch(0.07, 0.12), 0.004),
      eagle: flat(triangle(0.06, 0.035), 0.01),
      collar: new THREE.CylinderGeometry(0.06, 0.07, 0.03, 12).translate(0, 0.015, 0),
      column: new THREE.CylinderGeometry(0.006, 0.006, 0.08, 6).translate(0, 0.04, 0),
      lantDeck: new THREE.CylinderGeometry(0.065, 0.065, 0.012, 12),
      blueCap: new THREE.SphereGeometry(0.055, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 1.3, 1),
      clock: box(0.05, 0.05, 0.05),
      clockFace: new THREE.CircleGeometry(0.016, 14),
      spire: new THREE.ConeGeometry(0.008, 0.14, 6).translate(0, 0.07, 0),
      chimney: new THREE.CylinderGeometry(0.02, 0.03, 0.6, 10).translate(0, 0.3, 0),
      door: box(0.06, 0.1, 0.006, 0),
    }
  }, [])

  const wing = (side, i) => (
    <group key={side} position={[side * 0.31, 0, -0.13]}>
      <group ref={reg(`wing${i}`, 'building', 0.04 + i * 0.07)}>
        <group position={[0, 0, 0.13]}>
          <Part geometry={g.wing} material={m.brick} paper />
          <Part geometry={g.wingRoof} material={m.kraft} paper />
          {[0.05, 0.12].map((y) =>
            [-0.13, -0.065, 0, 0.065, 0.13].map((x) => (
              <Part key={`${x}${y}`} geometry={g.win} material={m.dark} paper={false} position={[x, y, 0.131]} />
            )),
          )}
          <mesh geometry={g.sign} material={signMaterial(side < 0 ? 'GAUFRETTES LEFÈVRE-UTILE' : 'BISCUITS LEFÈVRE-UTILE')} position={[0, 0.2, 0.132]} />
          <mesh geometry={g.luPanel} material={signMaterial('LU')} position={[side * 0.13, 0.27, 0.06]} rotation={[-0.6, 0, 0]} />
        </group>
      </group>
    </group>
  )

  return (
    <group {...props} {...popupInteraction(true, onInspect)}>
      {wing(-1, 0)}
      {wing(1, 1)}

      {/* socle carré : pilastres, panneaux roses, rayons de soleil et ange sculpté */}
      <group position={[0, 0, 0.04]}>
        <group ref={reg('base', 'tower', 0.22)}>
          <Part geometry={g.base} material={m.cream} paper />
          {[-0.12, 0.12].map((x) => (
            <Part key={x} geometry={g.pilaster} material={m.white} paper position={[x, 0, 0.11]} />
          ))}
          <Part geometry={g.cornice} material={m.white} paper position={[0, 0.34, 0]} />
          <Part geometry={g.ray} material={m.rose} paper={false} position={[0, 0.2, 0.111]} />
          <Part geometry={g.angel} material={m.gold} paper position={[0, 0.24, 0.112]} />
          <Part geometry={g.winArch} material={m.dark} paper={false} position={[0, 0.03, 0.108]} />
          <Part geometry={g.door} material={m.blue} paper={false} position={[-0.08, 0.03, 0.111]} />
          <Part geometry={g.door} material={m.blue} paper={false} position={[0.08, 0.03, 0.111]} />
        </group>
      </group>

      {/* tambour, dôme à quatre grandes baies, aigles dorés */}
      <group position={[0, 0.365, 0.04]}>
        <group ref={reg('dome', 'tower', 0.42)}>
          <Part geometry={g.drum} material={m.cream} paper />
          <Part geometry={g.ring} material={m.white} paper position={[0, 0.09, 0]} />
          <Part geometry={g.dome} material={m.white} paper position={[0, 0.09, 0]} />
          {[0, 1, 2, 3].map((k) => {
            const a = (k * Math.PI) / 2
            return (
              <group key={k} rotation={[0, a, 0]}>
                <Part geometry={g.domeArch} material={m.dark} paper={false} position={[0, 0.1, 0.108]} rotation={[-0.25, 0, 0]} />
                <Part geometry={g.eagle} material={m.gold} paper position={[0.085, 0.1, 0.085]} rotation={[0, Math.PI / 4, 0]} />
              </group>
            )
          })}
        </group>
      </group>

      {/* lanternon à colonnettes, coupole bleue à écailles, horloge et flèche */}
      <group position={[0, 0.62, 0.04]}>
        <group ref={reg('lantern', 'tower', 0.62)}>
          <Part geometry={g.collar} material={m.cream} paper />
          <Part geometry={g.lantDeck} material={m.white} paper position={[0, 0.03, 0]} />
          {Array.from({ length: 8 }, (_, k) => {
            const a = (k / 8) * Math.PI * 2
            return <Part key={k} geometry={g.column} material={m.ochre} paper={false} position={[Math.sin(a) * 0.05, 0.035, Math.cos(a) * 0.05]} />
          })}
          <Part geometry={g.lantDeck} material={m.white} paper position={[0, 0.118, 0]} />
          <Part geometry={g.blueCap} material={m.blue} paper position={[0, 0.124, 0]} />
          <Part geometry={g.clock} material={m.rose} paper position={[0, 0.19, 0]} />
          {[0, 1, 2, 3].map((k) => (
            <group key={k} rotation={[0, (k * Math.PI) / 2, 0]}>
              <Part geometry={g.clockFace} material={m.gold} paper={false} position={[0, 0.215, 0.026]} />
            </group>
          ))}
          <Part geometry={g.spire} material={m.gold} paper position={[0, 0.24, 0]} />
        </group>
      </group>

      <group position={[0.22, 0, -0.27]}>
        <group ref={reg('chimney', 'tower', 0.7)}>
          <Part geometry={g.chimney} material={m.brick} paper />
        </group>
      </group>
    </group>
  )
}

// ═════════════════════════ Cathédrale Saint-Pierre-et-Saint-Paul ═════════════════════════
export function CathedralModel({ progress, onInspect, ...props }) {
  const m = usePaper()
  const reg = usePopupPieces(true, progress)
  const g = useMemo(
    () => ({
      nave: box(0.28, 0.4, 0.62),
      naveRoof: roofGeometry(0.62, 0.28, 0.16).translate(0, 0.4, 0),
      flyer: box(0.02, 0.26, 0.05),
      tower: box(0.18, 0.7, 0.18),
      buttLow: box(0.045, 0.42, 0.05),
      buttHigh: box(0.03, 0.74, 0.04),
      band: box(0.2, 0.016, 0.2),
      parapet: box(0.2, 0.03, 0.2),
      pinnacle: new THREE.ConeGeometry(0.017, 0.11, 4).translate(0, 0.055, 0),
      pinSmall: new THREE.ConeGeometry(0.01, 0.06, 4).translate(0, 0.03, 0),
      belfry: flat(lancet(0.032, 0.13), 0.004),
      towerWin: flat(lancet(0.04, 0.09), 0.004),
      sidePortal: flat(lancet(0.075, 0.16), 0.004),
      sideRing: flat(lancetRing(0.095, 0.175, 0.01), 0.008),
      sideGable: flat(triangle(0.11, 0.08), 0.008),
      center: box(0.22, 0.56, 0.1),
      bigWin: flat(lancet(0.12, 0.21), 0.004),
      mullion: box(0.006, 0.19, 0.006, 0),
      tracery: new THREE.TorusGeometry(0.022, 0.004, 6, 16),
      gable: flat(triangle(0.22, 0.15), 0.1).translate(0, 0, -0.05),
      gableHole: new THREE.CircleGeometry(0.025, 12),
      porch: box(0.17, 0.24, 0.05),
      portal: flat(lancet(0.11, 0.2), 0.004),
      portalRing: flat(lancetRing(0.14, 0.225, 0.012), 0.008),
      portalGable: flat(triangle(0.17, 0.13), 0.008),
      tympan: new THREE.CircleGeometry(0.03, 14),
      gallery: box(0.62, 0.014, 0.05),
      step: (w, d) => box(w, 0.012, d),
    }),
    [],
  )

  const tower = (x, i) => (
    <group key={x} position={[x, 0, 0.06]}>
      <group ref={reg(`tower${i}`, 'tower', 0.32 + i * 0.08)}>
        <Part geometry={g.tower} material={m.white} paper />
        {[-0.08, 0.08].map((bx) => (
          <group key={bx}>
            <Part geometry={g.buttLow} material={m.cream} paper position={[bx, 0, 0.09]} />
            <Part geometry={g.buttHigh} material={m.cream} paper position={[bx, 0, 0.085]} />
          </group>
        ))}
        <Part geometry={g.band} material={m.cream} paper position={[0, 0.33, 0]} />
        <Part geometry={g.band} material={m.cream} paper position={[0, 0.56, 0]} />
        <Part geometry={g.parapet} material={m.cream} paper position={[0, 0.7, 0]} />
        {[-0.03, 0.03].map((bx) => (
          <Part key={bx} geometry={g.belfry} material={m.dark} paper={false} position={[bx, 0.57, 0.091]} />
        ))}
        <Part geometry={g.towerWin} material={m.dark} paper={false} position={[0, 0.38, 0.091]} />
        <Part geometry={g.sidePortal} material={m.dark} paper={false} position={[0, 0, 0.116]} />
        <Part geometry={g.sideRing} material={m.ochre} paper position={[0, 0, 0.114]} />
        <Part geometry={g.sideGable} material={m.ochre} paper position={[0, 0.17, 0.114]} />
        {[[-0.08, -0.08], [0.08, -0.08], [-0.08, 0.08], [0.08, 0.08]].map(([px, pz]) => (
          <Part key={`${px}${pz}`} geometry={g.pinnacle} material={m.kraft} paper position={[px, 0.73, pz]} />
        ))}
        {[[0, -0.08], [0, 0.08], [-0.08, 0], [0.08, 0]].map(([px, pz]) => (
          <Part key={`s${px}${pz}`} geometry={g.pinSmall} material={m.kraft} paper position={[px, 0.73, pz]} />
        ))}
      </group>
    </group>
  )

  return (
    <group {...props} {...popupInteraction(true, onInspect)}>
      {/* nef et arcs-boutants, à l'arrière */}
      <group position={[0, 0, -0.04]}>
        <group ref={reg('nave', 'building', 0.04)}>
          <group position={[0, 0, -0.31]}>
            <Part geometry={g.nave} material={m.cream} paper />
            <group rotation={[0, Math.PI / 2, 0]}>
              <Part geometry={g.naveRoof} material={m.kraft} paper />
            </group>
            {[-0.2, -0.05, 0.1, 0.25].map((z) =>
              [-1, 1].map((sx) => (
                <Part key={`${z}${sx}`} geometry={g.flyer} material={m.white} paper position={[sx * 0.16, 0.12, z - 0.02]} rotation={[0, 0, sx * 0.35]} />
              )),
            )}
          </group>
        </group>
      </group>

      {/* corps central : grande verrière à remplages, gâble ajouré */}
      <group position={[0, 0, 0.02]}>
        <group ref={reg('center', 'building', 0.2)}>
          <group position={[0, 0, 0.05]}>
            <Part geometry={g.center} material={m.white} paper />
            <Part geometry={g.bigWin} material={m.dark} paper={false} position={[0, 0.32, 0.051]} />
            {[-0.03, 0, 0.03].map((x) => (
              <Part key={x} geometry={g.mullion} material={m.cream} paper={false} position={[x, 0.32, 0.054]} />
            ))}
            {[-0.03, 0.03].map((x) => (
              <Part key={x} geometry={g.tracery} material={m.cream} paper={false} position={[x, 0.48, 0.055]} />
            ))}
            <Part geometry={g.gable} material={m.white} paper position={[0, 0.56, 0]} />
            <Part geometry={g.gableHole} material={m.dark} paper={false} position={[0, 0.61, 0.051]} />
          </group>
        </group>
      </group>

      {tower(-0.2, 0)}
      {tower(0.2, 1)}

      {/* grand portail : porche, archivoltes, gâble et tympan */}
      <group position={[0, 0, 0.16]}>
        <group ref={reg('porch', 'building', 0.55)}>
          <group position={[0, 0, 0.0]}>
            <Part geometry={g.porch} material={m.cream} paper />
            <Part geometry={g.portal} material={m.dark} paper={false} position={[0, 0, 0.026]} />
            <Part geometry={g.portalRing} material={m.ochre} paper position={[0, 0, 0.025]} />
            <Part geometry={g.portalGable} material={m.ochre} paper position={[0, 0.235, 0.024]} />
            <Part geometry={g.tympan} material={m.kraft} paper={false} position={[0, 0.15, 0.031]} />
          </group>
        </group>
      </group>

      {/* galerie à balustrade au-dessus des portails, et marches du parvis */}
      <group position={[0, 0, 0.17]}>
        <group ref={reg('gallery', 'tower', 0.68)}>
          <Part geometry={g.gallery} material={m.white} paper position={[0, 0.265, 0]} />
        </group>
      </group>
      <group position={[0, 0, 0.2]}>
        <group ref={reg('steps', 'bridge', 0.75)}>
          {[0, 1, 2].map((k) => (
            <Part key={k} geometry={g.step(0.66 - k * 0.04, 0.1 - k * 0.03)} material={m.cream} paper position={[0, k * 0.012, 0.03 - k * 0.012]} />
          ))}
        </group>
      </group>
    </group>
  )
}

// ═════════════════════════ Le Grand Éléphant ═════════════════════════
export function ElephantModel({ progress, onInspect, ...props }) {
  const m = usePaper()
  const reg = usePopupPieces(true, progress)
  const g = useMemo(() => {
    const up = new THREE.Vector3(0, 1, 0)
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.44, 0.52, 0), new THREE.Vector3(0.53, 0.42, 0), new THREE.Vector3(0.56, 0.28, 0),
      new THREE.Vector3(0.55, 0.15, 0), new THREE.Vector3(0.6, 0.07, 0), new THREE.Vector3(0.67, 0.09, 0),
    ])
    const trunk = Array.from({ length: 16 }, (_, i) => {
      const t = i / 15
      return {
        p: trunkCurve.getPoint(t),
        q: new THREE.Quaternion().setFromUnitVectors(up, trunkCurve.getTangent(t).normalize()),
        r: 0.065 - t * 0.035,
      }
    })
    const tusk = (z) =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(0.42, 0.42, z), new THREE.Vector3(0.55, 0.33, z * 1.3),
          new THREE.Vector3(0.68, 0.33, z * 1.5), new THREE.Vector3(0.76, 0.4, z * 1.4),
        ]),
        16, 0.014, 6,
      )
    const ear = new THREE.Shape()
    ear.moveTo(0, 0.1)
    ear.bezierCurveTo(-0.16, 0.12, -0.2, -0.06, -0.12, -0.16)
    ear.bezierCurveTo(-0.05, -0.2, 0.03, -0.12, 0.02, -0.02)
    ear.closePath()
    const canopy = new THREE.Shape()
    canopy.moveTo(0, 0)
    canopy.absarc(0, 0, 0.26, Math.PI * 0.05, Math.PI * 0.95, false)
    canopy.closePath()
    return {
      body: new THREE.SphereGeometry(1, 16, 12).scale(0.32, 0.22, 0.2).translate(0, 0.45, 0),
      plates: new THREE.SphereGeometry(1, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.45).scale(0.33, 0.23, 0.21).translate(0, 0.45, 0),
      head: new THREE.SphereGeometry(0.14, 14, 10).scale(1, 1.1, 0.95).translate(0.33, 0.52, 0),
      brow: new THREE.CylinderGeometry(0.06, 0.08, 0.06, 10).rotateZ(Math.PI / 2).translate(0.43, 0.56, 0),
      eye: new THREE.SphereGeometry(0.014, 8, 6),
      ear: flat(ear, 0.012),
      trunk,
      tusks: [tusk(0.07), tusk(-0.07)],
      leg: new THREE.CylinderGeometry(0.068, 0.062, 0.2, 10).translate(0, -0.1, 0),
      shin: new THREE.CylinderGeometry(0.06, 0.07, 0.2, 10).translate(0, -0.1, 0),
      knee: new THREE.TorusGeometry(0.066, 0.012, 6, 16).rotateX(Math.PI / 2),
      foot: new THREE.CylinderGeometry(0.08, 0.085, 0.035, 12).translate(0, 0.0175, 0),
      tail: new THREE.CylinderGeometry(0.008, 0.006, 0.2, 6).translate(0, -0.1, 0),
      deck: box(0.42, 0.025, 0.32),
      rail: box(0.42, 0.04, 0.006),
      railSide: box(0.006, 0.04, 0.32),
      house: box(0.22, 0.13, 0.2),
      floor2: box(0.17, 0.08, 0.16),
      win: box(0.03, 0.045, 0.004, 0),
      roof: roofGeometry(0.2, 0.18, 0.07),
      roofSmall: roofGeometry(0.15, 0.16, 0.06),
      mast: new THREE.CylinderGeometry(0.006, 0.006, 0.2, 6).translate(0, 0.1, 0),
      canopy: flat(canopy, 0.004),
      ribV: box(0.005, 0.25, 0.004, 0),
    }
  }, [])

  return (
    <group {...props} {...popupInteraction(true, onInspect)}>
      {/* quatre pattes articulées (cuisse, genou, jambe, pied) */}
      {[[0.2, 0.12], [0.2, -0.12], [-0.18, 0.12], [-0.18, -0.12]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <group ref={reg(`leg${i}`, 'tower', 0.05 + i * 0.05)}>
            <Part geometry={g.foot} material={m.wood} paper />
            <group position={[0, 0.235, 0]}>
              <Part geometry={g.shin} material={m.ochre} paper />
            </group>
            <Part geometry={g.knee} material={m.kraft} paper={false} position={[0, 0.235, 0]} />
            <group position={[0, 0.43, 0]}>
              <Part geometry={g.leg} material={m.ochre} paper />
            </group>
          </group>
        </group>
      ))}

      {/* corps, carapace de bois, tête, oreilles, trompe annelée et défenses */}
      <group ref={reg('body', 'tower', 0.25)}>
        <Part geometry={g.body} material={m.ochre} paper />
        <Part geometry={g.plates} material={m.wood} paper />
        <Part geometry={g.head} material={m.ochre} paper />
        <Part geometry={g.brow} material={m.wood} paper />
        {[0.1, -0.1].map((z) => (
          <Part key={z} geometry={g.eye} material={m.dark} paper={false} position={[0.43, 0.58, z * 0.8]} />
        ))}
        {[1, -1].map((s) => (
          <Part key={s} geometry={g.ear} material={m.rose} paper position={[0.3, 0.6, s * 0.135]} rotation={[0, s * 0.5, 0]} />
        ))}
        {g.trunk.map((d, i) => (
          <mesh key={i} position={d.p} quaternion={d.q} material={i % 2 ? m.wood : m.ochre} castShadow>
            <cylinderGeometry args={[d.r, d.r * 0.96, 0.032, 10]} />
          </mesh>
        ))}
        {g.tusks.map((t, i) => (
          <mesh key={i} geometry={t} material={m.ivory} castShadow />
        ))}
        <Part geometry={g.tail} material={m.wood} paper={false} position={[-0.31, 0.5, 0]} rotation={[0, 0, -0.35]} />
      </group>

      {/* maison à étages, balcons et parasol, sur le dos */}
      <group position={[0, 0.66, -0.16]}>
        <group ref={reg('house', 'building', 0.5)}>
          <group position={[-0.02, 0, 0.16]}>
            <Part geometry={g.deck} material={m.wood} paper />
            {[-0.16, 0.16].map((z) => (
              <Part key={z} geometry={g.rail} material={m.dark} paper={false} position={[0, 0.025, z]} />
            ))}
            {[-0.21, 0.21].map((x) => (
              <Part key={x} geometry={g.railSide} material={m.dark} paper={false} position={[x, 0.025, 0]} />
            ))}
            <group position={[-0.04, 0.025, 0]}>
              <Part geometry={g.house} material={m.cream} paper />
              {[-0.06, 0, 0.06].map((x) => (
                <Part key={x} geometry={g.win} material={m.dark} paper={false} position={[x, 0.07, 0.101]} />
              ))}
              <Part geometry={g.roof} material={m.blue} paper position={[0, 0.13, 0]} />
              <group position={[0.02, 0.17, 0]}>
                <Part geometry={g.floor2} material={m.rose} paper />
                {[-0.04, 0.04].map((x) => (
                  <Part key={x} geometry={g.win} material={m.dark} paper={false} position={[x, 0.04, 0.081]} />
                ))}
                <Part geometry={g.roofSmall} material={m.blue} paper position={[0, 0.08, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-0.2, 0.7, 0]}>
        <group ref={reg('canopy', 'tower', 0.72)}>
          <Part geometry={g.mast} material={m.dark} paper={false} />
          {/* parasol : déployé vers l'arrière, légèrement relevé */}
          <group position={[0, 0.2, 0]} rotation={[0, 0, 1.2]}>
            <group rotation={[0, Math.PI / 2, 0]}>
              <Part geometry={g.canopy} material={m.cream} paper />
              {[-0.9, -0.45, 0, 0.45, 0.9].map((a) => (
                <group key={a} rotation={[0, 0, a]}>
                  <Part geometry={g.ribV} material={m.wood} paper={false} position={[0, 0, 0.006]} />
                </group>
              ))}
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// ═════════════════════════ Passage Pommeraye ═════════════════════════
// Galerie à trois niveaux : boutiques à colonnes, balcons à statues, fenêtres,
// grand escalier central, façade du fond à arc et éventail vitré, verrière.
const LEN = 0.9 // longueur de la galerie (axe z)
const HALF_W = 0.27

function SideWall({ g, m }) {
  // repère local : x = le long de la galerie, y = hauteur, -z = face intérieure
  const xs = Array.from({ length: 8 }, (_, i) => -LEN / 2 + 0.06 + i * ((LEN - 0.12) / 7))
  return (
    <group>
      <Part geometry={g.wall} material={m.cream} paper />
      {xs.map((x, i) => (
        <group key={x} position={[x, 0, 0]}>
          <Part geometry={g.column} material={m.white} paper position={[0, 0, -0.035]} />
          {i < xs.length - 1 && (
            <>
              <Part geometry={g.shop} material={m.dark} paper={false} position={[0.055, 0.02, -0.012]} />
              <Part geometry={g.shopSign} material={i % 2 ? m.rose : m.kraft} paper={false} position={[0.055, 0.17, -0.013]} />
              <Part geometry={g.window} material={m.dark} paper={false} position={[0.055, 0.31, -0.012]} />
              <Part geometry={g.window} material={m.dark} paper={false} position={[0.055, 0.43, -0.012]} />
              <Part geometry={g.pilaster} material={m.white} paper={false} position={[0, 0.3, -0.014]} />
            </>
          )}
        </group>
      ))}
      <Part geometry={g.balcony} material={m.white} paper position={[0, 0.215, -0.04]} />
      <Part geometry={g.railing} material={m.dark} paper={false} position={[0, 0.226, -0.068]} />
      <Part geometry={g.handrail} material={m.kraft} paper={false} position={[0, 0.262, -0.068]} />
      <Part geometry={g.cornice} material={m.white} paper position={[0, 0.53, -0.02]} />
      {xs.filter((_, i) => i % 2 === 1).map((x) => (
        <group key={`st${x}`} position={[x, 0.227, -0.05]}>
          <Part geometry={g.pedestal} material={m.white} paper />
          <Part geometry={g.statue} material={m.ivory} paper={false} position={[0, 0.05, 0]} />
          <Part geometry={g.statueHead} material={m.ivory} paper={false} position={[0, 0.088, 0]} />
        </group>
      ))}
      {xs.filter((_, i) => i % 2 === 0 && i > 0).map((x) => (
        <group key={`lp${x}`} position={[x, 0.227, -0.05]}>
          <Part geometry={g.lampPost} material={m.dark} paper={false} />
          <Part geometry={g.globe} material={m.ivory} paper={false} position={[0, 0.1, 0]} />
        </group>
      ))}
    </group>
  )
}

export function PassageModel({ progress, onInspect, ...props }) {
  const m = usePaper()
  const reg = usePopupPieces(true, progress)
  const g = useMemo(() => {
    const fan = new THREE.Shape()
    fan.moveTo(-0.1, 0)
    fan.absarc(0, 0, 0.1, Math.PI, 0, true)
    fan.closePath()
    const vault = new THREE.CylinderGeometry(HALF_W, HALF_W, LEN, 24, 1, true, -Math.PI / 2, Math.PI)
      .rotateX(-Math.PI / 2)
      .scale(1, 0.45, 1)
    return {
      floor: box(HALF_W * 2 + 0.02, 0.01, LEN + 0.02),
      wall: new THREE.BoxGeometry(LEN, 0.55, 0.02).translate(0, 0.275, 0),
      column: new THREE.CylinderGeometry(0.011, 0.013, 0.2, 8).translate(0, 0.1, 0),
      shop: box(0.075, 0.13, 0.004, 0),
      shopSign: box(0.075, 0.025, 0.004, 0),
      window: box(0.035, 0.07, 0.004, 0),
      pilaster: box(0.012, 0.28, 0.006, 0),
      balcony: box(LEN, 0.014, 0.06),
      railing: box(LEN, 0.035, 0.003, 0),
      handrail: box(LEN, 0.006, 0.008, 0),
      cornice: box(LEN, 0.02, 0.04),
      pedestal: box(0.026, 0.04, 0.026, 0),
      statue: new THREE.CylinderGeometry(0.008, 0.012, 0.045, 8).translate(0, 0.0225, 0),
      statueHead: new THREE.SphereGeometry(0.008, 8, 6),
      lampPost: new THREE.CylinderGeometry(0.0025, 0.0025, 0.1, 5).translate(0, 0.05, 0),
      globe: new THREE.SphereGeometry(0.012, 10, 8),
      step: (k) => box(0.2, (k + 1) * 0.023, 0.044),
      stairRail: box(0.004, 0.004, 0.46, 0),
      landing: box(HALF_W * 2, 0.215, 0.2),
      endWall: box(HALF_W * 2, 0.62, 0.02),
      endArch: flat(roundArch(0.16, 0.25), 0.004),
      fan: flat(fan, 0.004),
      fanRib: box(0.003, 0.1, 0.003, 0.05),
      fanRing: new THREE.TorusGeometry(0.1, 0.006, 6, 20, Math.PI),
      clock: new THREE.CircleGeometry(0.022, 16),
      pediment: box(0.36, 0.03, 0.03),
      vault,
      rib: new THREE.TorusGeometry(HALF_W, 0.004, 4, 24, Math.PI).scale(1, 0.45, 1),
      ridge: box(0.006, 0.006, LEN, 0),
    }
  }, [])

  return (
    <group {...props} {...popupInteraction(true, onInspect)}>
      <Part geometry={g.floor} material={m.ochre} paper />

      {/* les deux façades latérales se relèvent comme des volets */}
      <group position={[-HALF_W, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <group ref={reg('wallL', 'wall', 0.04, { sign: 1 })}>
          <SideWall g={g} m={m} />
        </group>
      </group>
      <group position={[HALF_W, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <group ref={reg('wallR', 'wall', 0.12, { sign: 1 })}>
          <SideWall g={g} m={m} />
        </group>
      </group>

      {/* façade du fond : arc, éventail vitré, horloge et fronton */}
      <group position={[0, 0, -LEN / 2]}>
        <group ref={reg('end', 'building', 0.26)}>
          <Part geometry={g.endWall} material={m.white} paper />
          <Part geometry={g.endArch} material={m.dark} paper={false} position={[0, 0.215, 0.011]} />
          <group position={[0, 0.5, 0.012]}>
            <Part geometry={g.fan} material={m.dark} paper={false} />
            {Array.from({ length: 7 }, (_, k) => (
              <Part key={k} geometry={g.fanRib} material={m.cream} paper={false} rotation={[0, 0, -Math.PI / 2 + ((k + 1) * Math.PI) / 8]} position={[0, 0, 0.004]} />
            ))}
            <Part geometry={g.fanRing} material={m.kraft} paper={false} position={[0, 0, 0.004]} />
          </group>
          <Part geometry={g.clock} material={m.gold} paper={false} position={[0, 0.44, 0.012]} />
          <Part geometry={g.pediment} material={m.cream} paper position={[0, 0.6, 0.015]} />
        </group>
      </group>

      {/* palier haut et grand escalier central */}
      <group position={[0, 0, -LEN / 2 + 0.11]}>
        <group ref={reg('landing', 'tower', 0.38)}>
          <Part geometry={g.landing} material={m.cream} paper />
        </group>
      </group>
      <group ref={reg('stairs', 'tower', 0.48)}>
        {Array.from({ length: 9 }, (_, k) => (
          <Part key={k} geometry={g.step(k)} material={k % 2 ? m.white : m.cream} paper position={[0, 0, 0.17 - k * 0.044]} />
        ))}
        {[-0.105, 0.105].map((x) => (
          <Part key={x} geometry={g.stairRail} material={m.dark} paper={false} position={[x, 0.13, -0.0]} rotation={[0.46, 0, 0]} />
        ))}
        {[-0.13, 0.13].map((x) => (
          <group key={`b${x}`} position={[x, 0, 0.22]}>
            <Part geometry={g.pedestal} material={m.white} paper />
            <Part geometry={g.statue} material={m.ivory} paper={false} position={[0, 0.04, 0]} />
            <Part geometry={g.statueHead} material={m.ivory} paper={false} position={[0, 0.078, 0]} />
          </group>
        ))}
      </group>

      {/* verrière : voûte de papier calque et arcs de fer */}
      <group position={[0, 0.55, 0]}>
        <group ref={reg('roof', 'tower', 0.72)}>
          <mesh geometry={g.vault} material={m.vellum} />
          {Array.from({ length: 7 }, (_, k) => (
            <Part key={k} geometry={g.rib} material={m.dark} paper={false} position={[0, 0, -LEN / 2 + k * (LEN / 6)]} />
          ))}
          <Part geometry={g.ridge} material={m.dark} paper={false} position={[0, HALF_W * 0.45, 0]} />
        </group>
      </group>
    </group>
  )
}
