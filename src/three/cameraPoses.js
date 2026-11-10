// Poses de caméra { pos, target } calculées selon la taille de l'écran.
import * as THREE from 'three'
import { COVER_W, COVER_H, PAGE_W, PAGE_H, BOOK_Y, HOVER_Y } from './dimensions'

export const FOV = 35
const T = Math.tan(THREE.MathUtils.degToRad(FOV / 2))
const UI_TOP = 90 // px réservés en haut (titre / boutons)
const UI_TOP_ZOOM = 170 // + sélecteur Illustration / Texte en gros plan
const UI_BOTTOM = 150 // px réservés en bas (pagination)

const fromAngles = (target, dist, polar, azimuth) => ({
  pos: {
    x: target.x + dist * Math.sin(polar) * Math.sin(azimuth),
    y: target.y + dist * Math.cos(polar),
    z: target.z + dist * Math.sin(polar) * Math.cos(azimuth),
  },
  target,
})

// Cadre une zone (largeur × profondeur) vue de dessus, en laissant la place à l'interface.
function frameTopDown(w, h, cx, needW, needH, tilt = 0.12) {
  const aspect = w / h
  const avail = Math.max(0.5, 1 - (UI_TOP + UI_BOTTOM) / h)
  const d = Math.max(needH / 2 / (T * avail), needW / 2 / (T * aspect))
  const shift = (((UI_BOTTOM - UI_TOP) / 2) / h) * 2 * d * T // décale le livre vers le haut
  const target = { x: cx, y: BOOK_Y + 0.15, z: shift }
  return { pos: { x: cx, y: target.y + d * Math.cos(tilt), z: target.z + d * Math.sin(tilt) }, target }
}

export const orbitPose = (w, h) => {
  const k = w / h < 1 ? Math.min(2.1, 1.15 / (w / h)) : 1
  return fromAngles({ x: 0, y: HOVER_Y, z: 0 }, 5.2 * k, 1.2, 0.55)
}

export const alignPose = () => ({ pos: { x: 0, y: 3.3, z: 3.7 }, target: { x: 0, y: 0.15, z: 0 } })

export const readingPose = (w, h) => frameTopDown(w, h, 0, COVER_W * 2 + 0.3, COVER_H + 0.25)

// Gros plan de lecture : la page occupe ~la moitié de l'écran (texte ≈ 22-26 px),
// cadrée sur son haut ; on fait glisser pour descendre dans la page.
export const pagePose = (w, h, side = 'text') => {
  const pagePx = Math.min(w - 32, Math.max(640, w * 0.52))
  const d = (PAGE_W * h) / (pagePx * 2 * T)
  const visible = 2 * d * T * Math.max(0.5, 1 - (UI_TOP_ZOOM + UI_BOTTOM) / h)
  const shift = (((UI_BOTTOM - UI_TOP_ZOOM) / 2) / h) * 2 * d * T
  // texte : on commence en haut de la page ; illustration : centrée sur l'image (moitié basse)
  const z = visible >= PAGE_H + 0.1 ? 0 : side === 'image' ? Math.min(0.2, PAGE_H / 2 - visible / 2) : -PAGE_H / 2 + visible / 2 - 0.04
  const x = side === 'image' ? -PAGE_W / 2 - 0.02 : PAGE_W / 2 + 0.02
  const target = { x, y: BOOK_Y + 0.22, z: z + shift }
  const tilt = 0.04
  return { pos: { x, y: target.y + d * Math.cos(tilt), z: target.z + d * Math.sin(tilt) }, target }
}

export const popupPose = (w, h, zoom) => {
  const k = w / h < 1 ? Math.min(1.9, 1.1 / (w / h)) : 1
  return fromAngles({ x: zoom ? PAGE_W / 2 : PAGE_W / 2 - 0.2, y: BOOK_Y + 0.4, z: 0.05 }, (zoom ? 2.3 : 3.7) * k, zoom ? 1.05 : 0.85, -0.3)
}
