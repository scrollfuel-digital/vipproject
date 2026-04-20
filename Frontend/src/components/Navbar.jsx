import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/download.png'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-[#D4AF37]/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="V.VIP Realty" className="h-14 w-auto object-contain scale-200" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {NAV.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition-colors duration-200 tracking-wide"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/#contact"
            className="border border-[#D4AF37] text-[#B8962E] text-sm px-4 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-200 font-medium">
            Login
          </Link>
          <Link to="/#contact"
            className="bg-[#D4AF37] hover:bg-[#B8962E] text-white text-sm px-5 py-2 rounded-lg font-bold transition-all duration-200 tracking-wide shadow-md hover:shadow-[0_4px_15px_rgba(212,175,55,0.4)]">
            Book Visit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#D4AF37]/20 px-4 py-4 space-y-3">
          {NAV.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] py-1.5 transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-[#D4AF37]/20">
            <Link to="/#contact" onClick={() => setMenuOpen(false)}
              className="flex-1 text-center border border-[#D4AF37] text-[#B8962E] text-sm px-4 py-2 rounded-lg font-medium">
              Login
            </Link>
            <Link to="/#contact" onClick={() => setMenuOpen(false)}
              className="flex-1 text-center bg-[#D4AF37] text-white text-sm px-4 py-2 rounded-lg font-bold">
              Book Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
