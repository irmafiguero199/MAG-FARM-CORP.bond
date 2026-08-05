import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Sprout, BookOpen, HeartHandshake, TreePine, ArrowRight, Calendar, MapPin } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Newsletter from '../components/Newsletter'
import OrganizationSchema from '../seo/OrganizationSchema'

const programs = [
  {
    icon: Sprout,
    title: 'Urban Community Gardens',
    description: 'Transforming vacant urban lots into productive green spaces where community members can grow fresh vegetables, herbs, and fruits.',
  },
  {
    icon: BookOpen,
    title: 'Youth Agricultural Education',
    description: 'Hands-on learning programs teaching sustainable farming practices, nutrition, and environmental stewardship to students across Orlando.',
  },
  {
    icon: HeartHandshake,
    title: 'Food Security Initiative',
    description: 'Distributing fresh, locally-grown produce to food-insecure families and partner food banks in Orange County and surrounding areas.',
  },
  {
    icon: TreePine,
    title: 'Sustainable Landscaping',
    description: 'Partnering with local businesses and municipalities to implement eco-friendly landscaping that reduces water usage and supports pollinators.',
  },
]

const upcomingEvents = [
  {
    title: 'Community Harvest Festival',
    date: 'September 20, 2026',
    location: '414 S Buena Vista Ave, Orlando, FL',
    description: 'Join us for our annual harvest celebration featuring fresh produce tastings, gardening workshops, and community networking.',
  },
  {
    title: 'Youth Farmer Training Program - Fall Session',
    date: 'October 5, 2026',
    location: 'MAG FARM CORP Headquarters, Orlando',
    description: 'Eight-week intensive program for high school students interested in sustainable agriculture and urban farming careers.',
  },
  {
    title: 'Volunteer Planting Day',
    date: 'October 15, 2026',
    location: 'Orlando Community Garden Sites',
    description: 'Help us prepare community garden beds for the fall growing season. All tools and refreshments provided.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MAG FARM CORP | Registered 501(c)(3) Nonprofit Urban Agriculture Organization</title>
        <meta name="description" content="MAG FARM CORP is a registered 501(c)(3) nonprofit dedicated to urban agriculture and sustainable community development in Orlando, Florida. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/" />
      </Helmet>
      <OrganizationSchema />

      <Hero />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Our Mission
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-900 mb-6">
                Cultivating Green Spaces & Empowering Communities
              </h2>
              <p className="text-earth-600 leading-relaxed mb-6">
                Founded in 2022 and headquartered at 414 S Buena Vista Ave in Orlando, Florida,
                MAG FARM CORP is a federally recognized 501(c)(3) nonprofit organization (EIN: 92-0336379)
                committed to transforming urban environments through sustainable agriculture.
                We believe every community deserves access to fresh, healthy food and the knowledge
                to grow it themselves.
              </p>
              <p className="text-earth-600 leading-relaxed mb-8">
                Our programs serve over 850 community members annually across Orange County,
                providing hands-on agricultural education, food security resources, and green
                infrastructure development. From youth education to senior gardening clubs,
                we cultivate connections that strengthen the social and environmental fabric of Orlando.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary-700 mb-1">2022</p>
                  <p className="text-sm text-earth-600">Year Founded</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary-700 mb-1">4</p>
                  <p className="text-sm text-earth-600">Core Programs</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary-700 mb-1">12</p>
                  <p className="text-sm text-earth-600">Garden Sites</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary-700 mb-1">150+</p>
                  <p className="text-sm text-earth-600">Active Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Programs"
            subtitle="Comprehensive urban agriculture and community development initiatives designed to serve Orlando residents of all ages and backgrounds."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div key={program.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-earth-900 mb-3">{program.title}</h3>
                <p className="text-earth-600 text-sm leading-relaxed mb-4">{program.description}</p>
                <Link to="/programs" className="text-primary-700 font-medium text-sm hover:text-primary-800 flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us at MAG FARM CORP for community gatherings, educational workshops, and volunteer opportunities across Orlando."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="border border-earth-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <div className="flex items-center gap-2 text-primary-700 text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-earth-500 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location}
                </div>
                <p className="text-earth-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Support Our Growing Mission</h2>
          <p className="text-primary-200 max-w-2xl mx-auto mb-8">
            Your tax-deductible donation to MAG FARM CORP (EIN: 92-0336379) directly funds urban garden development,
            youth education programs, and food security initiatives in Orlando, Florida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="btn-primary bg-secondary-600 hover:bg-secondary-700 border-0">
              Make a Donation
            </Link>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              Get Involved
            </Link>
          </div>
          <p className="text-xs text-primary-300 mt-6">
            MAG FARM CORP is a registered 501(c)(3) nonprofit organization.
            All donations are tax-deductible to the fullest extent allowed by law. | EIN: 92-0336379
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
