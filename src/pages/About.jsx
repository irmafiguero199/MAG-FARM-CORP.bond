import { Helmet } from 'react-helmet-async'
import { Sprout, Target, Heart, Globe, Shield, Calendar, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const milestones = [
  { year: '2022', title: 'Foundation Established', description: 'MAG FARM CORP was incorporated in the State of Florida with Entity ID 31954, receiving IRS determination of 501(c)(3) tax-exempt status.' },
  { year: '2023', title: 'First Community Garden', description: 'Launched our flagship urban garden site in Orlando, converting a vacant lot into a productive growing space serving 50 families.' },
  { year: '2024', title: 'Youth Education Expansion', description: 'Partnered with Orange County Public Schools to bring agricultural education to 5 schools, reaching over 300 students annually.' },
  { year: '2025', title: 'Food Security Network', description: 'Established distribution partnerships with 8 local food banks and shelters, donating over 2,000 lbs of fresh produce.' },
  { year: '2026', title: 'Sustainable Growth', description: 'Expanded to 12 active garden sites across Orlando, with 150+ volunteers and a full-time staff of 6 employees.' },
]

const values = [
  { icon: Sprout, title: 'Sustainability', description: 'We practice and teach regenerative agriculture methods that restore soil health, conserve water, and support biodiversity.' },
  { icon: Target, title: 'Accessibility', description: 'Fresh food and agricultural knowledge should be available to everyone, regardless of income, background, or neighborhood.' },
  { icon: Heart, title: 'Community First', description: 'Our programs are designed by and for the communities we serve, ensuring cultural relevance and lasting impact.' },
  { icon: Globe, title: 'Environmental Stewardship', description: 'We are committed to reducing urban heat islands, improving air quality, and creating habitat for pollinators.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | MAG FARM CORP - 501(c)(3) Nonprofit Organization</title>
        <meta name="description" content="Learn about MAG FARM CORP, a registered 501(c)(3) nonprofit founded in 2022 in Orlando, Florida. EIN: 92-0336379. Our history, values, and legal information." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/about" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About MAG FARM CORP</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            A registered 501(c)(3) nonprofit organization dedicated to urban agriculture and sustainable community development in Orlando, Florida.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-earth-900 mb-6">Our Story</h2>
              <p className="text-earth-600 leading-relaxed mb-4">
                MAG FARM CORP was founded in 2022 with a clear vision: to transform underutilized urban spaces
                in Orlando into thriving agricultural hubs that serve the community. What began as a single
                community garden has grown into a comprehensive nonprofit organization operating 12 garden sites
                across Orange County.
              </p>
              <p className="text-earth-600 leading-relaxed mb-4">
                Headquartered at 414 S Buena Vista Ave in Orlando, Florida, our organization is federally
                recognized as a 501(c)(3) tax-exempt public charity by the Internal Revenue Service.
                Our Employer Identification Number (EIN) is 92-0336379, and we are registered with the
                State of Florida under Entity ID 31954.
              </p>
              <p className="text-earth-600 leading-relaxed mb-4">
                Our accounting period ends on October 31 of each year, and we file Form 990-PF annually
                with the IRS to maintain our transparency and compliance as a nonprofit organization.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Today, MAG FARM CORP employs 6 full-time staff members and engages over 150 active volunteers.
                We serve more than 850 community members annually through our four core program areas:
                Urban Community Gardens, Youth Agricultural Education, Food Security Initiative, and
                Sustainable Landscaping.
              </p>
            </div>
            <div className="bg-earth-50 rounded-xl p-8">
              <h3 className="font-serif text-2xl font-bold text-earth-900 mb-6">Legal & Organizational Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-earth-900">Federal Tax Status</p>
                    <p className="text-earth-600 text-sm">501(c)(3) Tax-Exempt Organization</p>
                    <p className="text-earth-600 text-sm">EIN: 92-0336379</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-earth-900">Registered Address</p>
                    <p className="text-earth-600 text-sm">414 S Buena Vista Ave</p>
                    <p className="text-earth-600 text-sm">Orlando, FL 32835, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-earth-900">Incorporation Details</p>
                    <p className="text-earth-600 text-sm">Founded: 2022</p>
                    <p className="text-earth-600 text-sm">State: Florida | Entity ID: 31954</p>
                    <p className="text-earth-600 text-sm">Accounting Period: October 31</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sprout className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-earth-900">Mission Category</p>
                    <p className="text-earth-600 text-sm">Environmental Conservation & Food Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every decision, program, and partnership at MAG FARM CORP."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-earth-900 mb-2">{value.title}</h3>
                <p className="text-earth-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in the growth and development of MAG FARM CORP since our founding in 2022."
          />
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-xl font-bold text-earth-900 mb-2">{milestone.title}</h3>
                  <p className="text-earth-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Notice */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-8 border border-primary-200">
            <h3 className="font-serif text-2xl font-bold text-earth-900 mb-4">Governance & Transparency</h3>
            <p className="text-earth-600 leading-relaxed mb-4">
              MAG FARM CORP is governed by a Board of Directors that meets quarterly to oversee organizational
              strategy, financial management, and program effectiveness. Our board consists of community leaders,
              agricultural experts, and nonprofit professionals committed to ethical stewardship of our resources.
            </p>
            <p className="text-earth-600 leading-relaxed">
              As a 501(c)(3) organization (EIN: 92-0336379), we are committed to full transparency. Our
              annual Form 990-PF filings, audited financial statements, and annual reports are available
              upon request by contacting us at <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:underline">admin@MAG-FARM-CORP.bond</a> or by visiting our
              <a href="/registration" className="text-primary-700 hover:underline"> Registration Information</a> page.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
