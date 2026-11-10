// Gravures et emblèmes vectoriels du patrimoine nantais (dessinés au canvas 2D).
import { rng } from './canvasUtils'

// ───────────────────────── Emblèmes (pleins) ─────────────────────────
// Moucheture d'hermine héraldique (symbole de la Bretagne). s = hauteur.
export function drawErmine(ctx, cx, cy, s) {
  ctx.beginPath()
  for (const [dx, dy] of [[0, -0.43], [-0.12, -0.33], [0.12, -0.33]]) {
    ctx.moveTo(cx + dx * s + 0.065 * s, cy + dy * s)
    ctx.arc(cx + dx * s, cy + dy * s, 0.065 * s, 0, Math.PI * 2)
  }
  ctx.moveTo(cx, cy - 0.27 * s)
  ctx.quadraticCurveTo(cx + 0.07 * s, cy, cx + 0.22 * s, cy + 0.46 * s)
  ctx.quadraticCurveTo(cx + 0.1 * s, cy + 0.32 * s, cx, cy + 0.52 * s)
  ctx.quadraticCurveTo(cx - 0.1 * s, cy + 0.32 * s, cx - 0.22 * s, cy + 0.46 * s)
  ctx.quadraticCurveTo(cx - 0.07 * s, cy, cx, cy - 0.27 * s)
  ctx.fill()
}

// Fleur de lys. s = hauteur.
export function drawFleurDeLys(ctx, cx, cy, s) {
  ctx.beginPath()
  ctx.moveTo(cx, cy - 0.5 * s)
  ctx.bezierCurveTo(cx + 0.15 * s, cy - 0.3 * s, cx + 0.12 * s, cy - 0.05 * s, cx + 0.04 * s, cy + 0.1 * s)
  ctx.lineTo(cx - 0.04 * s, cy + 0.1 * s)
  ctx.bezierCurveTo(cx - 0.12 * s, cy - 0.05 * s, cx - 0.15 * s, cy - 0.3 * s, cx, cy - 0.5 * s)
  for (const k of [1, -1]) {
    ctx.moveTo(cx + k * 0.05 * s, cy + 0.06 * s)
    ctx.bezierCurveTo(cx + k * 0.25 * s, cy - 0.25 * s, cx + k * 0.5 * s, cy - 0.05 * s, cx + k * 0.37 * s, cy + 0.16 * s)
    ctx.bezierCurveTo(cx + k * 0.33 * s, cy + 0.02 * s, cx + k * 0.2 * s, cy + 0.04 * s, cx + k * 0.08 * s, cy + 0.17 * s)
    ctx.closePath()
    ctx.moveTo(cx + k * 0.06 * s, cy + 0.17 * s)
    ctx.lineTo(cx + k * 0.24 * s, cy + 0.33 * s)
    ctx.lineTo(cx + k * 0.14 * s, cy + 0.17 * s)
    ctx.closePath()
  }
  ctx.rect(cx - 0.21 * s, cy + 0.1 * s, 0.42 * s, 0.07 * s)
  ctx.moveTo(cx - 0.045 * s, cy + 0.17 * s)
  ctx.lineTo(cx, cy + 0.4 * s)
  ctx.lineTo(cx + 0.045 * s, cy + 0.17 * s)
  ctx.closePath()
  ctx.fill()
}

// Éléphant des Machines de l'Île (silhouette). (x, y) = coin bas-gauche, u = largeur.
export function drawElephantSilhouette(ctx, x, y, u, flip = false) {
  ctx.save()
  if (flip) {
    ctx.translate(x + u, 0)
    ctx.scale(-1, 1)
    x = 0
  }
  ctx.strokeStyle = ctx.fillStyle
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.ellipse(x + 0.45 * u, y - 0.4 * u, 0.3 * u, 0.19 * u, 0, 0, Math.PI * 2)
  ctx.moveTo(x + 0.88 * u, y - 0.52 * u)
  ctx.arc(x + 0.76 * u, y - 0.52 * u, 0.12 * u, 0, Math.PI * 2)
  for (const lx of [0.2, 0.33, 0.55, 0.67]) ctx.rect(x + lx * u, y - 0.3 * u, 0.075 * u, 0.3 * u)
  ctx.rect(x + 0.3 * u, y - 0.72 * u, 0.28 * u, 0.13 * u) // nacelle
  ctx.moveTo(x + 0.27 * u, y - 0.72 * u)
  ctx.lineTo(x + 0.44 * u, y - 0.86 * u)
  ctx.lineTo(x + 0.61 * u, y - 0.72 * u)
  ctx.fill()
  ctx.lineWidth = 0.065 * u
  ctx.beginPath()
  ctx.moveTo(x + 0.84 * u, y - 0.5 * u)
  ctx.quadraticCurveTo(x + 0.97 * u, y - 0.3 * u, x + 0.93 * u, y - 0.1 * u)
  ctx.quadraticCurveTo(x + 0.9 * u, y - 0.02 * u, x + 0.98 * u, y - 0.04 * u)
  ctx.stroke()
  ctx.lineWidth = 0.025 * u
  ctx.beginPath()
  ctx.moveTo(x + 0.16 * u, y - 0.45 * u)
  ctx.lineTo(x + 0.08 * u, y - 0.26 * u)
  ctx.moveTo(x + 0.44 * u, y - 0.86 * u)
  ctx.lineTo(x + 0.44 * u, y - 0.95 * u)
  ctx.stroke()
  ctx.restore()
}

const TOWERS = [
  [-0.42, 0.12, 0.34, true],
  [-0.12, 0.1, 0.3, false],
  [0.06, 0.1, 0.3, false],
  [0.42, 0.12, 0.38, true],
]

function merlons(ctx, x0, x1, top, size) {
  const n = Math.max(2, Math.floor((x1 - x0) / (size * 2)))
  const step = (x1 - x0) / n
  for (let i = 0; i < n; i++) ctx.rect(x0 + i * step, top - size, step * 0.55, size)
}

// Silhouette pleine du château (dorure de couverture). baseY = ligne de sol.
export function drawCastleSilhouette(ctx, cx, baseY, u) {
  ctx.beginPath()
  ctx.rect(cx - 0.5 * u, baseY, u, 0.018 * u)
  ctx.rect(cx + 0.12 * u, baseY - 0.3 * u, 0.24 * u, 0.3 * u)
  ctx.moveTo(cx + 0.1 * u, baseY - 0.3 * u)
  ctx.lineTo(cx + 0.24 * u, baseY - 0.46 * u)
  ctx.lineTo(cx + 0.38 * u, baseY - 0.3 * u)
  ctx.rect(cx - 0.42 * u, baseY - 0.17 * u, 0.84 * u, 0.17 * u)
  merlons(ctx, cx - 0.42 * u, cx + 0.42 * u, baseY - 0.17 * u, 0.025 * u)
  for (const [tx, tw, th, cone] of TOWERS) {
    const x = cx + tx * u - (tw * u) / 2
    ctx.rect(x, baseY - th * u, tw * u, th * u)
    ctx.rect(x - 0.01 * u, baseY - th * u - 0.02 * u, tw * u + 0.02 * u, 0.025 * u)
    if (cone) {
      ctx.moveTo(x - 0.01 * u, baseY - th * u - 0.02 * u)
      ctx.lineTo(x + (tw * u) / 2, baseY - th * u - 0.17 * u)
      ctx.lineTo(x + tw * u + 0.01 * u, baseY - th * u - 0.02 * u)
    } else merlons(ctx, x - 0.01 * u, x + tw * u + 0.01 * u, baseY - th * u - 0.02 * u, 0.02 * u)
  }
  ctx.fill()
}

// ───────────────────────── Gravures au trait ─────────────────────────
function hatchSky(ctx, x, y, w, horizon, r, ink, dense = 1) {
  ctx.strokeStyle = ink
  ctx.lineWidth = 1
  for (let yy = y + 6; yy < horizon; yy += 7 / dense) {
    ctx.globalAlpha = (0.08 + 0.18 * ((yy - y) / (horizon - y))) * dense
    let xx = x
    while (xx < x + w) {
      const len = 20 + r() * 120
      ctx.beginPath()
      ctx.moveTo(xx, yy)
      ctx.lineTo(Math.min(x + w, xx + len), yy)
      ctx.stroke()
      xx += len + 6 + r() * 30
    }
  }
  ctx.globalAlpha = 1
}

function waves(ctx, x, y, w, h, horizon, r, ink) {
  ctx.strokeStyle = ink
  ctx.lineWidth = 1
  ctx.globalAlpha = 0.5
  for (let yy = horizon + 10; yy < y + h; yy += 9) {
    let xx = x + r() * 30
    while (xx < x + w) {
      const len = 14 + r() * 40
      ctx.beginPath()
      ctx.moveTo(xx, yy)
      ctx.quadraticCurveTo(xx + len / 2, yy - 3, xx + len, yy)
      ctx.stroke()
      xx += len + 10 + r() * 20
    }
  }
  ctx.globalAlpha = 1
}

function vHatch(ctx, x0, x1, y0, y1, step = 4) {
  ctx.lineWidth = 1
  for (let hx = x0; hx < x1; hx += step) {
    ctx.beginPath()
    ctx.moveTo(hx, y0)
    ctx.lineTo(hx, y1)
    ctx.stroke()
  }
}

function castle(ctx, x, y, w, h, r, ink, paper) {
  const horizon = y + h * 0.74
  hatchSky(ctx, x, y, w, horizon, r, ink)
  waves(ctx, x, y, w, h, horizon, r, ink)
  const u = Math.min(w * 0.92, h * 1.5)
  const cx = x + w / 2
  ctx.fillStyle = paper
  drawCastleSilhouette(ctx, cx, horizon, u)
  ctx.strokeStyle = ink
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.rect(cx + 0.12 * u, horizon - 0.3 * u, 0.24 * u, 0.3 * u)
  ctx.moveTo(cx + 0.1 * u, horizon - 0.3 * u)
  ctx.lineTo(cx + 0.24 * u, horizon - 0.46 * u)
  ctx.lineTo(cx + 0.38 * u, horizon - 0.3 * u)
  ctx.rect(cx - 0.42 * u, horizon - 0.17 * u, 0.84 * u, 0.17 * u)
  ctx.stroke()
  for (const [tx, tw, th, cone] of TOWERS) {
    const tx0 = cx + tx * u - (tw * u) / 2
    const top = horizon - th * u
    ctx.fillStyle = paper
    ctx.fillRect(tx0, top, tw * u, th * u)
    ctx.lineWidth = 2
    ctx.strokeRect(tx0, top, tw * u, th * u)
    ctx.strokeRect(tx0 - 0.01 * u, top - 0.02 * u, tw * u + 0.02 * u, 0.025 * u)
    vHatch(ctx, tx0 + tw * u * 0.55, tx0 + tw * u, top + 2, horizon)
    ctx.fillStyle = ink
    ctx.fillRect(tx0 + tw * u * 0.4, top + th * u * 0.3, tw * u * 0.14, th * u * 0.12)
    if (cone) {
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(tx0 - 0.01 * u, top - 0.02 * u)
      ctx.lineTo(tx0 + (tw * u) / 2, top - 0.17 * u)
      ctx.lineTo(tx0 + tw * u + 0.01 * u, top - 0.02 * u)
      ctx.closePath()
      ctx.fillStyle = paper
      ctx.fill()
      ctx.stroke()
      ctx.lineWidth = 1
      for (let k = 1; k < 8; k++) {
        ctx.beginPath()
        ctx.moveTo(tx0 + (tw * u) / 2, top - 0.17 * u)
        ctx.lineTo(tx0 + (tw * u * k) / 8, top - 0.02 * u)
        ctx.stroke()
      }
    }
  }
  ctx.lineWidth = 2
  for (let k = 0; k < 3; k++) {
    const lx = cx + (0.15 + k * 0.07) * u
    ctx.beginPath()
    ctx.moveTo(lx, horizon - 0.3 * u)
    ctx.lineTo(lx + 0.02 * u, horizon - 0.38 * u)
    ctx.lineTo(lx + 0.04 * u, horizon - 0.3 * u)
    ctx.stroke()
    ctx.fillStyle = ink
    ctx.fillRect(lx + 0.012 * u, horizon - 0.24 * u, 0.016 * u, 0.04 * u)
  }
  ctx.beginPath()
  ctx.moveTo(cx - 0.05 * u, horizon)
  ctx.lineTo(cx - 0.05 * u, horizon - 0.07 * u)
  ctx.arc(cx - 0.03 * u, horizon - 0.07 * u, 0.02 * u, Math.PI, 0)
  ctx.lineTo(cx - 0.01 * u, horizon)
  ctx.fillStyle = ink
  ctx.fill()
}

function drakkar(ctx, x, y, w, h, r, ink, paper) {
  const horizon = y + h * 0.66
  hatchSky(ctx, x, y, w, horizon, r, ink)
  waves(ctx, x, y, w, h, horizon, r, ink)
  const P = (fx, fy) => [x + fx * w, y + fy * h]
  ctx.lineJoin = 'round'
  // voile rayée
  const [sx0, sy0] = P(0.33, 0.14)
  const [sx1, sy1] = P(0.67, 0.5)
  ctx.beginPath()
  ctx.moveTo(sx0, sy0)
  ctx.lineTo(sx1, sy0)
  ctx.quadraticCurveTo(sx1 + 0.05 * w, (sy0 + sy1) / 2, sx1, sy1)
  ctx.lineTo(sx0, sy1)
  ctx.quadraticCurveTo(sx0 + 0.05 * w, (sy0 + sy1) / 2, sx0, sy0)
  ctx.fillStyle = paper
  ctx.fill()
  ctx.save()
  ctx.clip()
  ctx.strokeStyle = ink
  for (let k = 0; k < 6; k += 2) vHatch(ctx, sx0 + ((sx1 - sx0) * k) / 6, sx0 + ((sx1 - sx0) * (k + 1)) / 6, sy0, sy1, 3)
  ctx.restore()
  ctx.lineWidth = 2
  ctx.strokeStyle = ink
  ctx.stroke()
  // mât
  ctx.beginPath()
  ctx.moveTo(x + 0.5 * w, y + 0.08 * h)
  ctx.lineTo(x + 0.5 * w, horizon)
  ctx.stroke()
  // coque
  ctx.beginPath()
  ctx.moveTo(...P(0.13, 0.36))
  ctx.quadraticCurveTo(...P(0.08, 0.5), ...P(0.18, 0.58))
  ctx.lineTo(...P(0.8, 0.58))
  ctx.quadraticCurveTo(...P(0.9, 0.5), ...P(0.88, 0.34))
  ctx.quadraticCurveTo(...P(0.83, 0.62), ...P(0.5, 0.7))
  ctx.quadraticCurveTo(...P(0.2, 0.64), ...P(0.13, 0.36))
  ctx.fillStyle = paper
  ctx.fill()
  ctx.stroke()
  ctx.lineWidth = 1
  for (const k of [0.62, 0.66]) {
    ctx.beginPath()
    ctx.moveTo(...P(0.2, k - 0.02))
    ctx.quadraticCurveTo(...P(0.5, k + 0.05), ...P(0.8, k - 0.03))
    ctx.stroke()
  }
  // tête de dragon
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(...P(0.885, 0.31), 0.018 * w, 0, Math.PI * 2)
  ctx.moveTo(...P(0.9, 0.31))
  ctx.lineTo(...P(0.94, 0.33))
  ctx.stroke()
  // boucliers
  for (let k = 0; k < 9; k++) {
    const [bx, by] = P(0.22 + k * 0.065, 0.585)
    ctx.beginPath()
    ctx.arc(bx, by, 0.024 * w, 0, Math.PI * 2)
    ctx.fillStyle = paper
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(bx - 0.024 * w, by)
    ctx.lineTo(bx + 0.024 * w, by)
    ctx.stroke()
  }
  // rames
  ctx.lineWidth = 1.5
  for (let k = 0; k < 8; k++) {
    const [ox, oy] = P(0.25 + k * 0.07, 0.64)
    ctx.beginPath()
    ctx.moveTo(ox, oy)
    ctx.lineTo(ox - 0.05 * w, oy + 0.16 * h)
    ctx.stroke()
  }
}

function shieldPath(ctx, x, y, w, h) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + w, y)
  ctx.lineTo(x + w, y + h * 0.55)
  ctx.quadraticCurveTo(x + w, y + h * 0.9, x + w / 2, y + h)
  ctx.quadraticCurveTo(x, y + h * 0.9, x, y + h * 0.55)
  ctx.closePath()
}

function crown(ctx, cx, y, s, ink, paper) {
  ctx.lineWidth = 2
  ctx.strokeStyle = ink
  ctx.fillStyle = paper
  ctx.beginPath()
  ctx.moveTo(cx - s, y)
  ctx.lineTo(cx - s * 1.1, y - s * 0.55)
  for (let k = 0; k < 5; k++) {
    const px = cx - s + (k * s * 2) / 4
    ctx.lineTo(px, y - s * (k % 2 ? 0.45 : 0.75))
    if (k < 4) ctx.lineTo(px + s / 4, y - s * 0.35)
  }
  ctx.lineTo(cx + s * 1.1, y - s * 0.55)
  ctx.lineTo(cx + s, y)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
  ctx.strokeRect(cx - s, y, s * 2, s * 0.18)
  ctx.fillStyle = ink
  for (let k = 0; k < 5; k++) {
    ctx.beginPath()
    ctx.arc(cx - s + (k * s * 2) / 4, y - s * (k % 2 ? 0.5 : 0.82), s * 0.07, 0, Math.PI * 2)
    ctx.fill()
  }
}

function blason(ctx, x, y, w, h, r, ink, paper, union) {
  const cx = x + w / 2
  // gloire rayonnante en fond
  ctx.strokeStyle = ink
  ctx.globalAlpha = 0.18
  ctx.lineWidth = 1
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 60) {
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(a) * h * 0.2, y + h * 0.55 + Math.sin(a) * h * 0.2)
    ctx.lineTo(cx + Math.cos(a) * w, y + h * 0.55 + Math.sin(a) * w)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
  const sw = Math.min(w * 0.5, h * 0.55)
  const sh = sw * 1.15
  const sx = cx - sw / 2
  const sy = y + h * 0.28
  shieldPath(ctx, sx, sy, sw, sh)
  ctx.fillStyle = paper
  ctx.fill()
  ctx.save()
  ctx.clip()
  const ermines = (x0, x1) => {
    ctx.fillStyle = ink
    const step = sw / 4.2
    for (let row = 0, yy = sy + step * 0.6; yy < sy + sh; row++, yy += step * 0.9)
      for (let xx = x0 + (row % 2 ? step / 2 : step / 4); xx < x1; xx += step) drawErmine(ctx, xx, yy, step * 0.62)
  }
  if (union) {
    ctx.strokeStyle = ink
    ctx.lineWidth = 1
    for (let yy = sy; yy < sy + sh; yy += 4) {
      ctx.beginPath()
      ctx.moveTo(sx, yy)
      ctx.lineTo(cx, yy)
      ctx.stroke()
    }
    ctx.fillStyle = paper
    for (const [fx, fy] of [[0.13, 0.22], [0.37, 0.22], [0.25, 0.55]]) {
      drawFleurDeLys(ctx, sx + fx * sw, sy + fy * sh, sw * 0.22)
    }
    ctx.fillStyle = paper
    ctx.fillRect(cx, sy, sw / 2, sh)
    ermines(cx, sx + sw)
    ctx.beginPath()
    ctx.moveTo(cx, sy)
    ctx.lineTo(cx, sy + sh)
    ctx.lineWidth = 2
    ctx.stroke()
  } else ermines(sx, sx + sw)
  ctx.restore()
  shieldPath(ctx, sx, sy, sw, sh)
  ctx.lineWidth = 3
  ctx.strokeStyle = ink
  ctx.stroke()
  crown(ctx, cx, sy - 12, sw * 0.32, ink, paper)
}

function tower(ctx, x, y, w, h, r, ink, paper) {
  const horizon = y + h * 0.86
  hatchSky(ctx, x, y, w, horizon, r, ink, 1.6) // ciel de nuit
  ctx.fillStyle = paper
  ctx.beginPath()
  ctx.arc(x + w * 0.2, y + h * 0.2, h * 0.08, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = ink
  ctx.lineWidth = 1.5
  ctx.stroke()
  waves(ctx, x, y, w, h, horizon, r, ink)
  const tx0 = x + w * 0.4
  const tx1 = x + w * 0.66
  const top = y + h * 0.2
  ctx.fillStyle = paper
  ctx.fillRect(tx0, top, tx1 - tx0, horizon - top)
  ctx.beginPath()
  merlons(ctx, tx0 - 6, tx1 + 6, top, 16)
  ctx.rect(tx0 - 6, top, tx1 - tx0 + 12, 14)
  ctx.fill()
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.strokeRect(tx0, top + 14, tx1 - tx0, horizon - top - 14)
  // mâchicoulis
  for (let mx = tx0; mx < tx1; mx += (tx1 - tx0) / 6) {
    ctx.beginPath()
    ctx.arc(mx + (tx1 - tx0) / 12, top + 14, (tx1 - tx0) / 12, 0, Math.PI)
    ctx.stroke()
  }
  ctx.strokeStyle = ink
  vHatch(ctx, tx0 + (tx1 - tx0) * 0.55, tx1, top + 22, horizon)
  // assises de pierre
  ctx.globalAlpha = 0.4
  for (let yy = top + 40; yy < horizon; yy += 18) {
    ctx.beginPath()
    ctx.moveTo(tx0, yy)
    ctx.lineTo(tx0 + (tx1 - tx0) * 0.55, yy)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
  ctx.fillStyle = ink
  ctx.fillRect(tx0 + (tx1 - tx0) * 0.3, top + h * 0.18, 16, 26)
  // corde de l'évasion et silhouette
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(tx0 - 2, top + 8)
  ctx.bezierCurveTo(tx0 - 30, top + h * 0.2, tx0 - 10, top + h * 0.4, tx0 - 40, horizon - 4)
  ctx.stroke()
  const fx = tx0 - 22
  const fy = top + h * 0.3
  ctx.beginPath()
  ctx.arc(fx, fy - 12, 5, 0, Math.PI * 2)
  ctx.fill()
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(fx, fy - 6)
  ctx.lineTo(fx - 2, fy + 12)
  ctx.moveTo(fx, fy)
  ctx.lineTo(fx + 8, fy - 8)
  ctx.moveTo(fx - 2, fy + 12)
  ctx.lineTo(fx - 8, fy + 22)
  ctx.stroke()
}

const KINDS = { castle, drakkar, blason, tower, union: (...a) => blason(...a, true) }

export function drawEngraving(kind, ctx, x, y, w, h, seed = 1, ink = '#2a1b10', paper = '#e6d4ae') {
  const r = rng(seed)
  ctx.save()
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.clip()
  ;(KINDS[kind] || castle)(ctx, x, y, w, h, r, ink, paper)
  ctx.restore()
}
