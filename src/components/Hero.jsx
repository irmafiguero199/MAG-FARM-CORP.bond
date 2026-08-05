import { Link } from 'react-router-dom'
import { Shield, ArrowRight, Sprout, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-earth-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-medium">Registered 501(c)(3) Nonprofit Organization | EIN: 92-0336379</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Growing Communities,<br />
            <span className="text-secondary-400">Nourishing Futures</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl">
            MAG FARM CORP transforms urban spaces into thriving agricultural hubs,
            providing fresh produce, educational programs, and sustainable livelihoods
            for communities across Orlando, Florida.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/donate" className="btn-primary bg-secondary-600 hover:bg-secondary-700 border-0">
              Support Our Mission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/programs" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              Explore Programs
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-secondary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">3,200+</p>
                <p className="text-sm text-primary-200">Lbs of Produce Grown</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">850+</p>
                <p className="text-sm text-primary-200">Community Members Served</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-primary-200">Active Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
