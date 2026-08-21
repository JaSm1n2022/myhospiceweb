import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { faqs } from '../data/content.js'
import photoConsultation from '../../source/consultation.png'

const INITIAL = 6
const STEP = 4

/**
 * FAQ card grid. Six show by default and the rest arrive four at a time,
 * because fourteen questions at once is a wall of text and families are
 * scanning, not reading.
 *
 * Focus moves to the first newly revealed card so keyboard and screen reader
 * users are not stranded at the bottom of the page after pressing the button.
 */
export default function Faq() {
  const [shown, setShown] = useState(INITIAL)
  const cardRefs = useRef([])

  const remaining = faqs.length - shown
  const expanded = remaining === 0

  const showMore = () => {
    const firstNew = shown
    setShown((n) => Math.min(n + STEP, faqs.length))
    requestAnimationFrame(() => cardRefs.current[firstNew]?.focus())
  }

  const collapse = () => {
    setShown(INITIAL)
    requestAnimationFrame(() => cardRefs.current[0]?.focus())
  }

  return (
    <section className="section section--quiet" aria-labelledby="faq-h">
      <div className="shell">
        <div className="head-row">
          <Reveal className="head">
            <p className="eyebrow">FAQ</p>
            <h2 className="h2" id="faq-h">
              Before you call
            </h2>
            <p className="head__note">
              The things people most often want to know, and the honest answers.
              If yours is not here, ask us on the phone — we would rather talk it
              through.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <figure className="figure figure--faq">
              <img
                src={photoConsultation}
                alt="A Haloes Touch consultation with a patient and family."
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>

        <ul className="faq">
          {faqs.slice(0, shown).map((item, i) => (
            <Reveal
              as="li"
              key={item.q}
              className="faq__card"
              delay={i < INITIAL ? (i % 2) * 70 : 0}
            >
              <h3
                className="faq__q"
                ref={(el) => (cardRefs.current[i] = el)}
                tabIndex={-1}
              >
                {item.q}
              </h3>
              <p className="faq__a">{item.a}</p>
            </Reveal>
          ))}
        </ul>

        <div className="faq__more" aria-live="polite">
          {!expanded && (
            <button type="button" className="btn btn--ghost" onClick={showMore}>
              Show more questions
              <span className="faq__count">{remaining} left</span>
            </button>
          )}
          {expanded && faqs.length > INITIAL && (
            <button type="button" className="btn btn--ghost" onClick={collapse}>
              Show fewer
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
