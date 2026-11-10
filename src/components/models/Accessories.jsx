// Accessoires d'époque du bureau (procéduraux) : bougie, boussole, encrier & plume,
// pièces ducales, loupe, carte de la Loire déroulée.
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { makeCompassDialTexture, makeCoinTexture, makeLoireMapTexture } from '../../three/materialsTextures'

const brass = new THREE.MeshStandardMaterial({ color: '#b88a3e', metalness: 1, roughness: 0.28 })

export function Candle(props) {
  const light = useRef()
  const flame = useRef()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const f = 1 + Math.sin(t * 9) * 0.06 + Math.sin(t * 23.7) * 0.04 + Math.sin(t * 3.1) * 0.05
    light.current.intensity = 5.5 * f
    flame.current.scale.set(0.035, 0.09 * f, 0.035)
  })
  return (
    <group {...props}>
      <mesh position={[0, 0.03, 0]} material={brass} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.24, 0.06, 32]} />
      </mesh>
      <mesh position={[0, 0.33, 0]} castShadow>
        <cylinderGeometry args={[0.075, 0.08, 0.55, 24]} />
        <meshStandardMaterial color="#efe3c6" roughness={0.6} />
      </mesh>
      <mesh ref={flame} position={[0, 0.7, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#ffc46b" toneMapped={false} />
      </mesh>
      <pointLight ref={light} position={[0, 0.78, 0]} color="#ff9a3c" distance={7} decay={1.6} />
    </group>
  )
}

export function Compass(props) {
  const dial = useMemo(() => makeCompassDialTexture(), [])
  const needle = useRef()
  useFrame(({ clock }) => {
    needle.current.rotation.y = -0.35 + Math.sin(clock.elapsedTime * 0.7) * 0.06 // aiguille qui frémit
  })
  return (
    <group {...props}>
      <mesh position={[0, 0.025, 0]} material={brass} castShadow receiveShadow>
        <cylinderGeometry args={[0.21, 0.22, 0.05, 48]} />
      </mesh>
      <mesh position={[0, 0.051, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.18, 48]} />
        <meshStandardMaterial map={dial} roughness={0.7} />
      </mesh>
      <group ref={needle} position={[0, 0.058, 0]}>
        <mesh position={[0, 0, -0.07]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.018, 0.15, 4]} />
          <meshStandardMaterial color="#8c1c13" metalness={0.4} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0.07]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.018, 0.15, 4]} />
          <meshStandardMaterial color="#1f1a17" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
      <mesh position={[0, 0.054, 0]} rotation={[Math.PI / 2, 0, 0]} material={brass}>
        <torusGeometry args={[0.2, 0.015, 10, 48]} />
      </mesh>
      <mesh position={[0, 0.066, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.19, 48]} />
        <meshPhysicalMaterial color="#e8f4f0" transparent opacity={0.15} roughness={0.05} clearcoat={1} />
      </mesh>
      <mesh position={[0, 0.03, -0.24]} rotation={[0, Math.PI / 2, 0]} material={brass}>
        <torusGeometry args={[0.035, 0.009, 8, 20]} />
      </mesh>
    </group>
  )
}

export function InkwellAndQuill(props) {
  const feather = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(0, 0)
    s.bezierCurveTo(0.06, 0.15, 0.09, 0.45, 0.02, 0.75)
    s.bezierCurveTo(0.0, 0.6, -0.05, 0.35, -0.04, 0.2)
    s.lineTo(0, 0)
    return new THREE.ShapeGeometry(s, 16)
  }, [])
  return (
    <group {...props}>
      <mesh position={[0, 0.07, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.13, 0.15, 0.14, 8]} />
        <meshPhysicalMaterial color="#1c2230" roughness={0.08} metalness={0.1} clearcoat={1} />
      </mesh>
      <mesh position={[0, 0.17, 0]} castShadow>
        <cylinderGeometry args={[0.055, 0.07, 0.06, 16]} />
        <meshPhysicalMaterial color="#1c2230" roughness={0.08} clearcoat={1} />
      </mesh>
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]} material={brass}>
        <torusGeometry args={[0.055, 0.012, 8, 24]} />
      </mesh>
      <group position={[0, 0.16, 0]} rotation={[0.1, 0.3, -0.42]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <cylinderGeometry args={[0.006, 0.004, 0.62, 6]} />
          <meshStandardMaterial color="#e8dcc0" />
        </mesh>
        <mesh geometry={feather} position={[0, 0.14, 0]} castShadow>
          <meshStandardMaterial color="#f1e9d6" roughness={0.9} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  )
}

export function Coins(props) {
  const mats = useMemo(() => {
    const goldEdge = new THREE.MeshStandardMaterial({ color: '#b8903f', metalness: 1, roughness: 0.3 })
    const silverEdge = new THREE.MeshStandardMaterial({ color: '#a9a59b', metalness: 1, roughness: 0.3 })
    const gold = new THREE.MeshStandardMaterial({ map: makeCoinTexture(false), metalness: 0.9, roughness: 0.35 })
    const silver = new THREE.MeshStandardMaterial({ map: makeCoinTexture(true), metalness: 0.9, roughness: 0.35 })
    return { gold: [goldEdge, gold, gold], silver: [silverEdge, silver, silver] }
  }, [])
  const coins = [
    [0, 0, 0, 'gold', 0.2], [0.17, 0, 0.09, 'silver', 1.1], [0.05, 0.013, 0.02, 'gold', 2.0],
    [-0.15, 0, 0.14, 'silver', 0.4], [0.3, 0, -0.08, 'gold', 2.6],
  ]
  return (
    <group {...props}>
      {coins.map(([x, y, z, k, r], i) => (
        <mesh key={i} position={[x, 0.007 + y, z]} rotation={[0, r, i === 2 ? 0.08 : 0]} material={mats[k]} castShadow receiveShadow>
          <cylinderGeometry args={[0.065, 0.065, 0.012, 32]} />
        </mesh>
      ))}
    </group>
  )
}

export function Magnifier(props) {
  return (
    <group {...props}>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={brass} castShadow>
        <torusGeometry args={[0.22, 0.022, 16, 48]} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.21, 48]} />
        <meshPhysicalMaterial color="#cfe6e0" transparent opacity={0.2} roughness={0.05} clearcoat={1} />
      </mesh>
      <mesh position={[0.42, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.03, 0.035, 0.36, 16]} />
        <meshStandardMaterial color="#3b1d10" roughness={0.4} />
      </mesh>
    </group>
  )
}

// Carte ancienne de la Loire, déroulée, avec ses deux extrémités encore enroulées.
export function LoireMap({ width = 2.4, height = 1.7, ...props }) {
  const tex = useMemo(() => makeLoireMapTexture(), [])
  const back = useMemo(() => new THREE.MeshStandardMaterial({ color: '#d9c49a', roughness: 0.95 }), [])
  return (
    <group {...props}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={tex} roughness={0.95} />
      </mesh>
      {[-1, 1].map((s) => (
        <mesh key={s} position={[(s * width) / 2, 0.035, 0]} rotation={[Math.PI / 2, 0, 0]} material={back} castShadow receiveShadow>
          <cylinderGeometry args={[0.035, 0.035, height, 20]} />
        </mesh>
      ))}
    </group>
  )
}
