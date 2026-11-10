// Bureau en noyer habillé d'objets du patrimoine nantais.
// Chaque objet peut être remplacé par un vrai modèle : déposez le .glb dans /public/models/
// (noms ci-dessous). Sans fichier, la version procédurale s'affiche.
import { useMemo } from 'react'
import { makeWoodTexture, makeLeatherTexture } from '../three/materialsTextures'
import OptionalModel from './models/OptionalModel'
import Elephant from './models/Elephant'
import CastleModel from './models/CastleModel'
import { Candle, Compass, InkwellAndQuill, Coins, Magnifier, LoireMap } from './models/Accessories'

const MAP_Y = 0.014

export default function Desk() {
  const wood = useMemo(() => makeWoodTexture(), [])
  const plinthWood = useMemo(() => makeWoodTexture({ base: [70, 40, 22], seed: 5, repeat: [1, 1] }), [])
  const blotter = useMemo(() => makeLeatherTexture('#22301f', 41, [2, 2]), [])

  return (
    <group>
      {/* plateau en bois noble, en relief */}
      <mesh position={[0, -0.11, 0]} receiveShadow>
        <boxGeometry args={[9, 0.22, 5.6]} />
        <meshStandardMaterial map={wood} roughness={0.55} color="#c8a894" />
      </mesh>
      {/* sous-main en cuir vert */}
      <mesh position={[0, 0.006, 0.1]} receiveShadow>
        <boxGeometry args={[4.4, 0.012, 3.0]} />
        <meshStandardMaterial map={blotter} roughness={0.75} />
      </mesh>

      {/* carte de la Loire déroulée, sous la maquette et les instruments */}
      <LoireMap position={[3.05, MAP_Y, -0.2]} rotation={[0, -0.06, 0]} />

      {/* maquette du château (pierre & bronze) sur son socle */}
      <OptionalModel url="/models/chateau-miniature.glb" fitSize={1.05} position={[3.05, MAP_Y, -0.55]} rotation={[0, -0.5, 0]}>
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.3, 0.08, 1.2]} />
          <meshStandardMaterial map={plinthWood} roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.082, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[0.6, 40]} />
          <meshStandardMaterial color="#3d4a3a" metalness={0.7} roughness={0.45} />
        </mesh>
        <CastleModel variant="stone" position={[0, 0.085, 0]} />
      </OptionalModel>

      {/* éléphant des Machines de l'Île */}
      <OptionalModel url="/models/elephant.glb" fitSize={1.2} position={[-3.15, 0, -0.95]} rotation={[0, 0.55, 0]} scale={0.82}>
        <Elephant />
      </OptionalModel>

      <OptionalModel url="/models/boussole.glb" fitSize={0.45} position={[2.35, MAP_Y, 1.15]} rotation={[0, 0.4, 0]}>
        <Compass />
      </OptionalModel>
      <OptionalModel url="/models/encrier.glb" fitSize={0.8} position={[-2.75, 0, 1.15]}>
        <InkwellAndQuill />
      </OptionalModel>
      <Coins position={[3.45, MAP_Y, 0.95]} />
      <Magnifier position={[3.75, MAP_Y + 0.025, 0.15]} rotation={[0, 2.3, 0]} />
      <Candle position={[-1.95, 0, -2.15]} />
    </group>
  )
}
