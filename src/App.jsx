import { useEffect, useMemo, useReducer, useState } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'
import { catalogue } from './data/catalogue'
import { createBookReducer, initialBookState, buildSpreads } from './state/bookMachine'

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
  const spreadsByBook = useMemo(() => catalogue.map((b) => buildSpreads(b.chapters)), [])
  const reducer = useMemo(() => createBookReducer(spreadsByBook.map((s) => s.length)), [spreadsByBook])
  const [state, dispatch] = useReducer(reducer, initialBookState)
  const fontsReady = useFontsReady()

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
            <Scene state={state} dispatch={dispatch} catalogue={catalogue} spreadsByBook={spreadsByBook} />
          </div>
          <div className="vignette pointer-events-none absolute inset-0" />
          <div className="grain pointer-events-none absolute inset-0" />
          <UI state={state} catalogue={catalogue} spreads={spreadsByBook[state.openBook ?? state.book]} dispatch={dispatch} />
        </>
      ) : (
        <div className="grid h-full place-items-center">
          <p className="animate-pulse font-serif italic text-xl text-gold-light/70">Ouverture des archives…</p>
        </div>
      )}
    </main>
  )
}
