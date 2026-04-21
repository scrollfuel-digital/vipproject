import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Check, Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-white py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />
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
              Get In Touch
            </motion.p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
              Book Your <span className="text-gold-gradient">Site Visit</span>
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
              Looking to buy your dream home or invest in Nagpur? Our experts are ready to guide you.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Info */}
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra' },
                { icon: Mail, label: 'Email', value: 'info@vviprealty.com' },
                { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX' },
                { icon: Clock, label: 'Hours', value: 'Mon – Sat: 9AM – 7PM' },
              ].map(({ icon: Icon, label, value }, i) => (
                <motion.div 
                  key={label} 
                  className="bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-5 flex items-center gap-4 hover:border-[#D4AF37]/50 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-xl shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#666666] font-bold uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-[#1A1A1A] font-semibold text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Why Choose Us */}
              <motion.div 
                className="bg-[#FAFAFA] border border-[#D4AF37]/25 rounded-2xl p-6 mt-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-4">Why Choose V.VIP Realty?</p>
                <ul className="space-y-3">
                  {['Verified & RERA Approved Properties', 'Prime Location Projects in Nagpur', 'Transparent Pricing — No Hidden Costs', 'High ROI Investment Options', 'End-to-End Buyer Support'].map((item, i) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-3 text-sm text-[#666666]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    >
                      <span className="w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#D4AF37]" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Form */}
            <motion.div 
              className="bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[#1A1A1A] font-bold text-lg mb-1">Send Us a Message</h3>
              <p className="text-[#666666] text-xs mb-6">Fill in the form and our team will contact you within 24 hours.</p>

              {submitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12 gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="h-8 w-8 text-[#10B981]" />
                  </motion.div>
                  <p className="text-[#10B981] font-bold text-base">Message Sent Successfully!</p>
                  <p className="text-[#666666] text-xs text-center">Our team will reach out to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Full Name</label>
                      <input type="text" required placeholder="Your Name"
                        className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                    >
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Phone Number</label>
                      <input type="tel" required placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Email Address</label>
                    <input type="email" placeholder="your@email.com"
                      className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Property Type</label>
                    <select className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                      <option value="">Select Property Type</option>
                      <option>2BHK Apartment</option>
                      <option>3BHK Apartment</option>
                      <option>Commercial Space</option>
                      <option>Investment Property</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Budget Range</label>
                    <select className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                      <option value="">Select Budget</option>
                      <option>₹45L – ₹70L</option>
                      <option>₹70L – ₹1Cr</option>
                      <option>₹1Cr – ₹2Cr</option>
                      <option>₹2Cr+</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Message</label>
                    <textarea rows={3} placeholder="Tell us about your requirements..."
                      className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" />
                  </motion.div>
                  <motion.button 
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Site Visit
                  </motion.button>
                  <motion.button 
                    type="button"
                    className="w-full border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#B8962E] hover:text-white font-bold py-3.5 rounded-xl text-sm tracking-widest uppercase transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Consultation
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
  )
}
