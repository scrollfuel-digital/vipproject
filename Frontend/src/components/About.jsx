import { motion } from 'framer-motion'

const STATS = [
  { num: '10+',  label: 'Years of Experience' },
  { num: '500+', label: 'Happy Clients' },
  { num: '20+',  label: 'Successful Projects' },
  { num: '100%', label: 'RERA Approved' },
]

const VALUES = [
  { icon: '🏆', title: 'Premium Quality',    desc: 'Every project is built with the finest materials and world-class construction standards.' },
  { icon: '🔐', title: 'Fully Transparent',  desc: 'No hidden charges. Clear documentation, verified properties and honest pricing.' },
  { icon: '📈', title: 'High ROI',           desc: 'Strategic locations in Nagpur ensure strong appreciation and excellent returns.' },
  { icon: '🤝', title: 'End-to-End Support', desc: 'From site visit to possession — we guide you at every step of your journey.' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-4 relative overflow-hidden">

      {/* Subtle gold glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Who We Are
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            Trusted Real Estate Developers
            <span className="block text-gold-gradient">in Nagpur</span>
          </h2>
          <motion.div 
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            We are a leading real estate company in Nagpur, known for delivering premium residential
            and commercial projects with a strong focus on quality, modern design, and complete customer satisfaction.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map(({ num, label }, i) => (
            <motion.div 
              key={label} 
              className="bg-[#FAFAFA] border border-[#D4AF37]/25 rounded-2xl p-6 text-center hover:border-[#D4AF37]/60 hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
            >
              <motion.p 
                className="font-display text-4xl font-bold text-[#D4AF37] mb-2 group-hover:text-[#B8962E] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              >
                {num}
              </motion.p>
              <p className="text-[#666666] text-xs uppercase tracking-widest">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two Column */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          <div>
            <p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Story</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5 leading-tight">
              Building Dreams,<br />
              <span className="text-[#D4AF37]">Delivering Excellence</span>
            </h3>
            <p className="text-[#666666] text-sm leading-relaxed mb-4">
              With over a decade of experience in Nagpur's real estate market, we have helped hundreds
              of families and investors find their perfect property. Our deep understanding of the local
              market, combined with our commitment to quality, makes us the most trusted name in the region.
            </p>
            <p className="text-[#666666] text-sm leading-relaxed mb-8">
              From MIHAN to Wardha Road, our projects are strategically located in Nagpur's fastest-growing
              corridors — ensuring maximum appreciation and lifestyle value for every buyer.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Transparent Deals', 'Verified Properties', 'High ROI Investments', 'RERA Approved', 'Prime Locations'].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/40 text-[#B8962E] bg-[#D4AF37]/5 px-3 py-1.5 rounded-full">
                  ✦ {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To provide transparent, verified, and high-value real estate solutions that help every client make the best investment decision of their life.' },
              { icon: '🌟', title: 'Our Vision',  desc: "To become Nagpur's most trusted real estate brand — known for integrity, innovation, and delivering premium properties that stand the test of time." },
              { icon: '💎', title: 'Our Promise', desc: 'Every property we offer is RERA approved, legally verified, and backed by our end-to-end support — from site visit to final possession.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-5 flex gap-4 hover:border-[#D4AF37]/50 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-xl shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                  {icon}
                </div>
                <div>
                  <h4 className="text-[#1A1A1A] font-bold text-sm mb-1">{title}</h4>
                  <p className="text-[#666666] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Values Grid */}
        {/* <div>
          <div className="text-center mb-10">
            <p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-2">Why Choose Us</p>
            <h3 className="font-display text-3xl font-bold text-[#1A1A1A]">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-6 text-center hover:border-[#D4AF37]/50 hover:shadow-[0_4px_25px_rgba(212,175,55,0.12)] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                  {icon}
                </div>
                <h4 className="text-[#1A1A1A] font-bold text-sm mb-2">{title}</h4>
                <p className="text-[#666666] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  )
}
