import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Lightformer, Sparkles } from '@react-three/drei'
import Book from './Book'
import Desk from './Desk'
import Director from './Director'
import Carousel from './Carousel'
import { FOV, carouselPose } from '../three/cameraPoses'
import { PHASE } from '../state/bookMachine'

export default function Scene({ state, dispatch, catalogue, spreadsByBook }) {
  const { phase, openBook } = state
  const book = openBook != null ? catalogue[openBook] : null
  const spreads = openBook != null ? spreadsByBook[openBook] : spreadsByBook[0]
  // Valeurs animées par GSAP et lues chaque frame (hors React : aucune re-render)
  const anim = useMemo(() => ({ open: 0, lift: 1, bump: 0 }), [])
  const popAnim = useMemo(() => ({ u: 0 }), [])
  const shelf = useMemo(() => ({ away: 0 }), []) // 0 = carrousel visible, 1 = écarté pendant la lecture
  const leafStates = useMemo(() => Array.from({ length: spreads.length + 1 }, () => ({ p: 0, dir: 1 })), [spreads])
  const pose = useMemo(() => carouselPose(window.innerWidth, window.innerHeight), [])
  const start = pose.pos
  const initialTarget = useMemo(() => [pose.target.x, pose.target.y, pose.target.z], [pose])

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{ fov: FOV, near: 0.1, far: 60, position: [start.x, start.y, start.z] }}
    >
      <color attach="background" args={['#0d0806']} />
      <fog attach="fog" args={['#0d0806', 10, 23]} />

      <ambientLight intensity={0.22} color="#ffd7a8" />
      <hemisphereLight args={['#ffdcb0', '#20130a', 0.35]} />
      <directionalLight
        position={[-2.6, 6.5, 2.6]}
        intensity={2.4}
        color="#ffe2b8"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.025}
        shadow-camera-left={-4.8}
        shadow-camera-right={4.8}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      <directionalLight position={[3, 2.2, -3]} intensity={0.45} color="#c9d4ff" />
      {/* lumière d'appoint frontale : éclaire la couverture du livre en lévitation */}
      <spotLight position={[1.5, 3.2, 5.5]} angle={0.42} penumbra={0.9} intensity={28} distance={14} decay={1.6} color="#ffd9a8" />
      <Environment resolution={256} frames={1} environmentIntensity={0.65}>
        <Lightformer intensity={3} color="#ffd9a0" position={[0, 5, 0]} rotation-x={Math.PI / 2} scale={[6, 6, 1]} />
        <Lightformer intensity={2} color="#ff9a4c" position={[-5, 2, -2]} rotation-y={Math.PI / 2} scale={[3, 6, 1]} />
        <Lightformer intensity={1.2} color="#fff1d6" position={[5, 3, 3]} rotation-y={-Math.PI / 2} scale={[4, 2, 1]} />
      </Environment>

      <Desk />
      <Sparkles count={80} scale={[8, 3.5, 5]} position={[0, 1.7, 0]} size={2.2} speed={0.18} opacity={0.45} color="#ffd9a0" />

      <Carousel
        books={catalogue}
        selected={state.book}
        active={phase === PHASE.CLOSED}
        hiddenIndex={phase !== PHASE.CLOSED ? openBook : -1}
        shelf={shelf}
        onSelect={(index) => dispatch({ type: 'SELECT', index })}
        onOpen={() => dispatch({ type: 'OPEN' })}
      />

      {/* livre complet (pages) : construit à l'ouverture, visible hors du carrousel */}
      {book && (
        <Book
          key={book.id}
          bookId={book.id}
          anim={anim}
          leafStates={leafStates}
          popAnim={popAnim}
          spreads={spreads}
          meta={book.meta}
          visible={phase !== PHASE.CLOSED}
          onInspect={() => dispatch({ type: 'INSPECT' })}
        />
      )}

      <OrbitControls makeDefault target={initialTarget} enableDamping dampingFactor={0.08} enablePan={false} />
      <Director
        phase={phase}
        spread={state.spread}
        zoom={state.zoom}
        spreads={spreads}
        anim={anim}
        leafStates={leafStates}
        popAnim={popAnim}
        shelf={shelf}
        dispatch={dispatch}
      />
    </Canvas>
  )
}
