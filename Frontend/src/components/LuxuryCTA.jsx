import { motion } from 'framer-motion'
import { ArrowRight, Phone, Download, Calendar } from 'lucide-react'

export default function LuxuryCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />
      </div> */}

      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div> */}

      {/* Content */}
      {/* <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
       
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-white text-sm font-semibold uppercase tracking-wider">
              Limited Time Offer
            </span>
          </motion.div>

          
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to Find Your
            <br />
            <span className="text-gold-gradient">Dream Home?</span>
          </motion.h2>

       
          <motion.p
            className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Schedule a site visit today and experience luxury living in Nagpur's most prestigious locations
          </motion.p>

          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-5 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="group relative bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] hover:from-[#B8962E] hover:to-[#D4AF37] text-[#0F172A] font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(212,175,55,0.5)] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6" />
                Book Site Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="tel:+918788430110"
              className="group border-2 border-white/40 hover:border-white/70 text-white font-bold px-10 py-5 rounded-xl text-lg backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                Call Now
              </span>
            </motion.a>

            <motion.a
              href="#projects"
              className="group border-2 border-white/40 hover:border-white/70 text-white font-bold px-10 py-5 rounded-xl text-lg backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                <Download className="w-6 h-6" />
                Download Brochure
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: '✓', text: '100% RERA Approved' },
              { icon: '✓', text: 'Transparent Pricing' },
              { icon: '✓', text: 'Prime Locations' },
              { icon: '✓', text: 'Easy Home Loans' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center">
                  <span className="text-[#D4AF37] text-sm font-bold">{item.icon}</span>
                </div>
                <span className="text-white/80 text-sm md:text-base font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div> */}

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
