import { Helmet } from 'react-helmet-async'
import { Sprout, BookOpen, HeartHandshake, TreePine, Users, Calendar, MapPin, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const programs = [
  {
    icon: Sprout,
    title: 'Urban Community Gardens',
    description: 'Our flagship program transforms vacant lots, rooftops, and underutilized spaces into productive community gardens. Each site is managed by local residents with support from MAG FARM CORP agricultural specialists.',
    details: [
      '12 active garden sites across Orlando',
      'Free plots available for low-income families',
      'Tool library and seed bank for participants',
      'Monthly gardening workshops led by master gardeners',
    ],
    eligibility: 'Open to all Orlando residents. Priority given to families in food desert areas.',
    serviceArea: 'Orange County, Florida',
    upcoming: 'Fall Planting Workshop - September 12, 2026',
  },
  {
    icon: BookOpen,
    title: 'Youth Agricultural Education',
    description: 'Comprehensive STEM-based agricultural curriculum delivered in schools, after-school programs, and summer camps. Students learn plant biology, sustainable farming, nutrition, and entrepreneurship.',
    details: [
      'Partnerships with 8 Orange County schools',
      'After-school programs at 4 community centers',
      'Summer Farm Camp for ages 8-16',
      'High school internship and job training program',
    ],
    eligibility: 'Students ages 5-18 in Orange County Public Schools or registered homeschool programs.',
    serviceArea: 'Orange County, Florida',
    upcoming: 'Fall Session begins October 5, 2026',
  },
  {
    icon: HeartHandshake,
    title: 'Food Security Initiative',
    description: 'Direct food distribution program connecting our garden harvests with families facing food insecurity. We partner with local food banks, shelters, and senior centers to ensure fresh produce reaches those who need it most.',
    details: [
      'Weekly produce boxes for 150 families',
      'Partnerships with 8 food banks and shelters',
      'Senior mobile delivery program',
      'Culturally appropriate crop selection',
    ],
    eligibility: 'Families enrolled in SNAP, WIC, or referred by partner social service agencies.',
    serviceArea: 'Orlando metropolitan area and surrounding communities',
    upcoming: 'Holiday Harvest Distribution - November 20, 2026',
  },
  {
    icon: TreePine,
    title: 'Sustainable Landscaping',
    description: 'Technical assistance and implementation services for businesses, schools, and municipalities seeking to install eco-friendly landscapes that reduce water usage, support pollinators, and improve urban aesthetics.',
    details: [
      'Native plant selection and installation',
      'Rain garden and bioswale design',
      'Irrigation efficiency audits',
      'Maintenance training for facility staff',
    ],
    eligibility: 'Businesses, schools, and government entities in Central Florida.',
    serviceArea: 'Central Florida region',
    upcoming: 'Commercial Rain Garden Installation - September 28, 2026',
  },
]

const upcomingEvents = [
  {
    title: 'Fall Planting Workshop',
    date: 'September 12, 2026',
    time: '9:00 AM - 12:00 PM',
    location: 'MAG FARM CORP Main Garden, 414 S Buena Vista Ave, Orlando, FL',
    description: 'Hands-on workshop teaching fall vegetable planting techniques, soil preparation, and cold-frame construction.',
  },
  {
    title: 'Youth Farmer Training - Fall Session',
    date: 'October 5, 2026',
    time: '3:30 PM - 5:30 PM (Weekly)',
    location: 'Orange County Community Center, Orlando',
    description: 'Eight-week program for high school students covering sustainable farming, business planning, and food systems.',
  },
  {
    title: 'Holiday Harvest Distribution',
    date: 'November 20, 2026',
    time: '10:00 AM - 2:00 PM',
    location: 'MAG FARM CORP Headquarters, 414 S Buena Vista Ave, Orlando, FL',
    description: 'Annual event distributing fresh produce boxes, recipe cards, and cooking demonstrations for 200+ families.',
  },
]

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Our Programs | MAG FARM CORP - 501(c)(3) Nonprofit Urban Agriculture</title>
        <meta name="description" content="Explore MAG FARM CORP's urban agriculture programs in Orlando, FL: Community Gardens, Youth Education, Food Security, and Sustainable Landscaping. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/programs" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Comprehensive urban agriculture and community development initiatives serving Orlando and Central Florida.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Core Program Areas"
            subtitle="MAG FARM CORP operates four interconnected program areas designed to create a sustainable food system in Orlando."
          />

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={program.title} className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <program.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-earth-900 mb-4">{program.title}</h2>
                  <p className="text-earth-600 leading-relaxed mb-6">{program.description}</p>

                  <h3 className="font-semibold text-earth-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    Program Features
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {program.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-earth-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-earth-50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-earth-700">
                      <Users className="w-4 h-4 text-primary-600 shrink-0" />
                      <span className="font-medium">Eligibility:</span> {program.eligibility}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-earth-700">
                      <MapPin className="w-4 h-4 text-primary-600 shrink-0" />
                      <span className="font-medium">Service Area:</span> {program.serviceArea}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary-700 font-medium">
                      <Calendar className="w-4 h-4 shrink-0" />
                      Upcoming: {program.upcoming}
                    </div>
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-video bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-primary-200">
                    <div className="text-center">
                      <program.icon className="w-16 h-16 text-primary-300 mx-auto mb-2" />
                      <p className="text-primary-600 font-medium">{program.title}</p>
                      <p className="text-sm text-earth-500">Program Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us at MAG FARM CORP for workshops, training sessions, and community gatherings."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-xl p-6 shadow-sm border border-earth-200">
                <div className="text-sm font-bold text-primary-700 mb-2">{event.date}</div>
                <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-earth-500 text-sm mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.time}
                </div>
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

      {/* Contact CTA */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-serif text-3xl font-bold mb-4">Interested in Our Programs?</h2>
          <p className="text-primary-200 mb-6">
            Contact MAG FARM CORP at <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-secondary-400 hover:underline">admin@MAG-FARM-CORP.bond</a> or call <a href="tel:8778295500" className="text-secondary-400 hover:underline">(877) 829-5500</a> to learn more about enrollment, volunteering, or partnership opportunities.
          </p>
          <p className="text-sm text-primary-300">
            MAG FARM CORP | 414 S Buena Vista Ave, Orlando, FL 32835 | EIN: 92-0336379
          </p>
        </div>
      </section>
    </>
  )
}
