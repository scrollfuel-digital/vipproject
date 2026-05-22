import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CircleUser, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/download.png'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, to, label) => {
    // If we're on home page and clicking Projects, Gallery, or Contact
    if (location.pathname === '/' && ['Projects', 'Gallery', 'Contact'].includes(label)) {
      e.preventDefault()
      const sectionId = label.toLowerCase()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setMenuOpen(false)
    } else if (to !== location.pathname) {
      // Navigate to the page
      setMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`sticky top-4 mx-4 rounded-2xl z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-2xl shadow-2xl border border-white/10'
          : 'bg-black/60 backdrop-blur-xl shadow-lg border border-white/5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center z-50 group">
          <motion.img
            src={logo}
            alt="V.VIP Realty"
            className="h-14 w-auto object-contain scale-210 transition-transform duration-300 group-hover:scale-[2.2]"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAV.map(({ label, to }) => {
            const isActive = location.pathname === to
            return (
              <li key={label}>
                <Link
                  to={to}
                  onClick={(e) => handleNavClick(e, to, label)}
                  className={`relative text-sm font-semibold tracking-wide transition-all duration-300 group ${
                    isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                  }`}
                >
                  {label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] rounded-full"
                    initial={{ width: isActive ? '100%' : '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.span
            className="text-[#D4AF37] hover:text-[#F5E27A] p-3 rounded-full hover:bg-white/5 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <CircleUser className="w-5 h-5" />
          </motion.span>
          <Link
            to="/contact"
            className="relative group bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] hover:from-[#B8962E] hover:to-[#D4AF37] text-[#0F172A] text-sm font-bold px-7 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.5)] overflow-hidden"
          >
            <span className="relative z-10">Book Site Visit</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors z-50"
          onClick={() => setMenuOpen(o => !o)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 py-6 space-y-2">
              {NAV.map(({ label, to }, index) => {
                const isActive = location.pathname === to
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={to}
                      onClick={(e) => handleNavClick(e, to, label)}
                      className={`block text-base font-semibold py-3 px-4 rounded-xl transition-all ${
                        isActive
                          ? 'text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30'
                          : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-center bg-gradient-to-r from-[#D4AF37] to-[#F5E27A] text-[#0F172A] text-sm font-bold px-6 py-3 rounded-xl shadow-lg"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
