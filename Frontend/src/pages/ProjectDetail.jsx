"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Maximize2, Phone, MessageCircle, Download, Calculator, X, Home, Bed, Bath, Car, Wifi, Dumbbell, Shield, Zap } from "lucide-react"

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
        units: [
            { id: 1, type: "2BHK", area: "1200 sq.ft", price: 4500000, rooms: 2, baths: 2, parking: 1, floor: "3rd-8th", status: "Available" },
            { id: 2, type: "3BHK", area: "1800 sq.ft", price: 6200000, rooms: 3, baths: 3, parking: 2, floor: "5th-12th", status: "Available" },
            { id: 3, type: "Penthouse", area: "2500 sq.ft", price: 9500000, rooms: 4, baths: 4, parking: 3, floor: "Top Floor", status: "Limited" },
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
        units: [
            { id: 1, type: "Shop", area: "500 sq.ft", price: 6500000, rooms: 1, baths: 1, parking: 2, floor: "Ground", status: "Available" },
            { id: 2, type: "Office", area: "1200 sq.ft", price: 12000000, rooms: 4, baths: 2, parking: 4, floor: "1st-3rd", status: "Available" },
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
        units: [
            { id: 1, type: "Plot", area: "1000 sq.ft", price: 5500000, rooms: 0, baths: 0, parking: 0, floor: "Ground", status: "Available" },
            { id: 2, type: "Plot", area: "2500 sq.ft", price: 12500000, rooms: 0, baths: 0, parking: 0, floor: "Ground", status: "Available" },
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
        units: [
            { id: 1, type: "2BHK", area: "1100 sq.ft", price: 7000000, rooms: 2, baths: 2, parking: 1, floor: "2nd-6th", status: "Ready" },
            { id: 2, type: "3BHK", area: "1600 sq.ft", price: 9800000, rooms: 3, baths: 2, parking: 2, floor: "4th-9th", status: "Ready" },
        ],
    },
]

const UNIT_AMENITIES = [
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: Shield, label: "24/7 Security" },
    { icon: Car, label: "Covered Parking" },
    { icon: Zap, label: "Power Backup" },
    { icon: Home, label: "Clubhouse" },
]

const PURCHASE_BENEFITS = [
    "✓ Zero Brokerage - Direct from Builder",
    "✓ Flexible Payment Plans Available",
    "✓ Home Loan Assistance at Best Rates",
    "✓ RERA Approved & Legally Verified",
    "✓ Premium Location with High ROI",
    "✓ Lifetime Maintenance Support",
]

const amenityIcons = ["✦", "◈", "⊕", "◉"]

export default function ProjectDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const [loan, setLoan] = useState(3000000)
    const [rate, setRate] = useState(8)
    const [years, setYears] = useState(20)
    const [showUnitsModal, setShowUnitsModal] = useState(false)
    const [selectedUnit, setSelectedUnit] = useState(null)
    const [galleryIndex, setGalleryIndex] = useState(0)
    const [unitFilter, setUnitFilter] = useState('all')

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
                                onClick={() => {
                                    if (item.id === project.id) {
                                        setShowUnitsModal(true)
                                    } else {
                                        navigate(`/project/${item.id}`)
                                    }
                                }}
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

            {/* ── UNITS MODAL ── */}
            <AnimatePresence>
                {showUnitsModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
                        onClick={() => setShowUnitsModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-3xl font-light text-gray-900">{project.title}</h3>
                                        <p className="text-sm text-gray-400 mt-1 font-sans">Choose your perfect space</p>
                                    </div>
                                    <button onClick={() => setShowUnitsModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent cursor-pointer">
                                        <X size={24} className="text-gray-400" />
                                    </button>
                                </div>

                                {/* Filter Tabs */}
                                <div className="flex gap-3">
                                    {[
                                        { id: 'all', label: 'All Units', icon: Home },
                                        { id: 'flat', label: 'Flats Only', icon: Bed },
                                        { id: 'plot', label: 'Plots Only', icon: Maximize2 },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setUnitFilter(tab.id)}
                                            className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all border-2 cursor-pointer rounded-lg ${
                                                unitFilter === tab.id
                                                    ? 'bg-yellow-500 text-white border-yellow-500'
                                                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-400 hover:text-yellow-600'
                                            }`}
                                        >
                                            <tab.icon size={16} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 grid gap-6">
                                {project.units?.filter((unit) => {
                                    if (unitFilter === 'all') return true
                                    if (unitFilter === 'flat') return unit.type.toLowerCase().includes('bhk') || unit.type.toLowerCase().includes('penthouse')
                                    if (unitFilter === 'plot') return unit.type.toLowerCase().includes('plot')
                                    return true
                                }).map((unit) => (
                                    <motion.div
                                        key={unit.id}
                                        whileHover={{ scale: 1.01 }}
                                        onClick={() => setSelectedUnit(unit)}
                                        className="border-2 border-gray-200 hover:border-yellow-400 rounded-xl p-6 cursor-pointer transition-all bg-gray-50 hover:bg-yellow-50/30"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h4 className="text-2xl font-semibold text-gray-900">{unit.type}</h4>
                                                    <span className={`text-xs px-3 py-1 rounded-full font-sans font-semibold ${unit.status === 'Available' ? 'bg-green-100 text-green-700' : unit.status === 'Limited' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {unit.status}
                                                    </span>
                                                </div>
                                                <p className="text-yellow-600 text-3xl font-bold mb-4">₹{unit.price.toLocaleString()}</p>
                                                <div className="flex gap-6 text-sm text-gray-600 font-sans">
                                                    <div className="flex items-center gap-2"><Maximize2 size={16} className="text-yellow-500" /> {unit.area}</div>
                                                    {unit.rooms > 0 && <div className="flex items-center gap-2"><Bed size={16} className="text-yellow-500" /> {unit.rooms} Rooms</div>}
                                                    {unit.baths > 0 && <div className="flex items-center gap-2"><Bath size={16} className="text-yellow-500" /> {unit.baths} Baths</div>}
                                                    {unit.parking > 0 && <div className="flex items-center gap-2"><Car size={16} className="text-yellow-500" /> {unit.parking} Parking</div>}
                                                    <div className="flex items-center gap-2"><Home size={16} className="text-yellow-500" /> {unit.floor}</div>
                                                </div>
                                            </div>
                                            <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold tracking-wider uppercase transition-all border-none cursor-pointer rounded">
                                                View Details
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                                {project.units?.filter((unit) => {
                                    if (unitFilter === 'all') return true
                                    if (unitFilter === 'flat') return unit.type.toLowerCase().includes('bhk') || unit.type.toLowerCase().includes('penthouse')
                                    if (unitFilter === 'plot') return unit.type.toLowerCase().includes('plot')
                                    return true
                                }).length === 0 && (
                                    <div className="text-center py-16">
                                        <div className="text-gray-300 mb-4">
                                            <Home size={64} className="mx-auto" />
                                        </div>
                                        <p className="text-xl text-gray-400 font-sans">No {unitFilter === 'flat' ? 'flats' : 'plots'} available in this category</p>
                                        <button
                                            onClick={() => setUnitFilter('all')}
                                            className="mt-4 px-6 py-2 bg-yellow-500 text-white text-sm font-semibold tracking-wider uppercase border-none cursor-pointer rounded-lg hover:bg-yellow-600 transition-all"
                                        >
                                            View All Units
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── UNIT DETAIL MODAL ── */}
            <AnimatePresence>
                {selectedUnit && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 overflow-y-auto"
                        onClick={() => setSelectedUnit(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-6"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center z-20">
                                <div>
                                    <h3 className="text-4xl font-light text-gray-900">{selectedUnit.type} - {selectedUnit.area}</h3>
                                    <p className="text-yellow-600 text-2xl font-bold mt-2">₹{selectedUnit.price.toLocaleString()}</p>
                                </div>
                                <button onClick={() => setSelectedUnit(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent cursor-pointer">
                                    <X size={28} className="text-gray-400" />
                                </button>
                            </div>

                            {/* Gallery */}
                            <div className="relative h-[400px] bg-gray-900">
                                <img src={project.media[galleryIndex]?.url || "/api/placeholder/1200/400"} alt="Gallery" className="w-full h-full object-cover" />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {project.media.map((_, i) => (
                                        <button key={i} onClick={() => setGalleryIndex(i)} className={`h-2 rounded-full transition-all border-none cursor-pointer ${i === galleryIndex ? 'w-8 bg-yellow-500' : 'w-2 bg-white/50'}`} />
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 grid grid-cols-3 gap-8">
                                {/* Left: Details */}
                                <div className="col-span-2 space-y-8">
                                    {/* Specifications */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <Home size={20} className="text-yellow-500" /> Specifications
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { label: "Carpet Area", value: selectedUnit.area },
                                                { label: "Floor", value: selectedUnit.floor },
                                                { label: "Bedrooms", value: selectedUnit.rooms || "N/A" },
                                                { label: "Bathrooms", value: selectedUnit.baths || "N/A" },
                                                { label: "Parking", value: selectedUnit.parking || "N/A" },
                                                { label: "Status", value: selectedUnit.status },
                                            ].map((spec, i) => (
                                                <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-sans mb-1">{spec.label}</p>
                                                    <p className="text-lg font-semibold text-gray-900">{spec.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Premium Amenities</h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {UNIT_AMENITIES.map((amenity, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                                    <amenity.icon size={18} className="text-yellow-600" />
                                                    <span className="text-sm text-gray-700 font-sans">{amenity.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Purchase Benefits */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Buy This Property?</h4>
                                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                                            <div className="grid grid-cols-2 gap-3">
                                                {PURCHASE_BENEFITS.map((benefit, i) => (
                                                    <p key={i} className="text-sm text-gray-700 font-sans flex items-start gap-2">
                                                        <span className="text-yellow-600 font-bold">✓</span>
                                                        {benefit.replace('✓ ', '')}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: CTA */}
                                <div className="space-y-4">
                                    <div className="bg-gray-900 text-white p-6 rounded-xl">
                                        <p className="text-xs tracking-wider uppercase text-yellow-500 mb-2 font-sans">Special Offer</p>
                                        <p className="text-3xl font-bold mb-1">₹{selectedUnit.price.toLocaleString()}</p>
                                        <p className="text-sm text-gray-400 line-through font-sans">₹{(selectedUnit.price * 1.15).toLocaleString()}</p>
                                        <div className="h-px bg-white/20 my-4" />
                                        <p className="text-xs text-gray-300 font-sans">Limited time offer - Save up to 15%</p>
                                    </div>

                                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 text-sm font-semibold tracking-wider uppercase transition-all border-none cursor-pointer rounded-lg">
                                        Schedule Site Visit
                                    </button>
                                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-sm font-semibold tracking-wider uppercase transition-all border-none cursor-pointer rounded-lg flex items-center justify-center gap-2">
                                        <MessageCircle size={18} /> WhatsApp Now
                                    </button>
                                    <button className="w-full border-2 border-gray-300 hover:border-yellow-500 text-gray-700 py-4 text-sm font-semibold tracking-wider uppercase transition-all bg-transparent cursor-pointer rounded-lg">
                                        Download Brochure
                                    </button>

                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                                        <p className="text-xs text-blue-900 font-sans">
                                            <strong>Expert Tip:</strong> Book now to lock current prices. Property values expected to rise by 20% in next 6 months.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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