import { Helmet } from 'react-helmet-async'
import { FileText } from 'lucide-react'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | MAG FARM CORP - 501(c)(3) Nonprofit</title>
        <meta name="description" content="Terms of Service for MAG FARM CORP website. 501(c)(3) nonprofit at 414 S Buena Vista Ave, Orlando, FL 32835. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/terms-of-service" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-primary-200">Last Updated: August 5, 2026</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none text-earth-700">
            <div className="flex items-center gap-3 mb-6 p-4 bg-earth-50 rounded-lg">
              <FileText className="w-6 h-6 text-primary-700" />
              <p className="text-sm text-earth-600 m-0">
                <strong>MAG FARM CORP</strong> | 414 S Buena Vista Ave, Orlando, FL 32835 | EIN: 92-0336379 |
                <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700"> admin@MAG-FARM-CORP.bond</a>
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-earth-900">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of MAG FARM CORP ("we," "our," or "us"), a registered
              501(c)(3) nonprofit organization (EIN: 92-0336379) located at 414 S Buena Vista Ave,
              Orlando, FL 32835, you agree to be bound by these Terms of Service. If you do not agree,
              please do not use our website.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">2. Organization Information</h2>
            <p>
              MAG FARM CORP is a federally recognized tax-exempt nonprofit organization under Section
              501(c)(3) of the Internal Revenue Code. Our legal business address is 414 S Buena Vista Ave,
              Orlando, FL 32835. Our Employer Identification Number (EIN) is 92-0336379. We are registered
              in the State of Florida under Entity ID 31954.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">3. Use of Website</h2>
            <p>You agree to use our website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the site in any way that violates applicable federal, state, or local laws</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Scrape, data-mine, or systematically collect content without permission</li>
              <li>Impersonate MAG FARM CORP staff or board members</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">4. Donations</h2>
            <p>
              All donations made through our website are voluntary and non-refundable except in cases
              of processing error. Donations to MAG FARM CORP (EIN: 92-0336379) are tax-deductible to
              the fullest extent allowed by U.S. law. Donors will receive acknowledgment letters for
              tax purposes via email or postal mail.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property
              of MAG FARM CORP unless otherwise noted. Content may be used for personal, non-commercial
              purposes with attribution. Commercial use requires written permission.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">6. Disclaimer of Warranties</h2>
            <p>
              This website is provided "as is" without warranties of any kind. MAG FARM CORP does not
              guarantee that the site will be error-free, secure, or continuously available. We are not
              responsible for third-party content linked from our site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, MAG FARM CORP shall not be liable for any indirect,
              incidental, or consequential damages arising from your use of this website or participation
              in our programs.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">8. Volunteer Participation</h2>
            <p>
              Participation in MAG FARM CORP volunteer activities is at your own risk. Volunteers agree
              to follow safety guidelines and instructions provided by staff. Minors must have parental
              consent to participate in youth programs.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State
              of Florida, without regard to conflict of law principles. Any disputes shall be resolved
              in the courts of Orange County, Florida.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">10. Changes to Terms</h2>
            <p>
              We may revise these Terms at any time. Continued use of the website after changes constitutes
              acceptance of the revised Terms.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">11. Contact Information</h2>
            <p>
              For questions about these Terms, contact:
            </p>
            <div className="bg-earth-50 rounded-lg p-4 mt-4">
              <p className="font-semibold text-earth-900">MAG FARM CORP</p>
              <p>414 S Buena Vista Ave</p>
              <p>Orlando, FL 32835</p>
              <p>Email: <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:underline">admin@MAG-FARM-CORP.bond</a></p>
              <p>Phone: <a href="tel:8778295500" className="text-primary-700 hover:underline">(877) 829-5500</a></p>
              <p>EIN: 92-0336379</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
