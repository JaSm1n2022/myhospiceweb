import Reveal from './Reveal.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import { services, servicesIntro } from '../data/content.js'
import photo from '../assets/services-hero.jpg'

/**
 * Services. An intro band with the photo, then eight categories laid out on a
 * hairline grid — no card fills, so the section reads as one table of services
 * rather than eight competing boxes.
 */
export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <div className="shell">
        <div className="svc-band">
          <Reveal className="svc-band__text">
            <p className="eyebrow">Our services</p>
            <h2 className="h2" id="services-h">
              Hospice services
            </h2>
            <span className="dot-rule dot-rule--wide" aria-hidden="true" />
            {servicesIntro.map((para) => (
              <p className="prose" key={para.slice(0, 24)}>
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal className="svc-band__media" delay={90}>
            <figure className="figure svc-band__figure">
              <img
                src={photo}
                alt="A Haloes Touch nurse walking a patient in a wheelchair along a tree-lined path."
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>

        <ul className="svc-grid">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} className="svc-item" delay={(i % 4) * 70}>
              <div className="svc-item__head">
                <span className="svc-item__icon">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="svc-item__title">{s.title}</h3>
              </div>
              <span className="dot-rule" aria-hidden="true" />
              <p className="svc-item__body">{s.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
