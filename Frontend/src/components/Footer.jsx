
// 'use client'

// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   MessageCircle,
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import logo from '../assets/download.png'

// const MAP_EMBED_URL =
//   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1!2d79.074743!3d21.152752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f3e819514f%3A0x516fde42a473849f!2sCivil+Lines%2C+Nagpur%2C+Maharashtra+440001!5e0!3m2!1sen!2sin!4v1'

// export default function Footer() {
//   return (
//     <footer className="bg-white font-[Jost,sans-serif]">

//       {/* ── MAIN FOOTER ───────────────────────── */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

//         {/* ── LEFT COLUMN (LOGO + TEXT + CONTACT) ── */}
//         <div>

//           {/* Logo */}
//           <Link to="/" className="flex items-center ms-5">
//             <img
//               src={logo}
//               alt="V.VIP Realty"
//               className="h-14 w-auto object-contain scale-300"
//             />
//           </Link>

//           {/* Description */}
//           <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-md">
//             Crafting premium residences and commercial landmarks in Nagpur.
//             Where luxury meets trust and long-term value.
//           </p>

//           {/* Contact */}
//           <div className="flex gap-4 mt-6">

//             <a href="https://www.google.com/maps?q=Civil+Lines+Nagpur" target="_blank">
//               <MapPin className="w-5 h-5 text-[#C9A84C] hover:scale-110 transition" />
//             </a>

//             {/* Phone */}
//             <a href="tel:+918788430110" title="Call">
//               <Phone className="w-5 h-5 text-[#C9A84C] hover:scale-110 hover:text-black transition" />
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:info@vviprealty.com?subject=Property Inquiry&body=Hello, I am interested in your project."
//               title="Email"
//             >
//               <Mail className="w-5 h-5 text-[#C9A84C] hover:scale-110 hover:text-black transition" />
//             </a>

//             {/* WhatsApp */}
//             <a
//               href="https://wa.me/918788430110"
//               target="_blank"
//               rel="noopener noreferrer"
//               title="WhatsApp"
//             >
//               <MessageCircle className="w-5 h-5 text-[#C9A84C] hover:scale-110 hover:text-black transition" />
//             </a>
//           </div>
//         </div>

//         {/* ── RIGHT COLUMN (MAP ONLY) ── */}
//         <div className="w-full h-full">
//           <iframe
//             title="V.VIP Realty Location — Civil Lines, Nagpur"
//             src={MAP_EMBED_URL}
//             className="w-full h-[250px] md:h-[350px] rounded-lg border"
//             loading="lazy"
//           />
//         </div>

//       </div>

//       {/* ── BOTTOM BAR ───────────────────────── */}
//       <div className="border-t border-gray-200 text-center py-4">
//         <p className="text-sm text-gray-500">
//           © {new Date().getFullYear()} V.VIP Realty Pvt. Ltd. All rights reserved
//         </p>
//       </div>

//     </footer>
//   )
// }


// 'use client'

// import {
//   MapPin,
//   Phone,
//   Mail,
//   MessageCircle,
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import logo from '../assets/download.png'

// export default function Footer() {
//   return (
//     <footer className="bg-white text-black font-[Jost,sans-serif]">

//       {/* ── MAIN FOOTER ───────────────────────── */}
//       <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//         {/* ── BRAND ── */}
//         <div>
//           <Link to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="V.VIP Realty"
//               className="h-16 object-contain"
//             />
//           </Link>

//           <p className="text-sm text-gray-400 mt-4 leading-relaxed">
//             Luxury Residential & Commercial Projects in Nagpur.
//             Your trusted partner for premium homes and high-return investments.
//           </p>

//           {/* CONTACT ICONS */}
//           <div className="flex gap-4 mt-5">
//             <a href="https://www.google.com/maps?q=Nagpur" target="_blank">
//               <MapPin className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
//             </a>

//             <a href="tel:+918788430110">
//               <Phone className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
//             </a>

//             <a href="mailto:info@vviprealty.com">
//               <Mail className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
//             </a>

//             <a href="https://wa.me/918788430110" target="_blank">
//               <MessageCircle className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
//             </a>
//           </div>
//         </div>

//         {/* ── QUICK LINKS ── */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
//             Quick Links
//           </h3>

//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/projects">Projects</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* ── LOCATIONS (SEO BOOST) ── */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
//             Prime Locations
//           </h3>

//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>MIHAN Nagpur</li>
//             <li>Wardha Road</li>
//             <li>Beltarodi</li>
//             <li>Manish Nagar</li>
//           </ul>
//         </div>

//         {/* ── CTA SECTION ── */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
//             Book Your Site Visit
//           </h3>

//           <p className="text-sm text-gray-400 mb-4">
//             Looking to buy your dream home or invest in Nagpur?
//             Get expert consultation today.
//           </p>

//           <div className="flex flex-col gap-3">
//             <a
//               href="tel:+918788430110"
//               className="bg-[#D4AF37] text-black text-sm px-4 py-2 rounded hover:opacity-90 text-center"
//             >
//               Call Now
//             </a>

//             <a
//               href="https://wa.me/918788430110"
//               target="_blank"
//               className="border border-[#D4AF37] text-[#D4AF37] text-sm px-4 py-2 rounded hover:bg-[#D4AF37] hover:text-black text-center"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </div>

//       </div>

//       {/* ── BOTTOM BAR ───────────────────────── */}
//       <div className="border-t border-gray-800 text-center py-4">
//         <p className="text-xs text-gray-500">
//           © {new Date().getFullYear()} V.VIP Realty Pvt. Ltd. All rights reserved
//         </p>
//       </div>

//     </footer>
//   )
// }

// 'use client'

// import {
//   MapPin,
//   Phone,
//   Mail,
//   MessageCircle,
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import logo from '../assets/download.png'

// const MAP_EMBED_URL =
//   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1!2d79.074743!3d21.152752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f3e819514f%3A0x516fde42a473849f!2sCivil+Lines%2C+Nagpur%2C+Maharashtra+440001!5e0!3m2!1sen!2sin!4v1'

// export default function Footer() {
//   return (
//     <footer className="bg-white text-black font-[Jost,sans-serif]">

//       {/* ── MAIN FOOTER ───────────────────────── */}
//       <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

//         {/* ── BRAND ── */}
//         <div>
//           <Link to="/" className="flex items-center pl-5 mb-5">
//             <img
//               src={logo}
//               alt="V.VIP Realty"
//               className="h-16 object-contain scale-310"
//             />
//           </Link>

//           <p className="text-sm text-gray-400 mt-4 leading-relaxed">
//             Luxury Residential & Commercial Projects in Nagpur.
//             Your trusted partner for premium homes and high-return investments.
//           </p>

//           <div className="flex gap-4 mt-5">
//             <a href="https://www.google.com/maps?q=Nagpur" target="_blank">
//               <MapPin className="w-5 h-5 text-[#eac06c]" />
//             </a>
//             <a href="tel:+918788430110">
//               <Phone className="w-5 h-5 text-[#eac06c]" />
//             </a>
//             <a href="mailto:info@vviprealty.com">
//               <Mail className="w-5 h-5 text-[#eac06c]" />
//             </a>
//             <a href="https://wa.me/918788430110" target="_blank">
//               <MessageCircle className="w-5 h-5 text-[#eac06c]" />
//             </a>
//           </div>
//         </div>

//         {/* ── QUICK LINKS ── */}
//         <div className='ml-10 mt-9'>
//           <h3 className="text-lg font-semibold text-[#eac06c] mb-4">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/projects">Projects</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* ── LOCATIONS ── */}
//         <div className='ml-1 mt-9'>
//           <h3 className="text-lg font-semibold text-[#eac06c] mb-4">
//             Prime Locations
//           </h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>MIHAN Nagpur</li>
//             <li>Wardha Road</li>
//             <li>Beltarodi</li>
//             <li>Manish Nagar</li>
//           </ul>
//         </div>

//         {/* ── CTA ── */}
//         <div className='ml-10 mt-9'>
//           <h3 className="text-lg font-semibold text-[#eac06c] mb-4">
//             Book Site Visit
//           </h3>

//           <p className="text-sm text-gray-400 mb-4">
//             Get expert consultation for your dream property in Nagpur.
//           </p>

//           <div className="flex flex-col gap-3">
//             <a
//               href="tel:+918788430110"
//               className="bg-[#eac06c] text-black text-sm px-4 py-2 rounded text-center"
//             >
//               Call Now
//             </a>

//             <a
//               href="https://wa.me/918788430110"
//               target="_blank"
//               className="border border-[#eac06c] text-[#eac06c] text-sm px-4 py-2 rounded text-center hover:bg-[#eac06c] hover:text-black"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* ── GOOGLE MAP ── */}
//         <div className='ml-10 mt-9'>
//           <h3 className="text-lg font-semibold text-[#eac06c] mb-4">
//             Our Location
//           </h3>

//           <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
//             <iframe
//               src={MAP_EMBED_URL}
//               title="Nagpur Location"
//               className="w-full h-[200px]"
//               loading="lazy"
//             />
//           </div>
//         </div>

//       </div>

//       {/* ── BOTTOM ── */}
//       <div className="border-t border-gray-800 text-center py-4">
//         <p className="text-xs text-gray-500">
//           © {new Date().getFullYear()} V.VIP Realty Pvt. Ltd. All rights reserved
//         </p>
//       </div>

//     </footer>
//   )
// }

'use client'

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
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 items-start">

          {/* ── BRAND ── */}
          <div>
            <Link to="/" className="flex items-center mb-4">
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

          {/* ── QUICK LINKS ── */}
          <div className='ml-10 mt-9'>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4 ">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* ── LOCATIONS ── */}
          <div className='ml-1 mt-9'>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Prime Locations
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>MIHAN Nagpur</li>
              <li>Wardha Road</li>
              <li>Beltarodi</li>
              <li>Manish Nagar</li>
            </ul>
          </div>

          {/* ── CTA ── */}
          <div className='mt-9'>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Book Site Visit
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Get expert consultation for your dream property in Nagpur.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+918788430110"
                className="bg-[#D4AF37] text-black text-sm px-4 py-2 rounded text-center"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918788430110"
                target="_blank"
                className="border border-[#D4AF37] text-[#D4AF37] text-sm px-4 py-2 rounded text-center hover:bg-[#D4AF37] hover:text-black"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* ── GOOGLE MAP ── */}
          <div className='ml-10 mt-9'>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Our Location
            </h3>

            <div className="rounded-lg overflow-hidden border border-gray-300 shadow">
              <iframe
                src={MAP_EMBED_URL}
                title="Nagpur Location"
                className="w-full h-[200px]"
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