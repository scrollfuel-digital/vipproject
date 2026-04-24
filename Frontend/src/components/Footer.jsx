
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/download.png'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1!2d79.074743!3d21.152752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f3e819514f%3A0x516fde42a473849f!2sCivil+Lines%2C+Nagpur%2C+Maharashtra+440001!5e0!3m2!1sen!2sin!4v1'

export default function Footer() {
  return (
    <footer className="bg-white text-black font-[Jost,sans-serif]">

      {/* ── MAIN FOOTER ───────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-70 items-start">

          {/* ── BRAND ── */}
          <div className="flex flex-col items-start gap-1 ml-3">
            <Link to="/" className="flex items-center mb-4 ">
              <img
                src={logo}
                alt="V.VIP Realty"
                className="h-16 object-contain scale-210"
              />
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed">
              Luxury Residential & Commercial Projects in Nagpur.
              Your trusted partner for premium homes and high-return investments.
            </p>

            <div className="flex gap-4 mt-5">
              <a href="https://www.google.com/maps?q=Nagpur" target="_blank">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a href="tel:+918788430110">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a href="mailto:info@vviprealty.com">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a href="https://wa.me/918788430110" target="_blank">
                <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* ── GOOGLE MAP ── */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Our Location
            </h3>

            <div className="rounded-lg overflow-hidden border border-gray-300 shadow">
              <iframe
                src={MAP_EMBED_URL}
                title="Nagpur Location"
                className="w-full h-[150px]"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM ── */}
      <div className="border-t border-gray-200 text-center py-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} V.VIP Realty Pvt. Ltd. All rights reserved
        </p>
      </div>

    </footer>
  )
}