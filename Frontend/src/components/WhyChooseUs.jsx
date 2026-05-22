import { motion } from 'framer-motion'
import { Award, Shield, TrendingUp, Users, Zap, Gem, CheckCircle, Star } from 'lucide-react'

const VALUES = [
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'World-class construction standards with finest materials and modern architecture',
    color: '#D4AF37'
  },
  {
    icon: Shield,
    title: '100% Transparent',
    desc: 'No hidden charges. Clear documentation, verified properties and honest pricing',
    color: '#10B981'
  },
  {
    icon: TrendingUp,
    title: 'High ROI',
    desc: 'Strategic locations in Nagpur ensure strong appreciation and excellent returns',
    color: '#3B82F6'
  },
  {
    icon: Users,
    title: 'End-to-End Support',
    desc: 'From site visit to possession — we guide you at every step of your journey',
    color: '#8B5CF6'
  },
  {
    icon: Zap,
    title: 'Fast Approvals',
    desc: 'RERA approved projects with quick documentation and hassle-free processes',
    color: '#F59E0B'
  },
  {
    icon: Gem,
    title: 'Luxury Amenities',
    desc: 'Premium facilities, modern clubhouse, and world-class amenities in every project',
    color: '#EC4899'
  }
]

const FEATURES = [
  'RERA Approved Projects',
  'Prime Locations',
  'Transparent Pricing',
  'Legal Verification',
  'Home Loan Assistance',
  'Flexible Payment Plans',
  'Quality Construction',
  '24/7 Customer Support'
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#FAFAFA] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#B8962E] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            What Makes Us{' '}
            <span className="text-gold-gradient">Different</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p
            className="text-[#666666] text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            We don't just sell properties — we build dreams, create communities, and deliver exceptional value that stands the test of time.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {VALUES.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                className="group relative bg-white border-2 border-[#D4AF37]/20 rounded-3xl p-8 hover:border-[#D4AF37] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="relative w-16 h-16 mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: value.color }}
                  />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Icon
                      className="w-8 h-8 transition-colors duration-300"
                      style={{ color: value.color }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {value.title}
                </h3>
                <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                  {value.desc}
                </p>

                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </div>

        {/* Features List */}
        <motion.div
          className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-10 md:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                  Premium Benefits
                </span>
              </motion.div>

              <motion.h3
                className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Everything You Need for a{' '}
                <span className="text-gold-gradient">Perfect Investment</span>
              </motion.h3>

              <motion.p
                className="text-white/70 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                From legal verification to home loan assistance, we provide comprehensive support to make your property buying journey smooth and hassle-free.
              </motion.p>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] hover:from-[#B8962E] hover:to-[#D4AF37] text-[#0F172A] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] hover:scale-105"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                Schedule a Meeting
                <CheckCircle className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Right Side - Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium leading-snug">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
