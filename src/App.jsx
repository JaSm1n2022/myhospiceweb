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
  servicesDetailed,
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

        {/* ---------- About Us ---------- */}
        <section className="section section--quiet" aria-labelledby="philosophy-h">
          <div className="shell">
            <div className="split">
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
                  At <strong>Haloes Touch Hospice</strong>, we believe every person deserves to experience comfort, dignity, and compassionate care throughout life's most challenging moments.
                </p>
                <p className="prose">
                  We provide individualized hospice care for people facing life-limiting illnesses, supporting not only their physical needs but also their emotional, psychosocial, and spiritual well-being.
                </p>
                <p className="prose">
                  Our philosophy is centered on honoring life and helping patients and families make the most of each day. We focus on what matters most to each person—comfort, meaningful moments with loved ones, personal wishes, and quality of life.
                </p>
                <p className="prose">
                  With compassion and respect, we are committed to supporting our patients and their families throughout their hospice journey—<strong>one person, one family, and one community at a time.</strong>
                </p>
              </Reveal>
            </div>

            <div className="mission-vision" style={{ marginTop: 'clamp(60px, 8vw, 100px)' }}>
              <Reveal>
                <div className="mission-vision__section">
                  <h3 className="h2" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', marginBottom: '16px' }}>
                    Our Mission
                  </h3>
                  <p className="prose prose--lead" style={{ marginBottom: '16px' }}>
                    Comfort, dignity, and compassionate care when it matters most.
                  </p>
                  <p className="prose">
                    Our mission is to provide compassionate, patient-centered hospice care that promotes comfort, dignity, and quality of life for individuals facing life-limiting illnesses.
                  </p>
                  <p className="prose">
                    Through an interdisciplinary approach, we support the physical, emotional, psychosocial, and spiritual needs of our patients while providing education, guidance, and support to their families and caregivers.
                  </p>
                  <p className="prose">
                    We are committed to honoring each patient's values, choices, and goals while helping families make every moment as meaningful and comfortable as possible.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div className="mission-vision__section" style={{ marginTop: '48px' }}>
                  <h3 className="h2" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', marginBottom: '16px' }}>
                    Our Vision
                  </h3>
                  <p className="prose prose--lead" style={{ marginBottom: '16px' }}>
                    A community where every person can experience life's final journey with dignity, comfort, and compassionate support.
                  </p>
                  <p className="prose">
                    Our vision is to be a trusted source of hospice care for patients and families in our community—recognized for compassion, respect, quality, and a deeply personal approach to care.
                  </p>
                  <p className="prose">
                    We envision a future where individuals facing life-limiting illness and the people who love them feel supported, heard, respected, and never alone throughout their hospice journey.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className="section" aria-labelledby="services-h">
          <div className="shell">
            <Reveal className="head head--center">
              <Eyebrow>Our Services</Eyebrow>
              <h2 className="h2" id="services-h">
                Hospice Services
              </h2>
              <p className="head__note">
                Hospice care is designed around the individual needs of each patient and family. Our interdisciplinary team works together to provide services that promote comfort, dignity, symptom management, and quality of life.
              </p>
              <p className="head__note" style={{ marginTop: '16px' }}>
                For eligible patients, services related to the terminal illness and related conditions are provided according to the patient's individualized hospice plan of care.
              </p>
            </Reveal>

            <div className="services-grid">
              {servicesDetailed.map((service, i) => (
                <Reveal key={service.title} className="service-card" delay={(i % 3) * 60}>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="cta" style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
              <h3 className="h2" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
                Care Designed Around You
              </h3>
              <p className="cta__text">
                Every patient's hospice journey is different. Our interdisciplinary team develops an individualized plan of care based on the patient's condition, needs, goals, values, and preferences.
              </p>
              <p className="cta__text" style={{ fontWeight: '600', marginTop: '12px' }}>
                Have questions about hospice services? Contact Haloes Touch Hospice to speak with our team or request a hospice evaluation.
              </p>
              <a className="btn btn--gold" href={telHref(agency.phone)}>
                Call {agency.phone}
              </a>
            </Reveal>
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
              <Eyebrow>Paying for Hospice Care</Eyebrow>
              <h2 className="h2" id="medicare-h">
                Medicare Coverage
              </h2>
              <p className="head__note">
                Medicare Part A covers hospice care for eligible beneficiaries through the Medicare Hospice Benefit. For covered hospice services related to the terminal illness and related conditions, patients generally pay no cost for hospice care, although certain copayments or coinsurance may apply.
              </p>
              <p className="head__note" style={{ marginTop: '16px' }}>
                To qualify for the Medicare Hospice Benefit, the following requirements must be met:
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
              <h3 className="h2" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
                Have Questions About Coverage?
              </h3>
              <p className="cta__text">
                Our hospice team can help you understand hospice eligibility, Medicare coverage, and the services available to you or your loved one.
              </p>
              <p className="cta__text" style={{ fontWeight: '600', marginTop: '12px' }}>
                Contact Haloes Touch Hospice Inc. to learn more or request a hospice evaluation.
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/haloes-mark.png" alt="Haloes Touch" className="footer__mark" style={{ margin: 0 }} />
              <p className="footer__name" style={{ margin: 0 }}>{agency.name}</p>
            </div>
            <p className="footer__tagline">
              Contact us to find out if Haloes Touch is the right choice for you.
            </p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h2 className="footer__h">Visit</h2>
              <p style={{ whiteSpace: 'nowrap' }}>{agency.street}</p>
              <p>{agency.city}</p>
            </div>
            <div className="footer__col">
              <h2 className="footer__h">Call</h2>
              <p style={{ whiteSpace: 'nowrap' }}>
                <a href={telHref(agency.phone)}>{agency.phone}</a>
              </p>
              <h2 className="footer__h" style={{ marginTop: '8px' }}>Fax</h2>
              <p style={{ whiteSpace: 'nowrap' }}>{agency.fax}</p>
            </div>
            <div className="footer__col">
              <h2 className="footer__h">Email</h2>
              <p>
                <a href={`mailto:${agency.email}`}>{agency.email}</a>
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
