// Pop-up origami : la maquette du monument se déplie depuis la page de droite (progress.u : 0 → 1).
// Pour utiliser un vrai modèle, déposez le .glb dans /public/models/ (noms dans GLB ci-dessous) ;
// sinon la version procédurale en papier s'affiche.
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import CastleModel from './models/CastleModel'
import OptionalModel from './models/OptionalModel'
import { LuTowerModel, CathedralModel } from './models/LandmarkModels'

const GLB = { castle: 'chateau-origami', lu: 'lu-origami', cathedral: 'cathedrale-origami' }

// Lumière rasante dédiée : l'ombre portée de la maquette s'allonge sur les pages
// à mesure qu'elle se déplie (intensité liée à la progression).
function PopupLight({ progress }) {
  const light = useRef()
  const target = useMemo(() => new THREE.Object3D(), [])
  useFrame(() => {
    light.current.intensity = 1.6 * Math.min(1, progress.u * 1.5)
  })
  return (
    <>
      <primitive object={target} position={[0.1, 0, 0.1]} />
      <directionalLight
        ref={light}
        target={target}
        position={[-1.1, 1.5, -0.7]}
        color="#ffe0b0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0006}
        shadow-normalBias={0.01}
        shadow-radius={6}
        shadow-camera-left={-0.9}
        shadow-camera-right={0.9}
        shadow-camera-top={0.9}
        shadow-camera-bottom={-0.9}
        shadow-camera-near={0.1}
        shadow-camera-far={4}
      />
    </>
  )
}

export default function PopupCastle({ model = 'castle', progress, onInspect }) {
  const paper =
    model === 'lu' ? (
      <LuTowerModel progress={progress} onInspect={onInspect} scale={1.15} />
    ) : model === 'cathedral' ? (
      <CathedralModel progress={progress} onInspect={onInspect} scale={1.25} />
    ) : (
      <CastleModel variant="paper" progress={progress} onInspect={onInspect} scale={0.95} />
    )
  return (
    <>
      <PopupLight progress={progress} />
      <OptionalModel url={`/models/${GLB[model] || GLB.castle}.glb`} fitSize={0.95} onClick={onInspect}>
        {paper}
      </OptionalModel>
    </>
  )
}
