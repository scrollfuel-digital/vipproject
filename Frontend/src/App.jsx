import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Amenities from './components/Amenities'
import Testimonials from './components/Testimonials'
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

function HomeContent() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPage />
      <Amenities />
      <GalleryPage />
      <Testimonials />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">

        {/* Sticky Top Info Bar */}
        <div className="sticky top-0 z-50 bg-white rounded-b-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-sm">

            {/* Left Side */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-black">
                  +91 8788430110
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-black">
                  info@vviprealty.com
                </span>
              </div>

            </div>

            {/* Right Side */}
            <div className="text-[#D4AF37] font-medium">
              Limited Time Offer - Book Now!
            </div>

          </div>
          {/* Sticky Navbar */}
          <div className="sticky top-[44px] z-40">
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
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

            <Route
              path="*"
              element={
                <div className="p-10 text-center text-xl font-semibold">
                  404 Page Not Found
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}