import { motion } from 'framer-motion'

const TESTIMONIALS = [
  { quote: 'Smooth buying experience and excellent support throughout the entire process. The team was professional and transparent at every step.', name: 'Rahul Sharma',   role: 'Home Buyer',    location: 'MIHAN, Nagpur',         rating: 5, initial: 'R' },
  { quote: 'Best property investment decision I made in Nagpur. The ROI has been exceptional and the location appreciation is outstanding.',        name: 'Priya Mehta',    role: 'Investor',      location: 'Wardha Road, Nagpur',   rating: 5, initial: 'P' },
  { quote: 'Highly professional and transparent team. They guided us through every legal detail and made the entire process stress-free.',           name: 'Amit Kulkarni',  role: 'Home Buyer',    location: 'Beltarodi, Nagpur',     rating: 5, initial: 'A' },
  { quote: 'V.VIP Realty delivered exactly what they promised. Premium quality construction and world-class amenities. Truly a luxury experience.',  name: 'Sneha Deshmukh', role: 'Home Buyer',    location: 'Manish Nagar, Nagpur',  rating: 5, initial: 'S' },
  { quote: 'The team helped me find the perfect commercial space for my business. Great location, fair pricing, and zero hidden charges.',           name: 'Vikram Joshi',   role: 'Business Owner', location: 'MIHAN, Nagpur',        rating: 5, initial: 'V' },
  { quote: 'From site visit to possession, the entire journey was seamless. I highly recommend V.VIP Realty to anyone looking to invest in Nagpur.', name: 'Neha Patil',    role: 'Investor',      location: 'Wardha Road, Nagpur',   rating: 5, initial: 'N' },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          className="text-center mb-14"
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
            Client Stories
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <motion.div 
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="text-[#666666] text-base max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Real experiences from real clients — families and investors who trusted V.VIP Realty.
          </motion.p>
        </motion.div>

        {/* Rating Banner */}
        <motion.div 
          className="bg-[#FAFAFA] border border-[#D4AF37]/25 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[['4.9', 'Overall Rating'], ['500+', 'Happy Clients'], ['100%', 'Satisfaction Rate']].map(([num, label], i) => (
            <motion.div 
              key={label} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <p className="font-display text-4xl font-bold text-[#D4AF37]">{num}</p>
              <p className="text-[#666666] text-xs uppercase tracking-widest mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ quote, name, role, location, rating, initial }, i) => (
            <motion.div 
              key={name} 
              className="bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-6 flex flex-col hover:border-[#D4AF37]/50 hover:shadow-[0_4px_25px_rgba(212,175,55,0.12)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-[#D4AF37]/25 text-6xl font-serif leading-none mb-2 select-none">"</div>
              <Stars count={rating} />
              <p className="text-[#666666] text-sm leading-relaxed mt-4 mb-6 flex-1">"{quote}"</p>
              <div className="h-px bg-gradient-to-r from-[#D4AF37]/25 to-transparent mb-4" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/25 transition-colors">
                  <span className="text-[#B8962E] font-bold text-sm">{initial}</span>
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-bold text-sm">{name}</p>
                  <p className="text-[#666666] text-xs">{role} · {location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#666666] text-sm mb-5">Join 500+ happy clients who found their dream property with us</p>
          <motion.a 
            href="#contact" 
            className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
