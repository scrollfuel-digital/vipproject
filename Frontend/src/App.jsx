import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './pages/About'
import AmenitiesPage from './pages/Amenities'
import AmenityDetail from './pages/AmenityDetail'
import ProjectDetail from './pages/ProjectDetail'
import ProjectsPage from './pages/Projects'
import GalleryPage from './pages/Gallery'
import ContactPage from './pages/Contact'
import { Mail, Phone } from 'lucide-react'
// import AboutUs from './components/AboutUs'

function HomeContent() {
  return (
    <>
      <Hero />
      <About />
      {/* <AboutUs /> */}
      <Projects />
      <Amenities />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter >
      <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
        {/* Top Info Bar */}
        <div className="bg-black text-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+91 8788430110</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>info@vviprealty.com</span>
              </div>
            </div>
            <div className="text-[#D4AF37]">Limited Time Offer - Book Now!</div>
          </div>
        </div>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/amenity/:id" element={<AmenityDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<div className="p-10 text-center">404 Page Not Found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}