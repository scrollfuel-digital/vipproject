import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Lock,
  Droplet,
  Dumbbell,
  Leaf,
  ToyBrick,
  Building2,
  Footprints,
  Zap,
  BatteryCharging,
  ArrowUpDown,
  Car,
  Wifi,
  ChevronLeft,
  ChevronRight,
  X,
  Play
} from "lucide-react"

const AMENITIES = [
  { id: 'security-cctv', icon: Lock, title: '24/7 Security & CCTV', desc: 'Round-the-clock surveillance and trained security personnel.', media: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800', type: 'image' },
  { id: 'swimming-pool', icon: Droplet, title: 'Swimming Pool', desc: 'Temperature-controlled pool with premium finishing.', media: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800', type: 'image' },
  { id: 'gymnasium', icon: Dumbbell, title: 'Modern Gymnasium', desc: 'Fully equipped gym with latest fitness equipment.', media: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800', type: 'image' },
  { id: 'landscaped-gardens', icon: Leaf, title: 'Landscaped Gardens', desc: 'Beautifully designed green spaces and open areas.', media: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800', type: 'image' },
  { id: 'play-area', icon: ToyBrick, title: "Children's Play Area", desc: 'Safe and fun play zones designed for kids.', media: 'https://images.unsplash.com/photo-1587845750216-13825c3c6b09?w=800', type: 'image' },
  { id: 'clubhouse', icon: Building2, title: 'Clubhouse & Community Hall', desc: 'Premium clubhouse for events and social gatherings.', media: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800', type: 'image' },
  { id: 'jogging-track', icon: Footprints, title: 'Jogging Track', desc: 'Dedicated jogging and fitness track within the complex.', media: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800', type: 'image' },
  { id: 'ev-charging', icon: Zap, title: 'EV Charging Stations', desc: 'Future-ready EV charging points in the parking area.', media: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800', type: 'image' },
  { id: 'power-backup', icon: BatteryCharging, title: 'Power Backup', desc: '100% power backup for all common areas and lifts.', media: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800', type: 'image' },
  { id: 'elevators', icon: ArrowUpDown, title: 'High-Speed Elevators', desc: 'Premium branded elevators for smooth vertical mobility.', media: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800', type: 'image' },
  { id: 'parking', icon: Car, title: 'Covered Parking', desc: 'Dedicated covered parking for residents and visitors.', media: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800', type: 'image' },
  { id: 'internet', icon: Wifi, title: 'High-Speed Internet', desc: 'Fibre-ready infrastructure for seamless connectivity.', media: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800', type: 'image' },
]

export default function Amenities() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAmenity, setSelectedAmenity] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const cardsPerView = 4
  const extendedAmenities = [...AMENITIES, ...AMENITIES, ...AMENITIES]

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    if (currentIndex >= AMENITIES.length * 2) {
      setTimeout(() => {
        setCurrentIndex(AMENITIES.length)
      }, 0)
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1)
  }

  return (
    <section id="amenities" className="bg-white py-24 px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/4 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            World-Class <span className="text-gold-gradient">Amenities</span>
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
            Every detail is thoughtfully designed to elevate your lifestyle and deliver a truly premium living experience.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
              transition={{
                type: currentIndex >= AMENITIES.length * 2 ? "tween" : "spring",
                stiffness: 300,
                damping: 30,
                duration: currentIndex >= AMENITIES.length * 2 ? 0 : undefined
              }}
            >
              {extendedAmenities.map(({ id, icon: Icon, title, desc, media, type }, i) => (
                
                <motion.div
                  key={`${title}-${i}`}
                  className="min-w-[calc(25%-12px)] bg-[#FAFAFA] border border-[#D4AF37]/20 rounded-2xl p-5 cursor-pointer relative overflow-hidden group hover:bg-[#D4AF37]/30"
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => navigate(`/amenity/${id}`)}
                >
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/25 to-[#D4AF37]/5"
                    initial={{ y: "-100%" }}
                    animate={{ y: "-100%" }}
                    whileHover={{ y: "0%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/30 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6 text-[#D4AF37]" />
                    </motion.div>

                    <h3 className="text-[#1A1A1A] font-bold text-sm mb-1.5 group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="text-[#666666] text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-[#D4AF37]/30 rounded-full flex items-center justify-center shadow-lg hover:bg-[#D4AF37] hover:text-white transition-all group z-20"
          >
            <ChevronLeft className="h-5 w-5 text-[#D4AF37] group-hover:text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-[#D4AF37]/30 rounded-full flex items-center justify-center shadow-lg hover:bg-[#D4AF37] hover:text-white transition-all group z-20"
          >
            <ChevronRight className="h-5 w-5 text-[#D4AF37] group-hover:text-white" />
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedAmenity && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAmenity(null)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden relative"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedAmenity(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center z-10 hover:bg-[#D4AF37] hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                  <motion.div
                    className="relative h-64 md:h-full bg-gray-100"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedAmenity.type === 'video' ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <Play className="h-16 w-16 text-[#D4AF37]" />
                      </div>
                    ) : (
                      <motion.img
                        src={selectedAmenity.media}
                        alt={selectedAmenity.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </motion.div>

                  <motion.div
                    className="p-8 flex flex-col justify-center"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-6"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.4, type: 'spring' }}
                    >
                      <selectedAmenity.icon className="h-8 w-8 text-[#D4AF37]" />
                    </motion.div>

                    <motion.h3
                      className="text-3xl font-bold text-[#1A1A1A] mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {selectedAmenity.title}
                    </motion.h3>

                    <motion.p
                      className="text-[#666666] text-lg leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {selectedAmenity.desc}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}