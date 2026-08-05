import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Calendar, MapPin, Filter } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const categories = ['All', 'Community Gardens', 'Youth Education', 'Food Distribution', 'Events', 'Volunteers']

const galleryItems = [
  {
    title: 'Spring Planting Day 2026',
    date: 'March 15, 2026',
    location: 'Orlando Community Garden, 414 S Buena Vista Ave',
    category: 'Community Gardens',
    description: 'Over 80 volunteers gathered to plant spring vegetables across 5 garden sites in Orlando.',
  },
  {
    title: 'Youth Farm Camp Graduation',
    date: 'June 28, 2026',
    location: 'MAG FARM CORP Headquarters',
    category: 'Youth Education',
    description: '45 students completed the 8-week summer agricultural education program.',
  },
  {
    title: 'Holiday Produce Distribution',
    date: 'December 20, 2025',
    location: 'Orlando Senior Center',
    category: 'Food Distribution',
    description: 'Distributed 500 lbs of fresh produce to 200 families during the holiday season.',
  },
  {
    title: 'Annual Harvest Festival',
    date: 'September 21, 2025',
    location: '414 S Buena Vista Ave, Orlando, FL',
    category: 'Events',
    description: 'Community celebration featuring fresh food tastings, live music, and gardening workshops.',
  },
  {
    title: 'Corporate Volunteer Day',
    date: 'April 12, 2026',
    location: 'Downtown Orlando Garden Site',
    category: 'Volunteers',
    description: '50 employees from Orlando Health spent the day building raised beds and planting crops.',
  },
  {
    title: 'School Garden Launch',
    date: 'February 10, 2026',
    location: 'Orange County Elementary School',
    category: 'Youth Education',
    description: 'Inauguration of the 8th school garden partnership with Orange County Public Schools.',
  },
  {
    title: 'Rain Garden Installation',
    date: 'May 5, 2026',
    location: 'Orlando Public Library',
    category: 'Community Gardens',
    description: 'Sustainable landscaping team installed a native rain garden to manage stormwater runoff.',
  },
  {
    title: 'Summer Volunteer Orientation',
    date: 'May 20, 2026',
    location: 'MAG FARM CORP Headquarters',
    category: 'Volunteers',
    description: 'Welcomed 30 new volunteers for the summer growing season with training and garden tours.',
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Gallery | MAG FARM CORP - 501(c)(3) Nonprofit Events & Programs</title>
        <meta name="description" content="Photo gallery of MAG FARM CORP events, community gardens, and programs in Orlando, FL. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/gallery" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Moments from MAG FARM CORP's programs and community events across Orlando, Florida.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Program Gallery"
            subtitle="Visual documentation of MAG FARM CORP's impact in the Orlando community."
          />

          <div className="flex flex-wrap items-center gap-2 mb-10 justify-center">
            <Filter className="w-4 h-4 text-earth-500 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary-700 text-white'
                    : 'bg-earth-100 text-earth-700 hover:bg-earth-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.title} className="bg-earth-50 rounded-xl overflow-hidden border border-earth-200 hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl">🌱</span>
                    <p className="text-sm text-primary-700 font-medium mt-2">{item.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary-700 font-medium mb-2">
                    <span className="bg-primary-100 px-2 py-1 rounded">{item.category}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">{item.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-earth-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-earth-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {item.location}
                  </div>
                  <p className="text-earth-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-earth-500">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
