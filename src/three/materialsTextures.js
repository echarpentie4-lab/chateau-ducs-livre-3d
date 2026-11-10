// Textures procédurales (aucun fichier image requis) : cuir, dorures, bois, carte, pièces…
import { makeCanvas, rng, addNoise, blotches, edgeShade, toTexture, setSpacing, wrapSimple } from './canvasUtils'
import { drawCastleSilhouette, drawErmine, drawFleurDeLys, drawEmblem, drawSymbol } from './engraving'

const DISPLAY = 'Cinzel, "Times New Roman", serif'
const FELL = '"IM Fell English", Georgia, serif'

// ───────────────────────── Cuir vieilli ─────────────────────────
export function drawLeather(ctx, w, h, { base = '#4a2415', seed = 3, wear = true } = {}) {
  const r = rng(seed)
  ctx.fillStyle = base
  ctx.fillRect(0, 0, w, h)
  blotches(ctx, w, h, 260, r, '0,0,0', 0.16, 20, 140)
  blotches(ctx, w, h, 120, r, '190,120,70', 0.08, 20, 110)
  addNoise(ctx, w, h, 26, r)
  for (let i = 0; i < 110; i++) {
    let x = r() * w
    let y = r() * h
    ctx.beginPath()
    ctx.moveTo(x, y)
    const len = 6 + r() * 14
    for (let k = 0; k < len; k++) {
      x += (r() - 0.5) * 18
      y += (r() - 0.5) * 18
      ctx.lineTo(x, y)
    }
    ctx.strokeStyle = r() > 0.4 ? `rgba(0,0,0,${0.08 + r() * 0.18})` : `rgba(230,180,130,${0.04 + r() * 0.06})`
    ctx.lineWidth = 0.6 + r() * 1.4
    ctx.stroke()
  }
  if (wear) edgeShade(ctx, w, h, Math.min(w, h) * 0.06, 'rgba(170,110,70,0.35)')
}

const goldGradient = (ctx, w, h) => {
  const g = ctx.createLinearGradient(0, 0, w, h)
  g.addColorStop(0, '#8a6a2c')
  g.addColorStop(0.25, '#f3d98f')
  g.addColorStop(0.45, '#b8903f')
  g.addColorStop(0.7, '#f7e3a3')
  g.addColorStop(1, '#9c7633')
  return g
}

function diamondRule(ctx, cx, y, half, lw) {
  ctx.lineWidth = lw
  ctx.beginPath()
  ctx.moveTo(cx - half, y)
  ctx.lineTo(cx - 18, y)
  ctx.moveTo(cx + 18, y)
  ctx.lineTo(cx + half, y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(cx, y - 10)
  ctx.lineTo(cx + 12, y)
  ctx.lineTo(cx, y + 10)
  ctx.lineTo(cx - 12, y)
  ctx.closePath()
  ctx.fill()
  for (const s of [-1, 1]) {
    ctx.beginPath()
    ctx.arc(cx + s * (half + 8), y, 4, 0, Math.PI * 2)
    ctx.fill()
  }
}

// Éléments dorés de la couverture, dessinés avec une "peinture" donnée
// (dégradé or = couleur, blanc = carte de métal, noir = ombre d'embossage).
function coverGold(ctx, w, h, paint, meta) {
  ctx.save()
  ctx.fillStyle = paint
  ctx.strokeStyle = paint
  const m = 46
  ctx.lineWidth = 7
  ctx.strokeRect(m, m, w - m * 2, h - m * 2)
  ctx.lineWidth = 2
  ctx.strokeRect(m + 16, m + 16, w - (m + 16) * 2, h - (m + 16) * 2)
  const p = 112
  ctx.lineWidth = 3
  ctx.strokeRect(p, p, w - p * 2, h - p * 2)
  // coins : symboles du monument + nef de Nantes (emblème de la ville) en bas à droite
  const corners = meta.cover?.corners || { tl: 'ermine', tr: 'ermine', bl: 'tower' }
  ctx.lineWidth = 2
  for (const [kind, x, y] of [
    [corners.tl, p + 66, p + 70],
    [corners.tr, w - p - 66, p + 70],
    [corners.bl, p + 70, h - p - 76],
    ['nef', w - p - 70, h - p - 76],
  ]) {
    ctx.beginPath()
    ctx.arc(x, y, 56, 0, Math.PI * 2)
    ctx.stroke()
    drawSymbol(kind, ctx, x, y, 78)
  }

  ctx.textAlign = 'center'
  ctx.textBaseline = 'alphabetic'
  const cx = w / 2
  ctx.font = `600 40px ${DISPLAY}`
  setSpacing(ctx, 10)
  ctx.fillText(meta.coverKicker.toUpperCase(), cx, h * 0.27)
  diamondRule(ctx, cx, h * 0.27 + 34, 220, 2)
  ctx.font = `700 70px ${DISPLAY}`
  setSpacing(ctx, 4)
  const lines = wrapSimple(ctx, meta.coverTitle.toUpperCase(), w - 300)
  let y = h * 0.27 + 120
  for (const l of lines) {
    ctx.fillText(l, cx, y)
    y += 84
  }
  diamondRule(ctx, cx, y - 30, 260, 2)
  // motif central propre à chaque monument, centré dans l'espace libre
  const emblem = meta.cover?.emblem || 'castle'
  const [maxU, hf] = { castle: [360, 0.5], lu: [420, 1.05], passage: [440, 0.95], cathedral: [400, 1.06], elephant: [440, 0.95] }[emblem] || [300, 1]
  const top = y + 10
  const bottom = h - p - 145
  const u = Math.min(maxU, (bottom - top) / hf)
  drawEmblem(emblem, ctx, cx, (top + bottom) / 2 + (u * hf) / 2, u)
  // pied de couverture : uniquement « NANTES », centré
  ctx.font = `600 44px ${DISPLAY}`
  setSpacing(ctx, 18)
  ctx.fillText(meta.coverFooter.toUpperCase(), cx + 9, h - p - 52)
  setSpacing(ctx, 0)
  ctx.restore()
}

export function makeCoverTextures(meta) {
  const w = 1024
  const h = Math.round(w * (2.0 / 1.46))
  const [c, ctx] = makeCanvas(w, h)
  drawLeather(ctx, w, h, { seed: 11, base: meta.leather })
  ctx.strokeStyle = 'rgba(0,0,0,0.4)'
  ctx.lineWidth = 3
  ctx.strokeRect(88, 88, w - 176, h - 176)
  ctx.save()
  ctx.translate(2, 3)
  coverGold(ctx, w, h, 'rgba(0,0,0,0.55)', meta)
  ctx.restore()
  coverGold(ctx, w, h, goldGradient(ctx, w, h), meta)
  const r = rng(5)
  ctx.globalCompositeOperation = 'source-atop'
  blotches(ctx, w, h, 80, r, '60,30,15', 0.22, 10, 60)
  ctx.globalCompositeOperation = 'source-over'

  const [mc, mctx] = makeCanvas(w, h)
  mctx.fillStyle = '#000'
  mctx.fillRect(0, 0, w, h)
  coverGold(mctx, w, h, '#fff', meta)
  return { map: toTexture(c), metalnessMap: toTexture(mc, { color: false }) }
}

// Dos du livre : titre seul, ajusté pour toujours tenir entre les nerfs dorés.
export function makeSpineTextures(meta, lengthRatio) {
  const w = 1400
  const h = Math.max(140, Math.round(w * lengthRatio))
  const draw = (ctx, paint) => {
    ctx.fillStyle = paint
    ctx.strokeStyle = paint
    for (const b of [0.09, 0.91]) {
      ctx.fillRect(w * b - 10, 8, 5, h - 16)
      ctx.fillRect(w * b + 5, 8, 5, h - 16)
    }
    ctx.lineWidth = 2
    ctx.strokeRect(w * 0.09 + 22, h * 0.16, w * 0.82 - 44, h * 0.68)
    const sym = meta.cover?.corners?.tl || 'ermine'
    drawSymbol(sym, ctx, w * 0.045, h * 0.5, h * 0.42)
    drawSymbol(sym, ctx, w * 0.955, h * 0.5, h * 0.42)
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const text = meta.spineTitle.toUpperCase()
    let fs = Math.round(h * 0.34)
    const maxW = w * 0.82 - 120
    setSpacing(ctx, 6)
    ctx.font = `700 ${fs}px ${DISPLAY}`
    while (ctx.measureText(text).width > maxW && fs > 12) {
      fs -= 2
      ctx.font = `700 ${fs}px ${DISPLAY}`
    }
    ctx.fillText(text, w * 0.5, h * 0.53)
    setSpacing(ctx, 0)
  }
  const [c, ctx] = makeCanvas(w, h)
  drawLeather(ctx, w, h, { seed: 21, base: meta.leather })
  ctx.save()
  ctx.translate(2, 2)
  draw(ctx, 'rgba(0,0,0,0.5)')
  ctx.restore()
  draw(ctx, goldGradient(ctx, w, h))
  const [mc, mctx] = makeCanvas(w, h)
  mctx.fillStyle = '#000'
  mctx.fillRect(0, 0, w, h)
  draw(mctx, '#fff')
  return { map: toTexture(c), metalnessMap: toTexture(mc, { color: false }) }
}

export function makeLeatherTexture(base, seed, repeat) {
  const [c, ctx] = makeCanvas(512, 512)
  drawLeather(ctx, 512, 512, { base, seed, wear: false })
  return toTexture(c, { repeat })
}

// Tranches dorées à la feuille : fines lignes horizontales.
export function makeGiltEdgeTexture() {
  const [c, ctx] = makeCanvas(64, 512)
  const r = rng(9)
  for (let y = 0; y < 512; y++) {
    const v = 0.65 + r() * 0.35
    ctx.fillStyle = `rgb(${Math.round(232 * v)},${Math.round(190 * v)},${Math.round(105 * v)})`
    ctx.fillRect(0, y, 64, 1)
  }
  const tex = toTexture(c)
  tex.wrapS = tex.wrapT = 1000 // RepeatWrapping
  return tex
}

// Garde marbrée (intérieur de la couverture), dans la couleur du cuir du livre.
export function makeEndpaperTexture(base = '#4a1d18') {
  const [c, ctx] = makeCanvas(512, 512)
  const r = rng(13)
  const [R, G, B] = [1, 3, 5].map((i) => parseInt(base.slice(i, i + 2), 16))
  const tone = (k, a) => `rgba(${Math.round(R * k)},${Math.round(G * k)},${Math.round(B * k)},${a})`
  ctx.fillStyle = tone(0.8, 1)
  ctx.fillRect(0, 0, 512, 512)
  // veines du marbré dans la teinte du cuir, rehaussées d'or pâle
  const cols = [tone(0.45, 0.45), tone(1.5, 0.35), 'rgba(200,160,90,0.12)', tone(0.6, 0.5), 'rgba(230,210,170,0.06)']
  for (let i = 0; i < 200; i++) {
    ctx.strokeStyle = cols[i % cols.length]
    ctx.lineWidth = 1 + r() * 5
    ctx.beginPath()
    const y0 = r() * 512
    for (let x = 0; x <= 512; x += 8) ctx.lineTo(x, y0 + Math.sin(x * 0.03 + i) * 14 + Math.sin(x * 0.11 + i * 2) * 5)
    ctx.stroke()
  }
  return toTexture(c)
}

// Bois noble sombre (noyer) pour le plateau.
export function makeWoodTexture({ base = [58, 34, 20], seed = 17, repeat = [3, 3] } = {}) {
  const S = 1024
  const [c, ctx] = makeCanvas(S, S)
  const r = rng(seed)
  const plank = S / 4
  for (let p = 0; p < 4; p++) {
    const y0 = p * plank
    const t = r()
    ctx.fillStyle = `rgb(${base[0] + t * 18},${base[1] + t * 10},${base[2] + t * 6})`
    ctx.fillRect(0, y0, S, plank)
    for (let i = 0; i < 90; i++) {
      const yy = y0 + r() * plank
      const amp = 2 + r() * 6
      const f = 0.004 + r() * 0.01
      const ph = r() * 10
      ctx.beginPath()
      for (let x = 0; x <= S; x += 16) ctx.lineTo(x, yy + Math.sin(x * f + ph) * amp)
      ctx.strokeStyle = r() > 0.5 ? `rgba(15,7,3,${0.1 + r() * 0.25})` : `rgba(140,90,55,${0.05 + r() * 0.1})`
      ctx.lineWidth = 0.6 + r() * 2.2
      ctx.stroke()
    }
    ctx.fillStyle = 'rgba(8,4,2,0.85)'
    ctx.fillRect(0, y0, S, 3)
  }
  addNoise(ctx, S, S, 14, r)
  return toTexture(c, { repeat })
}

// ───────────────────────── Carte ancienne de la Loire ─────────────────────────
export function makeLoireMapTexture() {
  const W = 1400
  const H = 1000
  const [c, ctx] = makeCanvas(W, H)
  const r = rng(77)
  const INK = '#3a2614'
  ctx.fillStyle = '#e3cfa4'
  ctx.fillRect(0, 0, W, H)
  blotches(ctx, W, H, 90, r, '160,110,55', 0.12, 60, 260)
  addNoise(ctx, W, H, 14, r)
  edgeShade(ctx, W, H, 70, 'rgba(110,70,30,0.5)')
  ctx.strokeStyle = INK
  ctx.lineWidth = 3
  ctx.strokeRect(30, 30, W - 60, H - 60)
  ctx.lineWidth = 1
  ctx.strokeRect(42, 42, W - 84, H - 84)
  // la Loire : de l'est (droite) vers l'océan (gauche)
  const river = (off) => {
    ctx.beginPath()
    for (let x = 40; x <= W - 40; x += 10) {
      const y = 600 + Math.sin(x * 0.006) * 70 + Math.sin(x * 0.017) * 18 + off
      x === 40 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
  }
  ctx.save()
  ctx.lineWidth = 46
  ctx.strokeStyle = 'rgba(90,110,120,0.25)'
  river(0)
  ctx.stroke()
  ctx.lineWidth = 2
  ctx.strokeStyle = INK
  river(-24)
  ctx.stroke()
  river(24)
  ctx.stroke()
  ctx.globalAlpha = 0.35
  for (let k = -16; k <= 16; k += 8) {
    ctx.setLineDash([12, 14])
    river(k)
    ctx.stroke()
  }
  ctx.setLineDash([])
  ctx.restore()
  // l'Erdre qui rejoint la Loire à Nantes
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(760, 560)
  ctx.bezierCurveTo(740, 420, 820, 300, 780, 80)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(776, 562)
  ctx.bezierCurveTo(756, 420, 836, 300, 796, 80)
  ctx.stroke()
  // îles
  for (const [ix, iy, rx] of [[860, 600, 60], [980, 610, 40], [600, 618, 34]]) {
    ctx.beginPath()
    ctx.ellipse(ix, iy, rx, 9, 0, 0, Math.PI * 2)
    ctx.fillStyle = '#e3cfa4'
    ctx.fill()
    ctx.stroke()
  }
  // Nantes
  ctx.fillStyle = INK
  drawCastleSilhouette(ctx, 790, 540, 90)
  ctx.textAlign = 'center'
  ctx.font = `700 34px ${DISPLAY}`
  setSpacing(ctx, 6)
  ctx.fillText('NANTES', 790, 440)
  ctx.font = `italic 30px ${FELL}`
  setSpacing(ctx, 2)
  ctx.fillText('La Loire', 330, 700)
  ctx.fillText("L'Erdre", 860, 200)
  ctx.fillText('Océan', 110, 880)
  ctx.font = `italic 22px ${FELL}`
  for (const [t, x, y] of [['Saint-Nazaire', 150, 560], ['Paimbœuf', 330, 520], ['Ancenis', 1230, 520], ['Clisson', 960, 860]]) {
    ctx.beginPath()
    ctx.arc(x, y + 14, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillText(t, x, y)
  }
  // routes pointillées
  ctx.setLineDash([6, 8])
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(790, 545)
  ctx.quadraticCurveTo(900, 720, 960, 870)
  ctx.moveTo(790, 545)
  ctx.quadraticCurveTo(1050, 480, 1230, 534)
  ctx.stroke()
  ctx.setLineDash([])
  // rose des vents
  const rx = 1200
  const ry = 220
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.arc(rx, ry, 80, 0, Math.PI * 2)
  ctx.arc(rx, ry, 70, 0, Math.PI * 2)
  ctx.stroke()
  for (let k = 0; k < 8; k++) {
    const a = (k * Math.PI) / 4
    const len = k % 2 ? 60 : 110
    ctx.beginPath()
    ctx.moveTo(rx + Math.cos(a) * len, ry + Math.sin(a) * len)
    ctx.lineTo(rx + Math.cos(a + 0.35) * 16, ry + Math.sin(a + 0.35) * 16)
    ctx.lineTo(rx + Math.cos(a - 0.35) * 16, ry + Math.sin(a - 0.35) * 16)
    ctx.closePath()
    k % 2 ? ctx.stroke() : ctx.fill()
  }
  ctx.font = `700 26px ${DISPLAY}`
  ctx.fillText('N', rx, ry - 122)
  // cartouche
  ctx.lineWidth = 2
  ctx.strokeRect(80, 80, 520, 150)
  ctx.strokeRect(90, 90, 500, 130)
  ctx.font = `700 34px ${DISPLAY}`
  setSpacing(ctx, 4)
  ctx.fillText('CARTE DU COURS', 340, 145)
  ctx.fillText('DE LA LOIRE', 340, 190)
  setSpacing(ctx, 0)
  drawErmine(ctx, 130, 155, 46)
  drawErmine(ctx, 550, 155, 46)
  return toTexture(c)
}

// ───────────────────────── Monnaie ducale ─────────────────────────
export function makeCoinTexture(silver = false) {
  const S = 256
  const [c, ctx] = makeCanvas(S, S)
  const base = silver ? ['#d8d6cf', '#8e8a80'] : ['#f0d48a', '#9a7430']
  const g = ctx.createRadialGradient(S * 0.4, S * 0.4, 10, S / 2, S / 2, S / 2)
  g.addColorStop(0, base[0])
  g.addColorStop(1, base[1])
  ctx.fillStyle = g
  ctx.fillRect(0, 0, S, S)
  const ink = silver ? 'rgba(60,55,50,0.75)' : 'rgba(90,60,20,0.8)'
  ctx.strokeStyle = ink
  ctx.fillStyle = ink
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.arc(S / 2, S / 2, S * 0.46, 0, Math.PI * 2)
  ctx.stroke()
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.arc(S / 2, S / 2, S * 0.33, 0, Math.PI * 2)
  ctx.stroke()
  if (silver) drawFleurDeLys(ctx, S / 2, S / 2 + 4, S * 0.42)
  else drawErmine(ctx, S / 2, S / 2, S * 0.5)
  ctx.font = `600 18px ${DISPLAY}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const txt = silver ? '✦ LVDOVICVS REX ✦ FRANCORVM ' : '✦ FRANCISCVS DVX ✦ BRITANNIE '
  ;[...txt].forEach((ch, i) => {
    const a = (i / txt.length) * Math.PI * 2 - Math.PI / 2
    ctx.save()
    ctx.translate(S / 2 + Math.cos(a) * S * 0.395, S / 2 + Math.sin(a) * S * 0.395)
    ctx.rotate(a + Math.PI / 2)
    ctx.fillText(ch, 0, 0)
    ctx.restore()
  })
  const r = rng(silver ? 3 : 4)
  blotches(ctx, S, S, 30, r, '40,30,10', 0.25, 6, 30)
  return toTexture(c)
}

// Cadran de boussole.
export function makeCompassDialTexture() {
  const S = 512
  const [c, ctx] = makeCanvas(S, S)
  ctx.fillStyle = '#efe2c2'
  ctx.fillRect(0, 0, S, S)
  const cx = S / 2
  ctx.strokeStyle = '#3a2614'
  ctx.fillStyle = '#3a2614'
  for (let k = 0; k < 72; k++) {
    const a = (k / 72) * Math.PI * 2
    const l = k % 9 === 0 ? 30 : 14
    ctx.lineWidth = k % 9 === 0 ? 3 : 1
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(a) * 236, cx + Math.sin(a) * 236)
    ctx.lineTo(cx + Math.cos(a) * (236 - l), cx + Math.sin(a) * (236 - l))
    ctx.stroke()
  }
  ctx.font = `700 44px ${DISPLAY}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const [t, a] of [['N', -90], ['E', 0], ['S', 90], ['O', 180]]) {
    const rad = (a * Math.PI) / 180
    ctx.fillText(t, cx + Math.cos(rad) * 165, cx + Math.sin(rad) * 165)
  }
  for (let k = 0; k < 8; k++) {
    const a = (k * Math.PI) / 4
    const len = k % 2 ? 80 : 125
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(a) * len, cx + Math.sin(a) * len)
    ctx.lineTo(cx + Math.cos(a + 0.4) * 22, cx + Math.sin(a + 0.4) * 22)
    ctx.lineTo(cx + Math.cos(a - 0.4) * 22, cx + Math.sin(a - 0.4) * 22)
    ctx.closePath()
    ctx.globalAlpha = 0.55
    ctx.fill()
    ctx.globalAlpha = 1
  }
  return toTexture(c)
}

// ───────────────────────── Papier d'origami ─────────────────────────
// Couleur : papier vergé grainé, marbrures d'ocre et fibres. Relief : grain + vergeures.
export function makePaperTextures() {
  const S = 512
  const [c, ctx] = makeCanvas(S, S)
  const r = rng(61)
  ctx.fillStyle = '#f2e7cf'
  ctx.fillRect(0, 0, S, S)
  blotches(ctx, S, S, 70, r, '196,150,80', 0.16, 30, 140) // ocre
  blotches(ctx, S, S, 25, r, '120,85,50', 0.08, 20, 90) // encre ancienne
  blotches(ctx, S, S, 40, r, '255,252,240', 0.2, 30, 120) // blanc cassé
  for (let i = 0; i < 500; i++) {
    const x = r() * S
    const y = r() * S
    const a = r() * Math.PI
    const l = 4 + r() * 18
    ctx.strokeStyle = `rgba(140,100,55,${0.05 + r() * 0.08})`
    ctx.lineWidth = 0.6
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l)
    ctx.stroke()
  }
  addNoise(ctx, S, S, 14, r)

  const [b, bctx] = makeCanvas(S, S)
  bctx.fillStyle = '#808080'
  bctx.fillRect(0, 0, S, S)
  for (let y = 0; y < S; y += 6) {
    bctx.fillStyle = 'rgba(255,255,255,0.10)' // vergeures
    bctx.fillRect(0, y, S, 2)
  }
  for (let x = 0; x < S; x += 64) {
    bctx.fillStyle = 'rgba(0,0,0,0.10)' // pontuseaux
    bctx.fillRect(x, 0, 2, S)
  }
  addNoise(bctx, S, S, 70, rng(62))
  const map = toTexture(c, { repeat: [3, 3] })
  const bumpMap = toTexture(b, { repeat: [3, 3], color: false })
  return { map, bumpMap }
}
