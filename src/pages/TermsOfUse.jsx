import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfUse() {
  return (
    <div className="legal-page">
      <div className="shell legal-page__inner">
        <Link to="/" className="legal-page__back">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <article className="legal-content">
          <h1 className="legal-content__title">Terms of Use</h1>

          <p className="legal-content__meta">
            <strong>Effective Date:</strong> June 1, 2026<br />
            <strong>Last Updated:</strong> August 21, 2026
          </p>

          <p className="legal-content__intro">
            Welcome to the Haloes Touch Hospice Inc. website. By accessing or using this website, you agree to these Terms of Use.
          </p>

          <h2>Medical Disclaimer</h2>

          <p>
            Information provided on this website is for general educational purposes and should not be considered a substitute for professional medical advice, diagnosis, or treatment.
          </p>

          <p>
            If you have questions regarding your health or hospice care, please consult an appropriate healthcare professional.
          </p>

          <p>
            The information on this website does not create a physician-patient relationship or any other professional healthcare relationship between you and Haloes Touch Hospice Inc.
          </p>

          <h2>Use of Website</h2>

          <p>
            This website is intended to provide general information about hospice services offered by Haloes Touch Hospice Inc.
          </p>

          <p>
            You may use this website for lawful purposes and in accordance with these Terms of Use. You may not use this website:
          </p>

          <ul>
            <li>In any way that violates applicable federal, state, or local laws or regulations</li>
            <li>To transmit or distribute any harmful, threatening, abusive, defamatory, or otherwise objectionable material</li>
            <li>To impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            <li>To engage in any conduct that could damage, disable, or impair the website</li>
            <li>To attempt to gain unauthorized access to the website or related systems</li>
          </ul>

          <h2>Intellectual Property</h2>

          <p>
            The content on this website, including text, graphics, logos, images, and software, is the property of Haloes Touch Hospice Inc. or its content suppliers and is protected by applicable intellectual property laws.
          </p>

          <p>
            You may not reproduce, distribute, modify, or create derivative works from the content without express written permission from Haloes Touch Hospice Inc.
          </p>

          <h2>Links to Third-Party Websites</h2>

          <p>
            This website may contain links to third-party websites that are not owned or controlled by Haloes Touch Hospice Inc.
          </p>

          <p>
            We are not responsible for the content, privacy policies, or practices of third-party websites. We encourage you to review the terms and privacy policies of any third-party website you visit.
          </p>

          <h2>Disclaimer of Warranties</h2>

          <p>
            This website is provided on an "as is" and "as available" basis. Haloes Touch Hospice Inc. makes no representations or warranties of any kind, express or implied, regarding the operation of the website or the information, content, or materials included on the website.
          </p>

          <p>
            While we strive to provide accurate and current information, we do not warrant that the website will be error-free, uninterrupted, or free from viruses or other harmful components.
          </p>

          <h2>Limitation of Liability</h2>

          <p>
            To the fullest extent permitted by applicable law, Haloes Touch Hospice Inc. shall not be liable for any damages arising from your use of this website, including direct, indirect, incidental, consequential, or punitive damages.
          </p>

          <h2>Changes to Terms of Use</h2>

          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective when posted on this page with a revised "Last Updated" date.
          </p>

          <p>
            Your continued use of the website following the posting of changes constitutes your acceptance of those changes.
          </p>

          <h2>Contact Information</h2>

          <p>
            If you have questions about these Terms of Use, please contact:
          </p>

          <p className="legal-content__contact">
            <strong>Haloes Touch Hospice Inc.</strong><br />
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
