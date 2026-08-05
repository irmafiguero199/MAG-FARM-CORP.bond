import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-primary-800 text-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-10 h-10 text-secondary-400 mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Stay Connected with MAG FARM CORP</h2>
          <p className="text-primary-200 mb-8">
            Subscribe to our newsletter for updates on urban agriculture initiatives,
            community events, volunteer opportunities, and impact reports from Orlando, Florida.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg py-4 px-6">
              <CheckCircle className="w-5 h-5 text-secondary-400" />
              <span className="font-medium">Thank you for subscribing! Check your inbox for confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-earth-900 placeholder-earth-500 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              />
              <button type="submit" className="btn-primary bg-secondary-600 hover:bg-secondary-700 border-0">
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          )}

          <p className="text-xs text-primary-300 mt-4">
            MAG FARM CORP | EIN: 92-0336379 | 414 S Buena Vista Ave, Orlando, FL 32835 |
            <a href="mailto:admin@MAG-FARM-CORP.bond" className="underline hover:text-white ml-1">admin@MAG-FARM-CORP.bond</a>
          </p>
        </div>
      </div>
    </section>
  )
}
