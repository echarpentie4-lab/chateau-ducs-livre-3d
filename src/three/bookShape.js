// Géométries dynamiques du livre : blocs de pages avec courbe de gouttière + profil des feuillets.
import * as THREE from 'three'
import { PAGE_W, PAGE_H, BLOCK_T, GUTTER, LEAF_SEGMENTS } from './dimensions'

export const clamp01 = (t) => Math.min(1, Math.max(0, t))
export const smoothstep = (a, b, x) => {
  const t = clamp01((x - a) / (b - a))
  return t * t * (3 - 2 * t)
}
const easeOut = (t) => 1 - (1 - clamp01(t)) ** 2

// Hauteur de la surface d'un bloc d'épaisseur h, à la distance u du dos.
// dip = 0 : surface plate (livre fermé) ; dip = 1 : les pages plongent vers le dos.
export const surfaceAt = (u, h, dip) => h * (1 - dip * (1 - easeOut(u / GUTTER)))

// ───────────────────────── Bloc de pages ─────────────────────────
const BS = 24
const BW = PAGE_W - 0.012

export function createBlockGeometry() {
  const n = (BS + 1) * 2
  const CF = n
  const CB = n * 2
  const FE = n * 3
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((FE + 4) * 3), 3))
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((FE + 4) * 2), 2))
  const idx = []
  for (let k = 0; k < BS; k++) {
    const a = k * 2
    idx.push(a, a + 1, a + 2, a + 2, a + 1, a + 3)
  }
  for (let k = 0; k < BS; k++) {
    const a = CF + k * 2 // (bas, haut) en k
    idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3)
    const b = CB + k * 2
    idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2)
  }
  idx.push(FE, FE + 1, FE + 2, FE + 2, FE + 1, FE + 3)
  g.setIndex(idx)
  g.addGroup(0, BS * 6, 0) // dessus : papier
  g.addGroup(BS * 6, idx.length - BS * 6, 1) // tranches : dorure
  g.userData = { CF, CB, FE }
  return g
}

export function updateBlockGeometry(g, h, dip) {
  const { CF, CB, FE } = g.userData
  const p = g.attributes.position.array
  const uv = g.attributes.uv.array
  const set = (i, x, y, z, u, v) => {
    p[i * 3] = x
    p[i * 3 + 1] = y
    p[i * 3 + 2] = z
    uv[i * 2] = u
    uv[i * 2 + 1] = v
  }
  const Z = PAGE_H / 2
  let top = 0
  for (let k = 0; k <= BS; k++) {
    const x = 0.006 + (k / BS) * BW
    top = surfaceAt(x, h, dip)
    set(k * 2, x, top, -Z, k / BS, 1)
    set(k * 2 + 1, x, top, Z, k / BS, 0)
    set(CF + k * 2, x, 0, Z, 0.5, 0)
    set(CF + k * 2 + 1, x, top, Z, 0.5, top / BLOCK_T)
    set(CB + k * 2, x, 0, -Z, 0.5, 0)
    set(CB + k * 2 + 1, x, top, -Z, 0.5, top / BLOCK_T)
  }
  const xe = 0.006 + BW
  set(FE, xe, 0, -Z, 0, 0)
  set(FE + 1, xe, top, -Z, 0, top / BLOCK_T)
  set(FE + 2, xe, 0, Z, 1, 0)
  set(FE + 3, xe, top, Z, 1, top / BLOCK_T)
  g.attributes.position.needsUpdate = true
  g.attributes.uv.needsUpdate = true
  g.computeVertexNormals()
  g.computeBoundingSphere()
}

// ───────────────────────── Feuillet ─────────────────────────
export function createLeafGeometry() {
  const S = LEAF_SEGMENTS
  const g = new THREE.BufferGeometry()
  const pos = new Float32Array((S + 1) * 2 * 3)
  const uv = new Float32Array((S + 1) * 2 * 2)
  const idx = []
  for (let k = 0; k <= S; k++) {
    for (let j = 0; j < 2; j++) {
      const v = k * 2 + j
      uv[v * 2] = k / S
      uv[v * 2 + 1] = j === 0 ? 1 : 0
      pos[v * 3 + 2] = j === 0 ? -PAGE_H / 2 : PAGE_H / 2
    }
    if (k < S) {
      const a = k * 2
      idx.push(a, a + 1, a + 2, a + 2, a + 1, a + 3)
    }
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
  g.setIndex(idx)
  return g
}

// Profil d'une page : rotation autour du dos + courbure (l'extrémité suit avec retard),
// posée sur la surface du bloc de droite (p = 0) ou de gauche (p = 1).
export function updateLeafGeometry(g, p, dir, shape, offR, offL) {
  const S = LEAF_SEGMENTS
  const du = PAGE_W / S
  const theta = p * Math.PI
  const bend = Math.sin(p * Math.PI) * 0.9 * (dir || 1)
  const arr = g.attributes.position.array
  let x = 0
  let y = 0
  for (let k = 0; k <= S; k++) {
    const u = k * du
    const restR = surfaceAt(u, shape.hR, shape.dip) + offR
    const restL = surfaceAt(u, shape.hL, shape.dip) + offL
    const Y = y + (1 - p) * restR + p * restL
    arr[k * 6] = x
    arr[k * 6 + 1] = Y
    arr[k * 6 + 3] = x
    arr[k * 6 + 4] = Y
    const a = Math.min(Math.PI, Math.max(0, theta - bend * ((k + 0.5) / S)))
    x += Math.cos(a) * du
    y += Math.sin(a) * du
  }
  g.attributes.position.needsUpdate = true
  g.computeVertexNormals()
}
