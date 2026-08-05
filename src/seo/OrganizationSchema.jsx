export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "MAG FARM CORP",
    "alternateName": "MAG Farm Corporation",
    "url": "https://www.mag-farm-corp.bond",
    "logo": "https://www.mag-farm-corp.bond/logo.svg",
    "email": "admin@MAG-FARM-CORP.bond",
    "telephone": "+1-877-829-5500",
    "taxID": "92-0336379",
    "foundingDate": "2022",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "414 S Buena Vista Ave",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32835",
      "addressCountry": "US"
    },
    "description": "MAG FARM CORP is a registered 501(c)(3) nonprofit organization dedicated to urban agriculture and sustainable community development in Orlando, Florida.",
    "sameAs": [],
    "nonprofitStatus": "Nonprofit501c3"
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}
