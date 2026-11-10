// Poses de caméra { pos, target } calculées selon la taille de l'écran.
import * as THREE from 'three'
import { COVER_W, COVER_H, PAGE_W, PAGE_H, BOOK_Y, HOVER_Y } from './dimensions'

export const FOV = 35
const T = Math.tan(THREE.MathUtils.degToRad(FOV / 2))
const UI_TOP = 90 // px réservés en haut (titre / boutons)
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

export const pagePose = (w, h) => frameTopDown(w, h, PAGE_W / 2 + 0.02, PAGE_W + 0.2, PAGE_H + 0.15, 0.06)

export const popupPose = (w, h, zoom) => {
  const k = w / h < 1 ? Math.min(1.9, 1.1 / (w / h)) : 1
  return fromAngles({ x: zoom ? PAGE_W / 2 : PAGE_W / 2 - 0.2, y: BOOK_Y + 0.4, z: 0.05 }, (zoom ? 2.3 : 3.7) * k, zoom ? 1.05 : 0.85, -0.3)
}
