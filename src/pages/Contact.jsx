import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Shield, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | MAG FARM CORP - 501(c)(3) Nonprofit Orlando, FL</title>
        <meta name="description" content="Contact MAG FARM CORP at 414 S Buena Vista Ave, Orlando, FL 32835. Phone: (877) 829-5500. Email: admin@MAG-FARM-CORP.bond. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/contact" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Reach out to MAG FARM CORP for program information, volunteering, partnerships, or general inquiries.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-earth-900 mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Physical Address</h3>
                    <p className="text-earth-600">MAG FARM CORP</p>
                    <p className="text-earth-600">414 S Buena Vista Ave</p>
                    <p className="text-earth-600">Orlando, FL 32835, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Phone</h3>
                    <a href="tel:8778295500" className="text-primary-700 hover:text-primary-800 font-medium">(877) 829-5500</a>
                    <p className="text-sm text-earth-500">Customer Service Line</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Email</h3>
                    <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:text-primary-800 font-medium">admin@MAG-FARM-CORP.bond</a>
                    <p className="text-sm text-earth-500">General inquiries and program information</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Office Hours</h3>
                    <p className="text-earth-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-earth-600">Saturday: 9:00 AM - 1:00 PM EST</p>
                    <p className="text-earth-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Nonprofit Info Card */}
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-primary-700" />
                  <h3 className="font-semibold text-earth-900">Nonprofit Information</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-earth-700"><span className="font-medium">Organization:</span> MAG FARM CORP</p>
                  <p className="text-earth-700"><span className="font-medium">EIN:</span> 92-0336379</p>
                  <p className="text-earth-700"><span className="font-medium">Status:</span> 501(c)(3) Tax-Exempt</p>
                  <p className="text-earth-700"><span className="font-medium">State:</span> Florida | Entity ID: 31954</p>
                  <p className="text-earth-700"><span className="font-medium">Address:</span> 414 S Buena Vista Ave, Orlando, FL 32835</p>
                  <p className="text-earth-700"><span className="font-medium">Contact:</span> <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:underline">admin@MAG-FARM-CORP.bond</a></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-earth-50 rounded-xl p-8">
              <h2 className="font-serif text-2xl font-bold text-earth-900 mb-6">Send a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-earth-900 mb-2">Message Sent!</h3>
                  <p className="text-earth-600">Thank you for contacting MAG FARM CORP. We will respond within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donate">Donation Questions</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                  <p className="text-xs text-earth-500 text-center">
                    MAG FARM CORP | EIN: 92-0336379 | 414 S Buena Vista Ave, Orlando, FL 32835
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
