import { Helmet } from 'react-helmet-async'
import { Target, Eye, Compass, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const strategicGoals = [
  {
    period: '2026-2027',
    title: 'Expansion Phase',
    objectives: [
      'Establish 5 new urban garden sites in underserved Orlando neighborhoods',
      'Launch mobile agricultural education unit serving rural Orange County schools',
      'Increase annual produce distribution to 5,000 lbs',
      'Grow volunteer base to 250 active participants',
    ]
  },
  {
    period: '2027-2028',
    title: 'Integration Phase',
    objectives: [
      'Develop permanent agricultural training center at headquarters',
      'Launch social enterprise farm-to-table catering program',
      'Partner with 20 local restaurants for sustainable sourcing',
      'Achieve financial sustainability through diversified revenue',
    ]
  },
  {
    period: '2028-2030',
    title: 'Regional Leadership',
    objectives: [
      'Replicate MAG FARM model in 3 additional Florida counties',
      'Host annual statewide urban agriculture summit',
      'Advocate for urban farming policy at state legislature',
      'Become recognized leader in southeastern urban agriculture',
    ]
  },
]

export default function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission & Vision | MAG FARM CORP - 501(c)(3) Nonprofit</title>
        <meta name="description" content="Discover the mission, vision, and strategic goals of MAG FARM CORP, a 501(c)(3) nonprofit in Orlando, FL. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/mission-vision" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Mission & Vision</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            The guiding principles and future aspirations of MAG FARM CORP (EIN: 92-0336379).
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
              <Target className="w-12 h-12 text-secondary-400 mb-6" />
              <h2 className="font-serif text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-primary-100 text-lg leading-relaxed">
                MAG FARM CORP exists to transform urban communities through sustainable agriculture,
                creating accessible green spaces that provide fresh food, environmental education,
                and economic opportunity for residents of Orlando and Central Florida. We are
                committed to addressing food insecurity, promoting environmental stewardship,
                and building resilient communities where everyone has the knowledge and resources
                to grow their own food.
              </p>
            </div>
            <div>
              <Eye className="w-12 h-12 text-primary-700 mb-6" />
              <h2 className="font-serif text-3xl font-bold text-earth-900 mb-4">Our Vision</h2>
              <p className="text-earth-600 text-lg leading-relaxed mb-6">
                We envision a future where every neighborhood in Orlando has access to productive
                green spaces, where children learn where their food comes from, and where urban
                agriculture is integrated into city planning and community life. By 2030, MAG FARM
                CORP aims to be the leading urban agriculture nonprofit in Florida, having established
                a replicable model that cities across the Southeast can adopt.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Our vision extends beyond gardening. We see communities where food deserts no longer exist,
                where local economies thrive through urban farming enterprises, and where environmental
                justice is achieved through equitable access to green infrastructure and healthy food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <SectionHeader
            title="Strategic Objectives 2026-2030"
            subtitle="Concrete goals that will guide MAG FARM CORP's growth and impact over the next five years."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {strategicGoals.map((goal) => (
              <div key={goal.period} className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-primary-600">
                <div className="text-sm font-bold text-primary-700 mb-2">{goal.period}</div>
                <h3 className="font-serif text-xl font-bold text-earth-900 mb-4">{goal.title}</h3>
                <ul className="space-y-3">
                  {goal.objectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-2 text-sm text-earth-600">
                      <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center max-w-4xl">
          <Compass className="w-12 h-12 text-secondary-400 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Commitment to the Community</h2>
          <p className="text-primary-200 text-lg leading-relaxed mb-8">
            As a registered 501(c)(3) nonprofit organization (EIN: 92-0336379) based at 414 S Buena Vista Ave,
            Orlando, FL 32835, MAG FARM CORP pledges to operate with integrity, transparency, and
            accountability. Every dollar donated goes directly to supporting our programs and the
            communities we serve. We are committed to measurable impact, community-led program design,
            and sustainable practices that protect our environment for future generations.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-secondary-400 mb-2">100%</p>
              <p className="text-primary-200 text-sm">Community-Focused Programs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary-400 mb-2">$0</p>
              <p className="text-primary-200 text-sm">Admin Fees on Designated Donations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary-400 mb-2">Annual</p>
              <p className="text-primary-200 text-sm">Public Impact Reports</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
