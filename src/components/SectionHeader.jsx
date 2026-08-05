export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-earth-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-primary-600 mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
