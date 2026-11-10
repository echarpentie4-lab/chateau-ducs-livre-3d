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
  // 2 s de bruit blanc réutilisable
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
  const d = noiseBuf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
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

function noise(offset = Math.random()) {
  const src = ctx.createBufferSource()
  src.buffer = noiseBuf
  src.loop = true
  src.loopStart = 0
  src.loopEnd = noiseBuf.duration
  return [src, offset * 1.5]
}

function env(gain, t, a, peak, d) {
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(peak, t + a)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + a + d)
}

// Bruit filtré à enveloppe : la brique de base de tous les bruits de papier.
function burst({ t, dur, peak, type = 'bandpass', f0, f1 = f0, q = 1, attack = 0.02 }) {
  const [src, off] = noise()
  const filt = ctx.createBiquadFilter()
  filt.type = type
  filt.Q.value = q
  filt.frequency.setValueAtTime(f0, t)
  filt.frequency.exponentialRampToValueAtTime(f1, t + dur)
  const g = ctx.createGain()
  env(g, t, attack, peak, dur)
  src.connect(filt).connect(g).connect(master)
  src.start(t, off)
  src.stop(t + attack + dur + 0.05)
}

function thump(t, freq, peak, dur) {
  const o = ctx.createOscillator()
  o.type = 'sine'
  o.frequency.setValueAtTime(freq, t)
  o.frequency.exponentialRampToValueAtTime(freq * 0.55, t + dur)
  const g = ctx.createGain()
  env(g, t, 0.006, peak, dur)
  o.connect(g).connect(master)
  o.start(t)
  o.stop(t + dur + 0.05)
}

// ───────────────────────── Effets ─────────────────────────
let lastTurn = 0
export function pageTurn(duration = 1.2) {
  if (!ready()) return
  // plusieurs pages qui tournent d'affilée : on espace les froissements
  if (ctx.currentTime - lastTurn < 0.11) return
  lastTurn = ctx.currentTime
  const t = ctx.currentTime + 0.02
  const v = 0.85 + Math.random() * 0.3
  // la page se soulève (léger frottement)
  burst({ t, dur: 0.18, peak: 0.05 * v, f0: 2600, f1: 4200, q: 0.8 })
  // le balayage dans l'air
  burst({ t: t + 0.08, dur: duration * 0.45, peak: 0.11 * v, f0: 900, f1: 3200, q: 0.6, attack: 0.12 })
  // petits craquements du papier
  for (let i = 0; i < 4; i++) burst({ t: t + 0.1 + Math.random() * duration * 0.5, dur: 0.03, peak: 0.03 * v, type: 'highpass', f0: 3500 })
  // la page retombe à plat
  burst({ t: t + duration * 0.72, dur: 0.16, peak: 0.08 * v, type: 'lowpass', f0: 1400, f1: 500, attack: 0.008 })
  thump(t + duration * 0.74, 140, 0.05 * v, 0.12)
}

export function coverOpen() {
  if (!ready()) return
  const t = ctx.currentTime + 0.02
  // grincement du cuir et du dos de la reliure
  for (let i = 0; i < 6; i++) {
    burst({ t: t + 0.15 + i * 0.13 + Math.random() * 0.05, dur: 0.08, peak: 0.035, f0: 450 + Math.random() * 300, q: 6 })
  }
  burst({ t: t + 0.2, dur: 1.1, peak: 0.05, f0: 700, f1: 1800, q: 0.7, attack: 0.25 })
  // la couverture se pose sur le bureau
  thump(t + 1.75, 95, 0.16, 0.25)
  burst({ t: t + 1.75, dur: 0.2, peak: 0.07, type: 'lowpass', f0: 900, f1: 300, attack: 0.005 })
}

export function coverClose() {
  if (!ready()) return
  const t = ctx.currentTime + 0.02
  burst({ t, dur: 0.9, peak: 0.05, f0: 1600, f1: 600, q: 0.7, attack: 0.3 })
  thump(t + 1.1, 85, 0.2, 0.3)
  burst({ t: t + 1.1, dur: 0.22, peak: 0.08, type: 'lowpass', f0: 1000, f1: 250, attack: 0.004 })
}

export function land() {
  if (!ready()) return
  const t = ctx.currentTime + 0.01
  thump(t, 70, 0.22, 0.35)
  burst({ t, dur: 0.18, peak: 0.06, type: 'lowpass', f0: 700, f1: 200, attack: 0.004 })
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
