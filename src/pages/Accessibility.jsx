import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Accessibility() {
  return (
    <div className="legal-page">
      <div className="shell legal-page__inner">
        <Link to="/" className="legal-page__back">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <article className="legal-content">
          <h1 className="legal-content__title">Accessibility Statement</h1>

          <p className="legal-content__intro">
            Haloes Touch Hospice Inc. is committed to ensuring digital accessibility for people with disabilities. We are continually working to improve the accessibility of our website to ensure a positive experience for all visitors.
          </p>

          <h2>Our Commitment</h2>

          <p>
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards to ensure our website is accessible to individuals with disabilities.
          </p>

          <h2>Accessibility Features</h2>

          <p>Our website includes the following accessibility features:</p>

          <ul>
            <li>Clear and consistent navigation structure</li>
            <li>Descriptive link text and headings</li>
            <li>Alternative text for images</li>
            <li>Keyboard navigation support</li>
            <li>Color contrast that meets accessibility standards</li>
            <li>Readable and resizable text</li>
          </ul>

          <h2>Ongoing Efforts</h2>

          <p>
            We are committed to maintaining and improving the accessibility of our website. Our efforts include:
          </p>

          <ul>
            <li>Regular accessibility reviews and testing</li>
            <li>Training staff on accessibility best practices</li>
            <li>Incorporating accessibility into our website development process</li>
            <li>Monitoring and implementing updates to accessibility standards</li>
          </ul>

          <h2>Third-Party Content</h2>

          <p>
            While we strive to ensure accessibility throughout our website, some content may be provided by third parties over which we have limited control.
          </p>

          <h2>Feedback and Assistance</h2>

          <p>
            We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
          </p>

          <p>
            If you need assistance accessing information on our website or require information in an alternative format, we are here to help.
          </p>

          <h2>Contact Us</h2>

          <p>
            To report an accessibility issue, request assistance, or provide feedback, please contact:
          </p>

          <p className="legal-content__contact">
            <strong>Haloes Touch Hospice Inc.</strong><br />
            11500 S Eastern Ave, Ste 150<br />
            Henderson, NV 89052<br />
            Phone: 702-625-4644<br />
            Email: services@haloestouch.com
          </p>

          <p>
            We will make reasonable efforts to provide you with the information you need in an accessible format.
          </p>
        </article>

        <Link to="/" className="legal-page__back legal-page__back--bottom">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
