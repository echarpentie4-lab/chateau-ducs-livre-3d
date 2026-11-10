import { useState } from 'react'
import { BookOpen, ArrowLeft, ArrowRight, X, Rotate3d, ZoomIn, ZoomOut, List, Sparkles, Image as ImageIcon, AlignLeft, Hand } from 'lucide-react'
import { PHASE } from '../state/bookMachine'
import { roman } from '../three/canvasUtils'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold'

// Boutons cuir & laiton
const leatherBtn =
  `pointer-events-auto relative flex min-h-14 items-center justify-center gap-3 rounded-md border border-gold/70 ` +
  `bg-gradient-to-b from-[#3d2112] to-[#1a0d06] px-4 py-3 sm:px-7 sm:py-4 font-display text-xs sm:text-base uppercase ` +
  `tracking-[0.16em] text-gold-light shadow-[inset_0_1px_0_rgba(240,216,154,0.35),0_10px_28px_rgba(0,0,0,0.55)] ` +
  `transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-white ` +
  `disabled:pointer-events-none disabled:opacity-30 ${focusRing}`
const brassBtn =
  `pointer-events-auto relative flex min-h-14 items-center justify-center gap-3 rounded-md border border-[#f0d89a]/80 ` +
  `bg-gradient-to-b from-[#e2c072] via-[#c39a4c] to-[#8a6a2c] px-4 py-3 sm:px-7 sm:py-4 font-display text-xs sm:text-base ` +
  `font-bold uppercase tracking-[0.16em] text-[#1d0f06] shadow-[inset_0_1px_0_rgba(255,245,210,0.7),0_10px_28px_rgba(0,0,0,0.55)] ` +
  `transition duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:pointer-events-none disabled:opacity-30 ${focusRing}`
const smallBtn =
  `pointer-events-auto flex items-center gap-2 rounded-full border border-gold/45 bg-[#140b06]/75 px-3 py-2 sm:px-4 ` +
  `font-display text-[11px] uppercase tracking-[0.2em] text-gold-light/90 backdrop-blur-sm transition ` +
  `hover:border-gold hover:text-white disabled:opacity-40 ${focusRing}`

const spreadLabel = (s) => (s.kind === 'popup' ? 'Planche dépliante' : `Chapitre ${roman(s.number)}`)

export default function UI({ state, spreads, dispatch }) {
  const [tocOpen, setTocOpen] = useState(false)
  const { phase, spread, zoom, info } = state
  const closed = phase === PHASE.CLOSED
  const reading = phase === PHASE.READING || phase === PHASE.TURNING
  const busy = phase !== PHASE.READING
  const current = spreads[spread]

  return (
    <div className="pointer-events-none absolute inset-0 select-none">
      <header className="absolute left-5 top-5 md:left-10 md:top-8">
        <p className="font-display text-[10px] md:text-xs tracking-[0.4em] text-gold/80 uppercase">Patrimoine · Nantes</p>
        <p className="font-serif italic text-lg md:text-2xl text-gold-light/90">Le Livre du Château</p>
      </header>

      {/* ── MODE DÉCOUVERTE : un seul CTA ── */}
      {closed && (
        <div className="fade-up absolute inset-x-0 bottom-8 md:bottom-12 flex flex-col items-center gap-4 px-4">
          <p className="flex items-center gap-2 font-serif italic text-sm md:text-base text-gold-light/65">
            <Rotate3d size={16} strokeWidth={1.5} /> Faites glisser pour tourner autour du livre
          </p>
          <button
            onClick={() => dispatch({ type: 'OPEN' })}
            className={`cta-glow group pointer-events-auto relative flex items-center gap-4 rounded-[3px] border border-gold/70
              bg-gradient-to-b from-[#2c180d]/95 to-[#120a05]/95 px-10 py-5 md:px-16 md:py-6
              font-display text-lg md:text-2xl uppercase tracking-[0.3em] text-gold-light
              backdrop-blur transition-all duration-500 hover:scale-[1.04] hover:border-gold hover:text-white ${focusRing}`}
          >
            <span className="pointer-events-none absolute inset-[5px] rounded-[2px] border border-gold/25" />
            <BookOpen className="shrink-0 transition-transform duration-500 group-hover:-rotate-6" size={30} strokeWidth={1.4} />
            <span>Lire le livre</span>
          </button>
        </div>
      )}

      {/* ── MODE LECTURE ── */}
      {reading && (
        <>
          <div className="fade-up absolute right-4 top-4 md:right-10 md:top-8 flex flex-wrap justify-end gap-2">
            <button className={smallBtn} onClick={() => setTocOpen(true)} disabled={busy} aria-label="Ouvrir le sommaire">
              <List size={15} /> <span className="hidden sm:inline">Sommaire</span>
            </button>
            <button className={smallBtn} onClick={() => dispatch({ type: 'TOGGLE_ZOOM' })} disabled={busy} aria-pressed={!!zoom}>
              {zoom ? <ZoomOut size={15} /> : <ZoomIn size={15} />}
              <span className="hidden sm:inline">{zoom ? 'Dézoomer' : 'Zoomer'}</span>
            </button>
            <button className={smallBtn} onClick={() => dispatch({ type: 'CLOSE' })} disabled={busy}>
              <X size={15} /> <span className="hidden sm:inline">Fermer le livre</span>
            </button>
          </div>

          {/* pagination : gros CTA accessibles sous le livre */}
          <nav
            aria-label="Pagination"
            className="fade-up absolute inset-x-0 bottom-4 md:bottom-7 flex items-center justify-center gap-2 sm:gap-5 px-3"
          >
            <button className={leatherBtn} onClick={() => dispatch({ type: 'PREV' })} disabled={busy || spread === 0}>
              <ArrowLeft size={20} strokeWidth={1.6} />
              <span className="hidden sm:inline">Page précédente</span>
              <span className="sm:hidden">Préc.</span>
            </button>
            <div
              aria-live="polite"
              className="flex min-w-[8.5rem] flex-col items-center rounded-full border border-gold/40 bg-[#140b06]/80 px-4 py-2 sm:px-6 backdrop-blur-sm"
            >
              <span className="font-display text-[11px] sm:text-sm uppercase tracking-[0.22em] text-gold-light">
                Page {spread + 1} sur {spreads.length}
              </span>
              <span className="max-w-[12rem] truncate font-serif italic text-xs sm:text-sm text-gold/80">
                {current && spreadLabel(current)}
              </span>
            </div>
            <button className={brassBtn} onClick={() => dispatch({ type: 'NEXT' })} disabled={busy || spread === spreads.length - 1}>
              <span className="hidden sm:inline">Tourner la page</span>
              <span className="sm:hidden">Suiv.</span>
              <ArrowRight size={20} strokeWidth={1.8} />
            </button>
          </nav>

          {/* gros plan : choix de la page + aide au déplacement */}
          {zoom && current?.kind === 'chapter' && (
            <div className="fade-up absolute inset-x-0 top-[4.75rem] md:top-24 flex flex-col items-center gap-2 px-3">
              <div role="group" aria-label="Page en gros plan" className="pointer-events-auto flex rounded-full border border-gold/50 bg-[#140b06]/85 p-1 backdrop-blur-sm">
                {[
                  ['image', 'Illustration', ImageIcon],
                  ['text', 'Texte', AlignLeft],
                ].map(([side, label, Icon]) => (
                  <button
                    key={side}
                    onClick={() => dispatch({ type: 'FOCUS', side })}
                    disabled={busy}
                    aria-pressed={zoom === side}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-display text-[11px] sm:text-xs uppercase tracking-[0.2em] transition ${focusRing} ${
                      zoom === side ? 'bg-gradient-to-b from-[#e2c072] to-[#a17c38] text-[#1d0f06]' : 'text-gold-light/85 hover:text-white'
                    }`}
                  >
                    <Icon size={14} /> {label}
                  </button>
                ))}
              </div>
              <p className="flex items-center gap-2 rounded-full bg-[#140b06]/60 px-3 py-1 font-serif italic text-xs sm:text-sm text-gold-light/75">
                <Hand size={14} /> Faites glisser pour parcourir la page · molette pour ajuster
              </p>
            </div>
          )}

          {/* info-bulle de la maquette pop-up */}
          {info && current?.kind === 'popup' && (
            <aside className="fade-up pointer-events-auto absolute bottom-28 right-4 md:right-10 w-[min(24rem,calc(100%-2rem))] rounded-md border border-gold/50 bg-[#1a0d06]/90 p-5 shadow-2xl backdrop-blur">
              <div className="mb-2 flex items-start justify-between gap-3">
                <p className="flex items-center gap-2 font-display text-sm uppercase tracking-[0.2em] text-gold">
                  <Sparkles size={15} /> {current.title}
                </p>
                <button className={`text-gold-light/80 hover:text-white ${focusRing}`} onClick={() => dispatch({ type: 'TOGGLE_ZOOM' })} aria-label="Fermer l'info-bulle">
                  <X size={16} />
                </button>
              </div>
              <p className="font-serif text-base leading-relaxed text-[#f3e6c8]">{current.info}</p>
            </aside>
          )}

          {/* sommaire */}
          {tocOpen && (
            <div className="pointer-events-auto absolute inset-0 bg-black/50" onClick={() => setTocOpen(false)}>
              <aside
                onClick={(e) => e.stopPropagation()}
                className="fade-up absolute right-0 top-0 flex h-full w-[min(26rem,100%)] flex-col border-l border-gold/40 bg-[#160b05]/95 p-6 backdrop-blur"
                aria-label="Sommaire"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-display text-lg uppercase tracking-[0.3em] text-gold">Sommaire</p>
                  <button className={`text-gold-light hover:text-white ${focusRing}`} onClick={() => setTocOpen(false)} aria-label="Fermer le sommaire">
                    <X size={20} />
                  </button>
                </div>
                <ol className="flex-1 space-y-1 overflow-y-auto pr-1">
                  {spreads.map((s, i) => (
                    <li key={i}>
                      <button
                        onClick={() => {
                          setTocOpen(false)
                          dispatch({ type: 'GOTO', index: i })
                        }}
                        className={`flex w-full items-baseline gap-3 rounded px-3 py-2.5 text-left transition hover:bg-gold/10 ${focusRing} ${
                          i === spread ? 'bg-gold/15 text-white' : 'text-[#f3e6c8]'
                        }`}
                      >
                        <span className="w-10 shrink-0 font-display text-xs text-gold">{s.kind === 'popup' ? '✦' : roman(s.number)}</span>
                        <span className="font-serif text-lg leading-tight">{s.title}</span>
                        <span className="ml-auto shrink-0 font-serif italic text-xs text-gold/70">p. {i + 1}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          )}
        </>
      )}
    </div>
  )
}
