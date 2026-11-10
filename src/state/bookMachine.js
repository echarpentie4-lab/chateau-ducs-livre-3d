// Machine à états stricte du livre.
//
//   CLOSED (carrousel de livres en lévitation ; NEXT/PREV/SELECT changent de livre)
//     └─OPEN─▶ OPENING (le livre choisi se pose, puis s'ouvre) ─DONE─▶ READING
//   READING ─NEXT/PREV/GOTO─▶ TURNING ─DONE─▶ READING
//   READING ─CLOSE─▶ CLOSING (fermeture, retour dans le carrousel) ─DONE─▶ CLOSED
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

// book : livre au premier plan du carrousel ; openBook : livre ouvert (lecture)
export const initialBookState = { phase: PHASE.CLOSED, spread: 0, zoom: false, info: false, book: 0, openBook: null }

export function createBookReducer(spreadCounts) {
  const bookCount = spreadCounts.length
  const select = (state, i) =>
    state.phase === PHASE.CLOSED ? { ...state, book: ((i % bookCount) + bookCount) % bookCount } : state
  const turnTo = (state, target) =>
    state.phase === PHASE.READING && target !== state.spread && target >= 0 && target < spreadCounts[state.openBook]
      ? { ...state, phase: PHASE.TURNING, spread: target, zoom: false, info: false }
      : state

  return function bookReducer(state, action) {
    switch (action.type) {
      case 'SELECT':
        return select(state, action.index)
      case 'OPEN':
        return state.phase === PHASE.CLOSED ? { ...state, phase: PHASE.OPENING, spread: 0, openBook: state.book } : state
      case 'NEXT':
        return state.phase === PHASE.CLOSED ? select(state, state.book + 1) : turnTo(state, state.spread + 1)
      case 'PREV':
        return state.phase === PHASE.CLOSED ? select(state, state.book - 1) : turnTo(state, state.spread - 1)
      case 'GOTO':
        return turnTo(state, action.index)
      case 'CLOSE':
        return state.phase === PHASE.READING ? { ...state, phase: PHASE.CLOSING, zoom: false, info: false } : state
      // zoom : false | 'text' (le texte) | 'image' (l'illustration) | 'model' (la maquette pop-up)
      case 'TOGGLE_ZOOM':
        return state.phase === PHASE.READING ? { ...state, zoom: state.zoom ? false : 'text', info: state.zoom ? false : state.info } : state
      case 'FOCUS':
        return state.phase === PHASE.READING ? { ...state, zoom: action.side } : state
      case 'INSPECT':
        return state.phase === PHASE.READING ? { ...state, zoom: 'model', info: true } : state
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
    // planche dépliante seule (type: "popup") : pas de numéro de chapitre
    if (c.type === 'popup') return { ...c, kind: 'popup', model: c.model || 'castle' }
    n += 1
    const number = parseInt(c.chapterNumber, 10) || n
    // chapitre avec maquette pop-up (popup: "lu" | "cathedral" | "castle")
    if (c.popup) return { ...c, kind: 'popup', model: c.popup, number }
    return { ...c, kind: 'chapter', number }
  })
}
