import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = ['All', 'Exterior', 'Interior', 'Amenities', 'Location']

const ITEMS = [
  { label: 'Grand Exterior View',   tag: 'Exterior',  size: 'large' },
  { label: 'Premium Living Room',   tag: 'Interior',  size: 'small' },
  { label: 'Master Bedroom Suite',  tag: 'Interior',  size: 'small' },
  { label: 'Rooftop Swimming Pool', tag: 'Amenities', size: 'small' },
  { label: 'Modern Clubhouse',      tag: 'Amenities', size: 'small' },
  { label: 'Landscaped Garden',     tag: 'Amenities', size: 'large' },
  { label: 'Lobby & Entrance',      tag: 'Interior',  size: 'small' },
  { label: 'MIHAN Aerial View',     tag: 'Location',  size: 'small' },
  { label: 'Wardha Road Corridor',  tag: 'Location',  size: 'small' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? ITEMS : ITEMS.filter(i => i.tag === active)

  return (
    <section id="gallery" className="bg-[#FAFAFA] py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
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
              Visual Tour
            </motion.p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
              Our <span className="text-gold-gradient">Gallery</span>
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
              Experience quality, design, and lifestyle before you invest.
            </motion.p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {CATEGORIES.map((cat, i) => (
              <motion.button 
                key={cat} 
                onClick={() => setActive(cat)}
                className={`text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full border transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md'
                    : 'border-[#D4AF37]/35 text-[#666666] hover:border-[#D4AF37] hover:text-[#B8962E] bg-white'
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

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map(({ label, tag, size }, i) => (
                <motion.div 
                  key={label}
                  className={`relative group rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/55 hover:shadow-[0_4px_25px_rgba(212,175,55,0.15)] transition-all duration-300 bg-white ${
                    size === 'large' ? 'md:col-span-2 aspect-[16/7]' : 'aspect-video'
                  }`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-white to-[#FFF8E7]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-2xl group-hover:bg-[#D4AF37]/20 transition-colors">
                      🖼️
                    </div>
                    <p className="text-[#1A1A1A] text-sm font-semibold text-center px-4">{label}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8962E] border border-[#D4AF37]/35 bg-[#D4AF37]/8 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full bg-white/90 backdrop-blur rounded-xl px-4 py-3 flex items-center justify-between border border-[#D4AF37]/20">
                      <p className="text-[#1A1A1A] text-xs font-semibold">{label}</p>
                      <span className="text-[#D4AF37] text-lg font-bold">↗</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#666666] text-sm mb-5">Want to see the actual property?</p>
            <motion.a 
              href="/contact" 
              className="inline-block border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#B8962E] hover:text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Site Visit
            </motion.a>
          </motion.div>
        </div>
      </section>
  )
}
