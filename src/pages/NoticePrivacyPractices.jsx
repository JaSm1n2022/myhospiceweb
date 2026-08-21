import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NoticePrivacyPractices() {
  return (
    <div className="legal-page">
      <div className="shell legal-page__inner">
        <Link to="/" className="legal-page__back">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <article className="legal-content">
          <h1 className="legal-content__title">Notice of Privacy Practices</h1>

          <p className="legal-content__meta">
            <strong>Effective Date:</strong> June 1, 2026
          </p>

          <p className="legal-content__intro">
            This Notice of Privacy Practices describes how Haloes Touch Hospice Inc. may use and disclose your protected health information and your rights regarding that information.
          </p>

          <div className="legal-content__notice">
            <p><strong>Note:</strong> The official HIPAA Notice of Privacy Practices document will be provided to patients and families upon admission and is available upon request.</p>
          </div>

          <h2>Our Commitment to Your Privacy</h2>

          <p>
            Haloes Touch Hospice Inc. is committed to protecting the privacy of your health information. This Notice of Privacy Practices explains:
          </p>

          <ul>
            <li>How we may use and disclose your protected health information</li>
            <li>Your rights regarding your health information</li>
            <li>Our obligations concerning the use and disclosure of your health information</li>
          </ul>

          <h2>How We May Use and Disclose Your Health Information</h2>

          <p>
            We may use and disclose your protected health information for the following purposes:
          </p>

          <h3>Treatment</h3>
          <p>
            We may use and disclose your health information to provide, coordinate, or manage your hospice care and related services.
          </p>

          <h3>Payment</h3>
          <p>
            We may use and disclose your health information to obtain payment for hospice services, including billing Medicare, Medicaid, or insurance companies.
          </p>

          <h3>Healthcare Operations</h3>
          <p>
            We may use and disclose your health information for healthcare operations such as quality improvement, staff training, regulatory compliance, and business management.
          </p>

          <h2>Your Rights</h2>

          <p>You have the following rights regarding your protected health information:</p>

          <ul>
            <li>Right to request restrictions on certain uses and disclosures</li>
            <li>Right to receive confidential communications</li>
            <li>Right to inspect and copy your health information</li>
            <li>Right to request amendments to your health information</li>
            <li>Right to receive an accounting of disclosures</li>
            <li>Right to receive a paper copy of this Notice</li>
          </ul>

          <h2>Contact Information</h2>

          <p>
            For a complete copy of our HIPAA Notice of Privacy Practices or to exercise your privacy rights, please contact:
          </p>

          <p className="legal-content__contact">
            <strong>Haloes Touch Hospice Inc.</strong><br />
            Privacy Officer<br />
            11500 S Eastern Ave, Ste 150<br />
            Henderson, NV 89052<br />
            Phone: 702-625-4644<br />
            Email: services@haloestouch.com
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
