import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Play, ArrowLeft } from 'lucide-react'
import {
  Lock, Droplet, Dumbbell, Leaf, ToyBrick, Building2,
  Footprints, Zap, BatteryCharging, ArrowUpDown, Car, Wifi
} from 'lucide-react'

const AMENITIES_DATA = {
  'security-cctv': {
    icon: Lock,
    title: '24/7 Security & CCTV',
    description: 'Your safety is our top priority. Our comprehensive security system includes round-the-clock surveillance with state-of-the-art CCTV cameras covering all entry points, common areas, and parking zones. Our trained security personnel ensure a safe and secure environment for you and your family.',
    features: [
      'HD CCTV cameras with night vision',
      'Trained security personnel 24/7',
      'Biometric access control',
      'Visitor management system',
      'Emergency response team',
      'Perimeter security fencing'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'swimming-pool': {
    icon: Droplet,
    title: 'Swimming Pool',
    description: 'Dive into luxury with our temperature-controlled swimming pool featuring premium finishing and modern amenities. Perfect for fitness enthusiasts and families alike, our pool area offers a refreshing escape within your residential complex.',
    features: [
      'Temperature-controlled water',
      'Separate kids pool',
      'Pool deck with loungers',
      'Changing rooms & showers',
      'Professional lifeguard on duty',
      'Pool maintenance & cleaning'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'gymnasium': {
    icon: Dumbbell,
    title: 'Modern Gymnasium',
    description: 'Stay fit and healthy with our fully equipped modern gymnasium featuring the latest fitness equipment from premium brands. Our spacious gym provides everything you need for a complete workout experience.',
    features: [
      'Latest cardio equipment',
      'Free weights & strength training',
      'Functional training area',
      'Professional trainers available',
      'Air-conditioned environment',
      'Separate areas for men & women'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'landscaped-gardens': {
    icon: Leaf,
    title: 'Landscaped Gardens',
    description: 'Experience tranquility in our beautifully designed landscaped gardens featuring lush greenery, walking paths, and serene seating areas. Perfect for morning walks, evening strolls, or simply unwinding amidst nature.',
    features: [
      'Professionally designed landscapes',
      'Native & exotic plants',
      'Walking pathways',
      'Seating gazebos',
      'Water features & fountains',
      'Regular maintenance'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'play-area': {
    icon: ToyBrick,
    title: "Children's Play Area",
    description: 'Let your children explore, play, and grow in our safe and fun play zones designed specifically for kids. Featuring modern play equipment and soft flooring for maximum safety.',
    features: [
      'Age-appropriate equipment',
      'Soft rubber flooring',
      'Shaded play zones',
      'Sand pit & swings',
      'Climbing structures',
      'Parent seating area'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1587845750216-13825c3c6b09?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'clubhouse': {
    icon: Building2,
    title: 'Clubhouse & Community Hall',
    description: 'Host events, celebrate occasions, or socialize with neighbors in our premium clubhouse and community hall. Equipped with modern amenities for all your social and recreational needs.',
    features: [
      'Spacious banquet hall',
      'Indoor games room',
      'Library & reading area',
      'Multipurpose hall',
      'Catering facilities',
      'Audio-visual equipment'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'jogging-track': {
    icon: Footprints,
    title: 'Jogging Track',
    description: 'Maintain your fitness routine with our dedicated jogging and fitness track within the complex. Perfect for morning runs, evening walks, or outdoor exercise.',
    features: [
      'Rubberized track surface',
      'Proper distance markers',
      'Outdoor fitness equipment',
      'Landscaped surroundings',
      'Well-lit pathways',
      'Hydration stations'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'ev-charging': {
    icon: Zap,
    title: 'EV Charging Stations',
    description: 'Future-ready infrastructure with dedicated EV charging points in the parking area. Support your sustainable lifestyle with convenient electric vehicle charging facilities.',
    features: [
      'Fast charging stations',
      'Multiple charging points',
      'Smart payment system',
      'Weather-protected setup',
      'Universal compatibility',
      '24/7 availability'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1609976765961-b7e7e0085a0b?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'power-backup': {
    icon: BatteryCharging,
    title: 'Power Backup',
    description: 'Never worry about power outages with our 100% power backup for all common areas and lifts. Ensuring uninterrupted comfort and convenience.',
    features: [
      '100% backup for common areas',
      'Lift power backup',
      'Automatic changeover',
      'Regular maintenance',
      'Emergency lighting',
      'Generator backup'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'elevators': {
    icon: ArrowUpDown,
    title: 'High-Speed Elevators',
    description: 'Premium branded high-speed elevators ensure smooth and efficient vertical mobility. Designed for comfort, safety, and reliability.',
    features: [
      'Premium branded elevators',
      'High-speed operation',
      'Emergency backup',
      'CCTV surveillance',
      'Regular maintenance',
      'Adequate capacity'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'parking': {
    icon: Car,
    title: 'Covered Parking',
    description: 'Dedicated covered parking spaces for residents and visitors. Secure, well-lit, and easily accessible parking facilities.',
    features: [
      'Covered parking spaces',
      'Visitor parking',
      'CCTV surveillance',
      'Well-lit areas',
      'Easy access',
      'Numbered parking slots'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1520967824495-b529aeba26df?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  'internet': {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Fibre-ready infrastructure for seamless connectivity. Stay connected with high-speed internet infrastructure throughout the complex.',
    features: [
      'Fibre-ready infrastructure',
      'High-speed connectivity',
      'Multiple ISP options',
      'Common area WiFi',
      'Smart home ready',
      'Future-proof technology'
    ],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=1200' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1200' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  }
}

export default function AmenityDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  const amenity = AMENITIES_DATA[id]

  if (!amenity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Amenity not found</h2>
          <button onClick={() => navigate('/')} className="text-[#D4AF37] hover:underline">
            Go back to home
          </button>
        </div>
      </div>
    )
  }

  const Icon = amenity.icon

  const handlePrevMedia = () => {
    setCurrentMediaIndex(prev => (prev - 1 + amenity.gallery.length) % amenity.gallery.length)
  }

  const handleNextMedia = () => {
    setCurrentMediaIndex(prev => (prev + 1) % amenity.gallery.length)
  }
  console.log("URL ID:", id)
  console.log("Available Keys:", Object.keys(AMENITIES_DATA))
  console.log("Matched Data:", AMENITIES_DATA[id])
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </motion.button>

          <div className="flex items-start gap-6">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.3 }}
            >
              <Icon className="h-10 w-10 text-[#D4AF37]" />
            </motion.div>

            <div className="flex-1">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {amenity.title}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300 max-w-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {amenity.description}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-[#1A1A1A] mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenity.features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white border border-[#D4AF37]/20 rounded-xl p-4 flex items-start gap-3 hover:border-[#D4AF37]/50 hover:shadow-lg transition-all"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                </div>
                <p className="text-[#1A1A1A] text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-[#1A1A1A] mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {amenity.gallery.map((media, i) => (
              <motion.div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  setCurrentMediaIndex(i)
                  setSelectedMedia(media)
                }}
                whileHover={{ scale: 1.05 }}
              >
                {media.type === 'video' ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center">
                    <Play className="h-16 w-16 text-[#D4AF37]" />
                  </div>
                ) : (
                  <img
                    src={media.url}
                    alt={`${amenity.title} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">
                    {media.type === 'video' ? 'Play Video' : 'View Image'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrevMedia(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNextMedia(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <motion.div
            className="max-w-5xl w-full"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {amenity.gallery[currentMediaIndex].type === 'video' ? (
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={amenity.gallery[currentMediaIndex].url}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <motion.img
                key={currentMediaIndex}
                src={amenity.gallery[currentMediaIndex].url}
                alt={amenity.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
