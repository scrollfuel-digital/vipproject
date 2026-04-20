'use client'

import { motion } from 'framer-motion'
import videoFile from '../assets/video.mp4'
import ImageFile from '../assets/download.webp'
/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay },
  }),
}

const statVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.1 + i * 0.12 },
  }),
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function Hero() {

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* ── Background Video ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={videoFile} 
          autoPlay
          loop
          muted
          playsInline
          poster={ImageFile}
        />
        {/* Dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle gold tint layer */}
        <div className="absolute inset-0 bg-[#D4AF37]/5" />
      </div>

      {/* ── Top border accent ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Label */}
        {/* <motion.p
          className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Nagpur&rsquo;s Premium Real Estate
        </motion.p> */}

        {/* H1 */}
        {/* <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6 text-white"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          Luxury Residential &amp;{' '}
          <span className="text-[#D4AF37]">Commercial Projects</span>{' '}
          in Nagpur
        </motion.h1> */}

        {/* Subtext */}
        {/* <motion.p
          className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          Find your dream property or best investment opportunity in one of
          India&rsquo;s fastest-growing cities.
        </motion.p> */}

        {/* Tagline */}
        {/* <motion.p
          className="text-[#D4AF37] italic text-base mb-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          &ldquo;Today it&rsquo;s a property. Tomorrow it&rsquo;s your biggest asset.&rdquo;
        </motion.p> */}

        {/* CTAs */}
        {/* <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
        >
          <a
            href="#contact"
            className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.45)]"
          >
            Book Site Visit
          </a>
          <a
            href="#projects"
            className="border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-sm"
          >
            Explore Projects
          </a>
        </motion.div> */}

        
      </div>

      {/* ── Bottom fade ───────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
    </section>
  )
}