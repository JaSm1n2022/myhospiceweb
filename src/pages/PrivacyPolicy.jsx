import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="shell legal-page__inner">
        <Link to="/" className="legal-page__back">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <article className="legal-content">
          <h1 className="legal-content__title">Privacy Policy</h1>

          <p className="legal-content__meta">
            <strong>Effective Date:</strong> June 1, 2026<br />
            <strong>Last Updated:</strong> August 21, 2026
          </p>

          <p className="legal-content__intro">
            Haloes Touch Hospice Inc. ("Haloes Touch Hospice," "we," "our," or "us") respects your privacy and is committed to protecting the information you provide when visiting our website.
          </p>

          <p>
            This Privacy Policy explains how information may be collected, used, and protected when you visit our website or communicate with us through the website.
          </p>

          <p>
            This Website Privacy Policy is separate from our <strong>HIPAA Notice of Privacy Practices</strong>, which describes how we may use and disclose protected health information ("PHI") and explains your rights regarding that information.
          </p>

          <h2>Information You Provide to Us</h2>

          <p>You may choose to provide information to us when you:</p>

          <ul>
            <li>Submit a contact or hospice inquiry form</li>
            <li>Request information about hospice services</li>
            <li>Request a hospice evaluation</li>
            <li>Contact us by email or telephone</li>
            <li>Submit another inquiry through our website</li>
          </ul>

          <p>
            Depending on the form or communication, information you provide may include your name, telephone number, email address, relationship to a prospective patient, and other information you voluntarily provide.
          </p>

          <p>
            Please avoid submitting detailed medical information through general website contact forms unless the form is specifically designed and secured for that purpose.
          </p>

          <h2>Information Collected Automatically</h2>

          <p>
            When you visit our website, certain technical information may be collected automatically by our website hosting provider or other technologies used to operate the website.
          </p>

          <p>This information may include:</p>

          <ul>
            <li>Internet Protocol (IP) address</li>
            <li>Browser and device type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Date and time of visits</li>
            <li>Referring website</li>
            <li>General website usage and performance information</li>
          </ul>

          <p>We may use this information to operate, secure, maintain, and improve our website.</p>

          <h2>Cookies and Similar Technologies</h2>

          <p>
            Our website may use cookies or similar technologies that are necessary for website functionality, security, performance, or analytics.
          </p>

          <p>
            If we use analytics, advertising, tracking pixels, session-recording technology, or other third-party tracking technologies, we will evaluate their use in accordance with applicable privacy and healthcare requirements.
          </p>

          <h2>How We Use Information</h2>

          <p>Information collected through our website may be used to:</p>

          <ul>
            <li>Respond to questions and inquiries</li>
            <li>Provide information about hospice services</li>
            <li>Follow up on requests for hospice information or evaluation</li>
            <li>Operate and maintain the website</li>
            <li>Improve website functionality and user experience</li>
            <li>Protect the website against fraud, misuse, or security threats</li>
            <li>Comply with applicable legal and regulatory requirements</li>
          </ul>

          <p>
            We do not use information submitted through our website in a manner inconsistent with applicable privacy laws.
          </p>

          <h2>Protected Health Information and HIPAA</h2>

          <p>
            Certain information provided to Haloes Touch Hospice may constitute Protected Health Information under the Health Insurance Portability and Accountability Act ("HIPAA") and other applicable laws.
          </p>

          <p>
            When information is considered PHI, Haloes Touch Hospice handles that information in accordance with applicable HIPAA requirements and our <strong>Notice of Privacy Practices</strong>.
          </p>

          <p>
            Our Notice of Privacy Practices provides additional information regarding how we may use and disclose PHI and explains your rights concerning your health information.
          </p>

          <h2>Third-Party Service Providers</h2>

          <p>
            We may use third-party service providers to help operate, secure, maintain, or host our website.
          </p>

          <p>
            When required by applicable law, appropriate agreements and safeguards are implemented before protected information is disclosed to third-party service providers.
          </p>

          <p>
            We do not authorize third-party service providers to use protected health information for their own independent advertising or marketing purposes in violation of applicable law.
          </p>

          <h2>Links to Other Websites</h2>

          <p>
            Our website may contain links to websites operated by third parties.
          </p>

          <p>
            Haloes Touch Hospice is not responsible for the privacy practices, security, availability, or content of third-party websites. We encourage you to review the privacy policies of any external website you visit.
          </p>

          <h2>Data Security</h2>

          <p>
            We use reasonable administrative, technical, and organizational safeguards designed to protect information under our control.
          </p>

          <p>
            However, no website, electronic transmission, or information storage system can be guaranteed to be completely secure.
          </p>

          <p>
            If you believe sensitive information has been sent to us incorrectly or you have concerns regarding the security of information you submitted, please contact us.
          </p>

          <h2>Children's Privacy</h2>

          <p>
            Our website is intended to provide information about hospice services and is not directed toward children for independent use.
          </p>

          <p>
            We do not knowingly use the website to solicit personal information directly from children.
          </p>

          <h2>Your Privacy Choices</h2>

          <p>
            Depending on applicable law and the nature of the information involved, you may have rights regarding certain personal information.
          </p>

          <p>
            Rights relating specifically to your protected health information are described in our <strong>Notice of Privacy Practices</strong>.
          </p>

          <h2>Changes to This Privacy Policy</h2>

          <p>
            We may update this Website Privacy Policy periodically to reflect changes in our website, technology, business practices, or applicable legal requirements.
          </p>

          <p>
            When changes are made, the updated policy will be posted on this page with a revised "Last Updated" date.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have questions about this Website Privacy Policy or our privacy practices, please contact:
          </p>

          <p className="legal-content__contact">
            <strong>Haloes Touch Hospice Inc.</strong><br />
            11500 S Eastern Ave, Ste 150<br />
            Henderson, NV 89052<br />
            Phone: 702-625-4644<br />
            Email: services@haloestouch.com
          </p>

          <p>
            For information regarding the privacy of your health information and your rights under HIPAA, please review our <strong>Notice of Privacy Practices</strong>.
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
