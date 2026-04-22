
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Award, Users, TrendingUp, Target, Compass, Gem,
  Lightbulb, Eye, Shield, ArrowRight, MapPin
} from "lucide-react";
import Image from "../assets/founderimage.jpeg";
/* ─── Reusable fade-up wrapper ─────────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Animated counter hook ─────────────────────────────────────────────── */
const useCounter = (rawValue, inView, duration = 1800) => {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const match = String(rawValue).match(/^(\d+\.?\d*)(.*)$/);
    if (!match) { setDisplay(rawValue); return; }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(`${target % 1 === 0 ? Math.floor(target) : target}${suffix}`);
    };
    requestAnimationFrame(step);
  }, [inView, rawValue, duration]);
  return display;
};

const StatCard = ({ icon: Icon, value, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 120 }}
      whileHover={{ y: -6,  }}
      className="relative group flex flex-col items-center justify-center p-8 rounded-3xl overflow-hidden cursor-default"
    >
      {/* hover shimmer bg */}
      <motion.div className="absolute inset-0 bg-gradient-to-br  duration-500" />

      {/* icon wrapper — spins 360° on hover */}
      <div className="relative w-14 h-14 mb-5">
        {/* outer gold ring that rotates continuously on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-[#C9A84C]/40"
          variants={{ rest: { rotate: 0 }, hover: { rotate: 360 } }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          initial="rest"
          whileHover="hover"
        />
        {/* icon box */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-[#C9A84C] flex items-center justify-center group-hover:bg-[#B8962E] transition-colors duration-300"
          variants={{ rest: { rotate: 0 }, hover: { rotate: 360 } }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          initial="rest"
          whileHover="hover"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* animated counter */}
      <span
        className="text-5xl font-black tracking-tight text-[#1a1208] mb-1 tabular-nums"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {count}
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-[#B8962E]/80 font-medium">{label}</span>
    </motion.div>
  );
};

/* ─── Principle card ────────────────────────────────────────────────────── */
const PrincipleCard = ({ icon: Icon, title, text, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ x: 6 }}
      className="flex gap-6 group"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-12 h-12 rounded-xl border border-[#C9A84C]/35 bg-[#C9A84C]/8 flex items-center justify-center group-hover:border-[#B8962E] group-hover:bg-[#C9A84C]/15 transition-all duration-300">
          <Icon className="w-5 h-5 text-[#B8962E]" />
        </div>
      </div>
      <div>
        <h4 className="text-[#1a1208] font-bold text-lg mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h4>
        <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

/* ─── Differentiator card ───────────────────────────────────────────────── */
const DiffCard = ({ icon: Icon, title, text, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -8 }}
      className="relative p-8 rounded-3xl border border-stone-200/80 bg-white/60 backdrop-blur-sm shadow-sm group hover:border-[#C9A84C]/50 hover:shadow-md transition-all duration-400 overflow-hidden"
    >
      <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-14 h-14 rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/8 flex items-center justify-center mb-6 group-hover:border-[#B8962E] group-hover:bg-[#C9A84C]/15 transition-all duration-300">
        <Icon className="w-6 h-6 text-[#B8962E]" />
      </div>
      <h4 className="text-[#1a1208] text-xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h4>
      <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
};

/* ─── Leadership card ───────────────────────────────────────────────────── */
const LeaderCard = ({ name, role, quote, imgSrc, delay, reverse }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
    >
      <div className="relative flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-56 h-64 rounded-3xl overflow-hidden border-2 border-[#C9A84C]/30 shadow-lg"
        >
          <img src={imgSrc} alt={name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/30 via-transparent to-transparent" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 border border-dashed border-[#C9A84C]/30 rounded-[2rem] pointer-events-none"
        />
      </div>
      <div className={`flex-1 ${reverse ? "md:text-right" : ""}`}>
        <div className="text-[#B8962E] text-5xl font-serif leading-none mb-3 opacity-40">"</div>
        <p className="text-stone-600 text-base md:text-lg leading-relaxed italic mb-5">{quote}</p>
        <h4 className="text-[#1a1208] text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{name}</h4>
        <span className="text-[#B8962E] text-xs uppercase tracking-[0.25em]">{role}</span>
      </div>
    </motion.div>
  );
};

/* ─── Main Component ────────────────────────────────────────────────────── */
const AboutUs = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stats = [
    { icon: Users, value: "15K+", label: "Satisfied Clients", delay: 0.1 },
    { icon: Award, value: "67+", label: "Completed Projects", delay: 0.2 },
    { icon: MapPin, value: "880+", label: "Acres Developed", delay: 0.3 },
    { icon: TrendingUp, value: "54+", label: "Successful Ventures", delay: 0.4 },
  ];

  const principles = [
    { icon: Target, title: "Our Vision", text: "To be a beacon of trust and innovation — setting new industry standards through transparency and ethical practices, enriching lives and creating a legacy of integrity." },
    { icon: Compass, title: "Our Mission", text: "To exceed expectations by crafting exceptional spaces that embody trust, transparency, and ethics — leveraging expertise and innovation to enhance lifestyles." },
    { icon: Gem, title: "Our Values", text: "We are committed to providing top real estate investment opportunities with creativity, professionalism, honesty, and continual improvement as our guiding pillars." },
  ];

  const differentiators = [
    { icon: Lightbulb, title: "Innovation", text: "We consistently integrate the latest technology and design trends to create modern, future-ready living spaces." },
    { icon: Eye, title: "Transparency", text: "Open communication and clear documentation ensure our clients remain informed, empowered, and confident throughout." },
    { icon: Shield, title: "Ethical Practices", text: "Integrity is a core value. We uphold ethical standards in all our dealings, ensuring fair and honest interactions." },
  ];

  const collageImages = [
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", label: "Luxury Villas" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", label: "Premium Apartments" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", label: "Gated Communities" },
    { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80", label: "Modern Interiors" },
    { src: "https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=600&q=80", label: "Smart Layouts" },
  ];

  return (
    <section
      className="min-h-screen bg-white text-[#1a1208] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        
        .gold-text {
          background: linear-gradient(135deg, #9a6e10 0%, #c9a227 35%, #B8962E 65%, #7a5510 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .grain-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }
        .divider-gold {
          width: 60px; height: 2px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
        }
      `}</style>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <div ref={heroRef} className="relative h-[92vh] min-h-[600px] overflow-hidden grain-overlay">

        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1800&q=90"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/15 blur-[120px] pointer-events-none"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="divider-gold" />
            <span className="text-[#B8962E] text-xs uppercase tracking-[0.35em] font-bold">
              Established · Trusted · Excellence
            </span>
            <div className="divider-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}
          >
            Crafting <span className="gold-text">Luxurious</span>
            <br />Living Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-stone-100 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Over two decades of building dreams, trust, and landmark communities across Nagpur's premier real estate landscape.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-[#B8962E] text-[#B8962E] font-semibold text-sm tracking-wide hover:bg-[#B8962E] hover:text-white transition-all duration-300 shadow-sm"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>


      </div>

      {/* ═══════════════════════ STATS ═══════════════════════ */}
      <div className="relative -mt-16 z-20 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </div>

      {/* ═══════════════════════ INTRO + COLLAGE ═══════════════════════ */}
      <div className="container mx-auto px-6 max-w-6xl py-28 bg-transparent">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-5">
                <div className="divider-gold" />
                <span className="text-[#B8962E] text-xs uppercase tracking-[0.3em]">Our Story</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A Legacy Built on{" "}
                <span className="gold-text">Trust &amp; Excellence</span>
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                VIP Group, a distinguished consortium, leads Nagpur's construction and development industry with over{" "}
                <strong className="text-[#1a1208]">54 successful projects</strong> and promising ventures ahead. Our legacy is built on trust, transparency, and ethics, serving over{" "}
                <strong className="text-[#1a1208]">15,000 satisfied clients</strong>.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Every home we build is a promise kept — a testament to our unwavering commitment to quality craftsmanship, innovative design, and enduring value.
              </p>
              <motion.button
                whileHover={{ x: 6 }}
                className="inline-flex items-center gap-2 text-[#B8962E] font-semibold text-sm tracking-wide group"
              >
                Explore Our Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </FadeUp>
          </div>

          {/* Image Collage */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 grid-rows-3 gap-3 h-[520px]">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
              >
                <img src={collageImages[0].src} alt={collageImages[0].label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-white text-xs font-medium tracking-wide">{collageImages[0].label}</span>
                </div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A84C] rounded-tr-sm opacity-80" />
              </motion.div>

              {[1, 2, 3, 4].map((idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
                >
                  <img src={collageImages[idx].src} alt={collageImages[idx].label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#C9A84C]/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ═══════════════════════ GUIDING PRINCIPLES ═══════════════════════ */}
      <div className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(245,242,236,0.7) 0%, rgba(255,255,255,0.5) 50%, rgba(245,242,236,0.7) 100%)" }}>
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/8 blur-[100px] pointer-events-none"
        />
        <div className="relative container mx-auto px-6 max-w-6xl">
          <FadeUp className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-[#B8962E] text-xs uppercase tracking-[0.3em]">Foundation</span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our <span className="gold-text">Guiding Principles</span>
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              Our commitment to excellence is driven by a clear vision, a focused mission, and steadfast values.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              {principles.map((p, i) => (
                <PrincipleCard key={i} {...p} delay={i * 0.15} />
              ))}
            </div>
            <FadeUp delay={0.3}>
              <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85"
                  alt="principles visual"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#C9A84C]/20" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 right-8 bg-white/70 backdrop-blur-md border border-[#C9A84C]/30 rounded-2xl px-6 py-4 shadow-md"
                >
                  <div className="text-3xl font-black gold-text" style={{ fontFamily: "'Cormorant Garamond', serif" }}>25+</div>
                  <div className="text-stone-600 text-xs uppercase tracking-wide">Years of Trust</div>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ═══════════════════════ WHAT SETS US APART ═══════════════════════ */}
      <div className="py-24 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeUp className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-[#B8962E] text-xs uppercase tracking-[0.3em]">Differentiators</span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What Sets Us <span className="gold-text">Apart</span>
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <DiffCard key={i} {...d} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════ LEADERSHIP ═══════════════════════ */}
      <div className="py-24" style={{ background: "rgba(245,242,236,0.5)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeUp className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-[#B8962E] text-xs uppercase tracking-[0.3em]">Leadership</span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Meet Our <span className="gold-text">Leadership</span>
            </h2>
          </FadeUp>
          <div className="space-y-16">
            <LeaderCard
              name="Mr. Piyush Malpani"
              role="Founder & Director"
              quote="As the Director, I focus on creating spaces that fulfill dreams while fostering trust and transparency. Our dedication to quality and innovation helps us exceed expectations every single time."
              imgSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              delay={0.1}
              reverse={false}
            />
            <LeaderCard
              name="Mr. Akshay Zade"
              role="Founder & Director"
              quote="With a track record of successful projects, I lead VIP Group with a commitment to trust and excellence. We transform spaces and offer comprehensive support to every client."
              imgSrc={Image}
              delay={0.15}
              reverse={true}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;