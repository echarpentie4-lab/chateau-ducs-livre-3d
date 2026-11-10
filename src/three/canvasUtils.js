import * as THREE from 'three'

// Générateur pseudo-aléatoire déterministe (mulberry32) : textures identiques à chaque chargement.
export function rng(seed = 1) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function makeCanvas(w, h) {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  return [canvas, canvas.getContext('2d', { willReadFrequently: false })]
}

export function addNoise(ctx, w, h, amount, rand) {
  const img = ctx.getImageData(0, 0, w, h)
  const d = img.data
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - 0.5) * amount
    d[i] += n
    d[i + 1] += n
    d[i + 2] += n
  }
  ctx.putImageData(img, 0, 0)
}

export function blotches(ctx, w, h, count, rand, color, alphaMax, rMin, rMax) {
  for (let i = 0; i < count; i++) {
    const x = rand() * w
    const y = rand() * h
    const r = rMin + rand() * (rMax - rMin)
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, `rgba(${color},${rand() * alphaMax})`)
    g.addColorStop(1, `rgba(${color},0)`)
    ctx.fillStyle = g
    ctx.fillRect(x - r, y - r, r * 2, r * 2)
  }
}

export function edgeShade(ctx, w, h, size, rgba) {
  const sides = [
    [0, 0, size, 0, 0, 0, size, h],
    [w, 0, w - size, 0, w - size, 0, size, h],
    [0, 0, 0, size, 0, 0, w, size],
    [0, h, 0, h - size, 0, h - size, w, size],
  ]
  for (const [x0, y0, x1, y1, rx, ry, rw, rh] of sides) {
    const g = ctx.createLinearGradient(x0, y0, x1, y1)
    g.addColorStop(0, rgba)
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.fillRect(rx, ry, rw, rh)
  }
}

export function toTexture(canvas, { repeat, color = true } = {}) {
  const tex = new THREE.CanvasTexture(canvas)
  if (color) tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  if (repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.repeat.set(repeat[0], repeat[1])
  }
  return tex
}

export function setSpacing(ctx, px) {
  if ('letterSpacing' in ctx) ctx.letterSpacing = `${px}px`
}

export function roman(num) {
  const map = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ]
  let n = Math.max(1, Math.floor(num) || 1)
  let out = ''
  for (const [v, s] of map) while (n >= v) { out += s; n -= v }
  return out
}

// Coupe un texte en lignes (centrées) selon une largeur max.
export function wrapSimple(ctx, text, maxW) {
  const words = String(text).split(/\s+/).filter(Boolean)
  const lines = []
  let cur = ''
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w
    if (ctx.measureText(test).width > maxW && cur) {
      lines.push(cur)
      cur = w
    } else cur = test
  }
  if (cur) lines.push(cur)
  return lines
}

// Accepte une URL simple ou un lien markdown "[url](url)".
export function cleanUrl(u) {
  if (!u) return ''
  const m = String(u).match(/\((https?:[^)\s]+)\)/)
  return (m ? m[1] : String(u).replace(/^\[|\]$/g, '')).trim()
}
