import { Helmet } from 'react-helmet-async'
import { TrendingUp, Sprout, Users, Heart, Award, Star } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const stats = [
  { icon: Sprout, value: '3,200+', label: 'Pounds of Produce Grown Annually', description: 'Fresh vegetables, fruits, and herbs cultivated across our 12 garden sites.' },
  { icon: Users, value: '850+', label: 'Community Members Served', description: 'Individuals and families who directly benefit from our programs each year.' },
  { icon: Heart, value: '150+', label: 'Active Volunteers', description: 'Dedicated community members contributing their time and skills monthly.' },
  { icon: Award, value: '12', label: 'Active Garden Sites', description: 'Urban gardens transforming vacant lots into productive green spaces across Orlando.' },
  { icon: TrendingUp, value: '8', label: 'Partner Food Banks', description: 'Local organizations receiving regular fresh produce donations.' },
  { icon: Star, value: '300+', label: 'Students Educated', description: 'Youth participating in our agricultural education programs annually.' },
]

const testimonials = [
  {
    name: 'Maria Rodriguez',
    role: 'Community Garden Participant',
    text: 'MAG FARM CORP changed my family's life. We now grow our own vegetables and my children understand where food comes from. The garden at 414 S Buena Vista Ave has become our second home.',
  },
  {
    name: 'James Thompson',
    role: 'Orange County School Teacher',
    text: 'The Youth Agricultural Education program is exceptional. My students have gained practical STEM skills while learning about nutrition and sustainability. MAG FARM CORP truly understands how to engage young minds.',
  },
  {
    name: 'Patricia Williams',
    role: 'Senior Center Director',
    text: 'The Food Security Initiative delivers fresh produce weekly to our senior residents. The quality and consistency of MAG FARM CORP's donations have significantly improved nutrition for our most vulnerable community members.',
  },
]

const partners = [
  'Orange County Public Schools',
  'Second Harvest Food Bank of Central Florida',
  'Orlando Health',
  'University of Florida IFAS Extension',
  'City of Orlando Sustainability Office',
  'Feeding Florida',
  'Local Roots Farm Cooperative',
  'Orlando Community Foundation',
]

export default function Impact() {
  return (
    <>
      <Helmet>
        <title>Our Impact | MAG FARM CORP - 501(c)(3) Nonprofit Results</title>
        <meta name="description" content="See the measurable impact of MAG FARM CORP's urban agriculture programs in Orlando, FL. 3,200+ lbs of produce, 850+ community members served. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/impact" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Measurable results from MAG FARM CORP's programs serving the Orlando community since 2022.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Impact by the Numbers"
            subtitle="Real results from MAG FARM CORP's urban agriculture and community development programs in Orlando, Florida."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-earth-50 rounded-xl p-6 border border-earth-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary-700" />
                </div>
                <p className="text-3xl font-bold text-primary-700 mb-1">{stat.value}</p>
                <p className="font-semibold text-earth-900 mb-2">{stat.label}</p>
                <p className="text-sm text-earth-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Community Voices"
            subtitle="Hear from the community members, educators, and partners who work with MAG FARM CORP."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                  ))}
                </div>
                <p className="text-earth-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-earth-900">{t.name}</p>
                  <p className="text-sm text-earth-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Partners"
            subtitle="MAG FARM CORP collaborates with leading organizations to maximize our impact across Central Florida."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div key={partner} className="bg-earth-50 rounded-lg p-4 text-center border border-earth-200 hover:border-primary-300 transition-colors">
                <p className="font-medium text-earth-800">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report CTA */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-serif text-3xl font-bold mb-4">Annual Impact Reports</h2>
          <p className="text-primary-200 mb-6">
            MAG FARM CORP publishes detailed annual reports documenting our programs, finances, and community outcomes.
            As a 501(c)(3) organization (EIN: 92-0336379), we are committed to full transparency.
          </p>
          <p className="text-sm text-primary-300">
            Reports available upon request at <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-secondary-400 hover:underline">admin@MAG-FARM-CORP.bond</a> or visit our <a href="/registration" className="text-secondary-400 hover:underline">Registration Information</a> page.
          </p>
        </div>
      </section>
    </>
  )
}
