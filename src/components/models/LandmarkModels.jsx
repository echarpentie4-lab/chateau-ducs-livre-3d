// Maquettes pop-up en papier (origami) des autres monuments : tour LU et cathédrale.
// Même principe que CastleModel : chaque pièce se déplie avec un léger rebond.
import { useMemo } from 'react'
import * as THREE from 'three'
import { Part, useMaterials, usePopupPieces, popupInteraction, roofGeometry } from './CastleModel'

const halfDome = (r) => new THREE.SphereGeometry(r, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)

function gableGeometry(w, h, depth) {
  const s = new THREE.Shape()
  s.moveTo(-w / 2, 0)
  s.lineTo(w / 2, 0)
  s.lineTo(0, h)
  s.closePath()
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false })
}

// ───────────────────────── Tour LU et usine ─────────────────────────
export function LuTowerModel({ progress, onInspect, ...props }) {
  const m = useMaterials(true)
  const reg = usePopupPieces(true, progress)
  const g = useMemo(() => {
    const wing = new THREE.BoxGeometry(0.38, 0.24, 0.3).translate(0, 0.12, 0)
    const wingRoof = roofGeometry(0.38, 0.3, 0.1).translate(0, 0.24, 0)
    const win = new THREE.BoxGeometry(0.045, 0.07, 0.006)
    const body = new THREE.CylinderGeometry(0.1, 0.105, 0.42, 12).translate(0, 0.21, 0)
    const band = new THREE.CylinderGeometry(0.125, 0.11, 0.035, 12).translate(0, 0.435, 0)
    const dome = halfDome(0.115).scale(1, 1.35, 1).translate(0, 0.45, 0)
    const lantern = new THREE.CylinderGeometry(0.04, 0.045, 0.09, 8).translate(0, 0.645, 0)
    const cap = halfDome(0.048).translate(0, 0.69, 0)
    const spire = new THREE.ConeGeometry(0.012, 0.14, 6).translate(0, 0.79, 0)
    const chimney = new THREE.CylinderGeometry(0.022, 0.03, 0.55, 8).translate(0, 0.275, 0)
    const door = new THREE.BoxGeometry(0.06, 0.1, 0.01).translate(0, 0.05, 0)
    return { wing, wingRoof, win, body, band, dome, lantern, cap, spire, chimney, door }
  }, [])

  return (
    <group {...props} {...popupInteraction(true, onInspect)}>
      {/* deux ailes de l'usine, redressées comme des pages pop-up */}
      {[-0.31, 0.31].map((x, i) => (
        <group key={x} position={[x, 0, -0.15]}>
          <group ref={reg(`wing${i}`, 'building', 0.05 + i * 0.08)}>
            <group position={[0, 0, 0.15]}>
              <Part geometry={g.wing} material={m.building} paper />
              <Part geometry={g.wingRoof} material={m.roof} paper />
              {[-0.12, -0.04, 0.04, 0.12].map((wx) => (
                <Part key={wx} geometry={g.win} material={m.dark} paper={false} position={[wx, 0.13, 0.153]} />
              ))}
            </group>
          </group>
        </group>
      ))}
      {/* la tour LU : fût, dôme, lanternon et flèche */}
      <group position={[0, 0, 0.06]}>
        <group ref={reg('tower', 'tower', 0.3)}>
          <Part geometry={g.body} material={m.tower} paper />
          <Part geometry={g.band} material={m.tower} paper />
          <Part geometry={g.dome} material={m.roof} paper />
          <Part geometry={g.lantern} material={m.building} paper />
          <Part geometry={g.cap} material={m.roof} paper />
          <Part geometry={g.spire} material={m.roof} paper />
          <Part geometry={g.door} material={m.dark} paper={false} position={[0, 0, 0.103]} />
        </group>
      </group>
      <group position={[0.2, 0, -0.26]}>
        <group ref={reg('chimney', 'tower', 0.55)}>
          <Part geometry={g.chimney} material={m.tower} paper />
        </group>
      </group>
    </group>
  )
}

// ───────────────────────── Cathédrale Saint-Pierre-et-Saint-Paul ─────────────────────────
export function CathedralModel({ progress, onInspect, ...props }) {
  const m = useMaterials(true)
  const reg = usePopupPieces(true, progress)
  const g = useMemo(() => {
    const nave = new THREE.BoxGeometry(0.62, 0.34, 0.3).translate(0, 0.17, 0)
    const naveRoof = roofGeometry(0.62, 0.3, 0.17).translate(0, 0.34, 0)
    const facade = new THREE.BoxGeometry(0.24, 0.44, 0.06).translate(0, 0.22, 0)
    const gable = gableGeometry(0.24, 0.15, 0.06).translate(0, 0.44, -0.03)
    const rose = new THREE.TorusGeometry(0.048, 0.009, 6, 20)
    const portal = new THREE.BoxGeometry(0.08, 0.14, 0.01).translate(0, 0.07, 0)
    const tower = new THREE.BoxGeometry(0.17, 0.64, 0.17).translate(0, 0.32, 0)
    const pinnacle = new THREE.ConeGeometry(0.02, 0.1, 4).translate(0, 0.69, 0)
    const bay = new THREE.BoxGeometry(0.035, 0.11, 0.01)
    return { nave, naveRoof, facade, gable, rose, portal, tower, pinnacle, bay }
  }, [])

  return (
    <group {...props} {...popupInteraction(true, onInspect)}>
      {/* nef (faîtage dans l'axe de l'église) */}
      <group position={[0, 0, -0.18]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[0, 0, -0.15]}>
          <group ref={reg('nave', 'building', 0.05)}>
            <group position={[0, 0, 0.15]}>
              <Part geometry={g.nave} material={m.building} paper />
              <Part geometry={g.naveRoof} material={m.roof} paper />
            </group>
          </group>
        </group>
      </group>
      {/* façade centrale : gâble, rosace et portail */}
      <group position={[0, 0, 0.12]}>
        <group ref={reg('facade', 'building', 0.3)}>
          <group position={[0, 0, 0.03]}>
            <Part geometry={g.facade} material={m.wall} paper />
            <Part geometry={g.gable} material={m.wall} paper />
            <Part geometry={g.rose} material={m.roof} paper position={[0, 0.31, 0.033]} />
            <Part geometry={g.portal} material={m.dark} paper={false} position={[0, 0, 0.033]} />
          </group>
        </group>
      </group>
      {/* les deux tours carrées et leurs pinacles */}
      {[-0.205, 0.205].map((x, i) => (
        <group key={x} position={[x, 0, 0.15]}>
          <group ref={reg(`tower${i}`, 'tower', 0.45 + i * 0.1)}>
            <Part geometry={g.tower} material={m.tower} paper />
            {[[-0.07, -0.07], [0.07, -0.07], [-0.07, 0.07], [0.07, 0.07]].map(([px, pz]) => (
              <Part key={`${px}${pz}`} geometry={g.pinnacle} material={m.roof} paper position={[px, 0, pz]} />
            ))}
            <Part geometry={g.bay} material={m.dark} paper={false} position={[0, 0.5, 0.087]} />
            <Part geometry={g.portal} material={m.dark} paper={false} position={[0, 0, 0.087]} scale={[0.7, 0.8, 1]} />
          </group>
        </group>
      ))}
    </group>
  )
}
