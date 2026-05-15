"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import {
  ArrowLeft, ArrowRight, MapPin, Maximize2, Phone, MessageCircle,
  Download, X, Home, Bed, Bath, Car, Wifi, Dumbbell,
  Shield, Zap, TrendingUp, Award, CheckCircle, Sparkles,
  ChevronLeft, ChevronRight, ZoomIn, Play, Eye,
} from "lucide-react"

const PROJECTS = [
  {
    id: "luxury-apartments",
    title: "Luxury Apartments",
    subtitle: "Elevated Living Redefined",
    description: "Premium 2BHK & 3BHK homes where modern design meets artful living. Every corner is crafted to inspire.",
    price: 4500000, oldPrice: 5200000,
    location: "MIHAN, Nagpur", area: "1200–1800 sq.ft", badge: "FEATURED",
    tags: ["Smart Home", "Gymnasium", "24/7 Security", "High-Speed Elevators"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=85",
    ],
    units: [
      { id: 1, type: "2BHK",      area: "1200 sq.ft", price: 4500000, rooms: 2, baths: 2, parking: 1, floor: "3rd–8th",   status: "Available" },
      { id: 2, type: "3BHK",      area: "1800 sq.ft", price: 6200000, rooms: 3, baths: 3, parking: 2, floor: "5th–12th",  status: "Available" },
      { id: 3, type: "Penthouse", area: "2500 sq.ft", price: 9500000, rooms: 4, baths: 4, parking: 3, floor: "Top Floor", status: "Limited"   },
    ],
  },
  {
    id: "commercial-spaces",
    title: "Commercial Spaces",
    subtitle: "Prime Business Addresses",
    description: "Shops & offices in high-visibility prime locations designed to accelerate business potential.",
    price: 6500000, oldPrice: 7200000,
    location: "Wardha Road, Nagpur", area: "500–2000 sq.ft", badge: "PRIME",
    tags: ["High Footfall", "Ample Parking", "Modern Design", "Metro Connectivity"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=85",
    ],
    units: [
      { id: 1, type: "Shop",   area: "500 sq.ft",  price: 6500000,  rooms: 1, baths: 1, parking: 2, floor: "Ground",  status: "Available" },
      { id: 2, type: "Office", area: "1200 sq.ft", price: 12000000, rooms: 4, baths: 2, parking: 4, floor: "1st–3rd", status: "Available" },
    ],
  },
  {
    id: "ongoing-projects",
    title: "Ongoing Projects",
    subtitle: "Invest Early, Win Big",
    description: "Premium residential projects under active construction with flexible payment plans.",
    price: 5500000, oldPrice: 6000000,
    location: "Beltarodi, Nagpur", area: "1000–2500 sq.ft", badge: "NEW",
    tags: ["Under Construction", "Flexible Payment", "Modern Layout", "RERA Approved"],
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85",
    ],
    units: [
      { id: 1, type: "Plot", area: "1000 sq.ft", price: 5500000, rooms: 0, baths: 0, parking: 0, floor: "Ground", status: "Available" },
    ],
  },
  {
    id: "ready-to-move",
    title: "Ready-to-Move Homes",
    subtitle: "Your Home, Right Now",
    description: "Move in immediately. Fully ready premium homes in a secure and prime neighbourhood.",
    price: 7000000, oldPrice: 7800000,
    location: "Manish Nagar, Nagpur", area: "1100–1600 sq.ft", badge: "READY",
    tags: ["Ready Possession", "Semi-Furnished", "Prime Area", "Gated Security"],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=85",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=85",
    ],
    units: [
      { id: 1, type: "2BHK", area: "1100 sq.ft", price: 7000000, rooms: 2, baths: 2, parking: 1, floor: "2nd–6th", status: "Ready" },
      { id: 2, type: "3BHK", area: "1600 sq.ft", price: 9800000, rooms: 3, baths: 2, parking: 2, floor: "4th–9th", status: "Ready" },
    ],
  },
]

const AMENITIES = [
  { icon: Wifi,     label: "High-Speed WiFi" },
  { icon: Dumbbell, label: "Fitness Center"   },
  { icon: Shield,   label: "24/7 Security"    },
  { icon: Car,      label: "Covered Parking"  },
  { icon: Zap,      label: "Power Backup"     },
  { icon: Home,     label: "Clubhouse"        },
]

const BENEFITS = [
  "Zero Brokerage — Direct from Builder",
  "Flexible Payment Plans Available",
  "Home Loan Assistance at Best Rates",
  "RERA Approved & Legally Verified",
  "Premium Location with High ROI",
  "Lifetime Maintenance Support",
]

const STATS = [
  { value: "500+", label: "Happy Families"     },
  { value: "12+",  label: "Projects Delivered" },
  { value: "4.9★", label: "Buyer Rating"       },
  { value: "15+",  label: "Years Experience"   },
]

const STATUS_CLS = {
  Available : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
  Limited   : "bg-orange-500/10  text-orange-400  border border-orange-500/25",
  Ready     : "bg-violet-500/10  text-violet-400  border border-violet-500/25",
}

/* ── Lightbox ── */
function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)
  const next = () => setCurrent(c => (c + 1) % images.length)

  useEffect(() => {
    const h = e => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(32px)" }}
      onClick={onClose}
    >
      <button onClick={onClose}
        className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
        <X size={18} />
      </button>
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-medium tracking-widest text-white/40 uppercase">
        {current + 1} / {images.length}
      </div>
      <motion.div onClick={e => e.stopPropagation()} className="relative w-full max-w-5xl mx-6"
        key={current} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
        <img src={images[current]} alt="" className="w-full max-h-[75vh] object-contain rounded-2xl" />
      </motion.div>
      {images.length > 1 && <>
        <button onClick={e => { e.stopPropagation(); prev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <ChevronLeft size={20} />
        </button>
        <button onClick={e => { e.stopPropagation(); next() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <ChevronRight size={20} />
        </button>
      </>}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto thumb-strip">
        {images.map((img, i) => (
          <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i) }}
            className="shrink-0 rounded-lg overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 64 : 48, height: 40, border: i === current ? "2px solid #c9a84c" : "2px solid transparent", opacity: i === current ? 1 : 0.45 }}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Hero Gallery ── */
function HeroGallery({ images, project, onExploreUnits }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [hovered, setHovered] = useState(null)

  const prev = () => setActive(a => (a - 1 + images.length) % images.length)
  const next = () => setActive(a => (a + 1) % images.length)

  const previewCount = Math.min(images.length - 1, 4)
  const previews = images.slice(1, previewCount + 1)
  const remaining = images.length - 1 - previews.length

  return (
    <>
      <section className="relative flex flex-col" style={{ background: "#fff" }}>

        {/* ── Cinematic hero image (dark zone) ── */}
        <div className="relative w-full overflow-hidden" style={{ height: "65vh" }}>
          {images.map((img, i) => (
            <motion.div key={img} className="absolute inset-0"
              animate={{ opacity: i === active ? 1 : 0 }} transition={{ duration: 0.7, ease: "easeInOut" }}>
              <img src={img} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.72)" }} />
            </motion.div>
          ))}
          {/* Gradients */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right,rgba(8,8,16,0.88) 0%,rgba(8,8,16,0.18) 55%,transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 22%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(8,8,16,0.45) 0%,transparent 18%)" }} />

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="absolute top-18" style={{ left: "20px" }}>
            <span className="gold-bg inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-black tracking-[3px] uppercase"
              style={{ color: "#080810" }}>
              <Sparkles size={10} /> {project.badge}
            </span>
          </motion.div>

          {/* Slide counter + zoom */}
          <div className="absolute top-8 right-8 flex items-center gap-3">
            <span className="text-xs font-medium text-white/40 tracking-widest">
              {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <button onClick={() => setLightbox(active)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <ZoomIn size={14} className="text-white/70" />
            </button>
          </div>

          {/* Left content overlay */}
          <div className="absolute bottom-16 right-[44%]" style={{ left: "var(--px)" }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full glow-dot" style={{ background: "#c9a84c" }} />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase" style={{ color: "rgba(201,168,76,0.85)" }}>
                {project.subtitle}
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="gold-text leading-[1] mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,72px)", fontWeight: 700 }}>
              {project.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-sm font-light leading-relaxed max-w-xs mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              {project.description}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="flex items-center gap-4 flex-wrap">
              <div className="flex items-baseline gap-2">
                <span className="gold-text font-bold" style={{ fontFamily: "var(--font-display)", fontSize: 32 }}>
                  ₹{project.price.toLocaleString()}
                </span>
                <span className="text-sm line-through" style={{ color: "rgba(255,255,255,0.28)" }}>
                  ₹{project.oldPrice.toLocaleString()}
                </span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md"
                style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.28)" }}>
                Save ₹{(project.oldPrice - project.price).toLocaleString()}
              </span>
            </motion.div>
          </div>

          {/* Nav arrows + dots */}
          <div className="absolute bottom-16 right-8 flex flex-col items-end gap-4">
            <div className="flex gap-2">
              <button onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <ChevronLeft size={18} />
              </button>
              <button onClick={next}
                className="gold-bg w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ color: "#080810" }}>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{ width: i === active ? 24 : 6, height: 6, background: i === active ? "#c9a84c" : "rgba(255,255,255,0.25)" }} />
              ))}
            </div>
          </div>

          {/* Location pill */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)", color: "rgba(255,255,255,0.65)" }}>
              <MapPin size={11} style={{ color: "#c9a84c" }} />
              {project.location}
              <span className="w-px h-3 mx-1" style={{ background: "rgba(255,255,255,0.22)" }} />
              <Maximize2 size={11} style={{ color: "#c9a84c" }} />
              {project.area}
            </div>
          </motion.div>
        </div>

        {/* ── White lower panel: stats + thumbnails + CTA ── */}
        <div className="relative" style={{ background: "#fff", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="shimmer-border absolute top-0 left-0 right-0" style={{ height: 1 }} />

          <div className="mx-auto pt-8 pb-10 grid grid-cols-12 gap-6 items-start"
            style={{ maxWidth: 1280, paddingLeft: "var(--px)", paddingRight: "var(--px)" }}>

            {/* Stats */}
            <div className="col-span-4 grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06 }}
                  className="p-4 rounded-2xl transition-all"
                  style={{ background: "#f8f7f4", border: "1px solid rgba(0,0,0,0.07)" }}>
                  <p className="gold-text font-bold mb-0.5" style={{ fontFamily: "var(--font-display)", fontSize: 26 }}>{s.value}</p>
                  <p className="text-[11px] font-light" style={{ color: "#999" }}>{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Thumbnail gallery strip */}
            <div className="col-span-5">
              <p className="text-[10px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: "#bbb" }}>
                Photo Gallery · {images.length} Images
              </p>
              <div className="grid grid-cols-5 gap-2">
                {previews.map((img, i) => {
                  const isLast = i === previews.length - 1 && remaining > 0
                  return (
                    <motion.button key={i}
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18 + i * 0.07 }}
                      onClick={() => setLightbox(i + 1)}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="relative overflow-hidden rounded-xl cursor-pointer"
                      style={{ height: 68, border: `2px solid ${hovered === i ? "#c9a84c" : "rgba(0,0,0,0.08)"}`, transition: "border-color 0.2s", background: "#f0ede8" }}>
                      <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500"
                        style={{ transform: hovered === i ? "scale(1.1)" : "scale(1)" }} />
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                        style={{ background: "rgba(0,0,0,0.35)", opacity: hovered === i ? 1 : 0 }}>
                        {isLast
                          ? <span className="text-white font-bold text-sm">+{remaining + 1}</span>
                          : <Eye size={13} className="text-white" />}
                      </div>
                      {isLast && (
                        <div className="absolute inset-0 flex items-center justify-center"
                          style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(2px)" }}>
                          <span className="font-bold text-base" style={{ color: "#1a1a1a" }}>+{remaining + 1}</span>
                        </div>
                      )}
                    </motion.button>
                  )
                })}
                {/* View all */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.52 }}
                  onClick={() => setLightbox(0)}
                  className="relative overflow-hidden rounded-xl cursor-pointer flex flex-col items-center justify-center gap-1 transition-all hover:scale-105"
                  style={{ height: 68, background: "rgba(201,168,76,0.07)", border: "1px dashed rgba(201,168,76,0.4)" }}>
                  <ZoomIn size={13} style={{ color: "#c9a84c" }} />
                  <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#c9a84c" }}>All</span>
                </motion.button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="col-span-3 flex flex-col gap-3 pt-5">
              <button onClick={onExploreUnits}
                className="gold-bg w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[11px] tracking-widest uppercase transition-opacity hover:opacity-85"
                style={{ color: "#080810" }}>
                Explore Units <ArrowRight size={13} />
              </button>
              <a href="https://wa.me/919999999999"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[11px] tracking-widest uppercase no-underline transition-all"
                style={{ background: "rgba(22,163,74,0.07)", border: "1px solid rgba(22,163,74,0.28)", color: "#16a34a" }}>
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a href="tel:+919999999999"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[11px] tracking-widest uppercase no-underline transition-all"
                style={{ background: "#f8f7f4", border: "1px solid rgba(0,0,0,0.09)", color: "#666" }}>
                <Phone size={13} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox images={images} startIndex={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Section helpers ── */
function SectionHeading({ label, title, accent, center = false, dark = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <span className="block text-[11px] font-semibold tracking-[4px] uppercase mb-3" style={{ color: "#c9a84c" }}>
        {label}
      </span>
      <h2 className="font-bold leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3.5vw,44px)", color: dark ? "#fff" : "var(--text-primary)" }}>
        {title} {accent && <span className="gold-text italic">{accent}</span>}
      </h2>
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.3),transparent)" }} />
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full"
      style={{ border: "1px solid rgba(201,168,76,0.35)", color: "#c9a84c", background: "rgba(201,168,76,0.06)" }}>
      <CheckCircle size={10} /> {children}
    </span>
  )
}

function SpecItem({ icon: Icon, value, label }) {
  return (
    <span className="flex items-center gap-1.5 text-xs" style={{ color: "#888" }}>
      <Icon size={11} style={{ color: "#c9a84c" }} className="shrink-0" />
      {value}{label ? ` ${label}` : ""}
    </span>
  )
}

/* ── Card helpers ── */
const cardStyle  = { background: "#f8f7f4", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 20 }
const cardHover  = { borderColor: "rgba(201,168,76,0.35)", background: "#f3f0e8" }
const cardNormal = { borderColor: "rgba(0,0,0,0.07)", background: "#f8f7f4" }

/* MAIN COMPONENT */
export default function ProjectDetail() {
  const { id }       = useParams()
  const navigate     = useNavigate()

  const [showUnitsModal, setShowUnitsModal] = useState(false)
  const [selectedUnit,   setSelectedUnit]   = useState(null)
  const [loan,  setLoan]  = useState(3000000)
  const [rate,  setRate]  = useState(8)
  const [years, setYears] = useState(20)

  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0]
  const related  = PROJECTS.filter(p => p.id !== project.id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  const r             = rate / 12 / 100
  const n             = years * 12
  const emi           = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const totalPayable  = Math.round(emi) * n
  const totalInterest = totalPayable - loan

  const ticker = [
    { k: "Starting From", v: `₹${project.price.toLocaleString()}` },
    { k: "Area",          v: project.area },
    { k: "Location",      v: project.location },
    { k: "Rating",        v: "4.9 / 5 ★" },
    { k: "Status",        v: project.badge },
    { k: "Type",          v: project.tags[0] },
  ]

  /* shared section padding */
  const sec = { padding: "88px 0" }
  const inner = { maxWidth: 1280, margin: "0 auto", paddingLeft: "var(--px)", paddingRight: "var(--px)" }

  return (
    <div style={{ background: "#fff", color: "var(--text-primary)", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
     

      {/* Floating back button */}
      <motion.button
        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/projects")}
        className="fixed z-50 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-[11px] tracking-widest uppercase transition-all hover:scale-105"
        style={{ top: 120, left:20, background: "rgba(255,255,255,0.82)", border: "1px solid rgba(201,168,76,0.35)", color: "#c9a84c", backdropFilter: "blur(14px)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <ArrowLeft size={13} /> All Projects
      </motion.button>

      {/* ══ HERO ══ */}
      <HeroGallery images={project.images} project={project} onExploreUnits={() => setShowUnitsModal(true)} />

      {/* ══ GOLD TICKER ══ */}
      <div className="gold-bg overflow-hidden py-3.5">
        <div className="ticker-track">
          {[...Array(4)].map((_, ri) => (
            <div key={ri} className="flex shrink-0">
              {ticker.map((item, i) => (
                <div key={i} className="flex items-center gap-7 px-7 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "rgba(0,0,0,0.38)" }}>{item.k}</span>
                    <span className="text-[13px] font-black ml-1" style={{ color: "#0a0a0a" }}>{item.v}</span>
                  </div>
                  <span className="text-[8px]" style={{ color: "rgba(0,0,0,0.2)" }}>◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section style={{ ...sec, background: "#fff" }}>
        <div style={inner}>
          <SectionHeading label="About This Property" title="Designed for the" accent="Discerning Few" />
          <div className="grid grid-cols-3 gap-4">

            {/* Description card */}
            <div className="col-span-2 rounded-2xl p-9 transition-all" style={cardStyle}
              onMouseEnter={e => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, cardNormal)}>
              <p className="text-[15px] leading-relaxed font-light mb-7" style={{ color: "#666" }}>
                {project.description} Every detail is intentional — from the curvature of the corridors to the grain of the stone. This is not just real estate; it is a legacy investment built to stand the test of time.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
              </div>
              <div className="flex gap-3">
                <button className="gold-bg inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-[11px] tracking-widest uppercase transition-opacity hover:opacity-85"
                  style={{ color: "#080810" }}>
                  <Download size={13} /> Download Brochure
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-[11px] tracking-widest uppercase transition-all"
                  style={{ background: "transparent", border: "1px solid rgba(0,0,0,0.14)", color: "#666" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.14)"; e.currentTarget.style.color = "#666" }}>
                  Book a Visit
                </button>
              </div>
            </div>

            {/* Urgency card */}
            <div className="rounded-2xl p-6 flex flex-col justify-between transition-all"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 20 }}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full glow-dot" style={{ background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} />
                  <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: "#c9a84c" }}>Only 3 Left</span>
                </div>
                <h3 className="leading-snug mb-3" style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--text-primary)" }}>
                  Limited <br /><span className="gold-text italic">Availability</span>
                </h3>
                <p className="text-[13px] font-light" style={{ color: "#999" }}>Schedule a private viewing before it's gone.</p>
              </div>
              <button onClick={() => setShowUnitsModal(true)}
                className="gold-bg w-full mt-6 py-3 rounded-lg font-black text-[11px] tracking-widest uppercase transition-opacity hover:opacity-85"
                style={{ color: "#080810" }}>
                View All Units
              </button>
            </div>

            {/* Amenities */}
            <div className="col-span-3">
              <p className="text-[11px] font-semibold tracking-[4px] uppercase mb-4" style={{ color: "#bbb" }}>Premium Amenities</p>
              <div className="grid grid-cols-6 gap-3">
                {AMENITIES.map((a, i) => (
                  <motion.div key={i} whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-3 py-5 px-3 rounded-xl cursor-default transition-all"
                    style={{ background: "#f8f7f4", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "rgba(201,168,76,0.05)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.background = "#f8f7f4" }}>
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl"
                      style={{ background: "rgba(201,168,76,0.1)" }}>
                      <a.icon size={18} style={{ color: "#c9a84c" }} />
                    </div>
                    <span className="text-[12px] text-center" style={{ color: "#777" }}>{a.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ WHY CHOOSE US ══ */}
      <section style={{ ...sec, background: "#fafaf8" }}>
        <div style={inner}>
          <SectionHeading label="Why Choose Us" title="Our" accent="Commitments" center />
          <div className="grid grid-cols-3 gap-4">
            {BENEFITS.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-2xl transition-all"
                style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 20 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; e.currentTarget.style.background = "rgba(201,168,76,0.03)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.background = "#fff" }}>
                <div className="gold-bg w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-bold"
                  style={{ color: "#080810" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-[13px] leading-relaxed font-light pt-1" style={{ color: "#666" }}>{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ EMI CALCULATOR ══ */}
      <section style={{ ...sec, background: "#fff" }}>
        <div style={{ ...inner, maxWidth: 960 }}>
          <SectionHeading label="Financial Planning" title="EMI" accent="Calculator" center />
          <div className="grid grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-10">
              {[
                { label: "Loan Amount",       value: loan,  set: setLoan,  min: 500000,   max: 20000000, step: 100000, display: `₹${Number(loan).toLocaleString()}` },
                { label: "Interest Rate p.a.", value: rate,  set: setRate,  min: 5,        max: 20,       step: 0.1,    display: `${Number(rate).toFixed(1)}%` },
                { label: "Loan Tenure",        value: years, set: setYears, min: 1,        max: 30,       step: 1,      display: `${years} Years` },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[11px] font-semibold tracking-[2px] uppercase" style={{ color: "#aaa" }}>{item.label}</label>
                    <span className="gold-text font-bold" style={{ fontFamily: "var(--font-display)", fontSize: 30 }}>{item.display}</span>
                  </div>
                  <input type="range" min={item.min} max={item.max} step={item.step} value={item.value}
                    onChange={e => item.set(Number(e.target.value))} className="w-full cursor-pointer" />
                  <div className="flex justify-between mt-1.5 text-[10px]" style={{ color: "#ccc" }}>
                    <span>{item.min.toLocaleString()}</span><span>{item.max.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl p-10 transition-all"
              style={{ background: "#f8f7f4", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 20 }}>
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(201,168,76,0.1)" }} />
              <p className="text-[10px] font-bold tracking-[4px] uppercase mb-2" style={{ color: "#c9a84c" }}>Monthly EMI</p>
              <motion.p key={Math.round(emi)} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="gold-text font-bold leading-none mb-1"
                style={{ fontFamily: "var(--font-display)", fontSize: 64 }}>
                ₹{Math.round(emi).toLocaleString()}
              </motion.p>
              <p className="text-xs mb-8" style={{ color: "#aaa" }}>per month</p>
              {[
                { label: "Principal Amount", value: `₹${Number(loan).toLocaleString()}`, gold: false },
                { label: "Total Interest",   value: `₹${totalInterest.toLocaleString()}`, gold: false },
                { label: "Total Payable",    value: `₹${totalPayable.toLocaleString()}`,  gold: true  },
              ].map((row, i) => (
                <div key={i} className="flex justify-between py-3.5 text-[13px]"
                  style={{ borderBottom: `1px solid ${i < 2 ? "rgba(0,0,0,0.07)" : "rgba(201,168,76,0.25)"}` }}>
                  <span className="font-light" style={{ color: "#888" }}>{row.label}</span>
                  <span className={row.gold ? "gold-text font-bold" : ""}
                    style={row.gold ? { fontFamily: "var(--font-display)", fontSize: 15 } : { color: "#444" }}>
                    {row.value}
                  </span>
                </div>
              ))}
              <button className="gold-bg w-full mt-7 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[11px] tracking-widest uppercase transition-opacity hover:opacity-85"
                style={{ color: "#080810" }}>
                <TrendingUp size={14} /> Apply for Home Loan
              </button>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ LOCATION ══ */}
      <section style={{ ...sec, background: "#fafaf8" }}>
        <div style={inner}>
          <div className="grid grid-cols-3 gap-14 items-start">
            <div>
              <SectionHeading label="Location" title="Find Your" accent="Address" />
              <div className="flex flex-col gap-4 mt-2">
                {["Prime Connectivity to City Center", "Close to Airport & Metro Stations", "Top Schools & Hospitals Nearby"].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-[13px]" style={{ color: "#777" }}>
                    <CheckCircle size={15} style={{ color: "#c9a84c" }} className="shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 20 }}>
              <iframe
                src="https://maps.google.com/maps?q=Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full border-0 block"
                style={{ height: 380, filter: "sepia(0.15) contrast(0.95)" }}
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(12px)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <MapPin size={15} style={{ color: "#c9a84c" }} />
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: "#1a1a1a" }}>{project.title}</p>
                  <p className="text-[11px]" style={{ color: "#999" }}>{project.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ RELATED PROJECTS ══ */}
      <section style={{ ...sec, background: "#fff" }}>
        <div style={inner}>
          <div className="flex justify-between items-end mb-12">
            <SectionHeading label="Portfolio" title="Explore" accent="More" />
            <button onClick={() => navigate("/projects")}
              className="mb-12 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-[11px] tracking-widest uppercase transition-all"
              style={{ background: "transparent", border: "1px solid rgba(0,0,0,0.12)", color: "#888" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; e.currentTarget.style.color = "#888" }}>
              View All <ArrowRight size={13} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {related.map((item, i) => (
              <motion.div key={i}
                onClick={() => navigate(`/project/${item.id}`)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ height: 340, borderRadius: 20 }}>
                <img src={item.images[0]} alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.25) 55%,transparent 100%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="gold-bg text-[9px] font-black tracking-[2px] uppercase px-2.5 py-1 rounded"
                    style={{ color: "#080810" }}>{item.badge}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="gold-text font-bold mb-1" style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>
                    ₹{item.price.toLocaleString()}
                  </p>
                  <p className="text-[14px] font-semibold text-white mb-1.5">{item.title}</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/40">
                    <MapPin size={10} style={{ color: "#c9a84c" }} /> {item.location}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ UNITS MODAL ══ */}
      <AnimatePresence>
        {showUnitsModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowUnitsModal(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(16px)" }}>
            <motion.div initial={{ scale: 0.94, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 24 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl overflow-y-auto"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)", maxHeight: "88vh", borderRadius: 24, boxShadow: "0 32px 80px rgba(0,0,0,0.18)" }}>
              <div className="sticky top-0 z-10 px-8 py-6 rounded-t-2xl flex justify-between items-center"
                style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "#1a1a1a" }}>{project.title}</h3>
                  <p className="text-xs mt-1" style={{ color: "#aaa" }}>Choose your perfect unit</p>
                </div>
                <button onClick={() => setShowUnitsModal(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                  style={{ background: "#f4f4f4", border: "1px solid rgba(0,0,0,0.09)", color: "#888" }}>
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-3">
                {project.units.map(unit => (
                  <motion.div key={unit.id} whileHover={{ x: 4 }}
                    onClick={() => { setSelectedUnit(unit); setShowUnitsModal(false) }}
                    className="p-6 rounded-xl cursor-pointer transition-all"
                    style={{ background: "#f8f7f4", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "rgba(201,168,76,0.04)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.background = "#f8f7f4" }}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#1a1a1a" }}>{unit.type}</h4>
                          <span className={`text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full ${STATUS_CLS[unit.status] || STATUS_CLS.Available}`}>
                            {unit.status}
                          </span>
                        </div>
                        <p className="gold-text font-bold mb-3" style={{ fontFamily: "var(--font-display)", fontSize: 26 }}>
                          ₹{unit.price.toLocaleString()}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <SpecItem icon={Maximize2} value={unit.area} />
                          {unit.rooms   > 0 && <SpecItem icon={Bed}  value={unit.rooms}   label="Beds"    />}
                          {unit.baths   > 0 && <SpecItem icon={Bath} value={unit.baths}   label="Baths"   />}
                          {unit.parking > 0 && <SpecItem icon={Car}  value={unit.parking} label="Parking" />}
                          <SpecItem icon={Home} value={unit.floor} />
                        </div>
                      </div>
                      <ArrowRight size={18} className="shrink-0 ml-4" style={{ color: "rgba(201,168,76,0.6)" }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ UNIT DETAIL MODAL ══ */}
      <AnimatePresence>
        {selectedUnit && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedUnit(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 overflow-y-auto"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(20px)" }}>
            <motion.div initial={{ scale: 0.92, y: 28 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 28 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-4xl rounded-2xl overflow-y-auto my-auto"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.09)", maxHeight: "92vh", borderRadius: 24, boxShadow: "0 40px 100px rgba(0,0,0,0.2)" }}>
              <div className="sticky top-0 z-20 px-8 py-5 rounded-t-2xl flex justify-between items-center"
                style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#1a1a1a" }}>
                    {selectedUnit.type}
                    <span className="mx-2" style={{ color: "#ccc" }}>·</span>
                    {selectedUnit.area}
                  </h3>
                  <p className="gold-text font-bold mt-1" style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>
                    ₹{selectedUnit.price.toLocaleString()}
                  </p>
                </div>
                <button onClick={() => setSelectedUnit(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ background: "#f4f4f4", border: "1px solid rgba(0,0,0,0.09)", color: "#888" }}>
                  <X size={16} />
                </button>
              </div>
              <div className="relative overflow-hidden" style={{ height: 280 }}>
                <img src={project.images[0]} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,#fff,transparent)" }} />
              </div>
              <div className="p-8 grid grid-cols-3 gap-8">
                <div className="col-span-2 flex flex-col gap-8">
                  <div>
                    <p className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#bbb" }}>Specifications</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Carpet Area", value: selectedUnit.area },
                        { label: "Floor",       value: selectedUnit.floor },
                        { label: "Bedrooms",    value: selectedUnit.rooms   || "N/A" },
                        { label: "Bathrooms",   value: selectedUnit.baths   || "N/A" },
                        { label: "Parking",     value: selectedUnit.parking || "N/A" },
                        { label: "Status",      value: selectedUnit.status },
                      ].map((spec, i) => (
                        <div key={i} className="rounded-xl p-4"
                          style={{ background: "#f8f7f4", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 14 }}>
                          <p className="text-[10px] uppercase tracking-[2px] mb-2" style={{ color: "#bbb" }}>{spec.label}</p>
                          <p className="font-semibold" style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "#1a1a1a" }}>{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#bbb" }}>Amenities</p>
                    <div className="grid grid-cols-3 gap-2.5">
                      {AMENITIES.map((a, i) => (
                        <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg"
                          style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 10 }}>
                          <a.icon size={13} style={{ color: "#c9a84c" }} className="shrink-0" />
                          <span className="text-[11px]" style={{ color: "#777" }}>{a.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#bbb" }}>Why Buy This Property?</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {BENEFITS.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-[12px] font-light" style={{ color: "#777" }}>
                          <CheckCircle size={12} style={{ color: "#c9a84c" }} className="shrink-0 mt-0.5" /> {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA sidebar */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl p-5 mb-1"
                    style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 16 }}>
                    <p className="text-[10px] font-bold tracking-[3px] uppercase mb-2" style={{ color: "#c9a84c" }}>Special Offer</p>
                    <p className="gold-text font-bold mb-1" style={{ fontFamily: "var(--font-display)", fontSize: 30 }}>
                      ₹{selectedUnit.price.toLocaleString()}
                    </p>
                    <p className="text-[12px] line-through mb-3" style={{ color: "#ccc" }}>
                      ₹{(selectedUnit.price * 1.15).toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] text-emerald-600"
                      style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}>
                      <TrendingUp size={11} /> Save 15% — Limited Time
                    </div>
                  </div>
                  <button className="gold-bg w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[11px] tracking-widest uppercase transition-opacity hover:opacity-85"
                    style={{ color: "#080810" }}>
                    <Phone size={13} /> Schedule Site Visit
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[11px] tracking-widest uppercase transition-colors"
                    style={{ background: "rgb(22,163,74)", color: "#fff" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgb(20,150,68)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgb(22,163,74)"}>
                    <MessageCircle size={13} /> WhatsApp Now
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[11px] tracking-widest uppercase transition-all"
                    style={{ background: "#f4f4f4", border: "1px solid rgba(0,0,0,0.09)", color: "#777" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)"; e.currentTarget.style.color = "#777" }}>
                    <Download size={13} /> Download Brochure
                  </button>
                  <div className="rounded-xl p-4 mt-1"
                    style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: 14 }}>
                    <div className="flex gap-2.5">
                      <Award size={12} className="shrink-0 mt-0.5" style={{ color: "#818cf8" }} />
                      <p className="text-[11px] leading-relaxed" style={{ color: "#8b92d4" }}>
                        <strong style={{ color: "#6366f1" }}>Expert Tip:</strong>{" "}
                        Book now to lock current prices — values expected to rise 20% in 6 months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: 80 }} />
    </div>
  )
}