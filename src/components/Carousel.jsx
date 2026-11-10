// Carrousel 3D circulaire des livres de la bibliothèque (écran d'accueil).
// Glisser pour faire tourner (inertie + aimantation sur le livre le plus proche),
// clic sur le livre au premier plan pour l'ouvrir, clic sur un autre pour l'amener devant.
import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import {
  PAGE_W, PAGE_H, COVER_T, BLOCK_T, COVER_W, COVER_H, HOVER_Y, HOVER_BOB, BOB_SPEED, SELECT_SCALE, CAROUSEL_RADIUS,
} from '../three/dimensions'
import { getBookMaterials, bookThickness } from '../three/bookMaterials'
import { buildSpreads } from '../state/bookMachine'

// Livre fermé, construit exactement comme le livre complet à l'état « lévitation ».
function ClosedBook({ book, index, ring, onPick }) {
  const outer = useRef()
  const inner = useRef()
  const spreadCount = useMemo(() => buildSpreads(book.chapters).length, [book])
  const { stack, totalT } = bookThickness(spreadCount)
  const mats = useMemo(() => getBookMaterials(book.id, book.meta, totalT), [book, totalT])

  useFrame(({ clock }) => {
    const step = (Math.PI * 2) / ring.count
    let theta = index * step + ring.rotation
    theta = Math.atan2(Math.sin(theta), Math.cos(theta)) // ramené dans [-π, π]
    const focus = Math.max(0, 1 - Math.abs(theta) / step) // 1 = au premier plan
    const t = clock.elapsedTime
    const o = outer.current
    o.visible = ring.away < 0.999 && !(ring.hidden === index)
    o.position.set(Math.sin(theta) * CAROUSEL_RADIUS, HOVER_Y + ring.away * 4, -CAROUSEL_RADIUS + Math.cos(theta) * CAROUSEL_RADIUS)
    o.rotation.y = theta
    o.scale.setScalar(1 - ring.away * 0.4)
    const amp = HOVER_BOB * (0.5 + 0.5 * focus)
    inner.current.position.y = Math.sin(t * BOB_SPEED + index * 1.7 * (1 - focus)) * amp
    inner.current.scale.setScalar(1 + (SELECT_SCALE - 1) * focus)
  })

  const pointer = {
    onClick: (e) => {
      e.stopPropagation()
      if (e.delta < 8) onPick(index)
    },
    onPointerOver: () => (document.body.style.cursor = 'pointer'),
    onPointerOut: () => (document.body.style.cursor = ''),
  }

  return (
    <group ref={outer}>
      <group ref={inner}>
        {/* même orientation que <Book> en lévitation : debout, couverture face à l'extérieur */}
        <group rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -totalT / 2]}>
          <group position={[-COVER_W / 2, 0, 0]} {...pointer}>
            <mesh material={mats.backCover} position={[COVER_W / 2, COVER_T / 2, 0]} castShadow>
              <boxGeometry args={[COVER_W, COVER_T, COVER_H]} />
            </mesh>
            <mesh material={mats.spine} position={[-COVER_T / 2, totalT / 2, 0]} castShadow>
              <boxGeometry args={[COVER_T, totalT, COVER_H]} />
            </mesh>
            <mesh material={mats.blockBox} position={[PAGE_W / 2 + 0.006, COVER_T + (BLOCK_T + stack) / 2, 0]} castShadow>
              <boxGeometry args={[PAGE_W - 0.012, BLOCK_T + stack, PAGE_H]} />
            </mesh>
            <mesh material={mats.cover} position={[COVER_W / 2, COVER_T + BLOCK_T + stack + COVER_T / 2, 0]} castShadow>
              <boxGeometry args={[COVER_W, COVER_T, COVER_H]} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

export default function Carousel({ books, selected, active, hiddenIndex, shelf, onSelect, onOpen }) {
  const { gl, size } = useThree()
  const ring = useMemo(() => ({ count: books.length, rotation: 0, away: 0, hidden: -1 }), [books.length])
  const drag = useRef({ down: false, moved: 0, lastX: 0, vel: 0, lastT: 0 })
  const spot = useRef()
  const spotTarget = useMemo(() => new THREE.Object3D(), [])
  const live = useRef({ selected, active, onSelect })
  live.current = { selected, active, onSelect }

  // Glisser (souris / doigt) n'importe où sur la scène pour tourner le cercle
  useEffect(() => {
    const el = gl.domElement
    const step = (Math.PI * 2) / books.length
    const down = (e) => {
      if (!live.current.active) return
      drag.current = { down: true, moved: 0, lastX: e.clientX, vel: 0, lastT: performance.now() }
    }
    const move = (e) => {
      const d = drag.current
      if (!d.down) return
      const dx = e.clientX - d.lastX
      const now = performance.now()
      const k = 5.5 / Math.max(600, size.width)
      ring.rotation += dx * k
      d.vel = (dx * k) / Math.max(1, now - d.lastT) // rad / ms
      d.moved += Math.abs(dx)
      d.lastX = e.clientX
      d.lastT = now
    }
    const up = () => {
      const d = drag.current
      if (!d.down) return
      d.down = false
      if (d.moved < 8) return
      const projected = ring.rotation + d.vel * 260 // inertie
      const n = books.length
      const idx = (((Math.round(-projected / step) % n) + n) % n)
      live.current.onSelect(idx)
    }
    el.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    return () => {
      el.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
  }, [gl, books.length, ring, size.width])

  useFrame((_, dt) => {
    ring.away = shelf.away
    ring.hidden = hiddenIndex
    if (!drag.current.down) {
      // aimantation douce sur le livre sélectionné, par le chemin le plus court
      const step = (Math.PI * 2) / books.length
      const base = -live.current.selected * step
      const target = base + Math.round((ring.rotation - base) / (Math.PI * 2)) * Math.PI * 2
      ring.rotation += (target - ring.rotation) * Math.min(1, dt * 5)
    }
    if (spot.current) spot.current.intensity = 26 * (1 - shelf.away)
  })

  const pick = (i) => (i === live.current.selected ? onOpen() : onSelect(i))

  return (
    <group>
      {/* projecteur dédié au livre du premier plan */}
      <primitive object={spotTarget} position={[0, HOVER_Y, 0]} />
      <spotLight
        ref={spot}
        target={spotTarget}
        position={[0.6, HOVER_Y + 3.2, 3.2]}
        angle={0.36}
        penumbra={0.85}
        distance={12}
        decay={1.5}
        color="#ffe2b4"
      />
      {books.map((b, i) => (
        <ClosedBook key={`${b.id}-${b.lang}`} book={b} index={i} ring={ring} onPick={active ? pick : () => {}} />
      ))}
    </group>
  )
}
