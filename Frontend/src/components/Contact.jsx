import { useState } from 'react'
import { CheckCircle2, Check, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

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
          <Link to="/contact">
            <button className="mt-6 bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold py-3 px-8 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}
