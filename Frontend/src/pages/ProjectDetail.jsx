"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Maximize2, Phone, MessageCircle, Download, Calculator } from "lucide-react"

const PROJECTS_DATA = [
    {
        id: "luxury-apartments",
        title: "Luxury Apartments",
        subtitle: "Elevated Living Redefined",
        description: "Premium 2BHK & 3BHK homes where modern design meets artful living. Every corner is crafted to inspire.",
        price: 4500000,
        oldPrice: 5200000,
        location: "MIHAN, Nagpur",
        plots: "1200–1800 sq.ft",
        badge: "FEATURED",
        details: ["Smart Home", "Gymnasium", "24/7 Security", "High-Speed Elevators"],
        media: [
            { type: "image", url: "/api/placeholder/900/600" },
            { type: "image", url: "/api/placeholder/900/600" },
            { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
    },
    {
        id: "commercial-spaces",
        title: "Commercial Spaces",
        subtitle: "Prime Business Addresses",
        description: "Shops & offices in high-visibility prime locations, designed to accelerate your business potential.",
        price: 6500000,
        oldPrice: 7200000,
        location: "Wardha Road, Nagpur",
        plots: "500–2000 sq.ft",
        badge: "PRIME",
        details: ["High Footfall", "Ample Parking", "Modern Design", "Metro Connectivity"],
        media: [
            { type: "image", url: "/api/placeholder/900/600" },
            { type: "image", url: "/api/placeholder/900/600" },
            { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
    },
    {
        id: "ongoing-projects",
        title: "Ongoing Projects",
        subtitle: "Invest Early, Win Big",
        description: "Premium residential projects under active construction. Flexible payment plans, modern layouts.",
        price: 5500000,
        oldPrice: 6000000,
        location: "Beltarodi, Nagpur",
        plots: "1000–2500 sq.ft",
        badge: "NEW",
        details: ["Under Construction", "Flexible Payment", "Modern Layout"],
        media: [
            { type: "image", url: "/api/placeholder/900/600" },
            { type: "image", url: "/api/placeholder/900/600" },
        ],
    },
    {
        id: "ready-to-move",
        title: "Ready-to-Move Homes",
        subtitle: "Your Home, Right Now",
        description: "Move in immediately. Fully ready premium homes in a secure and prime neighborhood.",
        price: 7000000,
        oldPrice: 7800000,
        location: "Manish Nagar, Nagpur",
        plots: "1100–1600 sq.ft",
        badge: "READY",
        details: ["Ready Possession", "Semi-Furnished", "Prime Area", "Gated Security"],
        media: [
            { type: "image", url: "/api/placeholder/900/600" },
            { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
    },
]

const amenityIcons = ["✦", "◈", "⊕", "◉"]

export default function ProjectDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const [loan, setLoan] = useState(3000000)
    const [rate, setRate] = useState(8)
    const [years, setYears] = useState(20)

    const project = PROJECTS_DATA.find((p) => p.id === id) || PROJECTS_DATA[0]

    useEffect(() => { window.scrollTo(0, 0) }, [id])

    useEffect(() => {
        if (!project) return
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % project.media.length)
        }, 4500)
        return () => clearInterval(interval)
    }, [project])

    const r = rate / 12 / 100
    const n = years * 12
    const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPayable = Math.round(emi) * n
    const totalInterest = totalPayable - loan

    const currentMedia = project.media[index]

    return (
        <div className="min-h-screen bg-white text-gray-900 font-serif">

            {/* ── HERO SLIDER ── */}
            <section className="relative h-[92vh] overflow-hidden">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {currentMedia.type === "video" ? (
                            <iframe src={currentMedia.url} className="w-full h-full border-none" />
                        ) : (
                            <img src={currentMedia.url} alt="" className="w-full h-full object-cover" />
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                {/* Back button */}
                <button
                    onClick={() => navigate("/projects")}
                    className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors bg-transparent border-none cursor-pointer"
                >
                    <ArrowLeft size={16} /> Back
                </button>

                {/* Hero Content */}
                <div className="absolute bottom-20 left-12 max-w-xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <span className="inline-block text-[10px] font-semibold tracking-[3px] uppercase px-3 py-1 border border-yellow-500 text-yellow-500">
                            {project.badge}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        className="text-6xl font-light leading-tight mt-5 text-white tracking-tight"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="text-xs tracking-[2px] text-yellow-500 mt-3 uppercase font-sans"
                    >
                        {project.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                        className="flex items-center gap-2 mt-5 text-sm text-white/60 font-sans"
                    >
                        <MapPin size={14} className="text-yellow-500" />
                        {project.location}
                        <span className="mx-2 text-white/20">|</span>
                        <Maximize2 size={14} className="text-yellow-500" />
                        {project.plots}
                    </motion.div>
                </div>

                {/* Slider Arrows */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                    <button
                        onClick={() => setIndex((index - 1 + project.media.length) % project.media.length)}
                        className="w-12 h-12 rounded-full bg-black/60 border border-yellow-500/40 text-yellow-500 flex items-center justify-center hover:bg-yellow-500/20 transition-all cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => setIndex((index + 1) % project.media.length)}
                        className="w-12 h-12 rounded-full bg-black/60 border border-yellow-500/40 text-yellow-500 flex items-center justify-center hover:bg-yellow-500/20 transition-all cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-8 right-8 flex gap-2">
                    {project.media.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all cursor-pointer border-none ${i === index ? "w-6 bg-yellow-500" : "w-1.5 bg-white/30"}`}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="absolute top-8 right-8 text-xs tracking-[2px] text-white/50 font-sans">
                    {String(index + 1).padStart(2, "0")} / {String(project.media.length).padStart(2, "0")}
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <section className="flex bg-gray-50 border-b border-gray-200">
                {[
                    { label: "Price", value: `₹${project.price.toLocaleString()}`, sub: `Was ₹${project.oldPrice.toLocaleString()}` },
                    { label: "Area", value: project.plots, sub: "Carpet Area" },
                    { label: "Type", value: project.details[0] || "Premium", sub: "Category" },
                    { label: "Rating", value: "4.9 ★", sub: "Buyer Reviews" },
                ].map((stat, i) => (
                    <div key={i} className="flex-1 text-center p-6 border border-gray-200">
                        <p className="text-[11px] tracking-[2px] text-yellow-600 uppercase mb-2 font-sans font-semibold">{stat.label}</p>
                        <p className="text-xl font-medium text-gray-900">{stat.value}</p>
                        {stat.sub && <p className="text-xs text-gray-400 mt-1 font-sans">{stat.sub}</p>}
                    </div>
                ))}
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            {/* ── ABOUT + AMENITIES ── */}
            <section className="max-w-7xl mx-auto px-12 py-24 grid grid-cols-2 gap-24">

                <div>
                    <p className="text-[11px] tracking-[4px] text-yellow-600 uppercase mb-6 font-sans font-semibold">About This Property</p>
                    <h2 className="text-5xl font-light leading-tight mb-8 text-gray-900">
                        A Home Crafted<br /><em>for the Discerning</em>
                    </h2>
                    <p className="text-base leading-relaxed text-gray-500 mb-10 font-sans">
                        {project.description} Every detail is intentional — from the curvature of the corridors to the grain of the stone. This is not just real estate; it is a legacy investment.
                    </p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-xs font-semibold tracking-[2px] uppercase transition-all font-sans cursor-pointer border-none">
                            <Download size={14} /> Brochure
                        </button>
                        <button className="px-8 py-3 border border-yellow-500 text-yellow-600 hover:bg-yellow-50 text-xs font-semibold tracking-[2px] uppercase transition-all font-sans cursor-pointer bg-transparent">
                            Book a Visit
                        </button>
                    </div>
                </div>

                <div>
                    <p className="text-[11px] tracking-[4px] text-yellow-600 uppercase mb-6 font-sans font-semibold">Amenities</p>
                    <div className="grid grid-cols-2 gap-3">
                        {project.details.map((d, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 border border-yellow-200 bg-yellow-50/50 hover:bg-yellow-50 hover:border-yellow-400 transition-all">
                                <span className="text-yellow-500 text-lg">{amenityIcons[i % amenityIcons.length]}</span>
                                <span className="text-sm text-gray-700 font-sans">{d}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-7 bg-yellow-50 border border-yellow-200">
                        <p className="text-[11px] tracking-[3px] text-yellow-600 uppercase mb-3 font-sans font-semibold">Limited Availability</p>
                        <p className="text-2xl font-light text-gray-900">Only <strong className="text-yellow-600">3</strong> units remaining</p>
                        <p className="text-sm text-gray-400 mt-2 font-sans">Schedule a private viewing today</p>
                    </div>
                </div>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            {/* ── EMI CALCULATOR ── */}
            <section className="bg-gray-50 py-24 px-12">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-16">
                        <p className="text-[11px] tracking-[4px] text-yellow-600 uppercase mb-4 font-sans font-semibold flex items-center justify-center gap-2">
                            <Calculator size={14} /> Financial Planning
                        </p>
                        <h2 className="text-5xl font-light text-gray-900">EMI Calculator</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-20 items-center">

                        {/* Sliders */}
                        <div className="flex flex-col gap-10">
                            {[
                                { label: "Loan Amount", value: loan, set: setLoan, min: 500000, max: 20000000, step: 100000, display: `₹${Number(loan).toLocaleString()}` },
                                { label: "Interest Rate", value: rate, set: setRate, min: 5, max: 20, step: 0.1, display: `${Number(rate).toFixed(1)}% p.a.` },
                                { label: "Loan Tenure", value: years, set: setYears, min: 1, max: 30, step: 1, display: `${years} Years` },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <label className="text-xs tracking-[2px] text-gray-400 uppercase font-sans">{item.label}</label>
                                        <span className="text-xl text-yellow-600 font-semibold font-sans">{item.display}</span>
                                    </div>
                                    <input
                                        type="range"
                                        className="w-full h-0.5 accent-yellow-500 cursor-pointer"
                                        min={item.min} max={item.max} step={item.step}
                                        value={item.value}
                                        onChange={e => item.set(Number(e.target.value))}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* EMI Result */}
                        <div className="bg-white p-12 border border-yellow-200 shadow-sm">
                            <p className="text-[11px] tracking-[4px] text-yellow-600 uppercase mb-5 font-sans font-semibold">Monthly EMI</p>
                            <p className="text-6xl font-light text-gray-900 leading-none tracking-tight">
                                ₹{Math.round(emi).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-400 mt-2 font-sans">per month</p>

                            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent my-8" />

                            <div className="flex flex-col gap-4">
                                {[
                                    { label: "Principal Amount", value: `₹${Number(loan).toLocaleString()}` },
                                    { label: "Total Interest", value: `₹${totalInterest.toLocaleString()}` },
                                    { label: "Total Payable", value: `₹${totalPayable.toLocaleString()}`, bold: true },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between text-sm font-sans">
                                        <span className="text-gray-400">{row.label}</span>
                                        <span className={row.bold ? "text-yellow-600 font-semibold" : "text-gray-700"}>{row.value}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 text-xs font-semibold tracking-[2px] uppercase transition-all font-sans cursor-pointer border-none">
                                Apply for Home Loan
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            {/* ── MAP ── */}
            <section className="py-24 px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <p className="text-[11px] tracking-[4px] text-yellow-600 uppercase mb-4 font-sans font-semibold">Location</p>
                            <h2 className="text-5xl font-light text-gray-900">Find Your Address</h2>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 font-sans">
                            <MapPin size={16} className="text-yellow-500" />{project.location}
                        </div>
                    </div>

                    <div className="relative overflow-hidden border border-gray-200">
                        <iframe
                            src="https://maps.google.com/maps?q=Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-[460px] border-none block"
                        />
                    </div>
                </div>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            {/* ── RELATED PROJECTS ── */}
            <section className="bg-gray-50 py-24 px-12">
                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-end mb-14">
                        <div>
                            <p className="text-[11px] tracking-[4px] text-yellow-600 uppercase mb-4 font-sans font-semibold">Portfolio</p>
                            <h2 className="text-5xl font-light text-gray-900">Explore More</h2>
                        </div>
                        <button
                            onClick={() => navigate("/projects")}
                            className="px-8 py-3 border border-yellow-500 text-yellow-600 hover:bg-yellow-50 text-xs font-semibold tracking-[2px] uppercase transition-all font-sans cursor-pointer bg-transparent"
                        >
                            View All Projects
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        {PROJECTS_DATA.map((item, i) => (
                            <motion.div
                                key={i}
                                onClick={() => navigate(`/project/${item.id}`)}
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                                style={{ height: "340px" }}
                            >
                                {/* Full bleed image */}
                                <img
                                    src={item.media[0].url}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />

                                {/* Top badge */}
                                {i === 0 && (
                                    <div className="absolute top-3 left-3 z-10">
                                        <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm font-sans">
                                            ⭐ Prime Pick
                                        </span>
                                    </div>
                                )}

                                {/* Bottom frosted info panel */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 z-10 px-4 pt-5 pb-4"
                                    style={{
                                        background: "linear-gradient(to top, rgba(30,30,30,0.88) 0%, rgba(30,30,30,0.55) 70%, transparent 100%)",
                                        backdropFilter: "blur(0px)",
                                    }}
                                >
                                    {/* Price */}
                                    <p className="text-white text-2xl font-bold font-sans mb-1">
                                    ₹{item.price.toLocaleString()}
                                    </p>

                                    {/* Address + stats row */}
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <div className="min-w-0">
                                            <p className="text-white/80 text-xs font-sans truncate">{item.title}</p>
                                            <p className="text-white/60 text-[11px] font-sans truncate">{item.location}</p>
                                        </div>
                                        <div className="flex gap-3 shrink-0">
                                            <div className="text-center">
                                                <p className="text-white text-xs font-semibold font-sans">40 m²</p>
                                                <p className="text-white/50 text-[10px] font-sans">Living</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-white text-xs font-semibold font-sans">3</p>
                                                <p className="text-white/50 text-[10px] font-sans">Rooms</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-white/10 mb-3" />

                                 
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── STICKY BOTTOM BAR ── */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 px-8 py-4 flex items-center justify-between gap-4 shadow-lg">
                <div>
                    <p className="text-[11px] tracking-[3px] text-yellow-600 uppercase mb-1 font-sans font-semibold">Starting From</p>
                    <p className="text-2xl font-medium text-gray-900">₹{project.price.toLocaleString()}</p>
                </div>
                <div className="flex gap-3">
                    <a
                        href="https://wa.me/919999999999"
                        className="flex items-center gap-2 bg-green-50 border border-green-300 text-green-700 px-5 py-3 text-xs font-semibold tracking-[1.5px] uppercase no-underline transition-all hover:bg-green-100 font-sans"
                    >
                        <MessageCircle size={16} /> WhatsApp
                    </a>
                    <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-xs font-semibold tracking-[2px] uppercase transition-all font-sans cursor-pointer border-none">
                        <Phone size={14} /> Book a Visit
                    </button>
                </div>
            </div>

            <div className="h-20" />
        </div>
    )
}