import { useState, useEffect, useRef } from 'react'
import { Home, Building2, HardHat, Key, MapPin, ArrowRight, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PROJECTS = [
  {
    id: 'luxury-apartments',
    Icon: Home,
    tag: 'Residential',
    title: 'Luxury Apartments',
    desc: '2BHK & 3BHK with modern layouts and premium finishing.',
    price: '₹45L onwards',
    badge: 'Ongoing',
    badgeColor: '#D4AF37',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
    ],
    plotSizes: ['1200 sq.ft', '1400 sq.ft', '1600 sq.ft', '1800 sq.ft'],
    location: 'MIHAN, Nagpur',
  },
  {
    id: 'commercial-spaces',
    Icon: Building2,
    tag: 'Commercial',
    title: 'Commercial Spaces',
    desc: 'Prime location shops and offices for business growth.',
    price: 'On Request',
    badge: 'Available',
    badgeColor: '#D4AF37',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a7db8?w=600&q=80',
    ],
    plotSizes: ['500 sq.ft', '750 sq.ft', '1000 sq.ft', '1500 sq.ft', '2000 sq.ft'],
    location: 'Wardha Road, Nagpur',
  },
  {
    id: 'ongoing-projects',
    Icon: HardHat,
    tag: 'Under Construction',
    title: 'Ongoing Projects',
    desc: 'Premium 2BHK & 3BHK in prime areas. Possession 2026.',
    price: '₹45L – ₹1Cr',
    badge: '2026',
    badgeColor: '#D4AF37',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
      'https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600&q=80',
    ],
    plotSizes: ['1000 sq.ft', '1200 sq.ft', '1800 sq.ft', '2000 sq.ft', '2500 sq.ft'],
    location: 'Beltarodi, Nagpur',
  },
  {
    id: 'ready-to-move',
    Icon: Key,
    tag: 'Ready to Move',
    title: 'Ready-to-Move Homes',
    desc: 'Move in immediately with modern amenities.',
    price: '₹70L onwards',
    badge: 'Ready',
    badgeColor: '#D4AF37',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    ],
    plotSizes: ['1100 sq.ft', '1200 sq.ft', '1400 sq.ft', '1600 sq.ft'],
    location: 'Manish Nagar, Nagpur',
  },
]

const CATEGORY_FILTERS = ['All', 'Residential', 'Commercial', 'Under Construction', 'Ready to Move']

// Collect all unique plot sizes across all projects sorted numerically
const ALL_PLOT_SIZES = ['All Sizes', ...Array.from(
  new Set(PROJECTS.flatMap(p => p.plotSizes))
).sort((a, b) => parseInt(a) - parseInt(b))]

// ── Image Slider ──────────────────────────────────────────────────────────────
function ImageSlider({ images, isHovered }) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [sliding, setSliding] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (next) => {
    if (sliding || next === current) return
    setPrev(current)
    setCurrent(next)
    setSliding(true)
    setTimeout(() => {
      setPrev(null)
      setSliding(false)
    }, 550)
  }

  const goNext = useRef(() => { })
  goNext.current = () => goTo((current + 1) % images.length)

  const restart = (delay) => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => goNext.current(), delay)
  }

  useEffect(() => {
    restart(2800)
    return () => clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length])

  useEffect(() => {
    restart(isHovered ? 1400 : 2800)
    return () => clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, images.length])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => {
        const isEntering = i === current && sliding
        const isLeaving = i === prev && sliding
        const isCurrent = i === current && !sliding

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: isLeaving
                ? 'translateX(-100%)'
                : isEntering || isCurrent
                  ? 'translateX(0%)'
                  : 'translateX(100%)',
              transition: (isEntering || isLeaving)
                ? 'transform 0.55s cubic-bezier(0.77,0,0.175,1)'
                : 'none',
              zIndex: isEntering ? 2 : isLeaving ? 1 : 0,
            }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        )
      })}

      {/* Dark gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); goTo(i) }}
            className="rounded-full transition-all duration-400"
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              background: i === current
                ? 'linear-gradient(90deg,#D4AF37,#F5E27A,#D4AF37)'
                : 'rgba(255,255,255,0.5)',
              boxShadow: i === current ? '0 0 6px rgba(212,175,55,0.8)' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, activePlotSize }) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const { Icon, tag, title, desc, price, badge, badgeColor, images, plotSizes, location } = project
  const [selectedPlot, setSelectedPlot] = useState('')
  // Highlight matching plot size
  const displaySizes = activePlotSize === 'All Sizes'
    ? plotSizes
    : plotSizes.filter(s => s === activePlotSize)

  const handleCardClick = () => {
    navigate(`/project/${project.id}`)
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
      style={{
        background: '#FFFFFF',
        // border: hovered ? '1.5px solid #D4AF37' : '1.5px solid #E8E0C8',
        boxShadow: hovered
          ? '0 20px 40px -8px rgba(30,45,90,0.16), 0 0 0 1px rgba(212,175,55,0.15)'
          : '0 2px 12px rgba(30,45,90,0.06)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
    >
      {/* Gold top accent bar */}
      <div
        style={{
          height: '3px',
          background: 'linear-gradient(90deg,transparent,#D4AF37,#F5E27A,#D4AF37,transparent)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s',
        }}
      />

      {/* Image */}
      <div className="relative w-full" style={{ height: '200px' }}>
        <ImageSlider images={images} isHovered={hovered} />

        {/* Status badge */}
        <div
          className="absolute top-3 left-3 z-30 px-2.5 py-0.5 rounded-full text-white text-[11px] font-bold tracking-wide"
          style={{ background: badgeColor, boxShadow: `0 2px 8px ${badgeColor}60` }}
        >
          {badge}
        </div>
        {/* Icon + type pill */}
        <div
          className="absolute top-3 right-3 z-30 flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
        >
          <Icon size={12} strokeWidth={2} color="#D4AF37" />

          <span
            className="flex items-center justify-center leading-none"
            style={{ color: '#F5E27A' }}
          >
            {tag}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">

        {/* Title */}
        <h3
          className="text-base font-bold mb-1.5 leading-snug"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: hovered ? '#B8952E' : '#1A1A2E',
            transition: 'color 0.25s',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-[12px] leading-relaxed mb-3"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: '#555770',
          }}
        >
          {desc}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin size={12} color="#B8952E" />
          <span
            className="text-[12px] font-medium"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#B8952E' }}
          >
            {location}
          </span>
        </div>
        <div className="flex-1" />

        {/* Divider */}
        <div className="my-4" style={{ height: '1px', background: '#F0EAD6' }} />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-0.5"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#AAA' }}
            >
              Starting from
            </p>
            <p
              className="text-[15px] font-bold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: 'linear-gradient(135deg,#C9992A,#D4AF37,#A8892A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {price}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleCardClick()
            }}
            className="flex items-center gap-1.5 rounded-xl text-[12px] font-semibold px-4 py-2 transition-all duration-250"
            style={
              hovered
                ? {
                  background: 'linear-gradient(135deg,#D4AF37,#F5E27A,#D4AF37)',
                  color: '#111',
                  border: '1.5px solid transparent',
                  boxShadow: '0 4px 14px rgba(212,175,55,0.4)',
                  fontFamily: "'Poppins', sans-serif",
                }
                : {
                  background: 'transparent',
                  border: '1.5px solid #D4AF37',
                  color: '#B8952E',
                  fontFamily: "'Poppins', sans-serif",
                }
            }
          >
            View Details
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activePlotSize, setActivePlotSize] = useState('All Sizes')
  const [plotOpen, setPlotOpen] = useState(false)

  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPlotOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Filter projects by category; plot size just highlights within cards
  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tag === activeCategory)

  // Further narrow by plot size availability
  const displayed = activePlotSize === 'All Sizes'
    ? filtered
    : filtered.filter(p => p.plotSizes.includes(activePlotSize))

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF', padding: '60px 0' }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)', filter: 'blur(90px)' }}
      />
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-12">


          <h2
            className="text-4xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A2E' }}
          >
            Designed for{' '}
            <span style={{
              background: 'linear-gradient(135deg,#C9992A 0%,#D4AF37 40%,#F5E27A 60%,#A8892A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Modern Living
            </span>
          </h2>

          <p
            className="text-[14px] max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#666880' }}
          >
            Explore residential and commercial opportunities across prime Nagpur locations.
          </p>

          {/* Ornament */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg,transparent,#D4AF37)' }} />
            <div className="w-2 h-2 rounded-full animate-pulse-gold"
              style={{ background: '#D4AF37', boxShadow: '0 0 8px rgba(212,175,55,0.7)' }}
            />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
          </div>
        </div>

        {/* ── Filters Row ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map(f => {
              const isActive = activeCategory === f
              return (
                <button
                  key={f}
                  onClick={() => setActiveCategory(f)}
                  className="px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-250"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    ...(isActive
                      ? {
                        background: 'linear-gradient(135deg,#D4AF37,#F5E27A,#D4AF37)',
                        color: '#111',
                        border: '1.5px solid transparent',
                        boxShadow: '0 3px 14px rgba(212,175,55,0.35)',
                      }
                      : {
                        background: '#FAFAF7',
                        border: '1.5px solid #E0D9C5',
                        color: '#555',
                      }),
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>

          {/* Plot size dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPlotOpen(v => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-250"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: activePlotSize !== 'All Sizes' ? 'linear-gradient(135deg,#D4AF37,#F5E27A,#D4AF37)' : '#FAFAF7',
                border: activePlotSize !== 'All Sizes' ? '1.5px solid transparent' : '1.5px solid #E0D9C5',
                color: activePlotSize !== 'All Sizes' ? '#111' : '#555',
                boxShadow: activePlotSize !== 'All Sizes' ? '0 3px 14px rgba(212,175,55,0.35)' : 'none',
              }}
            >
              {activePlotSize === 'All Sizes' ? 'Plot Size' : activePlotSize}
              <ChevronDown size={14} style={{ transform: plotOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {plotOpen && (
              <div
                className="absolute right-0 mt-2 rounded-xl overflow-hidden z-50"
                style={{
                  background: '#FFF',
                  border: '1.5px solid #E0D9C5',
                  boxShadow: '0 8px 24px rgba(30,45,90,0.12)',
                  minWidth: '160px',
                  maxHeight: '250px',
                  overflowY: 'auto',
                }}
              >
                {ALL_PLOT_SIZES.map(s => (
                  <button
                    key={s}
                    onClick={() => { setActivePlotSize(s); setPlotOpen(false) }}
                    className="w-full text-left px-4 py-2.5 text-[12px] font-medium transition-colors"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      background: activePlotSize === s ? '#FBF6E9' : 'transparent',
                      color: activePlotSize === s ? '#B8952E' : '#444',
                      fontWeight: activePlotSize === s ? '700' : '500',
                      borderBottom: '1px solid #F5F0E5',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Count */}
        <p
          className="text-[11px] mb-6"
          style={{ fontFamily: "'Poppins', sans-serif", color: '#AAA' }}
        >
          {displayed.length} project{displayed.length !== 1 ? 's' : ''}
          {activePlotSize !== 'All Sizes' && ` · filtered by ${activePlotSize}`}
        </p>

        {/* ── Grid ── */}
        {displayed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((project, i) => (
              <ProjectCard
                key={project.id + i}
                project={project}
                index={i}
                activePlotSize={activePlotSize}
              />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-16 rounded-2xl"
            style={{ background: '#FAFAF7', border: '1.5px dashed #E0D9C5' }}
          >
            <p
              className="text-[14px] font-medium"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#AAA' }}
            >
              No projects match <strong style={{ color: '#B8952E' }}>{activePlotSize}</strong> in <strong style={{ color: '#B8952E' }}>{activeCategory}</strong>.
            </p>
            <button
              onClick={() => { setActivePlotSize('All Sizes'); setActiveCategory('All') }}
              className="mt-4 text-[12px] font-semibold underline"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#B8952E' }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="text-center mt-14">
          <p
            className="text-[13px] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#888' }}
          >
            Looking for something specific?
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-[13px] font-semibold transition-all duration-300 animate-pulse-gold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: 'transparent',
              border: '1.5px solid #D4AF37',
              color: '#B8952E',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg,#D4AF37,#F5E27A,#D4AF37)'
              e.currentTarget.style.color = '#111'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,175,55,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#B8952E'
              e.currentTarget.style.borderColor = '#D4AF37'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View All Projects
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  )
}