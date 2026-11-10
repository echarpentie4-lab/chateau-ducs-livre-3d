import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import {
  PAGE_W, COVER_T, BLOCK_T, COVER_W, COVER_H, LEAF_GAP, BOOK_Y, HOVER_Y, HOVER_BOB, BOB_SPEED, SELECT_SCALE,
} from '../three/dimensions'
import { getBookMaterials, bookThickness } from '../three/bookMaterials'
import { buildLeafPlan, createPage } from '../three/pages'
import { cleanUrl } from '../three/canvasUtils'
import {
  smoothstep, createBlockGeometry, updateBlockGeometry, createLeafGeometry, updateLeafGeometry,
} from '../three/bookShape'
import PopupCastle from './PopupCastle'

// ───────────────────────── Feuillet (page qui se plie) ─────────────────────────
function Leaf({ index, count, state, shape, front, back }) {
  const last = useRef('')
  const geometry = useMemo(() => createLeafGeometry(), [])
  const materials = useMemo(() => {
    back.texture.repeat.x = -1 // le verso est vu "de dos" : on le remet à l'endroit
    back.texture.offset.x = 1
    return [
      new THREE.MeshStandardMaterial({ map: front.texture, roughness: 0.92, side: THREE.FrontSide }),
      new THREE.MeshStandardMaterial({ map: back.texture, roughness: 0.92, side: THREE.BackSide }),
    ]
  }, [front, back])

  useFrame(() => {
    const key = `${state.p}|${state.dir}|${shape.version}`
    if (key === last.current) return
    last.current = key
    const offR = (count - 1 - index) * LEAF_GAP + 0.0015
    const offL = index * LEAF_GAP + 0.0015
    updateLeafGeometry(geometry, state.p, state.dir, shape, offR, offL)
  })

  return (
    <group>
      <mesh geometry={geometry} material={materials[0]} castShadow receiveShadow frustumCulled={false} />
      <mesh geometry={geometry} material={materials[1]} castShadow receiveShadow frustumCulled={false} />
    </group>
  )
}

// ───────────────────────── Livre ─────────────────────────
// anim.lift : 1 = en lévitation verticale, 0 = posé à plat sur le bureau
// anim.open : 0 = fermé, 1 = couverture ouverte à plat
export default function Book({ bookId, anim, leafStates, popAnim, spreads, meta, onInspect, visible = true }) {
  const liftGroup = useRef()
  const root = useRef()
  const coverPivot = useRef()
  const spine = useRef()
  const popup = useRef()
  const leftBlock = useRef()

  const count = spreads.length + 1
  const { stack, totalT } = bookThickness(spreads.length)
  // état partagé de la forme du livre, recalculé chaque frame avant les feuillets
  const shape = useMemo(() => ({ hR: BLOCK_T, hL: 0, dip: 0, version: 0, key: '' }), [])
  const blockR = useMemo(() => createBlockGeometry(), [])
  const blockL = useMemo(() => createBlockGeometry(), [])

  const mats = useMemo(() => getBookMaterials(bookId, meta, totalT), [bookId, meta, totalT])

  const pages = useMemo(
    () =>
      buildLeafPlan(spreads).map((def) => ({
        def,
        front: createPage(def.front, 'front', spreads, meta),
        back: createPage(def.back, 'back', spreads, meta),
      })),
    [spreads, meta],
  )

  // Libère la mémoire GPU des pages quand on change de livre
  useEffect(() => () => pages.forEach((pg) => (pg.front.texture.dispose(), pg.back.texture.dispose())), [pages])

  // Chargement asynchrone des illustrations → repeint la page concernée.
  useEffect(() => {
    let alive = true
    const load = (url, page) => {
      const img = new Image()
      if (/^https?:/.test(url)) img.crossOrigin = 'anonymous'
      img.onload = () => alive && page.paint(img)
      img.src = url
    }
    const titleUrl = cleanUrl(meta.titlePageImage)
    if (titleUrl) load(titleUrl, pages[0].front)
    pages.forEach(({ def, back }) => {
      if (def.back.kind !== 'left') return
      const s = spreads[def.back.idx]
      const url = s.kind === 'chapter' && cleanUrl(s.illustration)
      if (url) load(url, back)
    })
    return () => {
      alive = false
    }
  }, [pages, spreads, meta])

  useFrame(({ clock }) => {
    const { open, lift, bump } = anim
    const t = clock.elapsedTime

    // ── lévitation verticale ↔ posé à plat
    const rot = smoothstep(0.12, 1, lift) * (Math.PI / 2)
    const g = liftGroup.current
    g.visible = visible
    g.rotation.x = rot
    g.scale.setScalar(1 + (SELECT_SCALE - 1) * lift) // même taille que dans le carrousel
    g.position.y = BOOK_Y + (HOVER_Y - BOOK_Y) * lift + Math.sin(t * BOB_SPEED) * HOVER_BOB * lift + bump * 0.025
    g.position.z = -(totalT / 2) * Math.sin(rot)

    // ── ouverture : charnière, dos, centrage
    const s = smoothstep(0.3, 1, open)
    root.current.position.x = (-COVER_W / 2) * (1 - open)
    coverPivot.current.position.y = COVER_T + (BLOCK_T + stack) * (1 - s)
    coverPivot.current.rotation.z = open * Math.PI
    spine.current.rotation.z = s * (Math.PI / 2)

    // ── répartition du bloc entre gauche et droite selon les pages tournées
    let turned = 0
    for (const l of leafStates) turned += l.p
    const frac = turned / count
    shape.hR = BLOCK_T * (1 - frac)
    // le bloc de gauche n'existe qu'une fois la couverture posée à plat (sinon il flotterait dans le vide)
    shape.hL = BLOCK_T * frac * smoothstep(0.9, 1, open)
    shape.dip = s
    const key = `${shape.hR.toFixed(5)}|${shape.hL.toFixed(5)}|${s.toFixed(4)}`
    if (key !== shape.key) {
      shape.key = key
      shape.version++
      updateBlockGeometry(blockR, shape.hR, s)
      updateBlockGeometry(blockL, shape.hL, s)
    }
    leftBlock.current.visible = shape.hL > 0.002

    // ── maquette pop-up posée sur la page de droite
    if (popup.current) {
      popup.current.visible = popAnim.u > 0.001
      popup.current.position.y = COVER_T + shape.hR + count * LEAF_GAP + 0.004
    }
  }, -2)

  return (
    <group ref={liftGroup}>
      <group ref={root}>
        {/* plat inférieur */}
        <mesh material={mats.backCover} position={[COVER_W / 2, COVER_T / 2, 0]} castShadow receiveShadow>
          <boxGeometry args={[COVER_W, COVER_T, COVER_H]} />
        </mesh>
        {/* dos */}
        <group ref={spine}>
          <mesh material={mats.spine} position={[-COVER_T / 2, totalT / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[COVER_T, totalT, COVER_H]} />
          </mesh>
        </group>
        {/* blocs de pages (tranches dorées, courbe de gouttière) */}
        <mesh geometry={blockR} material={mats.block} position={[0, COVER_T, 0]} castShadow receiveShadow frustumCulled={false} />
        <mesh ref={leftBlock} geometry={blockL} material={mats.block} position={[0, COVER_T, 0]} scale={[-1, 1, 1]} castShadow receiveShadow frustumCulled={false} />
        {/* feuillets */}
        <group position={[0, COVER_T, 0]}>
          {pages.map((pg, i) => (
            <Leaf key={i} index={i} count={count} state={leafStates[i]} shape={shape} front={pg.front} back={pg.back} />
          ))}
        </group>
        {/* plat supérieur articulé */}
        <group ref={coverPivot}>
          <mesh material={mats.cover} position={[COVER_W / 2, COVER_T / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[COVER_W, COVER_T, COVER_H]} />
          </mesh>
        </group>
        {/* origami pop-up */}
        <group ref={popup} position={[PAGE_W / 2 + 0.02, 0, -0.02]} visible={false}>
          <PopupCastle model={spreads.find((sp) => sp.kind === 'popup')?.model} progress={popAnim} onInspect={onInspect} />
        </group>
      </group>
    </group>
  )
}
