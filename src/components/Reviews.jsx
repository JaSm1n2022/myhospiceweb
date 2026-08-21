import Reveal from './Reveal.jsx'
import { reviews, reviewsLink } from '../data/content.js'
import photoSharing from '../../source/sharing.png'
import { Heart } from 'lucide-react'

/**
 * Three review cards. Deliberately three and no carousel: a family reads all
 * of them in one glance, and nothing important is hidden behind an arrow.
 */
export default function Reviews() {
  return (
    <section className="section" id="reviews" aria-labelledby="reviews-h">
      <div className="shell">
        <div className="head-row head-row--reverse">
          <Reveal delay={90}>
            <figure className="figure figure--reviews">
              <img
                src={photoSharing}
                alt="A Haloes Touch staff member sharing a moment with a patient."
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
          <Reveal className="head">
            <Heart className="head__icon" size={32} strokeWidth={1.5} />
            <p className="eyebrow">In their words</p>
            <h2 className="h2" id="reviews-h">
              What families say
            </h2>
          </Reveal>
        </div>

        <ul className="reviews">
          {reviews.map((r, i) => (
            <Reveal as="li" key={i} className="review" delay={i * 90}>
              <span className="review__mark" aria-hidden="true">
                <svg viewBox="0 0 40 28" fill="currentColor">
                  <path d="M0 28V15.4C0 6.9 4.9 1.2 13.7 0l1.5 4.4c-4.7 1.2-7 3.7-7 7.4h6.2V28H0Zm24.8 0V15.4C24.8 6.9 29.7 1.2 38.5 0L40 4.4c-4.7 1.2-7 3.7-7 7.4h6.2V28H24.8Z" />
                </svg>
              </span>
              <blockquote className="review__quote">{r.quote}</blockquote>
              <div className="review__stars" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
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
