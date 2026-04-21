'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import videoFile from '../assets/video.mp4'
import ImageFile from '../assets/download.webp'

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: 'Luxury Apartments',
    location: 'MIHAN, Nagpur',
    price: '₹45L onwards',
    type: '2BHK & 3BHK',
    area: '1200-1800 sq.ft',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Commercial Spaces',
    location: 'Wardha Road, Nagpur',
    price: 'On Request',
    type: 'Shops & Offices',
    area: '500-2000 sq.ft',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    badge: 'Hot Deal',
  },
  {
    id: 3,
    title: 'Premium Villas',
    location: 'Beltarodi, Nagpur',
    price: '₹1.2Cr onwards',
    type: '3BHK & 4BHK',
    area: '2000-3000 sq.ft',
    status: 'New Launch',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    badge: 'Exclusive',
  },
  {
    id: 4,
    title: 'Smart Homes',
    location: 'Manish Nagar, Nagpur',
    price: '₹55L onwards',
    type: '2BHK & 3BHK',
    area: '1100-1600 sq.ft',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    badge: 'Ready',
  },
  {
    id: 5,
    title: 'Penthouse Suites',
    location: 'Civil Lines, Nagpur',
    price: '₹2Cr onwards',
    type: '4BHK Penthouse',
    area: '3500-4500 sq.ft',
    status: 'Limited Units',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    badge: 'Luxury',
  },
  {
    id: 6,
    title: 'Eco Residences',
    location: 'Koradi Road, Nagpur',
    price: '₹38L onwards',
    type: '1BHK & 2BHK',
    area: '650-1200 sq.ft',
    status: 'Pre-Launch',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    badge: 'New',
  },
]

export default function Hero() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(FEATURED_PROPERTIES.length)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // Create infinite loop by duplicating array
  const infiniteProperties = [...FEATURED_PROPERTIES, ...FEATURED_PROPERTIES, ...FEATURED_PROPERTIES]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentSlide((prev) => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentSlide >= FEATURED_PROPERTIES.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(FEATURED_PROPERTIES.length)
      }, 600)
      return () => clearTimeout(timer)
    } else if (currentSlide < FEATURED_PROPERTIES.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(FEATURED_PROPERTIES.length * 2 - 1)
      }, 600)
      return () => clearTimeout(timer)
    } else {
      setIsTransitioning(true)
    }
  }, [currentSlide])

  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev - 1)
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[#D4AF37]/5" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-10 py-24">
        
        {/* Centered Content */}
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nagpur's Premium Real Estate
          </motion.p>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Find Your <span className="text-gold-gradient">Dream Home</span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Discover luxury residential & commercial projects in Nagpur's most prestigious locations.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300 shadow-xl hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:scale-105"
            >
              Explore Properties
            </a>
            <a
              href="#contact"
              className="glass border-2 border-white/30 hover:border-white/50 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300 hover:bg-white/10"
            >
              Book Site Visit
            </a>
          </motion.div>

        </motion.div>

        {/* Property Slider - Infinite Loop */}
        <motion.div
          className="w-full pb-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-visible">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `calc(-${currentSlide * 33.33}%)`
                }}
                transition={{
                  type: isTransitioning ? "spring" : "tween",
                  stiffness: 300,
                  damping: 30,
                  duration: isTransitioning ? 0.8 : 0
                }}
              >
                {infiniteProperties.map((property, index) => {
                  const isHovered = hoveredCard === index

                  return (
                    <motion.div
                      key={`${property.id}-${index}`}
                      className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 bg-gray-900"
                      style={{ width: 'calc(33.33% - 1rem)', height: '350px' }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => navigate(`/project/${property.id}`)}
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                    {/* Property Image */}
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                        {property.badge}
                      </span>
                    </div>

                    {/* Property Info - Show on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 p-6 flex flex-col justify-end text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4 text-[#D4AF37]" />
                            <p className="text-sm text-white/80">{property.location}</p>
                          </div>

                          <h3 className="text-2xl font-display font-bold mb-4">{property.title}</h3>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div>
                              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Type</p>
                              <p className="text-sm font-semibold">{property.type}</p>
                            </div>
                            <div>
                              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Area</p>
                              <p className="text-sm font-semibold">{property.area}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-white/20">
                            <div>
                              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Starting From</p>
                              <p className="text-xl font-bold text-[#D4AF37]">{property.price}</p>
                            </div>
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 border border-white/30">
                              View Details
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Minimal Info - Show when not hovered */}
                    {!isHovered && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-display font-bold mb-1">{property.title}</p>
                        <p className="text-sm text-white/70">{property.location}</p>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-30 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl z-20 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-30 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl z-20 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {FEATURED_PROPERTIES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(FEATURED_PROPERTIES.length + index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    (currentSlide % FEATURED_PROPERTIES.length) === index ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
    </section>
  )
}
