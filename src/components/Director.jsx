// Chef d'orchestre GSAP : traduit chaque état de la machine en timeline (caméra + livre).
import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { MOUSE, TOUCH } from 'three'
import { PHASE } from '../state/bookMachine'
import { carouselPose, alignPose, readingPose, pagePose, popupPose } from '../three/cameraPoses'

const MODES = {
  carousel: { disabled: true }, // la caméra est fixe : c'est le cercle de livres qui tourne
  orbit: { rotate: true, minDist: 2.6, maxDist: 9, minPolar: 0.08, maxPolar: Math.PI * 0.56 },
  reading: { rotate: false, minDist: 1.0, maxDist: 22, minPolar: 0, maxPolar: Math.PI * 0.45 },
  zoom: { rotate: false, pan: true, minDist: 0.6, maxDist: 22, minPolar: 0, maxPolar: Math.PI * 0.45 },
  popup: { rotate: true, minDist: 1.2, maxDist: 16, minPolar: 0.15, maxPolar: Math.PI * 0.46 },
}

export default function Director({ phase, spread, zoom, spreads, anim, leafStates, popAnim, shelf, dispatch }) {
  const { camera, controls, size } = useThree()
  const busy = useRef(false)
  const tl = useRef(null)
  const prevSpread = useRef(0)

  useFrame(() => {
    if (busy.current && controls) controls.update()
  })

  const setMode = (name) => {
    const m = MODES[name]
    if (m.disabled) {
      controls.update() // oriente la caméra vers la cible avant de la figer
      controls.enabled = false
      return
    }
    Object.assign(controls, {
      enabled: true, enableRotate: m.rotate, enablePan: !!m.pan, enableZoom: true, screenSpacePanning: true,
      minDistance: m.minDist, maxDistance: m.maxDist, minPolarAngle: m.minPolar, maxPolarAngle: m.maxPolar,
    })
    // en gros plan, glisser = se déplacer dans la page (souris et tactile)
    controls.mouseButtons.LEFT = m.pan ? MOUSE.PAN : MOUSE.ROTATE
    controls.touches.ONE = m.pan ? TOUCH.PAN : TOUCH.ROTATE
  }

  const moveCamera = (t, pose, at, duration, ease = 'power3.inOut') => {
    t.to(camera.position, { ...pose.pos, duration, ease }, at)
    t.to(controls.target, { ...pose.target, duration, ease }, at)
  }

  const flip = (t, leaf, to, at, duration = 1.25) => {
    t.call(() => { leaf.dir = to > leaf.p ? 1 : -1 }, null, at)
    t.to(leaf, { p: to, duration, ease: 'power2.inOut' }, at)
  }

  const run = (build, endMode, notify = true) => {
    tl.current?.kill()
    busy.current = true
    controls.enabled = false
    controls.minDistance = 0
    controls.maxDistance = Infinity
    controls.minPolarAngle = 0
    controls.maxPolarAngle = Math.PI
    const t = gsap.timeline({
      onComplete: () => {
        busy.current = false
        setMode(endMode)
        if (notify) dispatch({ type: 'DONE' })
      },
    })
    build(t)
    tl.current = t
  }

  const isPopup = (i) => spreads[i]?.kind === 'popup'
  const poseFor = () =>
    isPopup(spread)
      ? popupPose(size.width, size.height, !!zoom)
      : zoom
        ? pagePose(size.width, size.height, zoom)
        : readingPose(size.width, size.height)
  const modeFor = () => (isPopup(spread) ? 'popup' : zoom ? 'zoom' : 'reading')

  // ── Transitions principales
  useEffect(() => {
    if (!controls) return
    const W = size.width
    const H = size.height

    if (phase === PHASE.CLOSED && !tl.current) setMode('carousel')

    if (phase === PHASE.OPENING) {
      run((t) => {
        // 1. la caméra s'aligne, le livre redescend et pivote à plat
        moveCamera(t, alignPose(), 0, 1.6, 'power2.inOut')
        t.to(shelf, { away: 1, duration: 1.8, ease: 'power2.inOut' }, 0.15) // les autres livres s'éloignent
        t.to(anim, { lift: 0.06, duration: 1.35, ease: 'power2.inOut' }, 0.1)
        // 2. contact avec la table : petite chute amortie
        t.to(anim, { lift: 0, duration: 0.22, ease: 'power2.in' }, 1.45)
        t.to(anim, { bump: 1, duration: 0.1, ease: 'power1.out' }, 1.67)
        t.to(anim, { bump: 0, duration: 0.4, ease: 'bounce.out' }, 1.77)
        // 3. ouverture : la couverture pivote, la première page suit avec un léger retard
        const o = 1.85
        t.to(anim, { open: 1, duration: 2.2, ease: 'power2.inOut' }, o)
        flip(t, leafStates[0], 1, o + 0.5, 2.1)
        // 4. zoom progressif sur la double-page
        moveCamera(t, readingPose(W, H), o + 0.4, 2.6)
      }, 'reading')
      prevSpread.current = 0
    } else if (phase === PHASE.TURNING) {
      const from = prevSpread.current
      const turned = spread + 1
      const changes = leafStates
        .map((leaf) => ({ leaf, to: leafStates.indexOf(leaf) < turned ? 1 : 0 }))
        .filter((c) => c.leaf.p !== c.to)
      if (spread < from) changes.reverse()
      run((t) => {
        let at = 0
        if (popAnim.u > 0) {
          t.to(popAnim, { u: 0, duration: 0.75, ease: 'power2.in' }, 0) // l'origami se replie
          at = 0.6
        }
        moveCamera(t, readingPose(W, H), 0, 1.0, 'power2.inOut')
        const step = changes.length > 3 ? 0.09 : 0.15
        changes.forEach((c, k) => flip(t, c.leaf, c.to, at + k * step, changes.length > 3 ? 1.0 : 1.25))
        const end = at + Math.max(0, changes.length - 1) * step + 1.15
        if (isPopup(spread)) {
          t.to(popAnim, { u: 1, duration: 2.6, ease: 'power1.inOut' }, end - 0.2) // l'origami se déplie
          moveCamera(t, popupPose(W, H, false), end - 0.5, 2.0)
        }
      }, isPopup(spread) ? 'popup' : 'reading')
      prevSpread.current = spread
    } else if (phase === PHASE.CLOSING) {
      run((t) => {
        let at = 0
        if (popAnim.u > 0) {
          t.to(popAnim, { u: 0, duration: 0.7, ease: 'power2.in' }, 0)
          at = 0.55
        }
        const turnedLeaves = leafStates.filter((l) => l.p > 0).reverse()
        const step = turnedLeaves.length > 3 ? 0.07 : 0.1
        turnedLeaves.forEach((leaf, k) => flip(t, leaf, 0, at + k * step, 0.9))
        const after = at + (turnedLeaves.length ? 0.55 + turnedLeaves.length * step : 0)
        t.to(anim, { open: 0, duration: 1.6, ease: 'power2.inOut' }, after)
        t.to(anim, { lift: 1, duration: 1.8, ease: 'power2.inOut' }, after + 1.45)
        t.to(shelf, { away: 0, duration: 1.8, ease: 'power2.inOut' }, after + 1.3) // retour dans le carrousel
        moveCamera(t, carouselPose(W, H), after + 0.8, 2.6)
      }, 'carousel')
      prevSpread.current = 0
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, controls])

  // ── Zoom (page de texte, ou maquette pop-up)
  useEffect(() => {
    if (!controls || phase !== PHASE.READING) return
    run((t) => moveCamera(t, poseFor(), 0, 1.4, 'power3.inOut'), modeFor(), false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom])

  // ── Recadrage si la fenêtre change de taille
  useEffect(() => {
    if (!controls || busy.current) return
    if (phase === PHASE.CLOSED) {
      const p = carouselPose(size.width, size.height)
      camera.position.set(p.pos.x, p.pos.y, p.pos.z)
      controls.target.set(p.target.x, p.target.y, p.target.z)
      controls.update()
      return
    }
    if (phase !== PHASE.READING) return
    run((t) => moveCamera(t, poseFor(), 0, 0.8, 'power2.out'), modeFor(), false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.width, size.height])

  return null
}
