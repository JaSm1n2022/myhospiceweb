import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AiImageNotice() {
  return (
    <div className="legal-page">
      <div className="shell legal-page__inner">
        <Link to="/" className="legal-page__back">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <article className="legal-content">
          <h1 className="legal-content__title">AI & Illustrative Image Notice</h1>

          <p className="legal-content__meta">
            <strong>Effective Date:</strong> August 21, 2026<br />
            <strong>Last Updated:</strong> August 21, 2026
          </p>

          <p className="legal-content__intro">
            Haloes Touch Hospice Inc. ("Haloes Touch Hospice," "we," "our," or "us") is committed to providing clear and transparent information about the images and visual content used on our website.
          </p>

          <p>
            We use photography, graphics, and other visual imagery to help communicate the compassion, dignity, comfort, and support that are central to hospice care.
          </p>

          <h2>Use of AI-Generated and Illustrative Images</h2>

          <p>
            Some images appearing on this website may be <strong>AI-generated, digitally created, stock photography, or otherwise used for illustrative purposes</strong>.
          </p>

          <p>
            These images are used to visually represent hospice care, companionship, comfort, dignity, family support, and the services provided by Haloes Touch Hospice.
          </p>

          <p>
            Unless specifically identified otherwise, individuals depicted in illustrative images should <strong>not be assumed to be actual Haloes Touch Hospice patients, family members, caregivers, employees, clinicians, physicians, volunteers, or other members of our organization</strong>.
          </p>

          <h2>Haloes Touch Hospice Branding in AI-Generated Images</h2>

          <p>
            Some AI-generated or illustrative images may depict healthcare professionals wearing clothing, identification, or uniforms displaying the <strong>Haloes Touch Hospice</strong> name or branding.
          </p>

          <p>
            These images are created for illustrative and informational purposes. The individuals depicted should not be interpreted as photographs or representations of specific Haloes Touch Hospice employees, clinicians, or contractors unless expressly identified as such.
          </p>

          <p>
            The use of Haloes Touch Hospice branding in an illustrative image is intended to represent the type of compassionate hospice care and support our organization strives to provide.
          </p>

          <h2>No Representation of an Actual Patient</h2>

          <p>
            AI-generated and illustrative images are not intended to represent any specific patient or patient's medical condition.
          </p>

          <p>
            Unless expressly identified otherwise, individuals shown in these images:
          </p>

          <ul>
            <li>Are not actual Haloes Touch Hospice patients.</li>
            <li>Do not represent a particular patient's diagnosis or medical condition.</li>
            <li>Do not represent a specific treatment or clinical outcome.</li>
            <li>Should not be interpreted as demonstrating guaranteed results or experiences from hospice care.</li>
          </ul>

          <p>
            Every patient's condition, care needs, and hospice experience are unique.
          </p>

          <h2>Testimonials and Reviews</h2>

          <p>
            Patient and family testimonials appearing on our website are intended to reflect the experiences and opinions of the individuals who provided them.
          </p>

          <p>
            If an AI-generated, stock, or illustrative image appears near a testimonial or review, <strong>the individual shown in the image should not be assumed to be the person who provided the testimonial</strong> unless the website specifically identifies the image as depicting that individual.
          </p>

          <p>
            Illustrative images are not intended to create or imply a false patient, family, employee, or caregiver endorsement.
          </p>

          <p>
            Individual experiences with hospice care vary, and testimonials should not be interpreted as guarantees that other patients or families will experience identical results.
          </p>

          <h2>Patient Privacy</h2>

          <p>
            Haloes Touch Hospice respects the privacy and dignity of our patients and families.
          </p>

          <p>
            The use of AI-generated and illustrative imagery allows us to visually communicate aspects of hospice care without unnecessarily displaying or identifying actual patients or families.
          </p>

          <p>
            When photographs of actual patients, family members, employees, or other identifiable individuals are used, Haloes Touch Hospice follows applicable privacy requirements and obtains appropriate authorization or permission when required.
          </p>

          <h2>Purpose of Illustrative Imagery</h2>

          <p>
            Illustrative images may be used throughout our website to help communicate topics such as:
          </p>

          <ul>
            <li>Compassionate hospice care</li>
            <li>Skilled nursing services</li>
            <li>Hospice aide services</li>
            <li>Patient and caregiver support</li>
            <li>Emotional and psychosocial support</li>
            <li>Spiritual care</li>
            <li>Bereavement support</li>
            <li>Companionship</li>
            <li>Comfort and quality of life</li>
            <li>Hospice care in the home and other appropriate settings</li>
          </ul>

          <p>
            These images are intended to provide visitors with a visual understanding of hospice care and should not be interpreted as documentation of an actual patient encounter.
          </p>

          <h2>Medical Information Disclaimer</h2>

          <p>
            Images and visual representations appearing on this website are provided for general informational and illustrative purposes only.
          </p>

          <p>
            They should not be interpreted as medical advice, diagnosis, treatment recommendations, or representations that a particular service or treatment is appropriate for any individual.
          </p>

          <p>
            Hospice eligibility and the services provided to each patient are determined according to the patient's individual clinical circumstances, applicable requirements, and individualized plan of care.
          </p>

          <h2>Questions About Website Images</h2>

          <p>
            If you have questions or concerns regarding an image or other content appearing on our website, please contact:
          </p>

          <p className="legal-content__contact">
            <strong>Haloes Touch Hospice Inc.</strong><br />
            11500 S Eastern Ave, Ste 150<br />
            Henderson, NV 89052<br />
            Phone: 702-625-4644<br />
            Email: services@haloestouch.com
          </p>

          <div className="legal-content__notice">
            <p>
              <strong>Transparency Notice:</strong> Some images on this website are AI-generated, digitally created, stock photography, or otherwise used for illustrative purposes. Unless specifically identified otherwise, individuals depicted should not be assumed to be actual Haloes Touch Hospice patients, families, employees, clinicians, or volunteers.
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
