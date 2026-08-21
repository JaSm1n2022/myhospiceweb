import Reveal from './Reveal.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import { advantages, advantageIntro } from '../data/content.js'
import photo from '../assets/advantage-hero.jpg'

/**
 * The advantage. Band mirrors the services one — photo left, text right —
 * so the two read as a pair rather than a repeat. Items put the icon beside
 * the copy instead of above it, which suits three columns of longer text.
 */
export default function Advantage() {
  return (
    <section className="section section--quiet" id="advantage" aria-labelledby="advantage-h">
      <div className="shell">
        <div className="svc-band svc-band--mirror">
          <Reveal className="svc-band__media">
            <figure className="figure svc-band__figure">
              <img
                src={photo}
                alt="A Haloes Touch nurse sitting with a patient at home, both laughing."
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>

          <Reveal className="svc-band__text svc-band__text--end" delay={90}>
            <p className="eyebrow">{advantageIntro}</p>
            <span className="dot-rule dot-rule--wide" aria-hidden="true" />
            <h2 className="h2" id="advantage-h">
              The Haloes Touch advantage
            </h2>
          </Reveal>
        </div>

        <ul className="adv-grid">
          {advantages.map((a, i) => (
            <Reveal as="li" key={a.title} className="adv-item" delay={(i % 3) * 80}>
              <span className="svc-item__icon">
                <ServiceIcon name={a.icon} />
              </span>
              <div>
                <h3 className="adv-item__title">{a.title}</h3>
                <p className="adv-item__body">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
