import Reveal from './Reveal.jsx'
import { reviews, reviewsLink } from '../data/content.js'

/**
 * Three review cards. Deliberately three and no carousel: a family reads all
 * of them in one glance, and nothing important is hidden behind an arrow.
 */
export default function Reviews() {
  return (
    <section className="section section--quiet" id="reviews" aria-labelledby="reviews-h">
      <div className="shell">
        <Reveal className="head head--center">
          <p className="eyebrow">In their words</p>
          <h2 className="h2" id="reviews-h">
            What families say
          </h2>
        </Reveal>

        <ul className="reviews">
          {reviews.map((r, i) => (
            <Reveal as="li" key={i} className="review" delay={i * 90}>
              <span className="review__mark" aria-hidden="true">
                <svg viewBox="0 0 40 28" fill="currentColor">
                  <path d="M0 28V15.4C0 6.9 4.9 1.2 13.7 0l1.5 4.4c-4.7 1.2-7 3.7-7 7.4h6.2V28H0Zm24.8 0V15.4C24.8 6.9 29.7 1.2 38.5 0L40 4.4c-4.7 1.2-7 3.7-7 7.4h6.2V28H24.8Z" />
                </svg>
              </span>
              <blockquote className="review__quote">{r.quote}</blockquote>
              <footer className="review__by">
                <p className="review__name">{r.name}</p>
                <p className="review__meta">
                  {r.relation}
                  {r.source ? ` · ${r.source}` : ''}
                </p>
              </footer>
            </Reveal>
          ))}
        </ul>

        <div className="reviews__more">
          <a className="btn btn--ghost" href={reviewsLink.href}>
            {reviewsLink.label}
          </a>
        </div>
      </div>
    </section>
  )
}
