// Machine à états stricte du livre.
//
//   CLOSED (lévitation, OrbitControls 360°)
//     └─OPEN─▶ OPENING (le livre se pose, puis s'ouvre) ─DONE─▶ READING
//   READING ─NEXT/PREV/GOTO─▶ TURNING ─DONE─▶ READING
//   READING ─CLOSE─▶ CLOSING (fermeture, retour en lévitation) ─DONE─▶ CLOSED
//
// "zoom" (false | 'text' | 'image') et "info" sont des sous-états de READING (remis à zéro à chaque page).
// Toute action non prévue pour l'état courant est ignorée.

export const PHASE = {
  CLOSED: 'closed',
  OPENING: 'opening',
  READING: 'reading',
  TURNING: 'turning',
  CLOSING: 'closing',
}

export const initialBookState = { phase: PHASE.CLOSED, spread: 0, zoom: false, info: false }

export function createBookReducer(spreadCount) {
  const turnTo = (state, target) =>
    state.phase === PHASE.READING && target !== state.spread && target >= 0 && target < spreadCount
      ? { ...state, phase: PHASE.TURNING, spread: target, zoom: false, info: false }
      : state

  return function bookReducer(state, action) {
    switch (action.type) {
      case 'OPEN':
        return state.phase === PHASE.CLOSED ? { ...state, phase: PHASE.OPENING, spread: 0 } : state
      case 'NEXT':
        return turnTo(state, state.spread + 1)
      case 'PREV':
        return turnTo(state, state.spread - 1)
      case 'GOTO':
        return turnTo(state, action.index)
      case 'CLOSE':
        return state.phase === PHASE.READING ? { ...state, phase: PHASE.CLOSING, zoom: false, info: false } : state
      // zoom : false | 'text' (page de droite) | 'image' (page de gauche)
      case 'TOGGLE_ZOOM':
        return state.phase === PHASE.READING ? { ...state, zoom: state.zoom ? false : 'text', info: state.zoom ? false : state.info } : state
      case 'FOCUS':
        return state.phase === PHASE.READING ? { ...state, zoom: action.side } : state
      case 'INSPECT':
        return state.phase === PHASE.READING ? { ...state, zoom: 'text', info: true } : state
      case 'HIDE_INFO':
        return { ...state, info: false }
      case 'DONE':
        if (state.phase === PHASE.OPENING || state.phase === PHASE.TURNING) return { ...state, phase: PHASE.READING }
        if (state.phase === PHASE.CLOSING) return { ...state, phase: PHASE.CLOSED, spread: 0 }
        return state
      default:
        return state
    }
  }
}

// Transforme les données éditables en "double-pages" (spreads).
export function buildSpreads(chapters) {
  let n = 0
  return chapters.map((c) => {
    if (c.type === 'popup') return { ...c, kind: 'popup' }
    n += 1
    return { ...c, kind: 'chapter', number: parseInt(c.chapterNumber, 10) || n }
  })
}
