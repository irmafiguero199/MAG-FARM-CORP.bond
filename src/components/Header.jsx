import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Shield } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-vision' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donate', path: '/donate' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-800 text-white text-sm py-2">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span className="font-semibold">EIN: 92-0336379</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              414 S Buena Vista Ave, Orlando, FL 32835
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:8778295500" className="flex items-center gap-1 hover:text-primary-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              (877) 829-5500
            </a>
            <a href="mailto:admin@MAG-FARM-CORP.bond" className="hidden md:flex items-center gap-1 hover:text-primary-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              admin@MAG-FARM-CORP.bond
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white shadow-md">
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-earth-900 leading-tight">MAG FARM CORP</span>
              <span className="text-xs text-primary-700 font-medium">501(c)(3) Nonprofit</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-earth-700 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-earth-700 hover:bg-primary-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-earth-200 shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-earth-700 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-earth-200 text-sm text-earth-600 space-y-2">
              <p className="flex items-center gap-2"><Shield className="w-4 h-4" /> EIN: 92-0336379</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 414 S Buena Vista Ave, Orlando, FL 32835</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:8778295500">(877) 829-5500</a></p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:admin@MAG-FARM-CORP.bond">admin@MAG-FARM-CORP.bond</a></p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
