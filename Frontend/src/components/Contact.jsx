import { useState } from 'react'
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
        <div className="text-center mb-16">
          <p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            Book Your <span className="text-gold-gradient">Site Visit</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5" />
          <p className="text-[#666666] text-base max-w-xl mx-auto">
            Looking to buy your dream home or invest in Nagpur? Our experts are ready to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left Info */}
          <div className="space-y-4">
            {[
              { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra' },
              { icon: Mail, label: 'Email', value: 'info@vviprealty.com' },
              { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX' },
              { icon: Clock, label: 'Hours', value: 'Mon – Sat: 9AM – 7PM' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-5 flex items-center gap-4 hover:border-[#D4AF37]/50 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-xl shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Icon className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#666666] font-bold uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-[#1A1A1A] font-semibold text-sm">{value}</p>
                </div>
              </div>
            ))}

            {/* Why Choose Us */}
            <div className="bg-[#FAFAFA] border border-[#D4AF37]/25 rounded-2xl p-6 mt-2">
              <p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-4">Why Choose V.VIP Realty?</p>
              <ul className="space-y-3">
                {['Verified & RERA Approved Properties', 'Prime Location Projects in Nagpur', 'Transparent Pricing — No Hidden Costs', 'High ROI Investment Options', 'End-to-End Buyer Support'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#666666]">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#D4AF37]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-8 shadow-sm">
            <h3 className="text-[#1A1A1A] font-bold text-lg mb-1">Send Us a Message</h3>
            <p className="text-[#666666] text-xs mb-6">Fill in the form and our team will contact you within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-[#10B981]" />
                </div>
                <p className="text-[#10B981] font-bold text-base">Message Sent Successfully!</p>
                <p className="text-[#666666] text-xs text-center">Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Full Name</label>
                    <input type="text" required placeholder="Your Name"
                      className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Phone Number</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Email Address</label>
                  <input type="email" placeholder="your@email.com"
                    className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Property Type</label>
                  <select className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option value="">Select Property Type</option>
                    <option>2BHK Apartment</option>
                    <option>3BHK Apartment</option>
                    <option>Commercial Space</option>
                    <option>Investment Property</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Budget Range</label>
                  <select className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option value="">Select Budget</option>
                    <option>₹45L – ₹70L</option>
                    <option>₹70L – ₹1Cr</option>
                    <option>₹1Cr – ₹2Cr</option>
                    <option>₹2Cr+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">Message</label>
                  <textarea rows={3} placeholder="Tell us about your requirements..."
                    className="w-full bg-white border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
                  Book Site Visit
                </button>
                <button type="button"
                  className="w-full border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#B8962E] hover:text-white font-bold py-3.5 rounded-xl text-sm tracking-widest uppercase transition-all duration-300">
                  Get Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
