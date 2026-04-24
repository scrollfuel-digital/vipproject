import { motion, useAnimationControls } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

const TESTIMONIALS = [
  { quote: 'Smooth buying experience and excellent support throughout the entire process. The team was professional and transparent at every step.', name: 'Rahul Sharma',   role: 'Home Buyer',    location: 'MIHAN, Nagpur',         rating: 5, initial: 'R', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { quote: 'Best property investment decision I made in Nagpur. The ROI has been exceptional and the location appreciation is outstanding.',        name: 'Priya Mehta',    role: 'Investor',      location: 'Wardha Road, Nagpur',   rating: 5, initial: 'P', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { quote: 'Highly professional and transparent team. They guided us through every legal detail and made the entire process stress-free.',           name: 'Amit Kulkarni',  role: 'Home Buyer',    location: 'Beltarodi, Nagpur',     rating: 5, initial: 'A', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { quote: 'V.VIP Realty delivered exactly what they promised. Premium quality construction and world-class amenities. Truly a luxury experience.',  name: 'Sneha Deshmukh', role: 'Home Buyer',    location: 'Manish Nagar, Nagpur',  rating: 5, initial: 'S', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { quote: 'The team helped me find the perfect commercial space for my business. Great location, fair pricing, and zero hidden charges.',           name: 'Vikram Joshi',   role: 'Business Owner', location: 'MIHAN, Nagpur',        rating: 5, initial: 'V', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { quote: 'From site visit to possession, the entire journey was seamless. I highly recommend V.VIP Realty to anyone looking to invest in Nagpur.', name: 'Neha Patil',    role: 'Investor',      location: 'Wardha Road, Nagpur',   rating: 5, initial: 'N', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const controls = useAnimationControls()
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

  useEffect(() => {
    controls.start({
      x: ["-0%", "-33.33%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    })
  }, [controls])

  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Client Stories
          </motion.p>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            What Our <span className="text-gold-gradient">Clients Say</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="text-[#666666] text-base max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Real experiences from real clients — families and investors who trusted V.VIP Realty.
          </motion.p>
        </motion.div>

        {/* Video Slider */}
        <div className="relative">
        
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-5"
              animate={controls}
             
            >
              {duplicatedTestimonials.map(({ quote, name, role, location, rating, initial, video }, i) => (
                <div 
                  key={`${name}-${i}`}
                  className="w-[calc((100%-60px)/4)] bg-black rounded-2xl overflow-hidden hover:shadow-[0_8px_35px_rgba(212,175,55,0.4)] transition-all duration-300 group flex-shrink-0 relative cursor-pointer"
                  onClick={() => setSelectedVideo({ video, name, quote, rating })}
                >
                  {/* Video */}
                  <div className="relative w-full h-96 bg-black">
                    <iframe 
                      src={video}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Hover Overlay with Review */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-left">
                      <div className="flex gap-1 mb-2">
                        {[...Array(rating)].map((_, idx) => (
                          <svg key={idx} className="w-4 h-4 fill-[#D4AF37]" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-white text-sm leading-relaxed line-clamp-2 mb-2">
                        "{quote}"
                      </p>
                      <p className="text-[#F5E27A] text-xs font-bold">
                        - {name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 z-10 bg-white hover:bg-gray-100 text-black p-2 rounded-full shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video */}
              <div className="relative w-full h-[400px] bg-black">
                <iframe 
                  src={selectedVideo.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="bg-gradient-to-t from-black via-black/95 to-transparent p-5">
                <div className="flex gap-1 mb-2">
                  {[...Array(selectedVideo.rating)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 fill-[#D4AF37]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed mb-2">
                  "{selectedVideo.quote}"
                </p>
                <p className="text-[#F5E27A] text-xs font-bold">
                  - {selectedVideo.name}
                </p>
              </div>
            </motion.div>
          </div>
        )}

       

      </div>
    </section>
  )
}
