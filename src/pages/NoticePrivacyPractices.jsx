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

          <p className="legal-content__contact">
            <strong>Haloes Touch Hospice Inc.</strong><br />
            11500 S Eastern Ave, Suite 150<br />
            Henderson, NV 89052
          </p>

          <p className="legal-content__meta">
            <strong>Effective Date:</strong> June 1, 2026<br />
            <strong>Last Updated:</strong> August 21, 2026
          </p>

          <h2>Website Notice</h2>

          <p>
            This website is provided primarily for general informational purposes regarding Haloes Touch Hospice Inc. and hospice services.
          </p>

          <p>
            The website is not intended to replace professional medical advice, diagnosis, or treatment and should not be used for medical emergencies.
          </p>

          <p>
            Unless a secure method specifically designated for communicating Protected Health Information is provided, visitors should <strong>not submit confidential medical information or Protected Health Information through general website contact forms or standard email.</strong>
          </p>

          <p>
            For information about how this website handles information submitted by website visitors, please review our separate <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>

          <div className="legal-content__notice">
            <p>
              © 2026 Haloes Touch Hospice Inc. All rights reserved.
            </p>
          </div>
        </article>

        <Link to="/" className="legal-page__back legal-page__back--bottom">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
