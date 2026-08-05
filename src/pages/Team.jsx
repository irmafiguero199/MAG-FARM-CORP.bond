import { Helmet } from 'react-helmet-async'
import { Users, Calendar, Mail } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const boardMembers = [
  {
    name: 'Jeremy A. Garcia',
    role: 'President & Founder',
    bio: "Jeremy founded MAG FARM CORP in 2022 with a vision to transform Orlando's urban landscape through sustainable agriculture. With a background in environmental science and community organizing, he leads the organization's strategic direction and board governance.",
  },
  {
    name: 'Dr. Angela Martinez',
    role: 'Vice President',
    bio: "Dr. Martinez is a professor of Urban Planning at the University of Central Florida. She brings expertise in sustainable city design and food policy, guiding MAG FARM CORP's expansion strategy and municipal partnerships.",
  },
  {
    name: 'Robert Chen',
    role: 'Treasurer',
    bio: "Robert is a CPA with 15 years of nonprofit financial management experience. He oversees MAG FARM CORP's finances, ensuring compliance with IRS 501(c)(3) requirements and sound fiscal stewardship of donor resources.",
  },
  {
    name: 'Sarah Johnson',
    role: 'Secretary',
    bio: 'Sarah is a community organizer and former educator who manages board records, meeting minutes, and organizational documentation. She ensures transparent governance practices at MAG FARM CORP.',
  },
  {
    name: 'Michael Okafor',
    role: 'Board Member',
    bio: "Michael owns a sustainable landscaping company in Orlando and advises on MAG FARM CORP's commercial landscaping program. He brings practical industry knowledge and business development expertise.",
  },
  {
    name: 'Lisa Park',
    role: 'Board Member',
    bio: 'Lisa is a registered dietitian who directs the nutrition education components of our programs. She ensures our food security initiatives provide culturally appropriate, nutritionally balanced produce selections.',
  },
]

const staffMembers = [
  {
    name: 'Jeremy A. Garcia',
    role: 'Executive Director',
    bio: 'Leads day-to-day operations, program development, and community partnerships.',
  },
  {
    name: 'David Kim',
    role: 'Program Director',
    bio: 'Oversees all four program areas, manages site coordinators, and develops new initiatives.',
  },
  {
    name: 'Carmen Reyes',
    role: 'Youth Education Coordinator',
    bio: 'Designs and delivers agricultural curriculum for K-12 students across Orange County.',
  },
  {
    name: 'Thomas Wright',
    role: 'Farm Operations Manager',
    bio: 'Manages all 12 garden sites, supervises volunteers, and coordinates harvest schedules.',
  },
  {
    name: 'Amanda Foster',
    role: 'Community Outreach Specialist',
    bio: 'Builds partnerships with food banks, shelters, and community organizations.',
  },
  {
    name: 'Kevin Patel',
    role: 'Development Coordinator',
    bio: 'Manages fundraising, donor relations, and grant applications for MAG FARM CORP.',
  },
]

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | MAG FARM CORP - 501(c)(3) Nonprofit Leadership</title>
        <meta name="description" content="Meet the Board of Directors and Staff of MAG FARM CORP, a 501(c)(3) nonprofit in Orlando, FL. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/team" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Dedicated leaders committed to advancing urban agriculture in Orlando, Florida.
          </p>
        </div>
      </div>

      {/* Board */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Board of Directors"
            subtitle="The governing body of MAG FARM CORP, providing strategic oversight and fiduciary responsibility."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <div key={member.name} className="bg-earth-50 rounded-xl p-6 border border-earth-200">
                <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-earth-900">{member.name}</h3>
                <p className="text-primary-700 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-earth-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <SectionHeader
            title="Staff Leadership"
            subtitle="The professional team managing daily operations and program delivery at MAG FARM CORP."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-earth-900">{member.name}</h3>
                <p className="text-secondary-700 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-earth-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Meetings */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-secondary-400" />
            <h2 className="font-serif text-3xl font-bold">Board Meetings</h2>
          </div>
          <p className="text-primary-200 leading-relaxed mb-6">
            The MAG FARM CORP Board of Directors meets quarterly at our headquarters located at
            414 S Buena Vista Ave, Orlando, FL 32835. Meetings are typically held on the third
            Thursday of March, June, September, and December at 6:00 PM EST.
          </p>
          <p className="text-primary-200 leading-relaxed mb-6">
            Annual meetings are open to the public and include a review of organizational finances,
            program outcomes, and strategic planning. Notice of annual meetings is posted on our
            website and distributed to stakeholders at least 30 days in advance.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm text-primary-200 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              For meeting information or board inquiries, contact <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-secondary-400 hover:underline">admin@MAG-FARM-CORP.bond</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}