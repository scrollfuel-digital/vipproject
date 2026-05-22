// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
// import videoFile from '../assets/video.mp4'
// import ImageFile from '../assets/download.webp'

// const FEATURED_PROPERTIES = [
//   {
//     id: 1,
//     title: 'Luxury Apartments',
//     location: 'MIHAN, Nagpur',
//     price: '₹45L onwards',
//     type: '2BHK & 3BHK',
//     area: '1200-1800 sq.ft',
//     status: 'Ongoing',
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
//     badge: 'Featured',
//   },
//   {
//     id: 2,
//     title: 'Commercial Spaces',
//     location: 'Wardha Road, Nagpur',
//     price: 'On Request',
//     type: 'Shops & Offices',
//     area: '500-2000 sq.ft',
//     status: 'Available',
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
//     badge: 'Hot Deal',
//   },
//   {
//     id: 3,
//     title: 'Premium Villas',
//     location: 'Beltarodi, Nagpur',
//     price: '₹1.2Cr onwards',
//     type: '3BHK & 4BHK',
//     area: '2000-3000 sq.ft',
//     status: 'New Launch',
//     image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
//     badge: 'Exclusive',
//   },
//   {
//     id: 4,
//     title: 'Smart Homes',
//     location: 'Manish Nagar, Nagpur',
//     price: '₹55L onwards',
//     type: '2BHK & 3BHK',
//     area: '1100-1600 sq.ft',
//     status: 'Ready to Move',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
//     badge: 'Ready',
//   },
//   {
//     id: 5,
//     title: 'Penthouse Suites',
//     location: 'Civil Lines, Nagpur',
//     price: '₹2Cr onwards',
//     type: '4BHK Penthouse',
//     area: '3500-4500 sq.ft',
//     status: 'Limited Units',
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
//     badge: 'Luxury',
//   },
//   {
//     id: 6,
//     title: 'Eco Residences',
//     location: 'Koradi Road, Nagpur',
//     price: '₹38L onwards',
//     type: '1BHK & 2BHK',
//     area: '650-1200 sq.ft',
//     status: 'Pre-Launch',
//     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
//     badge: 'New',
//   },
// ]

// export default function Hero() {
//   const navigate = useNavigate()
//   const [currentSlide, setCurrentSlide] = useState(FEATURED_PROPERTIES.length)
//   const [hoveredCard, setHoveredCard] = useState(null)
//   const [isTransitioning, setIsTransitioning] = useState(false)

//   // Create infinite loop by duplicating array
//   const infiniteProperties = [...FEATURED_PROPERTIES, ...FEATURED_PROPERTIES, ...FEATURED_PROPERTIES]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true)
//       setCurrentSlide((prev) => prev + 1)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     if (currentSlide >= FEATURED_PROPERTIES.length * 2) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(false)
//         setCurrentSlide(FEATURED_PROPERTIES.length)
//       }, 600)
//       return () => clearTimeout(timer)
//     } else if (currentSlide < FEATURED_PROPERTIES.length) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(false)
//         setCurrentSlide(FEATURED_PROPERTIES.length * 2 - 1)
//       }, 600)
//       return () => clearTimeout(timer)
//     } else {
//       setIsTransitioning(true)
//     }
//   }, [currentSlide])

//   const nextSlide = () => {
//     setIsTransitioning(true)
//     setCurrentSlide((prev) => prev + 1)
//   }

//   const prevSlide = () => {
//     setIsTransitioning(true)
//     setCurrentSlide((prev) => prev - 1)
//   }

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           src={videoFile}
//           autoPlay
//           loop
//           muted
//           playsInline
//           poster={ImageFile}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
//         <div className="absolute inset-0 bg-[#D4AF37]/5" />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-10 py-24">
//         {/* Centered Content */}
//         <motion.div
//           className="text-center max-w-4xl"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <motion.p
//             className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] mb-3"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             Nagpur's Premium Real Estate
//           </motion.p>

//           <motion.h1
//             className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             Find Your <span className="text-gold-gradient">Dream Home</span>
//           </motion.h1>

//           <motion.p
//             className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//           >
//             Discover luxury residential & commercial projects in Nagpur's most prestigious locations.
//           </motion.p>

//           <motion.div
//             className="flex flex-wrap justify-center gap-4 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.6 }}
//           >
//             <a
//               href="#projects"
//               className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300 shadow-xl hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:scale-105"
//             >
//               Explore Properties
//             </a>
//             <a
//               href="#contact"
//               className="glass border-2 border-white/30 hover:border-white/50 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300 hover:bg-white/10"
//             >
//               Book Site Visit
//             </a>
//           </motion.div>

//         </motion.div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
//     </section>
//   )
// }


'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { MapPin, ArrowRight, Phone, ChevronDown, Play } from 'lucide-react'
import videoFile from '../assets/video.mp4'
import ImageFile from '../assets/download.webp'

/* ─── Stats ──────────────────────────────────────────────── */
// const STATS = [
//   { value: '850+',  label: 'Projects',    suffix: '' },
//   { value: '12K',   label: 'Families',    suffix: '+' },
//   { value: '15',    label: 'Years',       suffix: '+' },
//   { value: '98',    label: 'Satisfied',   suffix: '%' },
// ]

/* ─── Rotating words ─────────────────────────────────────── */
const WORDS = ['Dream Home', 'Legacy', 'Investment', 'Future']

/* ─── Pill badges (top marquee) ──────────────────────────── */
const BADGES = [
  '2BHK & 3BHK Apartments',
  'Luxury Villas',
  'Commercial Spaces',
  'Penthouse Suites',
  'Smart Homes',
  'Eco Residences',
]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [showWord, setShowWord] = useState(true)
  const [ready, setReady] = useState(false)
  const sectionRef = useRef(null)

  /* Parallax */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const vidY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const txtY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  /* Mount */
  useEffect(() => { const t = setTimeout(() => setReady(true), 200); return () => clearTimeout(t) }, [])

  /* Rotate word */
  useEffect(() => {
    const id = setInterval(() => {
      setShowWord(false)
      setTimeout(() => { setWordIdx(i => (i + 1) % WORDS.length); setShowWord(true) }, 380)
    }, 3400)
    return () => clearInterval(id)
  }, [])

  const scrollDown = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  /* Stagger helper */
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col"
    >

      {/* ══════════════════════════════════════════
          VIDEO BACKGROUND
      ══════════════════════════════════════════ */}
      <motion.div className="absolute inset-0 z-0" style={{ y: vidY }}>
        <video
          className="absolute inset-0 w-full h-full object-cover scale-[1.06]"
          src={videoFile}
          autoPlay loop muted playsInline
          poster={ImageFile}
        />

        {/* Deep cinematic dark */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Top-to-bottom gradient — heavier at bottom so text overlaps cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" />

        {/* Left atmospheric bleed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* Gold base glow */}
        <div
          className="absolute inset-0 opacity-25"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />
      </motion.div>

      {/* ══════════════════════════════════════════
          CORNER BRACKETS
      ══════════════════════════════════════════ */}
      {[
        'top-5 left-5 border-t border-l',
        'top-5 right-5 border-t border-r',
        'bottom-14 left-5 border-b border-l',
        'bottom-14 right-5 border-b border-r',
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute z-30 w-9 h-9 border-[rgba(212,175,55,0.45)] pointer-events-none ${cls}`}
          initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 + i * 0.07, duration: 0.5 }}
        />
      ))}

      {/* ══════════════════════════════════════════
          TOP STRIP — scrolling pill badges
      ══════════════════════════════════════════ */}
      <motion.div
        className="relative z-20 w-full pt-6 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {/* Location pill — centred */}
        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-[9px] font-medium tracking-[0.22em] uppercase"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '0.5px solid rgba(212,175,55,0.42)',
            backdropFilter: 'blur(16px)',
            color: 'rgba(212,175,55,0.9)',
          }}
        >
          <MapPin size={10} strokeWidth={2} />
          Nagpur, Maharashtra · Est. 2009
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — centred, overlapping video
      ══════════════════════════════════════════ */}
      <motion.div
        className="relative z-20 flex-1 flex flex-col items-center justify-center px-5 md:px-10 text-center"
        style={{ opacity: fade, y: txtY }}
      >

        {/* — Eyebrow rule — */}
        <motion.div className="flex items-center gap-4 mb-6" {...reveal(0.45)}>
          <div className="w-10 h-px" style={{ background: 'rgba(212,175,55,0.5)' }} />
          <span className="font-body text-[9px] font-semibold tracking-[0.36em] uppercase"
            style={{ color: 'rgba(212,175,55,0.8)' }}>
            Premium Real Estate · Nagpur
          </span>
          <div className="w-10 h-px" style={{ background: 'rgba(212,175,55,0.5)' }} />
        </motion.div>

        {/* — Static headline — */}
        <div className="overflow-hidden">
          <motion.p
            className="font-display text-white font-bold leading-[1.02] tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
            initial={{ y: 80, opacity: 0 }}
            animate={ready ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.55, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Find Your
          </motion.p>
        </div>

        {/* — Rotating gold word — */}
       
        <div className="relative overflow-hidden mb-4 flex items-center justify-center min-h-[clamp(4.5rem,9vw,7rem)]">
          <AnimatePresence mode="wait">
            {showWord && (
              <motion.span
                key={WORDS[wordIdx]}
                className="
          font-display
          font-bold
          italic
          text-gold-gradient
          block
          leading-[1.15]
          tracking-tight
          text-[clamp(3.2rem,7vw,5.8rem)]
          pt-[0.15em]
          pb-[0.15em]
        "
                initial={{
                  y: 40,
                  opacity: 0,
                  filter: 'blur(8px)',
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                exit={{
                  y: -40,
                  opacity: 0,
                  filter: 'blur(8px)',
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {WORDS[wordIdx]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {/* — Subtitle — */}
        <motion.p
          className="font-body font-light leading-[1.85] max-w-[520px] mt-4 mb-10"
          style={{
            fontSize: 'clamp(0.78rem, 1.35vw, 0.95rem)',
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.025em',
          }}
          {...reveal(0.9)}
        >
          Curated luxury residential & commercial properties across Nagpur's
          most coveted addresses — where architecture meets aspiration.
        </motion.p>

        {/* — CTA Buttons — */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          {...reveal(1.1)}
        >
          {/* Gold primary */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-[2px] font-body font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding: '14px 38px',
              fontSize: '0.68rem',
              background: 'linear-gradient(135deg, #D4AF37 0%, #C09830 52%, #9E7818 100%)',
              color: '#18100a',
              boxShadow: '0 0 36px rgba(212,175,55,0.28), 0 8px 28px rgba(0,0,0,0.45)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 58px rgba(212,175,55,0.5), 0 12px 40px rgba(0,0,0,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 36px rgba(212,175,55,0.28), 0 8px 28px rgba(0,0,0,0.45)' }}
          >
            {/* shimmer sweep */}
            <span
              className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none"
              style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)', width: '55%' }}
            />
            Explore Properties
            <ArrowRight size={13} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          {/* Glass secondary */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-[2px] font-body font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding: '14px 38px',
              fontSize: '0.68rem',
              background: 'rgba(255,255,255,0.07)',
              border: '0.5px solid rgba(255,255,255,0.28)',
              backdropFilter: 'blur(18px)',
              color: 'rgba(255,255,255,0.85)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212,175,55,0.12)'
              e.currentTarget.style.borderColor = 'rgba(212,175,55,0.55)'
              e.currentTarget.style.color = '#D4AF37'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            }}
          >
            <Phone size={12} strokeWidth={1.8} />
            Book Site Visit
          </a>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════
          BOTTOM — scrolling property badge ticker
      ══════════════════════════════════════════ */}
      <motion.div
        className="relative z-20 w-full py-4 overflow-hidden"
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.07)',
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(12px)',
        }}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.7, duration: 0.7 }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.7), transparent)' }} />

        <div className="ticker-track">
          {[...BADGES, ...BADGES].map((b, i) => (
            <div key={i} className="flex items-center gap-2 mx-4">
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-body font-medium whitespace-nowrap"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  background: 'rgba(212,175,55,0.1)',
                  border: '0.5px solid rgba(212,175,55,0.3)',
                  color: 'rgba(212,175,55,0.85)',
                }}
              >
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(212,175,55,0.7)', display: 'inline-block', flexShrink: 0 }} />
                {b}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          SCROLL INDICATOR
      ══════════════════════════════════════════ */}
      <motion.button
        onClick={scrollDown}
        className="absolute right-7 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer"
        initial={{ opacity: 0, x: 16 }}
        animate={ready ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 2, duration: 0.7 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to projects"
      >
        <div
          className="w-[1px] h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.55))' }}
        />
        <div
          className="w-[20px] h-[32px] flex items-start justify-center pt-[4px] rounded-[10px]"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <div
            className="animate-scroll-indicator w-[3px] h-[6px] rounded-full"
            style={{ background: 'rgba(212,175,55,0.75)' }}
          />
        </div>
        <span
          className="font-body font-medium uppercase"
          style={{
            fontSize: '7px',
            letterSpacing: '0.24em',
            color: 'rgba(255,255,255,0.3)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            marginTop: '4px',
          }}
        >
          Scroll
        </span>
      </motion.button>

    </section>
  )
}