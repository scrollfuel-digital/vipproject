import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CircleUser, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/download.png'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  // { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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
      
      className="sticky top-4 mx-4 rounded-2xl bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between ">

        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img src={logo} alt="V.VIP Realty" className="h-16 w-auto object-contain scale-210" />
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
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${isActive ? 'text-[#D4AF37]' : 'text-black hover:text-[#D4AF37]'
                    }`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">

          <span className="text-[#D4AF37] hover:text-[#B8962E] p-4 rounded-full">
            <CircleUser />
          </span>
          <Link
            to="/contact"
            className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)]"
          >
            Book Visit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors z-50"
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden glass-dark border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-4">
              {NAV.map(({ label, to }) => {
                const isActive = location.pathname === to
                return (
                  <Link
                    key={label}
                    to={to}
                    onClick={(e) => handleNavClick(e, to, label)}
                    className={`block text-base font-medium py-2 transition-colors ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                      }`}
                  >
                    {label}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-center border-2 border-white/30 text-white text-sm font-medium px-6 py-3 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-center bg-[#D4AF37] text-white text-sm font-semibold px-6 py-3 rounded-lg"
                >
                  Book Visit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
