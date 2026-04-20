// import {
//   Clock,
//   Mail,
//   MapPin,
//   Phone,
//   MessageCircle,
//   Globe,
//   Share2,
//   Play,
//   ArrowRight,
// } from 'lucide-react'

// const LINKS = ['Home', 'About', 'Projects', 'Amenities', 'Gallery', 'Contact']

// const PROJECTS = [
//   'Emerald Residences',
//   'The Pinnacle',
//   'VIP Commercial Hub',
//   'Skyline Villas',
//   'View All →',
// ]

// const SOCIALS = [
//   { label: 'Facebook', Icon: Globe, href: '#' },
//   { label: 'Instagram', Icon: Share2, href: '#' },
//   { label: 'WhatsApp', Icon: MessageCircle, href: '#' },
//   { label: 'YouTube', Icon: Play, href: '#' },
// ]

// const CONTACT = [
//   {
//     Icon: MapPin,
//     label: 'Address',
//     value: 'Civil Lines, Nagpur, Maharashtra 440001',
//   },
//   { Icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX' },
//   { Icon: Mail, label: 'Email', value: 'info@vviprealty.com' },
//   { Icon: Clock, label: 'Hours', value: 'Mon – Sat, 9am – 7pm' },
// ]

// // ── Google Maps embed — Civil Lines, Nagpur ──────────────────────────────────
// // Replace YOUR_API_KEY with your actual Google Maps Embed API key
// const MAP_EMBED_URL =
//   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1!2d79.074743!3d21.152752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f3e819514f%3A0x516fde42a473849f!2sCivil+Lines%2C+Nagpur%2C+Maharashtra+440001!5e0!3m2!1sen!2sin!4v1'

// export default function Footer() {
//   return (
//     <footer className="bg-white font-[Jost,sans-serif]">

//       {/* ── Google Fonts ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
//         .vr-serif { font-family: 'Cormorant Garamond', serif; }
//         .vr-sans  { font-family: 'Jost', sans-serif; }
//         .vr-nav-link::before {
//           content: '';
//           display: inline-block;
//           width: 0;
//           height: 1px;
//           background: #C9A84C;
//           transition: width 0.2s;
//           vertical-align: middle;
//           margin-right: 0px;
//         }
//         .vr-nav-link:hover::before { width: 12px; margin-right: 6px; }
//         .vr-social-link { transition: border-color 0.2s, color 0.2s; }
//         .vr-social-link:hover { border-color: #C9A84C !important; color: #C9A84C !important; }
//       `}</style>

//       {/* ── TOP CTA ─────────────────────────────────────────────────────────── */}
//       <div className="border-b border-[#C9A84C]/20 bg-[#FDFBF7]">
//         <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
//           <div>
//             <p
//               className="vr-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#C9A84C] mb-1
//                          flex items-center gap-2 before:block before:h-px before:w-6 before:bg-[#C9A84C]/50
//                          after:block after:h-px after:w-6 after:bg-[#C9A84C]/50"
//             >
//               Limited Availability
//             </p>
//             <h3 className="vr-serif text-2xl md:text-3xl font-light text-[#1A1410] leading-tight">
//               Reserve your address in Nagpur's{' '}
//               <em className="font-normal">most prestigious community</em>
//             </h3>
//           </div>

//           <a
//             href="#contact"
//             className="vr-sans inline-flex items-center gap-3 bg-[#C9A84C] text-white
//                        text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-4
//                        hover:bg-[#B8962E] transition-colors whitespace-nowrap"
//           >
//             Book a Site Visit
//             <ArrowRight className="w-4 h-4" />
//           </a>
//         </div>
//       </div>

//       {/* ── MAP + MAIN GRID ──────────────────────────────────────────────────── */}
//       <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">

//         {/* Map */}
//         <div className="mb-12">
//           <div className="flex items-center gap-3 mb-5">
//             <MapPin className="w-4 h-4 text-[#C9A84C]" />
//             <span className="vr-sans text-[10px] font-medium tracking-[0.3em] uppercase text-[#C9A84C]">
//               Our Location
//             </span>
//             <span className="flex-1 h-px bg-[#C9A84C]/15" />
//           </div>
//           <div className="rounded-xl overflow-hidden border border-[#E8E0D0] shadow-sm">
//             <iframe
//               title="V.VIP Realty Location — Civil Lines, Nagpur"
//               src={MAP_EMBED_URL}
//               width="100%"
//               height="300"
//               style={{ border: 0, display: 'block' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>

//         {/* Divider */}
//         <div
//           className="h-px mb-12"
//           style={{
//             background:
//               'linear-gradient(90deg, transparent, #C9A84C55, transparent)',
//           }}
//         />

//         {/* Four-column info grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//           {/* ── Brand ── */}
//           <div className="lg:col-span-1">
//             {/* Logo placeholder — swap <img> for your actual logo */}
//             <div className="mb-1">
//               <span className="vr-serif text-3xl font-light text-[#1A1410] tracking-widest">
//                 V.VIP
//               </span>
//               <span className="vr-serif text-3xl font-light text-[#C9A84C] tracking-widest ml-1">
//                 Realty
//               </span>
//             </div>
//             <p className="vr-sans text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-medium mb-4">
//               Est. Nagpur
//             </p>

//             {/* Ornament */}
//             <div className="flex items-center gap-3 mb-5">
//               <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/30" />
//               <div className="w-[5px] h-[5px] bg-[#C9A84C] rotate-45" />
//               <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/30" />
//             </div>

//             <p className="vr-sans text-[13px] leading-relaxed text-[#7A7065] font-light mb-6">
//               Crafting distinguished residences and commercial landmarks across
//               Nagpur. Where architecture meets legacy.
//             </p>

//             <div className="flex gap-2">
//               {SOCIALS.map(({ label, Icon, href }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className="vr-social-link w-9 h-9 border border-[#E0D8CC] flex items-center justify-center
//                              text-[#9A9088] rounded"
//                 >
//                   <Icon className="w-[15px] h-[15px]" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* ── Quick Links ── */}
//           {/* <div>
//             <h4 className="vr-sans text-[9px] font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-5 pb-3 border-b border-[#F0E8DC]">
//               Navigate
//             </h4>
//             <ul className="space-y-[10px]">
//               {LINKS.map((link) => (
//                 <li key={link}>
//                   <a
//                     href={`#${link.toLowerCase()}`}
//                     className="vr-nav-link vr-sans text-[13px] font-light text-[#7A7065] hover:text-[#C9A84C] transition-colors"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* ── Projects ── */}
//           <div>
//             <h4 className="vr-sans text-[9px] font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-5 pb-3 border-b border-[#F0E8DC]">
//               Projects
//             </h4>
//             <ul className="space-y-[10px]">
//               {PROJECTS.map((p) => (
//                 <li key={p}>
//                   <a
//                     href="#projects"
//                     className="vr-nav-link vr-sans text-[13px] font-light text-[#7A7065] hover:text-[#C9A84C] transition-colors"
//                   >
//                     {p}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ── Contact ── */}
//           <div>
//             <h4 className="vr-sans text-[9px] font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-5 pb-3 border-b border-[#F0E8DC]">
//               Get in Touch
//             </h4>
//             <div className="space-y-4">
//               {CONTACT.map(({ Icon, label, value }) => (
//                 <div key={label} className="flex items-start gap-3">
//                   <div className="w-8 h-8 border border-[#F0E8DC] flex items-center justify-center shrink-0 rounded">
//                     <Icon className="w-[14px] h-[14px] text-[#C9A84C]" />
//                   </div>
//                   <div>
//                     <p className="vr-sans text-[10px] tracking-[0.15em] uppercase text-[#C0B8B0] font-medium mb-[2px]">
//                       {label}
//                     </p>
//                     <p className="vr-sans text-[13px] font-light text-[#7A7065] leading-snug">
//                       {value}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ── BOTTOM BAR ──────────────────────────────────────────────────────── */}
//       <div
//         className="border-t"
//         style={{ borderColor: '#F0E8DC' }}
//       >
//         <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="vr-sans text-[11px] font-light text-[#B0A898] tracking-wide">
//             © {new Date().getFullYear()} V.VIP Realty Pvt. Ltd. · All rights reserved
//           </p>
//           <div className="flex items-center gap-3">
//             {['RERA Registered', 'ISO Certified', 'Privacy Policy'].map((item) => (
//               <span
//                 key={item}
//                 className="vr-sans text-[10px] tracking-[0.1em] uppercase text-[#B0A898] border border-[#EDE5DB] px-3 py-1 rounded"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//     </footer>
//   )
// }


'use client'

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/download.png'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1!2d79.074743!3d21.152752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f3e819514f%3A0x516fde42a473849f!2sCivil+Lines%2C+Nagpur%2C+Maharashtra+440001!5e0!3m2!1sen!2sin!4v1'

export default function Footer() {
  return (
    <footer className="bg-white font-[Jost,sans-serif]">

      {/* ── MAIN FOOTER ───────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* ── LEFT COLUMN (LOGO + TEXT + CONTACT) ── */}
        <div>

          {/* Logo */}
          <Link to="/" className="flex items-center ms-5">
            <img
              src={logo}
              alt="V.VIP Realty"
              className="h-14 w-auto object-contain scale-300"
            />
          </Link>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-md">
            Crafting premium residences and commercial landmarks in Nagpur.
            Where luxury meets trust and long-term value.
          </p>

          {/* Contact */}
          <div className="flex gap-4 mt-6">

            <a href="https://www.google.com/maps?q=Civil+Lines+Nagpur" target="_blank">
              <MapPin className="w-5 h-5 text-[#C9A84C] hover:scale-110 transition" />
            </a>

            {/* Phone */}
            <a href="tel:+918788430110" title="Call">
              <Phone className="w-5 h-5 text-[#C9A84C] hover:scale-110 hover:text-black transition" />
            </a>

            {/* Email */}
            <a
              href="mailto:info@vviprealty.com?subject=Property Inquiry&body=Hello, I am interested in your project."
              title="Email"
            >
              <Mail className="w-5 h-5 text-[#C9A84C] hover:scale-110 hover:text-black transition" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918788430110"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#C9A84C] hover:scale-110 hover:text-black transition" />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN (MAP ONLY) ── */}
        <div className="w-full h-full">
          <iframe
            title="V.VIP Realty Location — Civil Lines, Nagpur"
            src={MAP_EMBED_URL}
            className="w-full h-[250px] md:h-full rounded-lg border"
            loading="lazy"
          />
        </div>

      </div>

      {/* ── BOTTOM BAR ───────────────────────── */}
      <div className="border-t border-gray-200 text-center py-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} V.VIP Realty Pvt. Ltd. All rights reserved
        </p>
      </div>

    </footer>
  )
}