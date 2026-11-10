import { useEffect, useMemo, useReducer, useState } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'
import { catalogue } from './data/catalogue'
import { createBookReducer, initialBookState, buildSpreads, PHASE } from './state/bookMachine'
import { LANGS, localizeBook, ui } from './i18n'
import * as sound from './audio/sound'

// Langue initiale : choix mémorisé, sinon langue du navigateur, sinon français.
function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (LANGS.some((l) => l.code === saved)) return saved
  } catch {
    /* stockage indisponible */
  }
  const nav = (navigator.language || 'fr').slice(0, 2)
  return LANGS.some((l) => l.code === nav) ? nav : 'fr'
}

const FONTS = [
  '600 40px Cinzel',
  '700 40px Cinzel',
  '500 40px "Cormorant Garamond"',
  '600 40px "Cormorant Garamond"',
  'italic 500 30px "Cormorant Garamond"',
  'italic 34px "IM Fell English"',
]

// Les pages sont dessinées dans des canvas : on attend les polices avant de les peindre.
function useFontsReady() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let done = false
    const finish = () => {
      if (!done) {
        done = true
        setReady(true)
      }
    }
    Promise.all(FONTS.map((f) => document.fonts.load(f))).then(finish, finish)
    const t = setTimeout(finish, 4000)
    return () => clearTimeout(t)
  }, [])
  return ready
}

export default function App() {
  const [lang, setLangState] = useState(initialLang)
  const books = useMemo(() => catalogue.map((b) => localizeBook(b, lang)), [lang])
  const spreadsByBook = useMemo(() => books.map((b) => buildSpreads(b.chapters)), [books])
  // le nombre de pages est le même dans toutes les langues
  const reducer = useMemo(() => createBookReducer(catalogue.map((b) => buildSpreads(b.chapters).length)), [])
  const [state, dispatch] = useReducer(reducer, initialBookState)
  const fontsReady = useFontsReady()

  const setLang = (code) => {
    if (state.phase !== PHASE.CLOSED) return
    setLangState(code)
    document.documentElement.lang = code
    try {
      localStorage.setItem('lang', code)
    } catch {
      /* stockage indisponible */
    }
  }
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // le son se débloque à la première interaction (règle des navigateurs)
  useEffect(() => {
    const go = () => sound.unlock()
    window.addEventListener('pointerdown', go)
    window.addEventListener('keydown', go)
    return () => {
      window.removeEventListener('pointerdown', go)
      window.removeEventListener('keydown', go)
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('button') && e.key === 'Enter') return
      if (e.key === 'ArrowRight') dispatch({ type: 'NEXT' })
      else if (e.key === 'ArrowLeft') dispatch({ type: 'PREV' })
      else if (e.key === 'Escape') dispatch({ type: 'CLOSE' })
      else if (e.key === 'z' || e.key === 'Z') dispatch({ type: 'TOGGLE_ZOOM' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main className="relative h-full w-full">
      {fontsReady ? (
        <>
          <div className="absolute inset-0">
            <Scene state={state} dispatch={dispatch} catalogue={books} spreadsByBook={spreadsByBook} />
          </div>
          <div className="vignette pointer-events-none absolute inset-0" />
          <div className="grain pointer-events-none absolute inset-0" />
          <UI state={state} catalogue={books} spreads={spreadsByBook[state.openBook ?? state.book]} dispatch={dispatch} lang={lang} setLang={setLang} />
        </>
      ) : (
        <div className="grid h-full place-items-center">
          <p className="animate-pulse font-serif italic text-xl text-gold-light/70">{ui(lang).loading}</p>
        </div>
      )}
    </main>
  )
}
