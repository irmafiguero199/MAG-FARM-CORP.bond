import { Helmet } from 'react-helmet-async'
import { Shield, FileText, MapPin, Users, Calendar, Download, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function RegistrationInformation() {
  return (
    <>
      <Helmet>
        <title>Registration & Tax Information | MAG FARM CORP - 501(c)(3) Official Records</title>
        <meta name="description" content="Official registration and tax information for MAG FARM CORP. EIN: 92-0336379. 501(c)(3) status, Florida Entity ID 31954, address: 414 S Buena Vista Ave, Orlando, FL 32835." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/registration" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Registration Information</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Official organizational, tax, and legal documentation for MAG FARM CORP.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">

          {/* Federal Tax Information */}
          <div className="bg-primary-50 rounded-xl p-8 border-2 border-primary-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary-700" />
              <h2 className="font-serif text-2xl font-bold text-earth-900">Federal Tax Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-earth-500 mb-1">Employer Identification Number (EIN)</p>
                <p className="text-3xl font-bold text-primary-700 font-mono">92-0336379</p>
              </div>
              <div>
                <p className="text-sm text-earth-500 mb-1">Federal Tax Status</p>
                <p className="text-xl font-bold text-earth-900">501(c)(3) Tax-Exempt</p>
                <p className="text-sm text-earth-600">Public Charity</p>
              </div>
              <div>
                <p className="text-sm text-earth-500 mb-1">IRS Determination Date</p>
                <p className="text-lg font-semibold text-earth-900">2022</p>
              </div>
              <div>
                <p className="text-sm text-earth-500 mb-1">Tax Deductibility</p>
                <p className="text-lg font-semibold text-earth-900">Donations Fully Tax-Deductible</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-primary-200">
              <p className="text-sm text-earth-700 leading-relaxed">
                <strong>IRS Notice:</strong> MAG FARM CORP is recognized by the Internal Revenue Service as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. Contributions to MAG FARM CORP are tax-deductible to the fullest extent allowed by law. Our accounting period ends on October 31 of each year, and we file Form 990-PF annually with the IRS.
              </p>
            </div>
          </div>

          {/* State Registration */}
          <div className="bg-earth-50 rounded-xl p-8 border border-earth-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-earth-700" />
              <h2 className="font-serif text-2xl font-bold text-earth-900">State Registration</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-earth-500 mb-1">State of Incorporation</p>
                <p className="text-lg font-semibold text-earth-900">Florida</p>
              </div>
              <div>
                <p className="text-sm text-earth-500 mb-1">Florida Entity ID</p>
                <p className="text-lg font-semibold text-earth-900 font-mono">31954</p>
              </div>
              <div>
                <p className="text-sm text-earth-500 mb-1">Date of Incorporation</p>
                <p className="text-lg font-semibold text-earth-900">2022</p>
              </div>
              <div>
                <p className="text-sm text-earth-500 mb-1">Entity Type</p>
                <p className="text-lg font-semibold text-earth-900">Nonprofit Corporation</p>
              </div>
            </div>
          </div>

          {/* Registered Address */}
          <div className="bg-white rounded-xl p-8 border border-earth-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary-700" />
              <h2 className="font-serif text-2xl font-bold text-earth-900">Registered Address</h2>
            </div>

            <div className="bg-earth-50 rounded-lg p-6">
              <p className="text-lg font-semibold text-earth-900">MAG FARM CORP</p>
              <p className="text-earth-700">414 S Buena Vista Ave</p>
              <p className="text-earth-700">Orlando, FL 32835</p>
              <p className="text-earth-700">United States of America</p>

              <div className="mt-4 pt-4 border-t border-earth-200 space-y-2">
                <p className="text-earth-700"><span className="font-medium">Phone:</span> <a href="tel:8778295500" className="text-primary-700 hover:underline">(877) 829-5500</a></p>
                <p className="text-earth-700"><span className="font-medium">Email:</span> <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:underline">admin@MAG-FARM-CORP.bond</a></p>
                <p className="text-earth-700"><span className="font-medium">Website:</span> www.mag-farm-corp.bond</p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="bg-white rounded-xl p-8 border border-earth-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary-700" />
              <h2 className="font-serif text-2xl font-bold text-earth-900">Governance</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-earth-900">Board of Directors</p>
                  <p className="text-earth-600">6-member board meets quarterly. Current President: Jeremy A. Garcia.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-earth-900">Executive Director</p>
                  <p className="text-earth-600">Jeremy A. Garcia serves as the organization's Executive Director, managing daily operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-earth-900">Conflict of Interest Policy</p>
                  <p className="text-earth-600">Annual disclosures required from all board members and key employees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-earth-900">Whistleblower Policy</p>
                  <p className="text-earth-600">Protected reporting mechanism for concerns regarding organizational conduct.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Annual Reports & Form 990 */}
          <div className="bg-earth-50 rounded-xl p-8 border border-earth-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-earth-700" />
              <h2 className="font-serif text-2xl font-bold text-earth-900">Annual Reports & Form 990</h2>
            </div>

            <p className="text-earth-600 leading-relaxed mb-6">
              As a 501(c)(3) organization, MAG FARM CORP files Form 990-PF annually with the IRS and publishes
              annual reports detailing our programs, finances, and impact. These documents demonstrate our
              commitment to transparency and accountability.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-earth-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-earth-900">Annual Report 2025</span>
                </div>
                <span className="text-sm text-earth-500">Available upon request</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-earth-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-earth-900">Form 990-PF (2024)</span>
                </div>
                <span className="text-sm text-earth-500">Available upon request</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-earth-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-earth-900">Audited Financial Statements (2024)</span>
                </div>
                <span className="text-sm text-earth-500">Available upon request</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-100 rounded-lg">
              <p className="text-sm text-primary-800 flex items-center gap-2">
                <Download className="w-4 h-4" />
                To request copies of these documents, please email <a href="mailto:admin@MAG-FARM-CORP.bond" className="font-semibold underline">admin@MAG-FARM-CORP.bond</a> or call <a href="tel:8778295500" className="font-semibold underline">(877) 829-5500</a>.
              </p>
            </div>
          </div>

          {/* Donation Deductibility */}
          <div className="bg-primary-800 text-white rounded-xl p-8">
            <h2 className="font-serif text-2xl font-bold mb-4">Tax-Deductible Donations</h2>
            <p className="text-primary-200 leading-relaxed mb-4">
              All donations to MAG FARM CORP (EIN: 92-0336379) are tax-deductible to the fullest extent
              permitted by federal law. Donors will receive an acknowledgment letter for tax purposes.
              Our legal address for donation receipts is:
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <p className="font-semibold">MAG FARM CORP</p>
              <p>414 S Buena Vista Ave</p>
              <p>Orlando, FL 32835</p>
              <p>EIN: 92-0336379</p>
            </div>
            <p className="text-sm text-primary-300">
              For donation questions, contact <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-secondary-400 hover:underline">admin@MAG-FARM-CORP.bond</a>
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
