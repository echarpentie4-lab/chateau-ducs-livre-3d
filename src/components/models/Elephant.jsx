// Statuette de l'Éléphant des Machines de l'Île : bois découpé + rouages de laiton (procédural).
import { useMemo } from 'react'
import * as THREE from 'three'

export function gearGeometry(r, teeth = 12, depth = 0.02, hole = 0.35) {
  const s = new THREE.Shape()
  for (let i = 0; i < teeth * 4; i++) {
    const a = (i / (teeth * 4)) * Math.PI * 2
    const rr = i % 4 < 2 ? r : r * 0.84
    i === 0 ? s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr) : s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr)
  }
  s.closePath()
  const h = new THREE.Path()
  h.absarc(0, 0, r * hole, 0, Math.PI * 2, true)
  s.holes.push(h)
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: 16 })
  g.translate(0, 0, -depth / 2)
  return g
}

export default function Elephant(props) {
  const parts = useMemo(() => {
    const wood = new THREE.MeshStandardMaterial({ color: '#b8875a', roughness: 0.78, flatShading: true })
    const woodDark = new THREE.MeshStandardMaterial({ color: '#6e4a2c', roughness: 0.8, flatShading: true })
    const brass = new THREE.MeshStandardMaterial({ color: '#c09045', metalness: 1, roughness: 0.3 })
    const ivory = new THREE.MeshStandardMaterial({ color: '#efe4cc', roughness: 0.5 })
    // trompe segmentée (disques le long d'une courbe)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.56, 0.72, 0), new THREE.Vector3(0.67, 0.56, 0), new THREE.Vector3(0.7, 0.36, 0),
      new THREE.Vector3(0.66, 0.2, 0), new THREE.Vector3(0.74, 0.12, 0), new THREE.Vector3(0.8, 0.17, 0),
    ])
    const up = new THREE.Vector3(0, 1, 0)
    const trunk = Array.from({ length: 14 }, (_, i) => {
      const t = i / 13
      const q = new THREE.Quaternion().setFromUnitVectors(up, curve.getTangent(t).normalize())
      return { p: curve.getPoint(t), q, r: 0.075 - t * 0.042 }
    })
    const ear = new THREE.Shape()
    ear.absellipse(0, 0, 0.16, 0.22, 0, Math.PI * 2)
    const roof = new THREE.Shape()
    roof.moveTo(-0.15, 0)
    roof.lineTo(0.15, 0)
    roof.lineTo(0, 0.14)
    roof.closePath()
    return {
      wood, woodDark, brass, ivory, trunk,
      ear: new THREE.ExtrudeGeometry(ear, { depth: 0.02, bevelEnabled: false }),
      roof: new THREE.ExtrudeGeometry(roof, { depth: 0.28, bevelEnabled: false }).translate(0, 0, -0.14),
      gear: gearGeometry(0.11, 12, 0.02),
      gearSmall: gearGeometry(0.065, 9, 0.02),
    }
  }, [])
  const { wood, woodDark, brass, ivory } = parts

  return (
    <group {...props}>
      {/* socle */}
      <mesh position={[0.1, 0.025, 0]} material={woodDark} castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.66, 0.05, 32]} />
      </mesh>
      {/* corps & tête */}
      <mesh position={[0, 0.66, 0]} scale={[0.43, 0.3, 0.27]} material={wood} castShadow>
        <sphereGeometry args={[1, 14, 10]} />
      </mesh>
      <mesh position={[0.43, 0.76, 0]} material={wood} castShadow>
        <sphereGeometry args={[0.19, 12, 10]} />
      </mesh>
      {[1, -1].map((s) => (
        <mesh key={s} geometry={parts.ear} material={wood} position={[0.36, 0.76, s * 0.18]} rotation={[0, s * 0.45, 0]} castShadow />
      ))}
      {parts.trunk.map((d, i) => (
        <mesh key={i} position={d.p} quaternion={d.q} material={i % 2 ? woodDark : wood} castShadow>
          <cylinderGeometry args={[d.r, d.r, 0.04, 10]} />
        </mesh>
      ))}
      {[1, -1].map((s) => (
        <mesh key={s} material={ivory} position={[0.58, 0.62, s * 0.08]} rotation={[0, 0, -2.3]} castShadow>
          <coneGeometry args={[0.022, 0.18, 8]} />
        </mesh>
      ))}
      {/* pattes + rouages aux genoux */}
      {[[0.24, 0.14], [0.24, -0.14], [-0.24, 0.14], [-0.24, -0.14]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 0.27, 0]} material={wood} castShadow>
            <cylinderGeometry args={[0.07, 0.08, 0.46, 10]} />
          </mesh>
          <mesh geometry={parts.gearSmall} material={brass} position={[0, 0.3, Math.sign(z) * 0.085]} castShadow />
        </group>
      ))}
      {/* grands rouages sur les flancs */}
      {[1, -1].map((s) => (
        <group key={s} position={[-0.02, 0.64, s * 0.275]}>
          <mesh geometry={parts.gear} material={brass} castShadow />
          <mesh geometry={parts.gearSmall} material={brass} position={[0.15, 0.08, s * 0.01]} />
        </group>
      ))}
      <mesh material={wood} position={[-0.46, 0.6, 0]} rotation={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.015, 0.01, 0.22, 6]} />
      </mesh>
      {/* nacelle avec maisonnette et ombrelle */}
      <mesh position={[-0.02, 0.97, 0]} material={woodDark} castShadow>
        <boxGeometry args={[0.52, 0.04, 0.38]} />
      </mesh>
      <mesh position={[-0.04, 1.08, 0]} material={wood} castShadow>
        <boxGeometry args={[0.3, 0.18, 0.26]} />
      </mesh>
      <mesh geometry={parts.roof} material={woodDark} position={[-0.04, 1.17, 0]} rotation={[0, Math.PI / 2, 0]} castShadow />
      <mesh position={[0.12, 1.25, 0]} material={brass}>
        <cylinderGeometry args={[0.008, 0.008, 0.3, 6]} />
      </mesh>
      <mesh position={[0.12, 1.42, 0]} material={wood} castShadow>
        <coneGeometry args={[0.3, 0.12, 14, 1, true]} />
      </mesh>
    </group>
  )
}
