import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const articles = [
  {
    title: 'MAG FARM CORP Receives $50,000 Community Development Grant',
    date: 'July 15, 2026',
    category: 'Funding',
    excerpt: 'The Orlando Community Foundation has awarded MAG FARM CORP a $50,000 grant to expand urban garden sites in underserved neighborhoods across Orange County.',
    slug: 'community-development-grant-2026',
  },
  {
    title: 'Summer Farm Camp Concludes with Record Enrollment',
    date: 'June 30, 2026',
    category: 'Programs',
    excerpt: "This year's 8-week Youth Agricultural Education program saw 45 students graduate, learning sustainable farming practices, nutrition, and food entrepreneurship.",
    slug: 'summer-farm-camp-2026',
  },
  {
    title: 'New Partnership with Orlando Health for Therapeutic Gardening',
    date: 'May 22, 2026',
    category: 'Partnerships',
    excerpt: 'MAG FARM CORP and Orlando Health announce a collaborative therapeutic gardening program for patients recovering from chronic illness.',
    slug: 'orlando-health-partnership',
  },
  {
    title: 'Spring Harvest Breaks Record: 1,200 lbs of Fresh Produce',
    date: 'April 18, 2026',
    category: 'Impact',
    excerpt: 'Our 12 garden sites produced a record-breaking spring harvest, with all produce distributed to local food banks and senior centers within 48 hours.',
    slug: 'spring-harvest-record-2026',
  },
  {
    title: 'MAG FARM CORP Featured in Orlando Sentinel Urban Agriculture Series',
    date: 'March 8, 2026',
    category: 'Press',
    excerpt: "The Orlando Sentinel highlighted MAG FARM CORP's innovative approach to addressing food deserts through community-led urban farming initiatives.",
    slug: 'orlando-sentinel-feature',
  },
  {
    title: 'Volunteer Appreciation Event Honors 150+ Community Members',
    date: 'February 14, 2026',
    category: 'Community',
    excerpt: 'Over 150 volunteers gathered at our headquarters on 414 S Buena Vista Ave to celebrate another year of community impact and green space transformation.',
    slug: 'volunteer-appreciation-2026',
  },
]

export default function News() {
  return (
    <>
      <Helmet>
        <title>News & Updates | MAG FARM CORP - 501(c)(3) Nonprofit Orlando</title>
        <meta name="description" content="Latest news from MAG FARM CORP, a 501(c)(3) nonprofit in Orlando, FL. Grants, programs, partnerships, and community updates. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/news" />
      </Helmet>

      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Latest announcements, program updates, and community stories from MAG FARM CORP.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Recent Articles"
            subtitle="Stay informed about MAG FARM CORP's programs, partnerships, and impact in Orlando."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.slug} className="bg-earth-50 rounded-xl overflow-hidden border border-earth-200 hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-earth-500">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-earth-900 mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-earth-600 text-sm leading-relaxed mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/news/${article.slug}`}
                    className="inline-flex items-center text-primary-700 font-medium text-sm hover:text-primary-800"
                  >
                    Read more <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-earth-600 mb-4">
              For press inquiries, contact <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:underline">admin@MAG-FARM-CORP.bond</a>
            </p>
            <p className="text-sm text-earth-500">
              MAG FARM CORP | 414 S Buena Vista Ave, Orlando, FL 32835 | EIN: 92-0336379
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
