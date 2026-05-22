

import { useState } from 'react'
import {
  MapPin, Phone, Mail, MessageCircle,
  ChevronRight, Send, ArrowUpRight,
  Building2, Home, TrendingUp,
 
} from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/download.png'
 
/* ═══════════════════════════════
   DATA
═══════════════════════════════ */
const partnerLogos = [
  { name: 'Prestige Group',     abbr: 'PG', color: '#A0832A' },
  { name: 'Lodha Developers',   abbr: 'LD', color: '#B8952E' },
  { name: 'Godrej Properties',  abbr: 'GP', color: '#A0832A' },
  { name: 'Sobha Realty',       abbr: 'SR', color: '#B8952E' },
  { name: 'DLF Limited',        abbr: 'DL', color: '#A0832A' },
  { name: 'Mahindra Lifespace', abbr: 'ML', color: '#B8952E' },
  { name: 'Brigade Group',      abbr: 'BG', color: '#A0832A' },
]
 
const propertyTypes = [
  { label: 'Commercial',         sub: false, icon: Building2  },
  { label: 'Office Spaces',      sub: true  },
  { label: 'Retail Shops',       sub: true  },
  { label: 'Co-working Hubs',    sub: true  },
  { label: 'Residential',        sub: false, icon: Home       },
  { label: 'Luxury Apartments',  sub: true  },
  { label: 'Villas & Bungalows', sub: true  },
  { label: 'Condominiums',       sub: true  },
  { label: 'Plotted Layouts',    sub: true  },
  { label: 'Investment',         sub: false, icon: TrendingUp },
  { label: 'Pre-launch Deals',   sub: true  },
  { label: 'NRI Corner',         sub: true  },
]
 
const recentPosts = [
  { title: 'Top 5 Investment Hotspots in Nagpur 2025',      date: 'Jun 12, 2025', tag: 'Market'    },
  { title: "Why Civil Lines Remains Nagpur's Prime Address", date: 'May 28, 2025', tag: 'Insights'  },
  { title: 'RERA Compliance: What Every Buyer Must Know',    date: 'May 10, 2025', tag: 'Legal'     },
  { title: 'Pre-launch Offers: Maximise Your ROI Early',    date: 'Apr 22, 2025', tag: 'Investment' },
]
 
const contactItems = [
  { icon: MapPin,        label: 'Address',  value: 'Civil Lines, Nagpur, MH 440001', href: 'https://www.google.com/maps?q=Nagpur', external: true  },
  { icon: Phone,         label: 'Phone',    value: '+91 87884 30110',                 href: 'tel:+918788430110',                    external: false },
  { icon: Mail,          label: 'Email',    value: 'info@vviprealty.com',              href: 'mailto:info@vviprealty.com',           external: false },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly',           href: 'https://wa.me/918788430110',           external: true  },
]
 
 
const tagColors = {
  Market:     'bg-amber-50    text-amber-700   border border-amber-200',
  Insights:   'bg-emerald-50  text-emerald-700 border border-emerald-200',
  Legal:      'bg-red-50      text-red-600     border border-red-200',
  Investment: 'bg-blue-50     text-blue-700    border border-blue-200',
}
 

const keyframes = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes goldPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); }
    50%      { box-shadow: 0 0 0 6px rgba(201,168,76,0.12); }
  }
  @keyframes shimmerBar {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .footer-col-1 { animation: fadeSlideUp .5s ease both .05s; }
  .footer-col-2 { animation: fadeSlideUp .5s ease both .15s; }
  .footer-col-3 { animation: fadeSlideUp .5s ease both .25s; }
  .footer-col-4 { animation: fadeSlideUp .5s ease both .35s; }
  .ticker-track { animation: ticker 32s linear infinite; display:flex; width:max-content; }
  .ticker-root:hover .ticker-track { animation-play-state: paused; }
  .gold-bar {
    background: linear-gradient(90deg, transparent, #C9A84C, #F0D078, #C9A84C, transparent);
    background-size: 200% auto;
    animation: shimmerBar 3.5s linear infinite;
  }
  .contact-icon-wrap { transition: all .3s; }
  .contact-icon-wrap:hover { animation: goldPulse 1.2s ease infinite; }
`
 
 
function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-[3px] h-5 rounded-full gold-gradient-bg flex-shrink-0" />
      <h4 className="font-display text-[0.82rem] font-bold tracking-[0.12em] text-[#1a1a1a] m-0 uppercase">
        {children}
      </h4>
      <span className="flex-1 h-px bg-gradient-to-r from-[rgba(180,140,30,0.3)] to-transparent" />
    </div>
  )
}
 
function ContactRow({ icon: Icon, label, value, href, external }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-start gap-3 no-underline"
      >
        <span className="
          contact-icon-wrap
          relative flex-shrink-0 mt-0.5 w-8 h-8 rounded-xl overflow-hidden
          border border-[rgba(180,140,30,0.3)] bg-[rgba(180,140,30,0.06)]
          flex items-center justify-center
          group-hover:border-[#C9A84C] group-hover:scale-105
        ">
          <span className="absolute inset-0 gold-gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Icon size={13} className="relative z-10 text-[#A0832A] group-hover:text-[#111] transition-colors duration-300" />
        </span>
        <span className="flex flex-col">
          <span className="text-[0.54rem] uppercase tracking-[0.18em] font-bold text-[#C9A84C] font-body">
            {label}
          </span>
          <span className="text-[0.78rem] font-normal text-[#555] group-hover:text-[#A0832A] transition-colors duration-300 mt-0.5 font-body leading-snug">
            {value}
          </span>
        </span>
      </a>
    </li>
  )
}
 
function TickerStrip() {
  const doubled = [...partnerLogos, ...partnerLogos]
  return (
    <div className="ticker-root relative overflow-hidden bg-[#FAFAF8] border-b border-[rgba(180,140,30,0.12)] py-5">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-20 z-10 bg-gradient-to-r from-[#FAFAF8] to-transparent" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-20 z-10 bg-gradient-to-l from-[#FAFAF8] to-transparent" />
 
      <p className="text-center text-[0.52rem] uppercase tracking-[0.26em] text-[rgba(160,131,42,0.55)] font-body font-bold mb-4">
        Trusted Partners & Associations
      </p>
 
      <div className="ticker-track">
        {doubled.map(({ name, abbr, color }, i) => (
          <div key={`${name}-${i}`} className="flex items-center gap-4 mx-7 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{ borderColor: 'rgba(180,140,30,0.28)', background: 'rgba(180,140,30,0.06)' }}
              >
                <span className="font-display text-[0.68rem] font-bold tracking-wider" style={{ color }}>
                  {abbr}
                </span>
              </div>
              <span className="text-[0.62rem] font-body font-semibold text-[#999] whitespace-nowrap uppercase tracking-widest">
                {name}
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[rgba(180,140,30,0.28)] flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
 
/* ═══════════════════════════════
   MAIN FOOTER
═══════════════════════════════ */
export default function Footer() {
  const [email, setEmail]             = useState('')
  const [subscribed, setSubscribed]   = useState(false)
  const [hoveredPost, setHoveredPost] = useState(null)
 
  function handleSubscribe(e) {
    e.preventDefault()
    if (email.trim()) { setSubscribed(true); setEmail('') }
  }
 
  return (
    <>
      <style>{keyframes}</style>
 
      <footer className="
        relative mx-4 mt-10 overflow-hidden rounded-[24px]
        bg-white text-[#111] font-smooth
        shadow-[0_4px_32px_rgba(0,0,0,0.07),0_1px_4px_rgba(0,0,0,0.04)]
        border border-[rgba(180,140,30,0.14)]
      ">
 
        {/* subtle gold glow corners */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 opacity-[0.05] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }} aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 opacity-[0.04] rounded-full blur-[70px]"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }} aria-hidden="true" />
 
        {/* ── Gold shimmer top bar ── */}
        <div className="gold-bar h-[3px] w-full" />
 
        {/* ── Ticker ── */}
        <TickerStrip />
 
        {/* ══ 4-COLUMN GRID ══ */}
        <div className="relative z-10 mx-auto max-w-7xl px-8 pt-12 pb-10
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
 
          {/* COL 1 — Brand + Contact */}
          <div className="footer-col-1 flex flex-col gap-5">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="V.VIP Realty"
                className="h-12 object-contain"
                style={{ transform: 'scale(2)', transformOrigin: 'left center' }}
              />
            </Link>
 
            {/* Ornamental divider */}
            <div className="flex items-center gap-2 mt-5">
              <span className="w-8 h-px bg-[#C9A84C]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="w-2 h-px bg-[#C9A84C]" />
              <span className="flex-1 h-px bg-[rgba(180,140,30,0.14)]" />
            </div>
 
            <p className="font-serif text-[0.87rem] italic font-light leading-[1.9] text-[#888] border-l-2 border-[#C9A84C] pl-3.5">
              Luxury Residential & Commercial Projects in Nagpur — your trusted partner for premium homes and high-return investments.
            </p>
 
            <ul className="flex flex-col gap-3.5">
              {contactItems.map(item => <ContactRow key={item.label} {...item} />)}
            </ul>
          </div>
 
          {/* COL 2 — Property Types */}
          <div className="footer-col-2 flex flex-col">
            <SectionHeading>Property Types</SectionHeading>
            <ul className="flex flex-col">
              {propertyTypes.map(({ label, sub, icon: Icon }) => (
                <li key={label} className={sub ? '' : 'mt-2 first:mt-0'}>
                  <Link to="#" className="group flex items-center gap-2 no-underline py-[3px] transition-all duration-200">
                    {sub ? (
                      <>
                        <span className="w-4 flex-shrink-0" />
                        <span className="w-2.5 h-px bg-[rgba(180,140,30,0.3)] flex-shrink-0 group-hover:w-4 group-hover:bg-[#C9A84C] transition-all duration-200" />
                        <span className="text-[0.72rem] font-body font-normal text-[#999] group-hover:text-[#A0832A] transition-colors duration-200">
                          {label}
                        </span>
                      </>
                    ) : (
                      <>
                        {Icon && <Icon size={11} className="text-[#C9A84C] flex-shrink-0" />}
                        <span className="text-[0.78rem] font-body font-bold text-[#1a1a1a] group-hover:text-[#A0832A] transition-colors duration-200 tracking-wide">
                          {label}
                        </span>
                        <ChevronRight size={10} className="ml-auto text-[rgba(180,140,30,0.4)] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all duration-200" />
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* COL 3 — Newsletter + Social */}
          <div className="footer-col-3 flex flex-col">
            <SectionHeading>Newsletter</SectionHeading>
 
            <p className="font-body text-[0.75rem] font-normal text-[#888] leading-relaxed mb-5">
              Get exclusive pre-launch deals, market insights & luxury listings delivered to your inbox.
            </p>
 
            {subscribed ? (
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-[rgba(180,140,30,0.22)] bg-[rgba(180,140,30,0.05)]">
                <span className="relative flex-shrink-0 w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-[#C9A84C] animate-ping opacity-50" />
                  <span className="absolute inset-0 rounded-full bg-[#C9A84C]" />
                </span>
                <span className="font-body text-[0.74rem] text-[#A0832A] leading-snug">
                  You're on the list.<br />
                  <span className="text-[#aaa] text-[0.68rem]">Expect exclusive updates soon.</span>
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <div className="relative group/inp">
                  <Mail size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(180,140,30,0.45)] group-focus-within/inp:text-[#C9A84C] transition-colors duration-200" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="
                      w-full pl-9 pr-4 py-2.5 rounded-xl
                      bg-[#F8F6F0] border border-[rgba(180,140,30,0.2)]
                      text-[#111] placeholder-[#bbb]
                      text-[0.75rem] font-body font-normal
                      focus:outline-none focus:border-[#C9A84C] focus:bg-white
                      focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)]
                      transition-all duration-200
                    "
                  />
                </div>
                <button
                  type="submit"
                  className="
                    group/btn relative overflow-hidden
                    flex items-center justify-center gap-2
                    px-5 py-2.5 rounded-xl
                    gold-gradient-bg
                    text-[#111] text-[0.7rem] font-body font-bold tracking-[0.13em] uppercase
                    transition-all duration-300
                    hover:shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:scale-[1.02]
                    active:scale-[0.97]
                  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Subscribe Now
                    <Send size={11} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                </button>
              </form>
            )}
 
            {/* Follow divider */}
            <div className="flex items-center gap-3 my-6">
              <span className="flex-1 h-px bg-[rgba(180,140,30,0.14)]" />
              <span className="text-[0.52rem] uppercase tracking-[0.2em] text-[rgba(160,131,42,0.55)] font-body font-bold">Follow Us</span>
              <span className="flex-1 h-px bg-[rgba(180,140,30,0.14)]" />
            </div>
 
            
          </div>
 
          {/* COL 4 — Recent Posts */}
          <div className="footer-col-4 flex flex-col">
            <SectionHeading>Recent Posts</SectionHeading>
            <ul className="flex flex-col">
              {recentPosts.map(({ title, date, tag }, idx) => (
                <li
                  key={title}
                  onMouseEnter={() => setHoveredPost(idx)}
                  onMouseLeave={() => setHoveredPost(null)}
                  className="group relative border-b border-[rgba(180,140,30,0.1)] last:border-0 py-3.5 first:pt-0 transition-all duration-200"
                >
                  {/* Left accent */}
                  <span className={`
                    absolute left-0 top-3 bottom-3 w-[2px] rounded-full gold-gradient-bg transition-all duration-300
                    ${hoveredPost === idx ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'}
                  `} style={{ transformOrigin: 'center' }} />
 
                  <Link to="#" className="flex flex-col gap-1.5 no-underline pl-3 group-hover:pl-4 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className={`
                        text-[0.5rem] font-body font-bold uppercase tracking-[0.12em]
                        px-2 py-0.5 rounded-full
                        ${tagColors[tag] ?? 'bg-amber-50 text-amber-700 border border-amber-200'}
                      `}>
                        {tag}
                      </span>
                      <span className="text-[0.57rem] font-body text-[rgba(160,131,42,0.6)] tracking-wide">
                        {date}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-body text-[0.75rem] font-medium text-[#666] leading-snug group-hover:text-[#A0832A] transition-colors duration-200">
                        {title}
                      </span>
                      <ArrowUpRight size={12} className="flex-shrink-0 mt-0.5 text-transparent group-hover:text-[#C9A84C] transition-colors duration-200" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
 
            <Link to="#" className="
              mt-4 self-start flex items-center gap-1.5 no-underline
              text-[0.63rem] font-body font-bold uppercase tracking-[0.15em]
              text-[rgba(160,131,42,0.65)] hover:text-[#A0832A]
              border-b border-[rgba(180,140,30,0.2)] hover:border-[#C9A84C] pb-0.5
              transition-all duration-200
            ">
              View All Posts
              <ArrowUpRight size={10} />
            </Link>
          </div>
 
        </div>
 
        {/* ══ BOTTOM BAR ══ */}
        <div className="relative z-10 px-8 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(180,140,30,0.12)] bg-[#FAFAF8]">
          <p className="text-[0.63rem] tracking-wide text-[#bbb] m-0 font-body font-normal">
            © {new Date().getFullYear()} V.VIP Realty Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-1.5 items-center">
            <span className="w-1 h-1 rounded-full bg-[rgba(180,140,30,0.22)]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="w-1 h-1 rounded-full bg-[rgba(180,140,30,0.22)]" />
          </div>
          <span className="font-serif text-[0.73rem] italic tracking-widest gold-text">
            Where Luxury Meets Legacy
          </span>
        </div>
 
      </footer>
    </>
  )
}