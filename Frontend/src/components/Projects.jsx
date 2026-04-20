// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import { Home, Building2, HardHat, Key, Road, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

// const LOCATIONS = [
//   { name: 'MIHAN',        desc: 'Major investment hub',      icon: Building2 },
//   { name: 'Wardha Road',  desc: 'Premium residential zone',  icon: Road },
//   { name: 'Beltarodi',    desc: 'Emerging hotspot',          icon: TrendingUp },
//   { name: 'Manish Nagar', desc: 'Well-developed locality',   icon: Home },
// ]

// const PROJECTS = [
//   { 
//     id: 'luxury-apartments',
//     icon: Home, 
//     tag: 'Residential', 
//     title: 'Luxury Apartments', 
//     desc: '2BHK & 3BHK luxury apartments with modern layouts, spacious design, and premium finishing.', 
//     price: '₹45L onwards', 
//     badge: 'Ongoing', 
//     badgeColor: '#10B981',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '1200-1800 sq.ft',
//     location: 'MIHAN, Nagpur'
//   },
//   { 
//     id: 'commercial-spaces',
//     icon: Building2, 
//     tag: 'Commercial', 
//     title: 'Commercial Spaces', 
//     desc: 'Shops and office spaces in prime locations for business growth and maximum visibility.', 
//     price: 'On Request', 
//     badge: 'Available', 
//     badgeColor: '#D4AF37',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '500-2000 sq.ft',
//     location: 'Wardha Road, Nagpur'
//   },
//   { 
//     id: 'ongoing-projects',
//     icon: HardHat, 
//     tag: 'Under Construction', 
//     title: 'Ongoing Projects', 
//     desc: 'Premium 2BHK & 3BHK configurations in prime Nagpur areas. Possession by 2026.', 
//     price: '₹45L – ₹1Cr', 
//     badge: '2026', 
//     badgeColor: '#1E3A8A',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '1000-2500 sq.ft',
//     location: 'Beltarodi, Nagpur'
//   },
//   { 
//     id: 'ready-to-move',
//     icon: Key, 
//     tag: 'Ready to Move', 
//     title: 'Ready-to-Move Homes', 
//     desc: 'Move into your dream home immediately with all modern amenities and facilities.', 
//     price: '₹70L onwards', 
//     badge: 'Ready', 
//     badgeColor: '#10B981',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '1100-1600 sq.ft',
//     location: 'Manish Nagar, Nagpur'
//   },
// ]

// function ProjectCard({ project, index }) {
//   const navigate = useNavigate()
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   // Auto-slide images every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [project.images.length])

//   const nextImage = (e) => {
//     e.stopPropagation()
//     setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
//   }

//   const prevImage = (e) => {
//     e.stopPropagation()
//     setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
//   }

//   return (
//     <motion.div 
//       className="bg-white border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/55 hover:shadow-[0_4px_30px_rgba(212,175,55,0.14)] transition-all duration-300 group cursor-pointer"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -8, scale: 1.02 }}
//       onClick={() => navigate(`/project/${project.id}`)}
//     >
//       {/* Image Slider */}
//       <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-[#FFF8E7]">
//         {/* Images */}
//         <motion.div
//           key={currentImageIndex}
//           className="absolute inset-0"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FAFAFA] via-white to-[#FFF8E7]">
//             <div className="text-center">
//               <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
//                 <project.icon className="w-8 h-8 text-[#D4AF37]" />
//               </div>
//               <p className="text-xs text-[#666666]">Image {currentImageIndex + 1}</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevImage}
//           className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-10"
//         >
//           <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-10"
//         >
//           <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
//           {project.images.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={(e) => {
//                 e.stopPropagation()
//                 setCurrentImageIndex(idx)
//               }}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 idx === currentImageIndex 
//                   ? 'bg-[#D4AF37] w-6' 
//                   : 'bg-white/60 hover:bg-white/80'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Badge */}
//         <div className="absolute top-3 right-3 z-10">
//           <span 
//             className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur"
//             style={{ 
//               color: project.badgeColor, 
//               border: `1px solid ${project.badgeColor}50`, 
//               background: `${project.badgeColor}22` 
//             }}
//           >
//             {project.badge}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <p className="text-[#B8962E] text-[10px] font-bold uppercase tracking-widest mb-1.5">{project.tag}</p>
//         <h3 className="text-[#1A1A1A] font-bold text-base mb-2 group-hover:text-[#D4AF37] transition-colors">{project.title}</h3>
//         <p className="text-[#666666] text-xs leading-relaxed mb-3 line-clamp-2">{project.desc}</p>

//         {/* Info Grid */}
//         <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-[#D4AF37]/15">
//           <div>
//             <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-0.5">Plot Size</p>
//             <p className="text-xs font-bold text-[#1A1A1A]">{project.plots}</p>
//           </div>
//           <div>
//             <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-0.5">Location</p>
//             <p className="text-xs font-bold text-[#1A1A1A]">{project.location.split(',')[0]}</p>
//           </div>
//         </div>

//         {/* Price & CTA */}
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-0.5">Starting From</p>
//             <p className="text-[#D4AF37] font-bold text-base">{project.price}</p>
//           </div>
//           <button 
//             className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#D4AF37] hover:bg-[#B8962E] px-3 py-1.5 rounded-lg transition-colors"
//             onClick={(e) => {
//               e.stopPropagation()
//               navigate(`/project/${project.id}`)
//             }}
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-[#FAFAFA] py-24 px-4 relative overflow-hidden">

//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.p 
//             className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-3"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             What We Offer
//           </motion.p>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
//             Our <span className="text-gold-gradient">Projects</span>
//           </h2>
//           <motion.div 
//             className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           />
//           <motion.p 
//             className="text-[#666666] text-base max-w-xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5 }}
//           >
//             Designed for modern living — premium residential & commercial spaces across Nagpur's prime locations.
//           </motion.p>
//         </motion.div>

//         {/* Locations */}
//         <div className="mb-14">
//           <motion.p 
//             className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] text-center mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             Prime Locations
//           </motion.p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {LOCATIONS.map(({ name, desc, icon: Icon }, i) => (
//               <motion.div 
//                 key={name} 
//                 className="bg-white border border-[#D4AF37]/20 rounded-2xl p-5 text-center hover:border-[#D4AF37]/55 hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] transition-all duration-300 group"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <motion.div 
//                   className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <Icon className="h-6 w-6" />
//                 </motion.div>
//                 <h3 className="text-[#1A1A1A] font-bold text-sm mb-1 group-hover:text-[#D4AF37] transition-colors">{name}</h3>
//                 <p className="text-[#666666] text-xs">{desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {PROJECTS.map((project, i) => (
//             <ProjectCard key={project.id} project={project} index={i} />
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div 
//           className="text-center mt-14"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-[#666666] text-sm mb-5">Interested in any of our projects?</p>
//           <motion.a 
//             href="#contact" 
//             className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)]"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Schedule a Site Visit
//           </motion.a>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import { Home, Building2, HardHat, Key, Road, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

// const LOCATIONS = [
//   { name: 'MIHAN', desc: 'Major investment hub', icon: Building2 },
//   { name: 'Wardha Road', desc: 'Premium residential zone', icon: Road },
//   { name: 'Beltarodi', desc: 'Emerging hotspot', icon: TrendingUp },
//   { name: 'Manish Nagar', desc: 'Well-developed locality', icon: Home },
// ]

// const PROJECTS = [
//   {
//     id: 'luxury-apartments',
//     icon: Home,
//     tag: 'Residential',
//     title: 'Luxury Apartments',
//     desc: '2BHK & 3BHK luxury apartments with modern layouts, spacious design, and premium finishing.',
//     price: '₹45L onwards',
//     badge: 'Ongoing',
//     badgeColor: '#10B981',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '1200-1800 sq.ft',
//     location: 'MIHAN, Nagpur',
//     area: 'MIHAN',
//   },
//   {
//     id: 'commercial-spaces',
//     icon: Building2,
//     tag: 'Commercial',
//     title: 'Commercial Spaces',
//     desc: 'Shops and office spaces in prime locations for business growth and maximum visibility.',
//     price: 'On Request',
//     badge: 'Available',
//     badgeColor: '#D4AF37',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '500-2000 sq.ft',
//     location: 'Wardha Road, Nagpur',
//     area: 'Wardha Road',
//   },
//   {
//     id: 'ongoing-projects',
//     icon: HardHat,
//     tag: 'Under Construction',
//     title: 'Ongoing Projects',
//     desc: 'Premium 2BHK & 3BHK configurations in prime Nagpur areas. Possession by 2026.',
//     price: '₹45L – ₹1Cr',
//     badge: '2026',
//     badgeColor: '#1E3A8A',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '1000-2500 sq.ft',
//     location: 'Beltarodi, Nagpur',
//     area: 'Beltarodi',
//   },
//   {
//     id: 'ready-to-move',
//     icon: Key,
//     tag: 'Ready to Move',
//     title: 'Ready-to-Move Homes',
//     desc: 'Move into your dream home immediately with all modern amenities and facilities.',
//     price: '₹70L onwards',
//     badge: 'Ready',
//     badgeColor: '#10B981',
//     images: [
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//       '/api/placeholder/600/400',
//     ],
//     plots: '1100-1600 sq.ft',
//     location: 'Manish Nagar, Nagpur',
//     area: 'Manish Nagar',
//   },
// ]

// function ProjectCard({ project, index }) {
//   const navigate = useNavigate()
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [project.images.length])

//   const nextImage = (e) => {
//     e.stopPropagation()
//     setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
//   }

//   const prevImage = (e) => {
//     e.stopPropagation()
//     setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
//   }

//   return (
//     <motion.div
//       className="bg-white border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/55 hover:shadow-[0_4px_30px_rgba(212,175,55,0.14)] transition-all duration-300 group cursor-pointer"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20, scale: 0.97 }}
//       transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -8, scale: 1.02 }}
//       layout
//       onClick={() => navigate(`/project/${project.id}`)}
//     >
//       {/* Image Slider */}
//       <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-[#FFF8E7]">
//         <motion.div
//           key={currentImageIndex}
//           className="absolute inset-0"
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -60 }}
//           transition={{ duration: 0.4 }}
//         >
//           <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FAFAFA] via-white to-[#FFF8E7]">
//             <div className="text-center">
//               <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
//                 <project.icon className="w-8 h-8 text-[#D4AF37]" />
//               </div>
//               <p className="text-xs text-[#666666]">Image {currentImageIndex + 1}</p>
//             </div>
//           </div>
//         </motion.div>

//         <button
//           onClick={prevImage}
//           className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-10"
//         >
//           <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-10"
//         >
//           <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
//         </button>

//         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
//           {project.images.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx) }}
//               className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#D4AF37] w-5' : 'w-1.5 bg-white/60 hover:bg-white/80'}`}
//             />
//           ))}
//         </div>

//         <div className="absolute top-3 right-3 z-10">
//           <span
//             className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur"
//             style={{ color: project.badgeColor, border: `1px solid ${project.badgeColor}50`, background: `${project.badgeColor}22` }}
//           >
//             {project.badge}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <p className="text-[#B8962E] text-[10px] font-bold uppercase tracking-widest mb-1.5">{project.tag}</p>
//         <h3 className="text-[#1A1A1A] font-bold text-base mb-2 group-hover:text-[#D4AF37] transition-colors">{project.title}</h3>
//         <p className="text-[#666666] text-xs leading-relaxed mb-3 line-clamp-2">{project.desc}</p>

//         <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-[#D4AF37]/15">
//           <div>
//             <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-0.5">Plot Size</p>
//             <p className="text-xs font-bold text-[#1A1A1A]">{project.plots}</p>
//           </div>
//           <div>
//             <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-0.5">Location</p>
//             <p className="text-xs font-bold text-[#1A1A1A]">{project.location.split(',')[0]}</p>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-0.5">Starting From</p>
//             <p className="text-[#D4AF37] font-bold text-base">{project.price}</p>
//           </div>
//           <button
//             className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#D4AF37] hover:bg-[#B8962E] px-3 py-1.5 rounded-lg transition-colors"
//             onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`) }}
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default function Projects() {
//   const [selectedArea, setSelectedArea] = useState('All')

//   const filteredProjects = selectedArea === 'All'
//     ? PROJECTS
//     : PROJECTS.filter((p) => p.area === selectedArea)

//   return (
//     <section id="projects" className="bg-[#FAFAFA] py-24 px-4 relative overflow-hidden">

//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.p
//             className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-3"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             What We Offer
//           </motion.p>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
//             Our <span className="text-gold-gradient">Projects</span>
//           </h2>
//           <motion.div
//             className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           />
//           <motion.p
//             className="text-[#666666] text-base max-w-xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5 }}
//           >
//             Designed for modern living — premium residential & commercial spaces across Nagpur's prime locations.
//           </motion.p>
//         </motion.div>

//         {/* Locations (clickable — also acts as filter) */}
//         <div className="mb-14">
//           <motion.p
//             className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] text-center mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             Prime Locations
//           </motion.p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {LOCATIONS.map(({ name, desc, icon: Icon }, i) => {
//               const isActive = selectedArea === name
//               return (
//                 <motion.div
//                   key={name}
//                   onClick={() => setSelectedArea(isActive ? 'All' : name)}
//                   className={`border rounded-2xl p-5 text-center transition-all duration-300 group cursor-pointer select-none ${isActive
//                       ? 'bg-[#D4AF37] border-[#D4AF37] shadow-[0_4px_24px_rgba(212,175,55,0.35)]'
//                       : 'bg-white border-[#D4AF37]/20 hover:border-[#D4AF37]/55 hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)]'
//                     }`}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: i * 0.1, duration: 0.5 }}
//                   whileHover={{ y: -5, scale: 1.02 }}
//                 >
//                   <motion.div
//                     className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-[#D4AF37]/10 text-[#D4AF37]'
//                       }`}
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <Icon className="h-6 w-6" />
//                   </motion.div>
//                   <h3 className={`font-bold text-sm mb-1 transition-colors ${isActive ? 'text-white' : 'text-[#1A1A1A] group-hover:text-[#D4AF37]'}`}>
//                     {name}
//                   </h3>
//                   <p className={`text-xs transition-colors ${isActive ? 'text-white/75' : 'text-[#666666]'}`}>{desc}</p>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Filter Bar */}
//         <motion.div
//           className="flex items-center justify-between mb-6"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//         >
//           <p className="text-[#1A1A1A] text-sm font-semibold">
//             <span className="text-[#D4AF37]">{filteredProjects.length}</span>{' '}
//             {filteredProjects.length === 1 ? 'Project' : 'Projects'}{' '}
//             {selectedArea !== 'All' && <span className="text-[#666666] font-normal">in <strong className="text-[#1A1A1A]">{selectedArea}</strong></span>}
//           </p>

//           <div className="relative">
//             <select
//               value={selectedArea}
//               onChange={(e) => setSelectedArea(e.target.value)}
//               className="appearance-none bg-white border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#1A1A1A] text-sm font-medium pl-4 pr-10 py-2.5 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all shadow-sm"
//             >
//               <option value="All">All Areas</option>
//               {LOCATIONS.map(({ name }) => (
//                 <option key={name} value={name}>{name}</option>
//               ))}
//             </select>
//             {/* Chevron */}
//             <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#D4AF37]">
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//           </div>
//         </motion.div>

//         {/* Project Cards */}
//         <AnimatePresence mode="popLayout">
//           {filteredProjects.length > 0 ? (
//             <motion.div
//               key="grid"
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
//               layout
//             >
//               {filteredProjects.map((project, i) => (
//                 <ProjectCard key={project.id} project={project} index={i} />
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               key="empty"
//               className="col-span-4 text-center py-20"
//               initial={{ opacity: 0, scale: 0.97 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
//                 <Building2 className="w-8 h-8 text-[#D4AF37]/50" />
//               </div>
//               <p className="text-[#666666] text-sm mb-4">
//                 No projects found in <strong className="text-[#1A1A1A]">{selectedArea}</strong>.
//               </p>
//               <button
//                 onClick={() => setSelectedArea('All')}
//                 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#B8962E] underline underline-offset-4 transition-colors"
//               >
//                 Show All Projects
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* CTA */}
//         <motion.div
//           className="text-center mt-14"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-[#666666] text-sm mb-5">Interested in any of our projects?</p>
//           <motion.a
//             href="#contact"
//             className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)]"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Schedule a Site Visit
//           </motion.a>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Home, Building2, HardHat, Key, Road, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

const LOCATIONS = [
  { name: 'MIHAN', desc: 'Major investment hub', icon: Building2 },
  { name: 'Wardha Road', desc: 'Premium residential zone', icon: Road },
  { name: 'Beltarodi', desc: 'Emerging hotspot', icon: TrendingUp },
  { name: 'Manish Nagar', desc: 'Well-developed locality', icon: Home },
]

const PROJECTS = [
  {
    id: 'luxury-apartments',
    icon: Home,
    tag: 'Residential',
    title: 'Luxury Apartments',
    desc: '2BHK & 3BHK luxury apartments with modern layouts, spacious design, and premium finishing.',
    price: '₹45L onwards',
    badge: 'Ongoing',
    badgeColor: '#10B981',
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    plots: '1200–1800 sq.ft',
    plotSizes: ['1200 sq.ft', '1400 sq.ft', '1600 sq.ft', '1800 sq.ft'],
    location: 'MIHAN, Nagpur',
    area: 'MIHAN',
  },
  {
    id: 'commercial-spaces',
    icon: Building2,
    tag: 'Commercial',
    title: 'Commercial Spaces',
    desc: 'Shops and office spaces in prime locations for business growth and maximum visibility.',
    price: 'On Request',
    badge: 'Available',
    badgeColor: '#D4AF37',
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    plots: '500–2000 sq.ft',
    plotSizes: ['500 sq.ft', '750 sq.ft', '1000 sq.ft', '1500 sq.ft', '2000 sq.ft'],
    location: 'Wardha Road, Nagpur',
    area: 'Wardha Road',
  },
  {
    id: 'ongoing-projects',
    icon: HardHat,
    tag: 'Under Construction',
    title: 'Ongoing Projects',
    desc: 'Premium 2BHK & 3BHK configurations in prime Nagpur areas. Possession by 2026.',
    price: '₹45L – ₹1Cr',
    badge: '2026',
    badgeColor: '#1E3A8A',
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    plots: '1000–2500 sq.ft',
    plotSizes: ['1000 sq.ft', '1200 sq.ft', '1800 sq.ft', '2000 sq.ft', '2500 sq.ft'],
    location: 'Beltarodi, Nagpur',
    area: 'Beltarodi',
  },
  {
    id: 'ready-to-move',
    icon: Key,
    tag: 'Ready to Move',
    title: 'Ready-to-Move Homes',
    desc: 'Move into your dream home immediately with all modern amenities and facilities.',
    price: '₹70L onwards',
    badge: 'Ready',
    badgeColor: '#10B981',
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    plots: '1100–1600 sq.ft',
    plotSizes: ['1100 sq.ft', '1200 sq.ft', '1400 sq.ft', '1600 sq.ft'],
    location: 'Manish Nagar, Nagpur',
    area: 'Manish Nagar',
  },
]

function ProjectCard({ project, index }) {
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedPlot, setSelectedPlot] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [project.images.length])

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }
  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.div
      className="bg-white border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/55 hover:shadow-[0_4px_30px_rgba(212,175,55,0.14)] transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      layout
      onClick={() => navigate(`/project/${project.id}`)}
    >
      {/* Image Slider */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-[#FFF8E7]">
        <motion.div key={currentImageIndex} className="absolute inset-0" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.4 }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FAFAFA] via-white to-[#FFF8E7]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                <project.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <p className="text-xs text-[#666666]">Image {currentImageIndex + 1}</p>
            </div>
          </div>
        </motion.div>

        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-10">
          <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-10">
          <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.images.map((_, idx) => (
            <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx) }}
              className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#D4AF37] w-5' : 'w-1.5 bg-white/60 hover:bg-white/80'}`}
            />
          ))}
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur"
            style={{ color: project.badgeColor, border: `1px solid ${project.badgeColor}50`, background: `${project.badgeColor}22` }}>
            {project.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-[#B8962E] text-[10px] font-bold uppercase tracking-widest mb-1.5">{project.tag}</p>
        <h3 className="text-[#1A1A1A] font-bold text-base mb-2 group-hover:text-[#D4AF37] transition-colors">{project.title}</h3>
        <p className="text-[#666666] text-xs leading-relaxed mb-3 line-clamp-2">{project.desc}</p>

        {/* Info Grid: Location + Plot Size Dropdown */}
        <div className="grid grid-cols-2 gap-3 mb-3 pb-3 border-b border-[#D4AF37]/15">

          {/* Location */}
          <div>
            <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-1">Location</p>
            <p className="text-xs font-bold text-[#1A1A1A]">{project.location.split(',')[0]}</p>
          </div>

          {/* Plot Size Dropdown */}
          <div onClick={(e) => e.stopPropagation()}>
            <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-1">Plot Size</p>
            <div className="relative">
              <select
                value={selectedPlot}
                onChange={(e) => setSelectedPlot(e.target.value)}
                className="w-full appearance-none bg-[#FFFDF5] border border-[#D4AF37]/35 hover:border-[#D4AF37] text-[#1A1A1A] text-[11px] font-semibold pl-2 pr-6 py-[5px] rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40 transition-all"
              >
                <option value="">All sizes</option>
                {project.plotSizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-[#666666] uppercase tracking-widest mb-0.5">Starting From</p>
            <p className="text-[#D4AF37] font-bold text-base">{project.price}</p>
          </div>
          <button
            className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#D4AF37] hover:bg-[#B8962E] px-3 py-1.5 rounded-lg transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`) }}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedArea, setSelectedArea] = useState('All')

  const filteredProjects = selectedArea === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.area === selectedArea)

  return (
    <section id="projects" className="bg-[#FAFAFA] py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <motion.p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] mb-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            What We Offer
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            Our <span className="text-gold-gradient">Projects</span>
          </h2>
          <motion.div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} />
          <motion.p className="text-[#666666] text-base max-w-xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            Designed for modern living — premium residential & commercial spaces across Nagpur's prime locations.
          </motion.p>
        </motion.div>

        {/* Location Tiles — also act as area filter */}
        <div className="mb-14">
          <motion.p className="text-[#B8962E] text-xs font-bold uppercase tracking-[0.3em] text-center mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Prime Locations
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map(({ name, desc, icon: Icon }, i) => {
              const isActive = selectedArea === name
              return (
                <motion.div key={name} onClick={() => setSelectedArea(isActive ? 'All' : name)}
                  className={`border rounded-2xl p-5 text-center transition-all duration-300 group cursor-pointer select-none ${isActive ? 'bg-[#D4AF37] border-[#D4AF37] shadow-[0_4px_24px_rgba(212,175,55,0.35)]' : 'bg-white border-[#D4AF37]/20 hover:border-[#D4AF37]/55 hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)]'}`}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-[#D4AF37]/10 text-[#D4AF37]'}`} whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className={`font-bold text-sm mb-1 transition-colors ${isActive ? 'text-white' : 'text-[#1A1A1A] group-hover:text-[#D4AF37]'}`}>{name}</h3>
                  <p className={`text-xs transition-colors ${isActive ? 'text-white/75' : 'text-[#666666]'}`}>{desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Filter Bar */}
        <motion.div className="flex items-center justify-between mb-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <p className="text-[#1A1A1A] text-sm font-semibold">
            <span className="text-[#D4AF37]">{filteredProjects.length}</span>{' '}
            {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            {selectedArea !== 'All' && <span className="text-[#666666] font-normal"> in <strong className="text-[#1A1A1A]">{selectedArea}</strong></span>}
          </p>
          <div className="relative">
            <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}
              className="appearance-none bg-white border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#1A1A1A] text-sm font-medium pl-4 pr-10 py-2.5 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all shadow-sm"
            >
              <option value="All">All Areas</option>
              {LOCATIONS.map(({ name }) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#D4AF37]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div key="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" layout>
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div key="empty" className="text-center py-20" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#D4AF37]/50" />
              </div>
              <p className="text-[#666666] text-sm mb-4">No projects found in <strong className="text-[#1A1A1A]">{selectedArea}</strong>.</p>
              <button onClick={() => setSelectedArea('All')} className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#B8962E] underline underline-offset-4 transition-colors">
                Show All Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div className="text-center mt-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-[#666666] text-sm mb-5">Interested in any of our projects?</p>
          <motion.a href="#contact" className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Schedule a Site Visit
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}