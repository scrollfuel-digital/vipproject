import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react'

const FAQS = [
  {
    question: 'Are all your properties RERA approved?',
    answer: 'Yes, absolutely. All our projects are 100% RERA approved and legally verified. We ensure complete transparency and compliance with all regulatory requirements. You can verify the RERA registration numbers on our project pages and the official RERA website.'
  },
  {
    question: 'What is the booking process?',
    answer: 'Our booking process is simple and transparent: 1) Schedule a site visit, 2) Choose your preferred unit, 3) Complete documentation with our legal team, 4) Pay the booking amount, 5) Sign the agreement. Our team guides you through every step to ensure a smooth experience.'
  },
  {
    question: 'Do you offer home loan assistance?',
    answer: 'Yes, we have tie-ups with leading banks and financial institutions including SBI, HDFC, ICICI, and Axis Bank. Our dedicated loan assistance team helps you get the best interest rates and ensures quick approval. We handle all the paperwork and coordination with banks.'
  },
  {
    question: 'What are the payment plans available?',
    answer: 'We offer flexible payment plans to suit your financial needs: Construction-linked payment plan, Possession-linked payment plan, Down payment + EMI options, and Subvention schemes. Our team can customize a payment schedule based on your requirements.'
  },
  {
    question: 'Can I visit the project site?',
    answer: 'Absolutely! We encourage site visits. You can schedule a free site visit by calling us or filling the contact form. Our representatives will arrange transportation, show you the project, explain all details, and answer your questions. Weekend visits are also available.'
  },
  {
    question: 'What documents are required for booking?',
    answer: 'For booking, you need: Aadhar Card, PAN Card, Address Proof, Passport size photographs, and Bank statements (for home loan). Our documentation team will guide you through the complete list and help you prepare all necessary paperwork.'
  },
  {
    question: 'Is there any resale value guarantee?',
    answer: 'While we cannot legally guarantee resale values, our projects are strategically located in high-growth areas of Nagpur like MIHAN, Wardha Road, and Beltarodi. Historical data shows 15-25% appreciation in these locations over 3-5 years. We provide market analysis reports to help you make informed decisions.'
  },
  {
    question: 'What amenities are included in the projects?',
    answer: 'Our projects feature world-class amenities including: 24/7 security, Clubhouse, Swimming pool, Gymnasium, Children\'s play area, Landscaped gardens, Power backup, Covered parking, and more. Specific amenities vary by project — check individual project pages for details.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#D4AF37]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#B8962E] text-xs font-bold uppercase tracking-wider">
              Got Questions?
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Frequently Asked{' '}
            <span className="text-gold-gradient">Questions</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p
            className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Find answers to common questions about our properties, booking process, and services.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#FAFAFA] border-2 border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#D4AF37] font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-[#1A1A1A] leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-[72px]">
                      <div className="border-l-2 border-[#D4AF37]/30 pl-6">
                        <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <motion.div
          className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="font-display text-2xl md:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Still Have Questions?
          </motion.h3>
          <motion.p
            className="text-white/70 text-base mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our expert team is here to help. Reach out to us and we'll answer all your queries.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="tel:+918788430110"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] hover:from-[#B8962E] hover:to-[#D4AF37] text-[#0F172A] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}
