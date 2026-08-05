import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, Shield } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | MAG FARM CORP - 501(c)(3) Nonprofit</title>
        <meta name="description" content="The requested page could not be found. Return to MAG FARM CORP homepage. EIN: 92-0336379." />
        <link rel="canonical" href="https://www.mag-farm-corp.bond/404" />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center bg-earth-50">
        <div className="container-custom text-center max-w-2xl py-16">
          <h1 className="font-serif text-8xl font-bold text-primary-700 mb-4">404</h1>
          <h2 className="font-serif text-3xl font-bold text-earth-900 mb-4">Page Not Found</h2>
          <p className="text-earth-600 text-lg mb-8 leading-relaxed">
            The page you are looking for does not exist or has been moved.
            Please return to the MAG FARM CORP homepage to continue exploring our programs and mission.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>
          <div className="mt-12 pt-8 border-t border-earth-200">
            <div className="flex items-center justify-center gap-2 text-sm text-earth-500 mb-2">
              <Shield className="w-4 h-4 text-primary-600" />
              <span>MAG FARM CORP is a registered 501(c)(3) nonprofit organization.</span>
            </div>
            <p className="text-sm text-earth-500">
              EIN: 92-0336379 | 414 S Buena Vista Ave, Orlando, FL 32835 |
              <a href="mailto:admin@MAG-FARM-CORP.bond" className="text-primary-700 hover:underline ml-1">admin@MAG-FARM-CORP.bond</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
