// Mise en page des feuillets sur parchemin (canvas 2D → texture).
// Le contenu vient de src/data/livres/*.js — rien à modifier ici pour changer les textes.
import { PAGE_DESIGN_W as PW, PAGE_DESIGN_H as PH, PAGE_TEX_SCALE } from './dimensions'
import { makeCanvas, rng, addNoise, blotches, edgeShade, toTexture, setSpacing, roman, wrapSimple } from './canvasUtils'
import { drawEngraving, drawErmine } from './engraving'

const SERIF = '"Cormorant Garamond", Georgia, serif'
const DISPLAY = 'Cinzel, "Times New Roman", serif'
const FELL = '"IM Fell English", Georgia, serif'
const INK = '#2a1b10'
const RED = '#7b2318'
const SEPIA = '#6b4a2a'
const PAPER = '#e6d4ae'

// ───────────────────────── Parchemin ─────────────────────────
let parchmentCache = null
function parchmentBase() {
  if (parchmentCache) return parchmentCache
  const [c, ctx] = makeCanvas(PW, PH)
  const r = rng(7)
  ctx.fillStyle = '#eadbb8'
  ctx.fillRect(0, 0, PW, PH)
  blotches(ctx, PW, PH, 140, r, '170,125,65', 0.08, 80, 320)
  blotches(ctx, PW, PH, 60, r, '255,248,225', 0.1, 60, 240)
  addNoise(ctx, PW, PH, 16, r)
  for (let i = 0; i < 260; i++) {
    const x = r() * PW
    const y = r() * PH
    const a = r() * Math.PI
    const l = 8 + r() * 30
    ctx.strokeStyle = `rgba(120,85,45,${0.04 + r() * 0.06})`
    ctx.lineWidth = 0.7
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l)
    ctx.stroke()
  }
  edgeShade(ctx, PW, PH, 80, 'rgba(125,80,35,0.38)')
  parchmentCache = c
  return c
}

// side: 'front' (recto, dos à gauche) | 'back' (verso, dos à droite)
function paintParchment(ctx, side, seed) {
  ctx.drawImage(parchmentBase(), 0, 0)
  const r = rng(seed * 31 + 3)
  blotches(ctx, PW, PH, 10, r, '140,90,40', 0.18, 4, 18)
  const spineX = side === 'front' ? 0 : PW
  const g = ctx.createLinearGradient(spineX, 0, side === 'front' ? 170 : PW - 170, 0)
  g.addColorStop(0, 'rgba(60,35,15,0.45)')
  g.addColorStop(1, 'rgba(60,35,15,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, PW, PH)
}

const area = (side) => (side === 'front' ? { x0: 150, x1: PW - 110 } : { x0: 110, x1: PW - 150 })

function ornament(ctx, cx, y, half, color = SEPIA) {
  ctx.save()
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(cx - half, y)
  ctx.lineTo(cx - 16, y)
  ctx.moveTo(cx + 16, y)
  ctx.lineTo(cx + half, y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(cx, y - 8)
  ctx.lineTo(cx + 10, y)
  ctx.lineTo(cx, y + 8)
  ctx.lineTo(cx - 10, y)
  ctx.closePath()
  ctx.fill()
  for (const s of [-1, 1]) {
    ctx.beginPath()
    ctx.arc(cx + s * 26, y, 3, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

function runningHead(ctx, side, text) {
  const { x0, x1 } = area(side)
  ctx.save()
  ctx.fillStyle = SEPIA
  ctx.font = `600 21px ${DISPLAY}`
  setSpacing(ctx, 5)
  ctx.textAlign = 'center'
  ctx.fillText(String(text).toUpperCase(), (x0 + x1) / 2, 100)
  setSpacing(ctx, 0)
  ctx.strokeStyle = 'rgba(107,74,42,0.6)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(x0, 120)
  ctx.lineTo(x1, 120)
  ctx.moveTo(x0, 125)
  ctx.lineTo(x1, 125)
  ctx.stroke()
  ctx.restore()
}

function folio(ctx, side, n) {
  const { x0, x1 } = area(side)
  ctx.save()
  ctx.fillStyle = SEPIA
  ctx.font = `italic 500 30px ${SERIF}`
  ctx.textAlign = 'center'
  ctx.fillText(`— ${n} —`, (x0 + x1) / 2, PH - 78)
  ctx.restore()
}

// ───────────────────── Texte justifié + lettrine ─────────────────────
function layoutBody(ctx, text, width, fs, withDrop) {
  const lh = fs * 1.4
  const paras = String(text)
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
  ctx.font = `500 ${fs}px ${SERIF}`
  const space = ctx.measureText(' ').width
  let drop = null
  if (withDrop && paras.length && /[A-Za-zÀ-ÿ]/.test(paras[0][0])) {
    const ch = paras[0][0].toUpperCase()
    const size = (2 * lh + fs * 0.68) / 0.7
    ctx.font = `700 ${size}px ${DISPLAY}`
    drop = { ch, size, w: ctx.measureText(ch).width + fs * 0.45 }
    paras[0] = paras[0].slice(1)
    ctx.font = `500 ${fs}px ${SERIF}`
  }
  const lines = []
  paras.forEach((p, pi) => {
    const words = p.split(' ').filter(Boolean)
    let cur = []
    let curW = 0
    let first = true
    const indentFor = () => (drop && lines.length < 3 ? drop.w : 0) + (first && pi > 0 ? fs * 1.4 : 0)
    const flush = (justify) => {
      lines.push({ words: cur, width: curW, indent: indentFor(), justify })
      cur = []
      curW = 0
      first = false
    }
    for (const w of words) {
      const ww = ctx.measureText(w).width
      const avail = width - indentFor()
      if (!cur.length) {
        cur.push(w)
        curW = ww
      } else if (curW + space + ww <= avail) {
        cur.push(w)
        curW += space + ww
      } else {
        flush(true)
        cur.push(w)
        curW = ww
      }
    }
    if (cur.length) flush(false)
    if (pi < paras.length - 1) lines.push({ gap: true })
  })
  const height = lines.reduce((h, l) => h + (l.gap ? lh * 0.3 : lh), 0)
  return { lines, lh, space, drop, height }
}

function drawBody(ctx, text, x0, top, width, maxH, { maxFs = 40, withDrop = true } = {}) {
  let fs = maxFs
  let lay = layoutBody(ctx, text, width, fs, withDrop)
  while (lay.height > maxH && fs > 16) {
    fs -= 1
    lay = layoutBody(ctx, text, width, fs, withDrop)
  }
  const { lines, lh, space, drop } = lay
  ctx.save()
  ctx.fillStyle = INK
  ctx.textAlign = 'left'
  ctx.font = `500 ${fs}px ${SERIF}`
  let y = top + fs
  if (drop) {
    ctx.save()
    ctx.font = `700 ${drop.size}px ${DISPLAY}`
    ctx.fillStyle = RED
    ctx.fillText(drop.ch, x0, top + fs + 2 * lh)
    ctx.restore()
  }
  for (const l of lines) {
    if (l.gap) {
      y += lh * 0.3
      continue
    }
    const avail = width - l.indent
    let gap = space
    if (l.justify && l.words.length > 1) {
      const wordsW = l.width - space * (l.words.length - 1)
      gap = Math.min(space * 2.6, (avail - wordsW) / (l.words.length - 1))
    }
    let x = x0 + l.indent
    for (const w of l.words) {
      ctx.fillText(w, x, y)
      x += ctx.measureText(w).width + gap
    }
    y += lh
  }
  ctx.restore()
  return y
}

// Titres centrés qui rétrécissent jusqu'à tenir sur 3 lignes max.
function centeredTitle(ctx, text, cx, y, maxW, startFs) {
  let fs = startFs
  ctx.font = `600 ${fs}px ${SERIF}`
  let lines = wrapSimple(ctx, text, maxW)
  while (lines.length > 3 && fs > 36) {
    fs -= 4
    ctx.font = `600 ${fs}px ${SERIF}`
    lines = wrapSimple(ctx, text, maxW)
  }
  ctx.fillStyle = INK
  y += fs * 0.75
  for (const l of lines) {
    ctx.fillText(l, cx, y)
    y += fs * 1.06
  }
  return y
}

// ───────────────────────── Pages ─────────────────────────
// Boîte englobante du dessin (pixels non blancs) d'une image sur fond blanc.
function trimWhite(img) {
  const [c, ctx] = makeCanvas(img.width, img.height)
  ctx.drawImage(img, 0, 0)
  const d = ctx.getImageData(0, 0, img.width, img.height).data
  let x0 = img.width, y0 = img.height, x1 = 0, y1 = 0
  for (let y = 0; y < img.height; y++)
    for (let x = 0; x < img.width; x++) {
      const i = (y * img.width + x) * 4
      if (d[i + 3] > 20 && d[i] + d[i + 1] + d[i + 2] < 660) {
        if (x < x0) x0 = x
        if (x > x1) x1 = x
        if (y < y0) y0 = y
        if (y > y1) y1 = y
      }
    }
  c.width = 0
  return x1 > x0 && y1 > y0 ? [x0, y0, x1 - x0 + 1, y1 - y0 + 1] : [0, 0, img.width, img.height]
}

function drawTitlePage(ctx, meta, img) {
  const { x0, x1 } = area('front')
  const cx = (x0 + x1) / 2
  ctx.save()
  ctx.strokeStyle = 'rgba(107,74,42,0.7)'
  ctx.lineWidth = 2
  ctx.strokeRect(x0 - 20, 90, x1 - x0 + 40, PH - 180)
  ctx.lineWidth = 1
  ctx.strokeRect(x0 - 10, 100, x1 - x0 + 20, PH - 200)
  ctx.textAlign = 'center'
  ctx.fillStyle = SEPIA
  ctx.font = `600 24px ${DISPLAY}`
  setSpacing(ctx, 8)
  ctx.fillText(meta.titlePageHeading.toUpperCase(), cx, 190)
  setSpacing(ctx, 0)
  ornament(ctx, cx, 222, 180)
  let y = centeredTitle(ctx, meta.titlePageTitle, cx, 250, x1 - x0 - 40, 72)
  ctx.fillStyle = RED
  ctx.font = `italic 32px ${FELL}`
  y += 10
  for (const l of wrapSimple(ctx, meta.titlePageSubtitle, x1 - x0 - 80)) {
    ctx.fillText(l, cx, y)
    y += 42
  }
  // grand croquis du château : occupe tout l'espace restant
  const top = y + 20
  const bottom = PH - 220
  const maxW = x1 - x0 + 20
  const maxH = bottom - top
  if (img) {
    const [sx, sy, sw, sh] = trimWhite(img) // on retire les marges blanches du croquis
    const ar = sw / sh
    const w = Math.min(maxW, maxH * ar)
    const h = w / ar
    ctx.globalCompositeOperation = 'multiply' // le blanc du dessin devient parchemin
    ctx.globalAlpha = 0.92
    ctx.drawImage(img, sx, sy, sw, sh, cx - w / 2, top + (maxH - h) / 2, w, h)
    ctx.globalAlpha = 1
    ctx.globalCompositeOperation = 'source-over'
  } else {
    const h = Math.min(maxH, maxW * 0.75)
    drawEngraving(meta.titleEngraving || 'castle', ctx, cx - maxW / 2, top + (maxH - h) / 2, maxW, h, 4, INK, PAPER)
  }
  ctx.fillStyle = SEPIA
  ctx.font = `600 22px ${DISPLAY}`
  setSpacing(ctx, 5)
  ctx.fillText(meta.titlePageImprint.toUpperCase(), cx, PH - 170)
  setSpacing(ctx, 0)
  ornament(ctx, cx, PH - 140, 90)
  ctx.restore()
}

// Illustration "contenue" : le cadre épouse le format de l'image (rien n'est rogné).
function drawIllustration(ctx, img, cx, top, maxW, maxH, spread) {
  let w = maxW
  let h = maxH
  if (img) {
    const ar = img.width / img.height
    w = Math.min(maxW, maxH * ar)
    h = w / ar
  } else h = Math.min(maxH, maxW * 0.82)
  const x = cx - w / 2
  const y = top + (maxH - h) / 2
  ctx.save()
  if (img) {
    ctx.drawImage(img, x, y, w, h)
    ctx.globalCompositeOperation = 'saturation' // virage sépia, tous navigateurs
    ctx.fillStyle = 'rgba(128,128,128,0.7)'
    ctx.fillRect(x, y, w, h)
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = '#dcbd8f'
    ctx.fillRect(x, y, w, h)
    ctx.globalCompositeOperation = 'source-over'
    const g = ctx.createRadialGradient(x + w / 2, y + h / 2, Math.min(w, h) * 0.3, x + w / 2, y + h / 2, Math.max(w, h) * 0.7)
    g.addColorStop(0, 'rgba(60,35,15,0)')
    g.addColorStop(1, 'rgba(60,35,15,0.35)')
    ctx.fillStyle = g
    ctx.fillRect(x, y, w, h)
  } else {
    drawEngraving(spread.engraving || 'castle', ctx, x, y, w, h, spread.number + 5, INK, PAPER)
  }
  ctx.restore()
  ctx.save()
  ctx.strokeStyle = INK
  ctx.lineWidth = 3
  ctx.strokeRect(x - 10, y - 10, w + 20, h + 20)
  ctx.lineWidth = 1
  ctx.strokeRect(x, y, w, h)
  ctx.restore()
  return y + h
}

function drawChapterLeft(ctx, spread, img, meta, folioN) {
  const { x0, x1 } = area('back')
  const cx = (x0 + x1) / 2
  const w = x1 - x0
  runningHead(ctx, 'back', meta.runningHead)
  ctx.save()
  ctx.textAlign = 'center'
  ctx.fillStyle = RED
  ctx.font = `600 30px ${DISPLAY}`
  setSpacing(ctx, 10)
  ctx.fillText(`CHAPITRE ${roman(spread.number)}`, cx, 205)
  setSpacing(ctx, 0)
  ornament(ctx, cx, 236, 200)
  let y = centeredTitle(ctx, spread.title, cx, 262, w - 20, 66)
  if (spread.subtitle) {
    ctx.fillStyle = SEPIA
    ctx.font = `italic 34px ${FELL}`
    for (const l of wrapSimple(ctx, spread.subtitle, w - 60).slice(0, 2)) {
      ctx.fillText(l, cx, y + 8)
      y += 44
    }
  }
  ornament(ctx, cx, y + 24, 120)
  ctx.restore()
  const bottom = PH - 200
  const end = drawIllustration(ctx, img, cx, y + 70, w - 40, bottom - (y + 70), spread)
  ctx.save()
  ctx.fillStyle = SEPIA
  ctx.textAlign = 'center'
  ctx.font = `italic 26px ${SERIF}`
  const cap = spread.caption ? `Planche ${roman(spread.number)} — ${spread.caption}` : `Planche ${roman(spread.number)}`
  wrapSimple(ctx, cap, w - 40)
    .slice(0, 2)
    .forEach((l, i) => ctx.fillText(l, cx, Math.min(end + 46, PH - 150) + i * 30))
  ctx.restore()
  folio(ctx, 'back', folioN)
}

function drawChapterRight(ctx, spread, folioN) {
  const { x0, x1 } = area('front')
  runningHead(ctx, 'front', spread.title)
  const end = drawBody(ctx, spread.content, x0, 165, x1 - x0, PH - 165 - 170)
  if (end < PH - 230) ornament(ctx, (x0 + x1) / 2, end + 16, 70)
  folio(ctx, 'front', folioN)
}

// Double-page pop-up : texte à gauche, plan au sol à droite (la maquette s'y dresse).
function drawPopupLeft(ctx, spread, meta, folioN) {
  const { x0, x1 } = area('back')
  const cx = (x0 + x1) / 2
  runningHead(ctx, 'back', meta.runningHead)
  ctx.save()
  ctx.textAlign = 'center'
  ctx.fillStyle = RED
  ctx.font = `600 28px ${DISPLAY}`
  setSpacing(ctx, 10)
  ctx.fillText(String(spread.subtitle || 'Planche dépliante').toUpperCase(), cx, 230)
  setSpacing(ctx, 0)
  ornament(ctx, cx, 262, 200)
  let y = centeredTitle(ctx, spread.title, cx, 300, x1 - x0 - 20, 70)
  ornament(ctx, cx, y + 20, 120)
  ctx.restore()
  const end = drawBody(ctx, spread.content || '', x0 + 20, y + 70, x1 - x0 - 40, PH - y - 420, { maxFs: 40 })
  ctx.save()
  ctx.textAlign = 'center'
  ctx.fillStyle = SEPIA
  ctx.font = `italic 30px ${FELL}`
  if (spread.hint) wrapSimple(ctx, `☞ ${spread.hint}`, x1 - x0 - 60).forEach((l, i) => ctx.fillText(l, cx, end + 60 + i * 38))
  ctx.fillStyle = INK
  drawErmine(ctx, cx, PH - 230, 60)
  ctx.restore()
  folio(ctx, 'back', folioN)
}

function drawPopupRight(ctx, folioN) {
  const cx = PW / 2 + 20
  const cy = PH / 2 - 20
  ctx.save()
  // douves et emprise du château (à l'échelle de la maquette)
  ctx.strokeStyle = 'rgba(70,90,100,0.35)'
  ctx.lineWidth = 40
  ctx.beginPath()
  ctx.ellipse(cx, cy, 420, 470, 0, 0, Math.PI * 2)
  ctx.stroke()
  ctx.strokeStyle = SEPIA
  ctx.lineWidth = 2
  ctx.setLineDash([10, 8])
  for (const r of [395, 445]) {
    ctx.beginPath()
    ctx.ellipse(cx, cy, r, r + 50, 0, 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.setLineDash([])
  ctx.globalAlpha = 0.25
  for (let a = 0; a < Math.PI * 2; a += 0.05) {
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(a) * 470, cy + Math.sin(a) * 520)
    ctx.lineTo(cx + Math.cos(a) * 500, cy + Math.sin(a) * 555)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
  ctx.fillStyle = SEPIA
  ctx.textAlign = 'center'
  ctx.font = `italic 28px ${FELL}`
  ctx.fillText('Les douves, remplies par la Loire', cx, PH - 160)
  ctx.restore()
  folio(ctx, 'front', folioN)
}

function drawColophon(ctx) {
  const cx = PW / 2
  ctx.save()
  ctx.textAlign = 'center'
  ctx.fillStyle = SEPIA
  ctx.font = `700 64px ${DISPLAY}`
  setSpacing(ctx, 14)
  ctx.fillText('FINIS', cx + 7, PH / 2)
  setSpacing(ctx, 0)
  ornament(ctx, cx, PH / 2 + 40, 140)
  ctx.restore()
}

// ───────────────────── Plan des feuillets ─────────────────────
// Feuillet i : recto = page de droite, verso = page de gauche une fois tourné.
//   feuillet 0 recto     → page de titre (révélée pendant l'ouverture)
//   feuillet i verso     → double-page i, page de gauche
//   feuillet i+1 recto   → double-page i, page de droite
//   dernier verso        → « Finis »
export function buildLeafPlan(spreads) {
  const N = spreads.length
  const plan = []
  for (let i = 0; i <= N; i++) {
    plan.push({
      front: i === 0 ? { kind: 'title' } : { kind: 'right', idx: i - 1 },
      back: i < N ? { kind: 'left', idx: i } : { kind: 'colophon' },
    })
  }
  return plan
}

export function createPage(def, side, spreads, meta) {
  const [canvas, ctx] = makeCanvas(Math.round(PW * PAGE_TEX_SCALE), Math.round(PH * PAGE_TEX_SCALE))
  const texture = toTexture(canvas)
  const paint = (img = null) => {
    ctx.setTransform(PAGE_TEX_SCALE, 0, 0, PAGE_TEX_SCALE, 0, 0)
    paintParchment(ctx, side, (def.idx ?? 0) * 2 + (side === 'front' ? 1 : 2))
    const s = spreads[def.idx]
    const folioL = (def.idx ?? 0) * 2 + 2
    if (def.kind === 'title') drawTitlePage(ctx, meta, img)
    else if (def.kind === 'left') s.kind === 'popup' ? drawPopupLeft(ctx, s, meta, folioL) : drawChapterLeft(ctx, s, img, meta, folioL)
    else if (def.kind === 'right') s.kind === 'popup' ? drawPopupRight(ctx, folioL + 1) : drawChapterRight(ctx, s, folioL + 1)
    else drawColophon(ctx)
    texture.needsUpdate = true
  }
  paint()
  return { texture, paint }
}
