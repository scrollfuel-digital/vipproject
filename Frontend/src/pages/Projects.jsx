import Navbar from '../components/Navbar'

const PROJECTS = [
  { title: 'Residential Projects', icon: '🏠', desc: '2BHK & 3BHK luxury apartments with modern layouts, spacious design, and premium finishing.' },
  { title: 'Commercial Spaces', icon: '🏢', desc: 'Shops and office spaces in prime locations for business growth and visibility.' },
  { title: 'Ongoing Projects', icon: '🏗️', desc: 'Starting ₹45 Lakhs* · 2BHK / 3BHK · Prime Nagpur Areas · Possession 2026' },
  { title: 'Ready-to-Move', icon: '🔑', desc: 'Move into your dream home immediately with all modern amenities and facilities.' },
]

export default function Projects() {
  return (
    <>
      <Navbar />
      <section id="projects" className="py-20 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2d5a] mb-4">Our Projects – Designed for Modern Living</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map(({ title, icon, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold text-[#1e2d5a] mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
