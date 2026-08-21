import { useState } from 'react'
import { Home, Users, Heart, Award, FileText, Mail, HelpCircle, Star } from 'lucide-react'
import Halo from './components/Halo.jsx'
import photoEmbrace from './assets/embrace.jpg'
import photoCompassionate from '../source/compassionate.png'
import photoElderlyChair from '../source/elderychair.png'
import photoElderyCare from '../source/elderycare.png'
import achcMark from '../source/achc-white.png'
import elderHand from './assets/elderhand.png'
import Reveal from './components/Reveal.jsx'
import Faq from './components/Faq.jsx'
import Reviews from './components/Reviews.jsx'
import ServiceIcon from './components/ServiceIcon.jsx'
import {
  agency,
  services,
  servicesIntro,
  advantages,
  advantageIntro,
  therapies,
  medicareCriteria,
} from './data/content.js'

const telHref = (n) => `tel:+1${n.replace(/\D/g, '')}`

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

function AchcBadge({ small = false }) {
  return (
    <div className={`achc-badge ${small ? 'achc-badge--sm' : ''}`}>
      <img
        className={`achc ${small ? 'achc--sm' : ''}`}
        src={achcMark}
        alt="ACHC"
        width="276"
        height="282"
      />
      <span className="achc-badge__label">Accredited</span>
    </div>
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
            <a className="nav__link" href="#reviews-h" onClick={(e) => scrollToSection(e, 'reviews-h')}>
              <Star size={18} />
              <span>Reviews</span>
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
        <section className="hero section--about" style={{ '--bg-image': `url(${elderHand})` }}>
          <div className="hero__halo">
            <Halo animate />
          </div>
          <div className="shell hero__inner">
            <h1 className="hero__title">
              Compassion and care that feels like family.
            </h1>
            <p className="hero__lede">
              Providing personalized hospice care wherever you call home in Las Vegas and Henderson — supporting patients and families with comfort, dignity, and compassionate care every step of the way.
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
                  src={photoCompassionate}
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
            <div className="svc-band">
              <Reveal className="svc-band__text">
                <Eyebrow>Our Services</Eyebrow>
                <h2 className="h2" id="services-h">
                  Hospice Services
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
                    src={photoElderlyChair}
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

            {/* Four Levels of Hospice Care */}
            <Reveal style={{ marginTop: 'clamp(64px, 9vw, 100px)' }}>
              <div className="levels-intro">
                <h3 className="h2" style={{ marginBottom: '16px' }}>
                  Four Levels of Hospice Care
                </h3>
                <p className="levels-intro__subtitle">
                  The Right Level of Care for Every Stage of the Journey
                </p>
                <p className="prose" style={{ marginTop: '20px' }}>
                  Hospice care is designed to respond to each patient's changing needs. Depending on the patient's condition and circumstances, Medicare recognizes four levels of hospice care.
                </p>
                <p className="prose">
                  Our hospice team continually evaluates each patient's needs and determines the appropriate level of care based on clinical circumstances and the individualized plan of care.
                </p>
              </div>
            </Reveal>

            <div className="levels-grid">
              <Reveal className="level-card" delay={0}>
                <div className="level-card__number">1</div>
                <h4 className="level-card__title">Routine Home Care</h4>
                <p className="level-card__tagline">Comfort and support wherever you call home.</p>
                <p className="level-card__text">
                  Routine Home Care is the most common level of hospice care. It is provided when a patient is receiving hospice services in their place of residence and does not require Continuous Home Care or General Inpatient Care.
                </p>
                <p className="level-card__text">
                  The hospice interdisciplinary team provides scheduled care based on the patient's individualized plan of care. Services may include:
                </p>
                <ul className="level-card__list">
                  <li>Skilled nursing care</li>
                  <li>Pain and symptom management</li>
                  <li>Hospice aide services</li>
                  <li>Social work support</li>
                  <li>Spiritual care</li>
                  <li>Medications related to the terminal illness and related conditions</li>
                  <li>Medical equipment and supplies related to the hospice plan of care</li>
                  <li>Counseling and caregiver education</li>
                  <li>Volunteer services, when appropriate and available</li>
                </ul>
                <p className="level-card__text">
                  A patient's home may be a private residence, assisted living or memory care community, nursing facility, or another setting the patient considers home.
                </p>
                <p className="level-card__note">
                  <strong>Routine Home Care does not mean that hospice staff remain in the home 24 hours a day.</strong> Hospice support is available 24/7 for hospice-related concerns, while in-person visits are provided according to the patient's needs and plan of care.
                </p>
              </Reveal>

              <Reveal className="level-card" delay={90}>
                <div className="level-card__number">2</div>
                <h4 className="level-card__title">Continuous Home Care</h4>
                <p className="level-card__tagline">Additional care during periods of crisis.</p>
                <p className="level-card__text">
                  Continuous Home Care may be provided during a period of crisis when a patient experiences acute medical symptoms that require intensive hospice care to achieve palliation and symptom management while remaining at home.
                </p>
                <p className="level-card__text">
                  During Continuous Home Care, hospice provides extended nursing care, with hospice aide services supplementing nursing care as appropriate.
                </p>
                <p className="level-card__text">
                  Examples of symptoms that may require this level of care can include:
                </p>
                <ul className="level-card__list">
                  <li>Uncontrolled pain</li>
                  <li>Severe shortness of breath</li>
                  <li>Significant agitation or restlessness</li>
                  <li>Uncontrolled nausea or vomiting</li>
                  <li>Other acute symptoms requiring intensive management</li>
                </ul>
                <p className="level-card__note">
                  Continuous Home Care is provided only when specific clinical and Medicare requirements are met. It is intended for short-term management of a medical crisis and is <strong>not a substitute for long-term or 24-hour custodial caregiving.</strong>
                </p>
              </Reveal>

              <Reveal className="level-card" delay={0}>
                <div className="level-card__number">3</div>
                <h4 className="level-card__title">Inpatient Respite Care</h4>
                <p className="level-card__tagline">Temporary relief for caregivers.</p>
                <p className="level-card__text">
                  Caring for someone with a life-limiting illness can be physically and emotionally demanding. Inpatient Respite Care provides short-term relief for the patient's caregiver when respite is needed.
                </p>
                <p className="level-card__text">
                  The patient is temporarily admitted to a Medicare-approved inpatient facility arranged by the hospice, such as a participating:
                </p>
                <ul className="level-card__list">
                  <li>Hospice inpatient facility</li>
                  <li>Hospital</li>
                  <li>Skilled nursing facility</li>
                </ul>
                <p className="level-card__text">
                  Under the Medicare Hospice Benefit, inpatient respite care may generally be provided for <strong>up to five consecutive days at a time</strong>.
                </p>
                <p className="level-card__text">
                  After the respite period, the patient generally returns home and resumes Routine Home Care.
                </p>
              </Reveal>

              <Reveal className="level-card" delay={90}>
                <div className="level-card__number">4</div>
                <h4 className="level-card__title">General Inpatient Care</h4>
                <p className="level-card__tagline">Intensive symptom management when symptoms cannot be managed in another setting.</p>
                <p className="level-card__text">
                  General Inpatient Care, or GIP, is a short-term level of hospice care for patients experiencing pain or other acute symptoms that cannot feasibly be managed in their current setting.
                </p>
                <p className="level-card__text">
                  The patient is temporarily admitted to an appropriate inpatient setting where intensive nursing and hospice care can be provided.
                </p>
                <p className="level-card__text">
                  GIP may be appropriate for situations involving:
                </p>
                <ul className="level-card__list">
                  <li>Uncontrolled or severe pain</li>
                  <li>Severe respiratory distress</li>
                  <li>Unmanageable agitation or delirium</li>
                  <li>Persistent nausea or vomiting</li>
                  <li>Other symptoms requiring intensive nursing intervention</li>
                </ul>
                <p className="level-card__note">
                  General Inpatient Care is <strong>not intended to be permanent residential placement</strong>. Once the patient's symptoms are stabilized and can be managed at a lower level of care, the hospice team works with the patient and family to transition to the appropriate setting and level of care.
                </p>
              </Reveal>
            </div>

            <Reveal className="cta" style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
              <div>
                <h3 className="h2" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
                  Care That Changes With Your Needs
                </h3>
                <p className="cta__text">
                  Every hospice journey is different. A patient may receive different levels of hospice care as their condition and needs change.
                </p>
                <p className="cta__text">
                  Our interdisciplinary hospice team continually evaluates each patient's condition and develops an individualized plan of care focused on <strong>comfort, dignity, symptom management, and quality of life.</strong>
                </p>
                <p className="cta__text" style={{ fontWeight: '600', marginTop: '16px' }}>
                  If you are unsure which level of hospice care may be appropriate for you or your loved one, contact Haloes Touch Hospice. Our team can answer your questions, evaluate the patient's needs, and explain available hospice services.
                </p>
              </div>
              <a className="btn btn--gold" href={telHref(agency.phone)}>
                Call {agency.phone}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---------- Advantage ---------- */}
        <section className="section section--quiet" aria-labelledby="advantage-h">
          <div className="shell">
            <div className="svc-band svc-band--mirror">
              <Reveal className="svc-band__media">
                <figure className="figure svc-band__figure">
                  <img
                    src={photoElderyCare}
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

        {/* ---------- Reviews ---------- */}
        <Reviews />

        {/* ---------- FAQ ---------- */}
        <Faq />

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
        <div className="shell footer__legal">
          <div className="footer__legal-section">
            <h3 className="footer__legal-h">Legal & Privacy</h3>
            <div className="footer__legal-links">
              <a href="#privacy-policy">Privacy Policy</a>
              <span className="footer__dot">•</span>
              <a href="#terms-of-use">Terms of Use</a>
              <span className="footer__dot">•</span>
              <a href="#notice-privacy">Notice of Privacy Practices</a>
              <span className="footer__dot">•</span>
              <a href="#accessibility">Accessibility</a>
            </div>
          </div>
        </div>

        <div className="shell footer__base">
          <div className="footer__base-content">
            <p>
              © {new Date().getFullYear()} {agency.name}. All rights reserved.
            </p>
            <p className="footer__seal">
              <AchcBadge small />
              <span>Medicare certified</span>
            </p>
          </div>
          <p className="footer__disclaimer">
            <strong>Image Notice:</strong> Some images on this website are AI-generated or used for illustrative purposes. They are intended to represent the compassionate care and services we provide and may not depict actual Haloes Touch Hospice patients, families, or staff.
          </p>
          <p className="footer__disclaimer">
            <strong>Medical Disclaimer:</strong> Information provided on this website is for general educational purposes and should not be considered a substitute for professional medical advice, diagnosis, or treatment. If you have questions regarding your health or hospice care, please consult an appropriate healthcare professional.
          </p>
        </div>
      </footer>
    </>
  )
}
