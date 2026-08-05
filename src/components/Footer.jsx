import { Link } from 'react-router-dom'
import { Shield, MapPin, Phone, Mail, Heart } from 'lucide-react'

const footerLinks = {
  Organization: [
    { name: 'About Us', path: '/about' },
    { name: 'Mission & Vision', path: '/mission-vision' },
    { name: 'Our Team', path: '/team' },
    { name: 'Registration Info', path: '/registration' },
  ],
  Programs: [
    { name: 'Our Programs', path: '/programs' },
    { name: 'Impact Report', path: '/impact' },
    { name: 'News & Updates', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
  ],
  Legal: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">MAG FARM CORP</h3>
                <p className="text-xs text-primary-400">Registered 501(c)(3)</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Dedicated to urban agriculture and sustainable community development in Orlando, Florida.
              Cultivating green spaces, nourishing communities, and growing futures since 2022.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-400">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">EIN: 92-0336379</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-10 pt-8 border-t border-earth-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
              <span>414 S Buena Vista Ave, Orlando, FL 32835, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-400 shrink-0" />
              <a href="tel:8778295500" className="hover:text-primary-400 transition-colors">(877) 829-5500</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-400 shrink-0" />
              <a href="mailto:admin@MAG-FARM-CORP.bond" className="hover:text-primary-400 transition-colors">admin@MAG-FARM-CORP.bond</a>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-400 shrink-0" />
              <span>FL Entity ID: 31954</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-earth-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-earth-500">
          <p>&copy; MAG FARM CORP. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for our community
          </p>
          <p>501(c)(3) Tax-Exempt | EIN: 92-0336379</p>
        </div>
      </div>
    </footer>
  )
}
