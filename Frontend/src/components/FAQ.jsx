import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  { category: 'Investment', q: 'Is investing in Nagpur real estate a good option?',  a: "Absolutely. Nagpur is one of India's fastest-growing cities with major infrastructure projects like MIHAN, Metro Rail, and the Samruddhi Expressway. Property prices are still affordable compared to metro cities, making it an ideal time to invest for strong future appreciation." },
  { category: 'Legal',      q: 'Are your projects RERA approved?',                   a: 'Yes, all our projects are fully RERA approved and legally verified. We maintain complete transparency in documentation, ensuring complete buyer protection and peace of mind throughout the purchase process.' },
  { category: 'Finance',    q: 'Do you provide home loan assistance?',               a: 'Yes, we have tie-ups with leading banks including SBI, HDFC, ICICI, and Axis Bank. Our dedicated finance team assists you with loan eligibility, documentation, and approval — making the process smooth and hassle-free.' },
  { category: 'Property',   q: 'What configurations are available?',                 a: 'We offer premium 2BHK and 3BHK luxury apartments with modern layouts and premium finishing. We also have commercial spaces including shops and office units in prime Nagpur locations.' },
  { category: 'Property',   q: 'What is the starting price of your projects?',       a: 'Our residential projects start from ₹45 Lakhs* for 2BHK configurations. Prices vary based on location, floor, and configuration. Contact us for the latest pricing and exclusive offers.' },
  { category: 'Process',    q: 'How do I book a site visit?',                        a: 'Simply fill out the contact form on this page or call us directly. Our team will schedule a convenient site visit at your preferred time. Site visits are completely free with no obligation.' },
  { category: 'Process',    q: 'What is the possession timeline?',                   a: 'Our ongoing projects are scheduled for possession by 2026. Ready-to-move properties are available for immediate possession. We strictly adhere to our committed timelines as per RERA guidelines.' },
  { category: 'Investment', q: 'What is the expected ROI on Nagpur properties?',     a: 'Properties in prime Nagpur locations like MIHAN and Wardha Road have shown 15–25% appreciation over the past 3 years. With upcoming infrastructure development, the growth trajectory is expected to remain strong.' },
]

const CATEGORIES = ['All', 'Investment', 'Legal', 'Finance', 'Property', 'Process']

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? FAQS : FAQS.filter(f => f.category === activeCategory)

  return (
    <section className="bg-[#FAFAFA] py-24 px-4 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4AF37]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

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
            Got Questions?
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
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
            Everything you need to know about buying or investing in Nagpur real estate.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.button 
              key={cat} 
              onClick={() => { setActiveCategory(cat); setOpen(null) }}
              className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md'
                  : 'border-[#D4AF37]/30 text-[#666666] bg-white hover:border-[#D4AF37] hover:text-[#B8962E]'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map(({ q, a, category }, i) => (
            <motion.div 
              key={i} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? 'border-[#D4AF37]/55 shadow-[0_4px_20px_rgba(212,175,55,0.12)]' : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="shrink-0 text-[9px] font-bold uppercase tracking-widest text-[#B8962E] border border-[#D4AF37]/35 bg-[#D4AF37]/8 px-2 py-0.5 rounded-full hidden sm:block">
                    {category}
                  </span>
                  <span className="text-[#1A1A1A] font-semibold text-sm leading-snug">{q}</span>
                </div>
                <motion.div 
                  className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    open === i ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-[#D4AF37]/35 bg-white'
                  }`}
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className={`w-3.5 h-3.5 transition-colors ${open === i ? 'text-white' : 'text-[#D4AF37]'}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    className="px-6 pb-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-px bg-gradient-to-r from-[#D4AF37]/25 to-transparent mb-4" />
                    <p className="text-[#666666] text-sm leading-relaxed">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div 
          className="mt-12 bg-white border border-[#D4AF37]/25 rounded-2xl p-8 text-center shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-2xl mx-auto mb-4">💬</div>
          <h3 className="text-[#1A1A1A] font-bold text-lg mb-2">Still Have Questions?</h3>
          <p className="text-[#666666] text-sm mb-6 max-w-sm mx-auto">Our real estate experts are available Mon–Sat, 9AM–7PM to answer all your queries.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a 
              href="#contact" 
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold px-8 py-3 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-[0_6px_20px_rgba(212,175,55,0.35)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
            <motion.a 
              href="tel:+91XXXXXXXXXX" 
              className="border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#B8962E] hover:text-white font-bold px-8 py-3 rounded-xl text-sm tracking-widest uppercase transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
