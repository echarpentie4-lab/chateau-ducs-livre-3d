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

// libellés imprimés (traduits via meta.labels, voir src/i18n)
const L = (meta) =>
  meta?.labels || {
    chapter: 'Chapitre', plate: 'Planche', foldout: 'Planche dépliante',
    moat: 'Les douves, remplies par la Loire', canal: 'Le canal Saint-Félix',
    parvis: 'Le parvis de la place Saint-Pierre', rails: "Le parc des Chantiers, sur l'île de Nantes",
    gallery: 'La galerie, de la rue de la Fosse à la rue Santeuil',
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

function drawBody(ctx, text, x0, top, width, maxH, { maxFs = 40, withDrop = true, dropColor = RED } = {}) {
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
    ctx.fillStyle = dropColor
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
  if (img && meta.titlePageImageFrame) {
    drawIllustration(ctx, img, cx, top + 10, maxW - 40, maxH - 20, { engraving: meta.titleEngraving, number: 0 })
  } else if (img) {
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
  ctx.fillText(`${L(meta).chapter.toUpperCase()} ${roman(spread.number)}`, cx, 205)
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
  const plate = `${L(meta).plate} ${roman(spread.number)}`
  const cap = spread.caption ? `${plate} — ${spread.caption}` : plate
  wrapSimple(ctx, cap, w - 40)
    .slice(0, 2)
    .forEach((l, i) => ctx.fillText(l, cx, Math.min(end + 46, PH - 150) + i * 30))
  ctx.restore()
  folio(ctx, 'back', folioN)
}

function drawChapterRight(ctx, spread, folioN, meta) {
  const { x0, x1 } = area('front')
  runningHead(ctx, 'front', spread.title)
  const end = drawBody(ctx, spread.content, x0, 165, x1 - x0, PH - 165 - 170, { dropColor: meta.leather || RED })
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
  const kicker = spread.number ? `${L(meta).chapter.toUpperCase()} ${roman(spread.number)}` : String(spread.subtitle || L(meta).foldout).toUpperCase()
  ctx.fillText(kicker, cx, 205)
  setSpacing(ctx, 0)
  ornament(ctx, cx, 236, 200)
  let y = centeredTitle(ctx, spread.title, cx, 262, x1 - x0 - 20, 62)
  if (spread.number && spread.subtitle) {
    ctx.fillStyle = SEPIA
    ctx.font = `italic 32px ${FELL}`
    ctx.fillText(spread.subtitle, cx, y + 8)
    y += 44
  }
  ornament(ctx, cx, y + 18, 120)
  ctx.restore()
  const bodyTop = y + 50
  const end = drawBody(ctx, spread.content || '', x0 + 10, bodyTop, x1 - x0 - 20, PH - bodyTop - 250, { maxFs: 38, dropColor: meta.leather || RED })
  // gravure du monument dans l'espace libre, sous le texte
  const vTop = end + 30
  const vBottom = PH - 270
  if (vBottom - vTop > 170) {
    const vw = Math.min(x1 - x0 - 80, (vBottom - vTop) * 1.5)
    const vh = Math.min(vBottom - vTop, vw * 0.62)
    const vx = cx - vw / 2
    const vy = vTop + (vBottom - vTop - vh) / 2
    drawEngraving(spread.model || 'castle', ctx, vx, vy, vw, vh, (spread.number || 3) + 11, INK, PAPER)
    ctx.save()
    ctx.strokeStyle = INK
    ctx.lineWidth = 2
    ctx.strokeRect(vx - 8, vy - 8, vw + 16, vh + 16)
    ctx.lineWidth = 1
    ctx.strokeRect(vx, vy, vw, vh)
    ctx.restore()
  }
  ctx.save()
  ctx.textAlign = 'center'
  ctx.fillStyle = RED
  ctx.font = `italic 28px ${FELL}`
  if (spread.hint) wrapSimple(ctx, `☞ ${spread.hint}`, x1 - x0 - 60).forEach((l, i) => ctx.fillText(l, cx, Math.max(end + 40, PH - 230) + i * 34))
  ctx.restore()
  pageFrame(ctx, 'back')
  folio(ctx, 'back', folioN)
}

// Double filet d'encadrement et fleurons d'angle (planches pop-up).
function pageFrame(ctx, side) {
  const x0 = side === 'front' ? 120 : 70
  const x1 = side === 'front' ? PW - 70 : PW - 120
  const y0 = 140
  const y1 = PH - 115
  ctx.save()
  ctx.strokeStyle = 'rgba(107,74,42,0.55)'
  ctx.lineWidth = 2
  ctx.strokeRect(x0, y0, x1 - x0, y1 - y0)
  ctx.lineWidth = 1
  ctx.strokeRect(x0 + 8, y0 + 8, x1 - x0 - 16, y1 - y0 - 16)
  ctx.fillStyle = SEPIA
  for (const [x, y] of [[x0, y0], [x1, y0], [x0, y1], [x1, y1]]) {
    ctx.beginPath()
    ctx.moveTo(x, y - 12)
    ctx.lineTo(x + 12, y)
    ctx.lineTo(x, y + 12)
    ctx.lineTo(x - 12, y)
    ctx.closePath()
    ctx.fill()
  }
  ctx.restore()
}

// Rose des vents miniature.
function compassRose(ctx, x, y, r) {
  ctx.save()
  ctx.strokeStyle = SEPIA
  ctx.fillStyle = SEPIA
  ctx.lineWidth = 1.2
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x, y, r * 0.86, 0, Math.PI * 2)
  ctx.stroke()
  for (let k = 0; k < 8; k++) {
    const a = (k * Math.PI) / 4 - Math.PI / 2
    const len = k % 2 ? r * 0.55 : r * 1.15
    ctx.beginPath()
    ctx.moveTo(x + Math.cos(a) * len, y + Math.sin(a) * len)
    ctx.lineTo(x + Math.cos(a + 0.42) * r * 0.16, y + Math.sin(a + 0.42) * r * 0.16)
    ctx.lineTo(x + Math.cos(a - 0.42) * r * 0.16, y + Math.sin(a - 0.42) * r * 0.16)
    ctx.closePath()
    k % 2 ? ctx.stroke() : ctx.fill()
  }
  ctx.font = `700 24px ${DISPLAY}`
  ctx.textAlign = 'center'
  ctx.fillText('N', x, y - r * 1.25)
  ctx.restore()
}

// Échelle graphique.
function scaleBar(ctx, x, y, w, label) {
  ctx.save()
  ctx.strokeStyle = SEPIA
  ctx.fillStyle = SEPIA
  ctx.lineWidth = 1.5
  ctx.strokeRect(x, y, w, 10)
  for (let k = 0; k < 4; k += 2) ctx.fillRect(x + (k * w) / 4, y, w / 4, 10)
  ctx.font = `italic 20px ${SERIF}`
  ctx.textAlign = 'center'
  ;['0', '10', '20', '30', '40'].forEach((t, k) => ctx.fillText(t, x + (k * w) / 4, y + 34))
  ctx.fillText(label, x + w / 2, y + 58)
  ctx.restore()
}

// Annotations à la plume : étiquette + trait de rappel vers le détail de la maquette.
// p = point de la maquette (unités 3D, déjà à l'échelle), at = position de l'étiquette (px).
const POPUP_NOTES = {
  castle: [
    ['logis', [0.08, -0.29], [250, 225]], ['crown', [0.15, -0.2], [850, 225]],
    ['gouv', [0.31, -0.02], [940, 400]], ['well', [-0.08, 0.06], [190, 470]],
    ['curtain', [-0.42, 0.18], [190, 1120]], ['bridge', [0.1, 0.42], [700, 1185]],
  ],
  lu: [
    ['lutower', [0, 0.05], [330, 225]], ['dome', [0, 0.04], [820, 225]],
    ['wings', [-0.34, 0.05], [200, 1080]], ['chimney', [0.24, -0.3], [930, 330]],
  ],
  cathedral: [
    ['towers', [-0.23, 0.07], [230, 225]], ['window', [0, 0.07], [840, 225]],
    ['nave', [0.08, -0.45], [930, 340]], ['portal', [0, 0.2], [230, 1170]],
  ],
  elephant: [
    ['house', [-0.12, 0.07], [270, 225]], ['canopy', [-0.26, 0.16], [190, 330]],
    ['ears', [0.13, 0.33], [880, 225]], ['trunk', [0.46, 0.35], [940, 1120]],
    ['legs', [0.04, 0.27], [260, 1170]],
  ],
  passage: [
    ['roof', [0.05, -0.1], [300, 210]], ['arch', [0, -0.5], [840, 210]],
    ['balconies', [0.3, 0.1], [950, 1080]], ['stairs', [0, 0.05], [230, 1180]],
    ['statues', [-0.15, 0.27], [700, 1215]],
  ],
}

function annotate(ctx, model, notes) {
  const list = POPUP_NOTES[model] || []
  ctx.save()
  ctx.strokeStyle = 'rgba(58,38,20,0.75)'
  ctx.fillStyle = INK
  ctx.lineWidth = 1.3
  ctx.font = `italic 26px ${FELL}`
  for (const [key, [mx, mz], [lx, ly]] of list) {
    const label = notes?.[key]
    if (!label) continue
    const px = (0.72 + mx) * (PW / 1.4)
    const py = (0.93 + mz) * (PH / 1.9)
    const right = lx > PW / 2
    ctx.textAlign = right ? 'right' : 'left'
    const tw = ctx.measureText(label).width
    ctx.fillText(label, lx, ly)
    const sx = right ? lx - tw - 8 : lx + tw + 8
    // trait de rappel courbe, terminé par un point
    ctx.setLineDash([2, 4])
    ctx.beginPath()
    ctx.moveTo(right ? lx - tw / 2 : lx + tw / 2, ly + 10)
    ctx.quadraticCurveTo(sx, (ly + py) / 2, px, py)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.arc(px, py, 4, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

// Plan au sol sous la maquette : douves (château), canal (LU) ou parvis pavé (cathédrale).
function drawPopupRight(ctx, folioN, model = 'castle', meta = {}, spread = {}) {
  const lb = L(meta)
  const cx = PW / 2 + 20
  const cy = PH / 2 - 20
  ctx.save()
  ctx.fillStyle = SEPIA
  ctx.strokeStyle = SEPIA
  ctx.textAlign = 'center'
  if (model === 'lu') {
    // le canal Saint-Félix au pied de l'usine
    ctx.fillStyle = 'rgba(70,90,100,0.22)'
    ctx.fillRect(90, cy + 330, PW - 180, 170)
    ctx.globalAlpha = 0.5
    ctx.lineWidth = 1.5
    for (let yy = cy + 350; yy < cy + 490; yy += 16)
      for (let xx = 110; xx < PW - 120; xx += 70) {
        ctx.beginPath()
        ctx.moveTo(xx, yy)
        ctx.quadraticCurveTo(xx + 18, yy - 6, xx + 36, yy)
        ctx.stroke()
      }
    ctx.globalAlpha = 1
    ctx.setLineDash([10, 8])
    ctx.strokeRect(150, cy - 420, PW - 300, 720)
    ctx.setLineDash([])
    ctx.font = `italic 28px ${FELL}`
    ctx.fillText(lb.canal, cx, PH - 160)
  } else if (model === 'elephant') {
    // les rails du parc des Chantiers
    ctx.lineWidth = 2
    for (const dx of [-60, 60]) {
      ctx.beginPath()
      ctx.moveTo(cx + dx - 260, PH - 260)
      ctx.lineTo(cx + dx + 140, 180)
      ctx.stroke()
    }
    ctx.globalAlpha = 0.45
    for (let k = 0; k < 18; k++) {
      const t = k / 17
      const x = cx - 260 + t * 400
      const y = PH - 260 - t * (PH - 440)
      ctx.beginPath()
      ctx.moveTo(x - 80, y)
      ctx.lineTo(x + 80, y)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
    ctx.font = `italic 28px ${FELL}`
    ctx.fillText(lb.rails, cx, PH - 160)
  } else if (model === 'passage') {
    // parquet de la galerie
    ctx.globalAlpha = 0.25
    ctx.lineWidth = 1
    for (let x = 230; x < PW - 190; x += 22) {
      ctx.beginPath()
      ctx.moveTo(x, 160)
      ctx.lineTo(x, PH - 220)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
    ctx.font = `italic 28px ${FELL}`
    ctx.fillText(lb.gallery, cx, PH - 160)
  } else if (model === 'cathedral') {
    // parvis pavé de la place Saint-Pierre
    ctx.globalAlpha = 0.25
    ctx.lineWidth = 1
    for (let yy = cy - 470; yy < cy + 520; yy += 34) {
      ctx.beginPath()
      ctx.moveTo(120, yy)
      ctx.lineTo(PW - 120, yy)
      ctx.stroke()
      for (let xx = 120 + ((yy / 34) % 2) * 25; xx < PW - 120; xx += 50) {
        ctx.beginPath()
        ctx.moveTo(xx, yy)
        ctx.lineTo(xx, yy + 34)
        ctx.stroke()
      }
    }
    ctx.globalAlpha = 1
    ctx.font = `italic 28px ${FELL}`
    ctx.fillText(lb.parvis, cx, PH - 160)
  } else {
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
    ctx.font = `italic 28px ${FELL}`
    ctx.fillText(lb.moat, cx, PH - 160)
  }
  ctx.restore()
  // cartouche de titre, encadrement, rose des vents, échelle et annotations
  ctx.save()
  ctx.textAlign = 'center'
  ctx.fillStyle = RED
  ctx.font = `600 22px ${DISPLAY}`
  setSpacing(ctx, 8)
  ctx.fillText(String(lb.foldout).toUpperCase(), cx, 112)
  setSpacing(ctx, 0)
  ctx.fillStyle = SEPIA
  ctx.font = `italic 28px ${FELL}`
  ctx.fillText(spread.title || '', cx, 150 + 18)
  ctx.restore()
  pageFrame(ctx, 'front')
  compassRose(ctx, PW - 190, PH - 260, 46)
  scaleBar(ctx, 170, PH - 300, 240, lb.notes?.metres || 'mètres')
  annotate(ctx, model, lb.notes)
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
    else if (def.kind === 'right') s.kind === 'popup' ? drawPopupRight(ctx, folioL + 1, s.model, meta, s) : drawChapterRight(ctx, s, folioL + 1, meta)
    else drawColophon(ctx)
    texture.needsUpdate = true
  }
  paint()
  return { texture, paint }
}
