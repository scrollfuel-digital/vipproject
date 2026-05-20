import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  Lock, Droplet, Dumbbell, Leaf, ToyBrick, Building2,
  Footprints, Zap, BatteryCharging, ArrowUpDown, Car, Wifi, ArrowRight,
  Menu, X, Phone, Mail
} from 'lucide-react'
import logo from '../assets/download.png'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const AMENITIES = [
  { id: 'security-cctv', icon: Lock, title: '24/7 Security & CCTV', desc: 'Round-the-clock surveillance and trained security personnel.', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800' },
  { id: 'swimming-pool', icon: Droplet, title: 'Swimming Pool', desc: 'Temperature-controlled pool with premium finishing.', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800' },
  { id: 'gymnasium', icon: Dumbbell, title: 'Modern Gymnasium', desc: 'Fully equipped gym with latest fitness equipment.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800' },
  { id: 'landscaped-gardens', icon: Leaf, title: 'Landscaped Gardens', desc: 'Beautifully designed green spaces and open areas.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800' },
  { id: 'play-area', icon: ToyBrick, title: "Children's Play Area", desc: 'Safe and fun play zones designed for kids.', image: 'https://images.unsplash.com/photo-1587845750216-13825c3c6b09?w=800' },
  { id: 'clubhouse', icon: Building2, title: 'Clubhouse & Community Hall', desc: 'Premium clubhouse for events and social gatherings.', image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800' },
  { id: 'jogging-track', icon: Footprints, title: 'Jogging Track', desc: 'Dedicated jogging and fitness track within the complex.', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800' },
  { id: 'ev-charging', icon: Zap, title: 'EV Charging Stations', desc: 'Future-ready EV charging points in the parking area.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800' },
  { id: 'power-backup', icon: BatteryCharging, title: 'Power Backup', desc: '100% power backup for all common areas and lifts.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800' },
  { id: 'elevators', icon: ArrowUpDown, title: 'High-Speed Elevators', desc: 'Premium branded elevators for smooth vertical mobility.', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800' },
  { id: 'parking', icon: Car, title: 'Covered Parking', desc: 'Dedicated covered parking for residents and visitors.', image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800' },
  { id: 'internet', icon: Wifi, title: 'High-Speed Internet', desc: 'Fibre-ready infrastructure for seamless connectivity.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800' },
]

function PremiumNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Info Bar - Desktop & Tablet */}
      <motion.div 
        className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border-b border-white/5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-4 lg:gap-6">
              <a href="tel:+918788430110" className="flex items-center gap-2 text-white/70 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">+91 8788430110</span>
              </a>
              <a href="mailto:info@vviprealty.com" className="flex items-center gap-2 text-white/70 hover:text-[#D4AF37] transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">info@vviprealty.com</span>
              </a>
            </div>
            <div className="text-[#D4AF37] font-medium text-xs lg:text-sm">
              Limited Time Offer - Book Now!
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'md:top-0 top-0 bg-black/95 backdrop-blur-xl shadow-2xl' 
            : 'md:top-[44px] top-0 bg-black/80 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img 
                src={logo} 
                alt="V.VIP Realty" 
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV.map(({ label, to }) => {
                const isActive = location.pathname === to
                return (
                  <li key={label}>
                    <Link
                      to={to}
                      className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                        isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                      }`}
                    >
                      {label}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`} 
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] hover:from-[#B8962E] hover:to-[#D4AF37] text-black text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:scale-105"
              >
                Book Site Visit
              </Link>
            </div>

            {/* Mobile & Tablet Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] shadow-2xl z-50 overflow-y-auto"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Contact Info */}
                <div className="px-6 pb-6 space-y-3 border-b border-white/10">
                  <a href="tel:+918788430110" className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 8788430110</span>
                  </a>
                  <a href="mailto:info@vviprealty.com" className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">info@vviprealty.com</span>
                  </a>
                </div>

                {/* Navigation Links */}
                <div className="px-6 py-6 space-y-1">
                  {NAV.map(({ label, to }) => {
                    const isActive = location.pathname === to
                    return (
                      <Link
                        key={label}
                        to={to}
                        onClick={() => setMenuOpen(false)}
                        className={`block text-base font-medium py-3 px-4 rounded-lg transition-all ${
                          isActive 
                            ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                            : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
                        }`}
                      >
                        {label}
                      </Link>
                    )
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="px-6 pb-6">
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] text-black text-sm font-semibold px-6 py-3.5 rounded-lg shadow-lg"
                  >
                    Book Site Visit
                  </Link>
                </div>

                {/* Mobile Footer */}
                <div className="px-6 pb-6 text-center">
                  <p className="text-xs text-white/40">
                    Limited Time Offer - Book Now!
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PremiumNavbar />
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white pt-32 md:pt-40 pb-20 md:pb-24 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
      
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            World-Class <span className="text-[#D4AF37]">Amenities</span>
          </motion.h1>

          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <motion.p 
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Every detail is thoughtfully designed to elevate your lifestyle and deliver a truly premium living experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Amenities Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {AMENITIES.map((amenity, i) => {
              const Icon = amenity.icon
              return (
                <motion.div
                  key={amenity.id}
                  className="group "
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden mb-5">
                    <motion.img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon */}
                    <motion.div 
                      className="absolute top-3 left-3 sm:top-4 sm:left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </motion.div>

                    {/* View Details Button */}
                    <motion.div 
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
