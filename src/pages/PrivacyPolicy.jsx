import { Helmet } from 'react-helmet-async'
import { Shield } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | MAG FARM CORP - 501(c)(3) Nonprofit</title>
        <meta name="description" content="Privacy Policy for MAG FARM CORP, a 501(c)(3) nonprofit at 414 S Buena Vista Ave, Orlando, FL 32835. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/privacy-policy" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-200">Effective Date: August 5, 2026</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none text-earth-700">
            <div className="flex items-center gap-3 mb-6 p-4 bg-earth-50 rounded-lg">
              <Shield className="w-6 h-6 text-primary-700" />
              <p className="text-sm text-earth-600 m-0">
                <strong>MAG FARM CORP</strong> | 414 S Buena Vista Ave, Orlando, FL 32835 | EIN: 92-0336379 |
                <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700"> admin@MAG-FARM-CORP.bond</a>
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-earth-900">1. Introduction</h2>
            <p>
              MAG FARM CORP ("we," "our," or "us") is a registered 501(c)(3) nonprofit organization
              (EIN: 92-0336379) headquartered at 414 S Buena Vista Ave, Orlando, FL 32835. We are
              committed to protecting the privacy of our website visitors, donors, volunteers, and
              program participants. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website at www.mag-farm-corp.bond.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and donation history.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on site, and referring URLs.</li>
              <li><strong>Volunteer Information:</strong> Skills, availability, background check results, and emergency contacts.</li>
              <li><strong>Program Participation:</strong> Demographic information for grant reporting (aggregated and anonymized).</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process donations and issue tax-deductible receipts</li>
              <li>Communicate about programs, events, and organizational updates</li>
              <li>Coordinate volunteer activities</li>
              <li>Comply with IRS 501(c)(3) reporting requirements</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and ensure security</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">4. Information Sharing</h2>
            <p>
              MAG FARM CORP does not sell, rent, or trade your personal information. We may share
              information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers (payment processors, email platforms) under confidentiality agreements</li>
              <li>IRS or state regulators as required by law for 501(c)(3) compliance</li>
              <li>Law enforcement when legally compelled</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data.
              However, no internet transmission is completely secure. We retain personal information
              only as long as necessary for operational and legal purposes.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Opt out of marketing communications</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">7. Cookies</h2>
            <p>
              Our website uses essential cookies for functionality and analytics cookies to understand
              visitor behavior. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">8. Children's Privacy</h2>
            <p>
              Our website is not directed at children under 13. We do not knowingly collect personal
              information from children without parental consent.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with
              an updated effective date.
            </p>

            <h2 className="font-serif text-2xl font-bold text-earth-900 mt-8">10. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact:
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
