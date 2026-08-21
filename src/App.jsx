import { useState } from 'react'
import { Home, Users, Heart, Award, FileText, Mail, HelpCircle } from 'lucide-react'
import Halo from './components/Halo.jsx'
import photoFamily from './assets/family.jpg'
import photoWalker from './assets/nurse-walker.jpg'
import photoPark from './assets/wheelchair-park.jpg'
import photoEmbrace from './assets/embrace.jpg'
import achcMark from './assets/achc-accredited.png'
import Reveal from './components/Reveal.jsx'
import Faq from './components/Faq.jsx'
import {
  agency,
  services,
  advantages,
  therapies,
  medicareCriteria,
} from './data/content.js'

const telHref = (n) => `tel:+1${n.replace(/\D/g, '')}`

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

function AchcBadge({ small = false }) {
  return (
    <img
      className={`achc ${small ? 'achc--sm' : ''}`}
      src={achcMark}
      alt="ACHC Accredited"
      width="276"
      height="282"
    />
  )
}

function Figure({ src, alt, ratio, className = '' }) {
  return (
    <figure className={`figure ${className}`} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      // For "main", scroll to the very top
      if (sectionId === 'main') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        // For sections, find the parent section element and scroll to its top
        const section = element.closest('section') || element
        const headerHeight = 90 // Account for sticky header
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    closeMobileMenu()
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <div className="shell topbar__inner">
          <a className="brand" href="#main">
            <img src="/haloes-mark.png" alt="Haloes Touch" className="brand__mark" />
            <span className="brand__name">
              Haloes Touch
              <span className="brand__sub">Hospice Inc.</span>
            </span>
          </a>
          <nav className={`nav ${mobileMenuOpen ? 'nav--open' : ''}`}>
            <a className="nav__link" href="#main" onClick={(e) => scrollToSection(e, 'main')}>
              <Home size={18} />
              <span>Home</span>
            </a>
            <a className="nav__link" href="#philosophy-h" onClick={(e) => scrollToSection(e, 'philosophy-h')}>
              <Users size={18} />
              <span>About Us</span>
            </a>
            <a className="nav__link" href="#services-h" onClick={(e) => scrollToSection(e, 'services-h')}>
              <Heart size={18} />
              <span>Services</span>
            </a>
            <a className="nav__link" href="#advantage-h" onClick={(e) => scrollToSection(e, 'advantage-h')}>
              <Award size={18} />
              <span>Why Choose Us</span>
            </a>
            <a className="nav__link" href="#faq-h" onClick={(e) => scrollToSection(e, 'faq-h')}>
              <HelpCircle size={18} />
              <span>FAQ</span>
            </a>
            <a className="nav__link" href="#medicare-h" onClick={(e) => scrollToSection(e, 'medicare-h')}>
              <FileText size={18} />
              <span>Medicare</span>
            </a>
            <a className="nav__link" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              <Mail size={18} />
              <span>Contact Us</span>
            </a>
          </nav>
          <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>
          <a className="btn btn--ghost topbar__call" href={telHref(agency.phone)}>
            Call {agency.phone}
          </a>
        </div>
      </header>

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="hero__halo">
            <Halo animate />
          </div>
          <div className="shell hero__inner">
            <h1 className="hero__title">
              Compassion and care
              <br />
              that feels like family.
            </h1>
            <p className="hero__lede">
              Hospice care at home in Henderson and Las Vegas — nurses, physicians,
              and therapists who show up when you need them, day or night.
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href={telHref(agency.phone)}>
                Call {agency.phone}
              </a>
              <a className="btn btn--ghost" href={`mailto:${agency.email}`}>
                Email us
              </a>
            </div>
            <p className="hero__seal">
              <AchcBadge />
              <span className="dot" />
              <span>Medicare certified</span>
            </p>
          </div>
        </section>

        {/* ---------- Philosophy ---------- */}
        <section className="section section--quiet" aria-labelledby="philosophy-h">
          <div className="shell split">
            <Reveal className="split__left">
              <Eyebrow>About Us</Eyebrow>
              <h2 className="h2" id="philosophy-h">
                Bring comfort home.
                <br />
                One visit at a time.
              </h2>
              <Figure
                className="figure--philosophy"
                src={photoFamily}
                alt="A Haloes Touch nurse leaning beside a seated patient, both smiling."
                ratio="0.79"
              />
            </Reveal>
            <Reveal className="split__right" delay={80}>
              <p className="prose prose--lead">
                Haloes Touch prioritizes the comfort and care of people facing a
                terminal illness. Our philosophy is to view this challenging phase as
                a celebration of life, and a chance to cherish the time that is left.
              </p>
              <p className="prose">
                We share an unwavering commitment to helping people make the most of
                each day — one person, one family, and one community at a time.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className="section" aria-labelledby="services-h">
          <div className="shell">
            <div className="head-row">
              <Reveal className="head">
                <Eyebrow>Our Services</Eyebrow>
                <h2 className="h2" id="services-h">
                  Hospice services
                </h2>
                <p className="head__note">
                  Every service below is part of the hospice benefit. There is
                  nothing here to buy separately.
                </p>
              </Reveal>
              <Reveal delay={90}>
                <Figure
                  src={photoWalker}
                  alt="A nurse walking outdoors alongside a patient using a walker."
                  ratio="1.04"
                />
              </Reveal>
            </div>
            <ul className="services">
              {services.map((s, i) => (
                <Reveal as="li" key={s} className="services__item" delay={i * 35}>
                  <span className="services__ray" aria-hidden="true" />
                  <span>{s}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Advantage ---------- */}
        <section className="section section--quiet" aria-labelledby="advantage-h">
          <div className="shell">
            <div className="head-row">
              <Reveal className="head">
                <Eyebrow>Why Choose Us</Eyebrow>
                <h2 className="h2" id="advantage-h">
                  The Haloes Touch advantage
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <Figure
                  src={photoEmbrace}
                  alt="A caregiver with her arms around a seated patient, both laughing."
                  ratio="1.42"
                />
              </Reveal>
            </div>
            <div className="cards">
              {advantages.map((a, i) => (
                <Reveal key={a.title} className="card" delay={(i % 3) * 90}>
                  <h3 className="card__title">{a.title}</h3>
                  <p className="card__body">{a.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <Faq />

        {/* ---------- Levels of care ---------- */}
        <section className="section" aria-labelledby="care-h">
          <div className="shell">
            <Reveal className="head">
              <Eyebrow>When needs change</Eyebrow>
              <h2 className="h2" id="care-h">
                Care that meets the moment
              </h2>
            </Reveal>
            <div className="care">
              <Reveal className="care__media">
                <Figure
                  src={photoPark}
                  alt="A nurse pushing a patient in a wheelchair along a tree-lined path."
                  className="figure--tall"
                />
              </Reveal>
              <div className="care__panels">
              <Reveal className="panel">
                <h3 className="panel__title">Continuous care</h3>
                <p className="prose">
                  Continuous care relieves acute medical symptoms and keeps the
                  patient at home instead of the hospital. We bring it in during brief
                  periods of crisis, for as long as it is medically needed.
                </p>
              </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Medicare ---------- */}
        <section className="section section--light" aria-labelledby="medicare-h">
          <div className="shell">
            <Reveal className="head head--center">
              <Eyebrow>Paying for care</Eyebrow>
              <h2 className="h2" id="medicare-h">
                Medicare coverage
              </h2>
              <p className="head__note">
                Most hospice patients qualify for Medicare, which covers hospice
                services up to 100%. Four things determine eligibility.
              </p>
            </Reveal>
            <div className="criteria">
              {medicareCriteria.map((c, i) => (
                <Reveal key={c.label} className="criterion" delay={(i % 2) * 80}>
                  <span className="criterion__tick" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 12.6 9.2 18 20 6.6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="criterion__label">{c.label}</h3>
                    <p className="criterion__body">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="cta">
              <p className="cta__text">
                Not sure whether you or your family member qualifies? Call us and we
                will check with you, at no cost.
              </p>
              <a className="btn btn--forest" href={telHref(agency.phone)}>
                Call {agency.phone}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer" id="contact">
        <div className="shell footer__inner">
          <div className="footer__brand">
            <Eyebrow>Contact Us</Eyebrow>
            <img src="/haloes-mark.png" alt="Haloes Touch" className="footer__mark" />
            <p className="footer__name">{agency.name}</p>
            <p className="footer__tagline">
              Contact us to find out if Haloes Touch is the right choice for you.
            </p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h2 className="footer__h">Visit</h2>
              <p>{agency.street}</p>
              <p>{agency.city}</p>
            </div>
            <div className="footer__col">
              <h2 className="footer__h">Call</h2>
              <p>
                <a href={telHref(agency.phone)}>{agency.phone}</a>
              </p>
              <p>
                <a href={telHref(agency.phoneAlt)}>{agency.phoneAlt}</a>
              </p>
            </div>
            <div className="footer__col">
              <h2 className="footer__h">Write</h2>
              <p>
                <a href={`mailto:${agency.email}`}>{agency.email}</a>
              </p>
              <p>
                <a href={`https://${agency.site}`}>{agency.site}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="shell footer__base">
          <p>
            © {new Date().getFullYear()} {agency.name}
          </p>
          <p className="footer__seal">
            <AchcBadge small />
            <span>Medicare certified</span>
          </p>
        </div>
      </footer>
    </>
  )
}
