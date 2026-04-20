import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Lock, Droplet, Dumbbell, Leaf, ToyBrick, Building2,
  Footprints, Zap, BatteryCharging, ArrowUpDown, Car, Wifi, ArrowRight
} from 'lucide-react'

const AMENITIES = [
  { id: 'security-cctv', icon: Lock, title: '24/7 Security & CCTV', desc: 'Round-the-clock surveillance and trained security personnel.', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800' },
  { id: 'swimming-pool', icon: Droplet, title: 'Swimming Pool', desc: 'Temperature-controlled pool with premium finishing.', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800' },
  { id: 'gymnasium', icon: Dumbbell, title: 'Modern Gymnasium', desc: 'Fully equipped gym with latest fitness equipment.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800' },
  { id: 'landscaped-gardens', icon: Leaf, title: 'Landscaped Gardens', desc: 'Beautifully designed green spaces and open areas.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800' },
  { id: 'play-area', icon: ToyBrick, title: "Children's Play Area", desc: 'Safe and fun play zones designed for kids.', image: 'https://images.unsplash.com/photo-1587845750216-13825c3c6b09?w=800' },
  { id: 'clubhouse', icon: Building2, title: 'Clubhouse & Community Hall', desc: 'Premium clubhouse for events and social gatherings.', image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800' },
  { id: 'jogging-track', icon: Footprints, title: 'Jogging Track', desc: 'Dedicated jogging and fitness track within the complex.', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800' },
  { id: 'ev-charging', icon: Zap, title: 'EV Charging Stations', desc: 'Future-ready EV charging points in the parking area.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800' },
  { id: 'power-backup', icon: BatteryCharging, title: 'Power Backup', desc: '100% power backup for all common areas and lifts.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800' },
  { id: 'elevators', icon: ArrowUpDown, title: 'High-Speed Elevators', desc: 'Premium branded elevators for smooth vertical mobility.', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800' },
  { id: 'parking', icon: Car, title: 'Covered Parking', desc: 'Dedicated covered parking for residents and visitors.', image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800' },
  { id: 'internet', icon: Wifi, title: 'High-Speed Internet', desc: 'Fibre-ready infrastructure for seamless connectivity.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800' },
]

export default function AmenitiesPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white py-24 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
      
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            World-Class <span className="text-[#D4AF37]">Amenities</span>
          </motion.h1>

          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Every detail is thoughtfully designed to elevate your lifestyle and deliver a truly premium living experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Amenities Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((amenity, i) => {
              const Icon = amenity.icon
              return (
                <motion.div
                  key={amenity.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => navigate(`/amenity/${amenity.id}`)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                    <motion.img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon */}
                    <motion.div 
                      className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>

                    {/* View Details Button */}
                    <motion.div 
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    
    </div>
  )
}
