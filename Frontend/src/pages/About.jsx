import { Flag, Eye, Handshake, ShieldCheck, Users, TrendingUp } from 'lucide-react'

const STATS = [
  { icon: ShieldCheck, num: '10+', label: 'Years of Experience' },
  { icon: Users, num: '500+', label: 'Happy Clients' },
  { icon: TrendingUp, num: '20+', label: 'Successful Projects' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative px-4">
        <div className="text-center mb-16">
          <p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Trusted Real Estate Developers <span className="text-[#D4AF37]">in Nagpur</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#4F4F4F] text-base leading-relaxed">
            We are a leading real estate company in Nagpur, delivering premium residential and commercial
            properties with a strong commitment to quality, transparency, and customer satisfaction.
            Our projects combine modern design with strategic locations to help families and investors
            build long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {STATS.map(({ icon: Icon, num, label }) => (
            <div key={label} className="bg-[#FEF9ED] border border-[#D4AF37]/20 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF3D4] text-[#D4AF37] shadow-inner">
                <Icon className="h-8 w-8" />
              </div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-3">{num}</div>
              <div className="text-[#1A1A1A] font-semibold">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#FFF8E1] p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Our Story</h3>
              <p className="text-[#4F4F4F] leading-relaxed">
                With over a decade of experience in Nagpur's real estate market, we have helped hundreds of
                clients find the perfect property. From MIHAN to Wardha Road, every project is built with premium
                materials, thoughtful layouts, and a focus on delivering exceptional lifestyle value.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Transparent Deals',
                'Verified Properties',
                'High ROI Investments',
                'RERA Approved',
              ].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#FFF6E5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: Flag,
                title: 'Our Mission',
                desc: 'To provide transparent, verified, and high-value real estate solutions for every client.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To become Nagpur’s most trusted real estate brand through integrity and premium delivery.',
              },
              {
                icon: Handshake,
                title: 'Our Promise',
                desc: 'Every property is legally verified, RERA approved, and backed by end-to-end support.',
              },
            ].map(item => (
              <div key={item.title} className="rounded-3xl border border-[#D4AF37]/15 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF3D4] text-[#D4AF37] shadow-inner">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                <p className="text-[#4F4F4F] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
