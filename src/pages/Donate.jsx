import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Heart, Shield, CheckCircle, Mail, Building, CreditCard } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const presetAmounts = [25, 50, 100, 250, 500, 1000]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const finalAmount = amount === 'custom' ? customAmount : amount

  return (
    <>
      <Helmet>
        <title>Donate | MAG FARM CORP - Tax-Deductible 501(c)(3) Nonprofit</title>
        <meta name="description" content="Make a tax-deductible donation to MAG FARM CORP, a 501(c)(3) nonprofit in Orlando, FL. EIN: 92-0336379. Support urban agriculture and food security." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/donate" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Your tax-deductible donation to MAG FARM CORP (EIN: 92-0336379) directly funds urban gardens,
            youth education, and food security programs in Orlando, Florida.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Donation Form */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-primary-700" />
                <span className="text-sm font-medium text-primary-700">501(c)(3) Tax-Deductible | EIN: 92-0336379</span>
              </div>

              {submitted ? (
                <div className="bg-earth-50 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h2 className="font-serif text-2xl font-bold text-earth-900 mb-2">Thank You!</h2>
                  <p className="text-earth-600 mb-4">
                    Your pledge of ${finalAmount} to MAG FARM CORP has been recorded.
                    This is a demonstration form. To complete your actual donation, please contact us at
                    <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:underline"> admin@MAG-FARM-CORP.bond</a>.
                  </p>
                  <p className="text-sm text-earth-500">
                    MAG FARM CORP | EIN: 92-0336379 | 414 S Buena Vista Ave, Orlando, FL 32835
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-3">Select Donation Amount *</label>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setAmount(amt.toString()); setCustomAmount('') }}
                          className={`py-3 rounded-lg font-semibold border-2 transition-colors ${
                            amount === amt.toString()
                              ? 'bg-primary-700 text-white border-primary-700'
                              : 'bg-white text-earth-700 border-earth-300 hover:border-primary-400'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setAmount('custom')}
                        className={`py-3 px-4 rounded-lg font-semibold border-2 transition-colors ${
                          amount === 'custom'
                            ? 'bg-primary-700 text-white border-primary-700'
                            : 'bg-white text-earth-700 border-earth-300 hover:border-primary-400'
                        }`}
                      >
                        Custom
                      </button>
                      {amount === 'custom' && (
                        <input
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="flex-1 px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      )}
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1">Full Name *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1">Mailing Address *</label>
                      <input type="text" required placeholder="Street Address" className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 mb-2" />
                      <div className="grid grid-cols-2 gap-2">
                        <input type="text" required placeholder="City" className="px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        <input type="text" required placeholder="State, ZIP" className="px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg">
                    <Heart className="w-5 h-5 mr-2" />
                    Complete Donation
                  </button>

                  <div className="text-center space-y-2">
                    <p className="text-xs text-earth-500">
                      MAG FARM CORP is a registered 501(c)(3) nonprofit organization.
                    </p>
                    <p className="text-xs text-earth-500">
                      EIN: 92-0336379 | 414 S Buena Vista Ave, Orlando, FL 32835
                    </p>
                    <p className="text-xs text-earth-500">
                      All donations are tax-deductible to the fullest extent allowed by law.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="font-serif text-xl font-bold text-earth-900 mb-4">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">$25</p>
                      <p className="text-sm text-earth-600">Provides seeds and tools for one community garden plot</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">$50</p>
                      <p className="text-sm text-earth-600">Sponsors one student for a month of agricultural education</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">$100</p>
                      <p className="text-sm text-earth-600">Funds a week of fresh produce deliveries to a senior center</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">$250</p>
                      <p className="text-sm text-earth-600">Establishes a new raised garden bed at a community site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">$500+</p>
                      <p className="text-sm text-earth-600">Sponsors a full youth education semester or garden infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
                <h3 className="font-serif text-xl font-bold text-earth-900 mb-4">Other Ways to Give</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">Corporate Matching</p>
                      <p className="text-sm text-earth-600">Check if your employer matches donations to 501(c)(3) organizations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">Check by Mail</p>
                      <p className="text-sm text-earth-600">Mail checks payable to "MAG FARM CORP" to 414 S Buena Vista Ave, Orlando, FL 32835.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-earth-900">Legacy Giving</p>
                      <p className="text-sm text-earth-600">Include MAG FARM CORP in your estate planning. Contact us for details.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-800 text-white rounded-xl p-6">
                <h3 className="font-serif text-lg font-bold mb-2">Tax Information</h3>
                <p className="text-sm text-primary-200 leading-relaxed mb-3">
                  MAG FARM CORP is a registered 501(c)(3) nonprofit organization.
                  All donations are tax-deductible to the fullest extent allowed by law.
                </p>
                <div className="text-sm space-y-1 text-primary-200">
                  <p><span className="font-semibold">EIN:</span> 92-0336379</p>
                  <p><span className="font-semibold">Address:</span> 414 S Buena Vista Ave, Orlando, FL 32835</p>
                  <p><span className="font-semibold">Email:</span> <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-secondary-400 hover:underline">admin@MAG-FARM-CORP.bond</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
