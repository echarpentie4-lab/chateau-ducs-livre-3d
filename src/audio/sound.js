// Sound design synthétisé (Web Audio, aucun fichier audio) :
//   • pageTurn()  : froissement de papier qui balaie, puis la page qui retombe
//   • coverOpen() / coverClose() : cuir qui grince et reliure qui se pose
//   • land()      : le livre qui touche le bureau
//   • ambiance    : la flamme de la bougie qui crépite doucement — et rien d'autre
// Le son ne démarre qu'après une première interaction (règle des navigateurs).

let ctx = null
let master = null
let ambience = null
let noiseBuf = null
let pinkBuf = null
let brownBuf = null
let fx = null
let muted = (() => {
  try {
    return localStorage.getItem('sound') === 'off'
  } catch {
    return false
  }
})()
const listeners = new Set()

function init() {
  if (ctx) return ctx
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return null
  ctx = new AC()
  master = ctx.createGain()
  master.gain.value = muted ? 0 : 1
  master.connect(ctx.destination)
  // 2 s de bruits réutilisables : blanc, rose (papier) et brun (souffle, carton)
  const make = (fill) => {
    const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
    fill(b.getChannelData(0))
    return b
  }
  noiseBuf = make((d) => {
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
  })
  pinkBuf = make((d) => {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < d.length; i++) {
      const w = Math.random() * 2 - 1
      b0 = 0.99886 * b0 + w * 0.0555179
      b1 = 0.99332 * b1 + w * 0.0750759
      b2 = 0.969 * b2 + w * 0.153852
      b3 = 0.8665 * b3 + w * 0.3104856
      b4 = 0.55 * b4 + w * 0.5329522
      b5 = -0.7616 * b5 - w * 0.016898
      d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11
      b6 = w * 0.115926
    }
  })
  brownBuf = make((d) => {
    let last = 0
    for (let i = 0; i < d.length; i++) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02
      d[i] = last * 3.5
    }
  })
  // bus des bruitages : on coupe l'aigu au-delà de 4 kHz (pas d'effet « sable »)
  fx = ctx.createBiquadFilter()
  fx.type = 'lowpass'
  fx.frequency.value = 4200
  fx.connect(master)
  startAmbience()
  return ctx
}

// Appelé au premier clic / toucher / touche clavier.
export function unlock() {
  const c = init()
  if (c && c.state === 'suspended') c.resume()
}

export const isMuted = () => muted
export function setMuted(m) {
  muted = m
  try {
    localStorage.setItem('sound', m ? 'off' : 'on')
  } catch {
    /* stockage indisponible */
  }
  if (master) master.gain.setTargetAtTime(m ? 0 : 1, ctx.currentTime, 0.15)
  if (!m) unlock()
  listeners.forEach((f) => f(m))
}
export function onMuteChange(f) {
  listeners.add(f)
  return () => listeners.delete(f)
}

const ready = () => ctx && ctx.state === 'running' && !muted

function noise(offset = Math.random(), buf = noiseBuf) {
  const src = ctx.createBufferSource()
  src.buffer = buf
  src.loop = true
  src.loopStart = 0
  src.loopEnd = buf.duration
  return [src, offset * 1.5]
}

function env(gain, t, a, peak, d) {
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(peak, t + a)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + a + d)
}

// Bruit filtré à enveloppe : la brique de base de tous les bruitages.
// color : 'white' (crépitements de la bougie), 'pink' (papier), 'brown' (souffle, carton).
function burst({ t, dur, peak, type = 'bandpass', f0, f1 = f0, q = 1, attack = 0.02, color = 'white', out }) {
  const buf = color === 'pink' ? pinkBuf : color === 'brown' ? brownBuf : noiseBuf
  const [src, off] = noise(Math.random(), buf)
  const filt = ctx.createBiquadFilter()
  filt.type = type
  filt.Q.value = q
  filt.frequency.setValueAtTime(f0, t)
  filt.frequency.exponentialRampToValueAtTime(f1, t + attack + dur)
  const g = ctx.createGain()
  env(g, t, attack, peak, dur)
  src.connect(filt).connect(g).connect(out || (color === 'white' ? master : fx))
  src.start(t, off)
  src.stop(t + attack + dur + 0.05)
}

function thump(t, freq, peak, dur, type = 'sine') {
  const o = ctx.createOscillator()
  o.type = type
  o.frequency.setValueAtTime(freq, t)
  o.frequency.exponentialRampToValueAtTime(freq * 0.55, t + dur)
  const g = ctx.createGain()
  env(g, t, 0.006, peak, dur)
  o.connect(g).connect(fx)
  o.start(t)
  o.stop(t + dur + 0.05)
}

// Grincement du cuir et du dos de la reliure : frottement « adhérence-glissement ».
// Une dent de scie grave est hachée par une suite d'impulsions irrégulières.
function creak(t, dur, peak, pitch = 110) {
  const o = ctx.createOscillator()
  o.type = 'sawtooth'
  o.frequency.setValueAtTime(pitch, t)
  o.frequency.linearRampToValueAtTime(pitch * 0.82, t + dur)
  const bp = ctx.createBiquadFilter()
  bp.type = 'bandpass'
  bp.frequency.value = 520
  bp.Q.value = 3.5
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, t)
  let x = t
  while (x < t + dur) {
    const step = 0.018 + Math.random() * 0.03
    const a = peak * (0.35 + Math.random() * 0.65) * Math.sin(Math.PI * ((x - t) / dur))
    g.gain.setValueAtTime(0.0001, x)
    g.gain.linearRampToValueAtTime(Math.max(0.0001, a), x + 0.004)
    g.gain.exponentialRampToValueAtTime(0.0001, x + step * 0.8)
    x += step
  }
  o.connect(bp).connect(g).connect(fx)
  o.start(t)
  o.stop(t + dur + 0.05)
}

// ───────────────────────── Effets ─────────────────────────
// Une page de papier qui tourne : on la soulève (petit frottement), elle fend l'air
// (souffle doux qui monte puis redescend), quelques plis du papier, puis elle se
// pose à plat (« flap » sourd). Tout en bruit rose filtré, sans aigus granuleux.
let lastTurn = 0
export function pageTurn(duration = 1.2) {
  if (!ready()) return
  if (ctx.currentTime - lastTurn < 0.11) return // pages tournées d'affilée
  lastTurn = ctx.currentTime
  const t = ctx.currentTime + 0.02
  const v = 0.8 + Math.random() * 0.35
  const air = Math.min(0.9, duration * 0.55)
  // le coin de la page glisse sous le doigt
  burst({ t, dur: 0.07, peak: 0.05 * v, color: 'pink', f0: 1900, f1: 1300, q: 1.4, attack: 0.01 })
  // la page fend l'air : souffle rose, médium, qui s'ouvre puis se referme
  burst({ t: t + 0.05, dur: air, peak: 0.13 * v, color: 'pink', f0: 380, f1: 1100, q: 0.75, attack: air * 0.45 })
  burst({ t: t + 0.05 + air * 0.5, dur: air * 0.6, peak: 0.06 * v, color: 'pink', f0: 1200, f1: 520, q: 0.9, attack: 0.05 })
  // deux ou trois plis du papier (craquements doux, pas de grésillement)
  const n = 2 + Math.floor(Math.random() * 2)
  for (let i = 0; i < n; i++) {
    burst({ t: t + 0.12 + Math.random() * air * 0.7, dur: 0.025, peak: 0.035 * v, color: 'pink', f0: 900 + Math.random() * 900, q: 2.5, attack: 0.004 })
  }
  // la page retombe à plat
  const land = t + duration * 0.7
  burst({ t: land, dur: 0.11, peak: 0.12 * v, color: 'pink', type: 'lowpass', f0: 900, f1: 260, attack: 0.006 })
  thump(land + 0.005, 120, 0.045 * v, 0.1)
}

// La couverture : un carton épais gainé de cuir. Bien plus lourd qu'une page :
// grincement du dos, déplacement d'air grave, puis le plat qui claque sur le bureau.
export function coverOpen() {
  if (!ready()) return
  const t = ctx.currentTime + 0.02
  // le dos de la reliure qui grince en s'ouvrant
  creak(t + 0.05, 0.75, 0.06, 115)
  creak(t + 0.55, 0.45, 0.035, 92)
  // le cuir et la garde qui se déplient
  burst({ t: t + 0.15, dur: 0.6, peak: 0.035, color: 'pink', f0: 350, f1: 700, q: 1.2, attack: 0.25 })
  // le lourd plat brasse l'air (souffle grave)
  burst({ t: t + 0.4, dur: 1.1, peak: 0.16, color: 'brown', type: 'lowpass', f0: 160, f1: 420, attack: 0.55 })
  // le plat touche le bureau : choc mat et lourd, puis petit rebond
  const hit = t + 1.78
  thump(hit, 62, 0.28, 0.32)
  thump(hit, 190, 0.05, 0.08, 'triangle')
  burst({ t: hit, dur: 0.16, peak: 0.12, color: 'brown', type: 'lowpass', f0: 600, f1: 140, attack: 0.004 })
  burst({ t: hit + 0.005, dur: 0.06, peak: 0.05, color: 'pink', type: 'bandpass', f0: 700, q: 1.5, attack: 0.003 })
  thump(hit + 0.1, 70, 0.06, 0.12)
}

export function coverClose() {
  if (!ready()) return
  const t = ctx.currentTime + 0.02
  creak(t + 0.05, 0.5, 0.04, 105)
  burst({ t: t + 0.1, dur: 0.9, peak: 0.15, color: 'brown', type: 'lowpass', f0: 420, f1: 180, attack: 0.5 })
  // le livre se referme : claquement grave, l'air chassé d'entre les pages
  const hit = t + 1.12
  thump(hit, 58, 0.3, 0.35)
  burst({ t: hit, dur: 0.18, peak: 0.13, color: 'brown', type: 'lowpass', f0: 700, f1: 150, attack: 0.003 })
  burst({ t: hit, dur: 0.12, peak: 0.06, color: 'pink', f0: 900, f1: 400, q: 0.8, attack: 0.003 })
}

export function land() {
  if (!ready()) return
  const t = ctx.currentTime + 0.01
  thump(t, 64, 0.24, 0.35)
  thump(t, 170, 0.04, 0.07, 'triangle')
  burst({ t, dur: 0.16, peak: 0.08, color: 'brown', type: 'lowpass', f0: 500, f1: 150, attack: 0.004 })
}

// ───────────────────────── Ambiance : la bougie ─────────────────────────
function startAmbience() {
  if (ambience) return
  // souffle très doux de la flamme
  const [src, off] = noise()
  const lp = ctx.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = 380
  const g = ctx.createGain()
  g.gain.value = 0.012
  const lfo = ctx.createOscillator()
  const lfoGain = ctx.createGain()
  lfo.frequency.value = 0.23
  lfoGain.gain.value = 0.005
  lfo.connect(lfoGain).connect(g.gain)
  src.connect(lp).connect(g).connect(master)
  src.start(0, off)
  lfo.start()
  // crépitements irréguliers de la mèche
  let timer = null
  const crackle = () => {
    if (ctx.state === 'running' && !muted) {
      const t = ctx.currentTime + 0.01
      const n = Math.random() < 0.25 ? 2 + Math.floor(Math.random() * 3) : 1
      for (let i = 0; i < n; i++) {
        burst({
          t: t + i * (0.015 + Math.random() * 0.04),
          dur: 0.008 + Math.random() * 0.02,
          peak: 0.008 + Math.random() * 0.02,
          f0: 1800 + Math.random() * 3500,
          q: 2 + Math.random() * 4,
          attack: 0.002,
        })
      }
    }
    timer = setTimeout(crackle, 180 + Math.random() * 1300)
  }
  crackle()
  ambience = { stop: () => clearTimeout(timer) }
}
