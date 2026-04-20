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

function HomeContent() {
  return (
    <>
      <Hero />
      <About />
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
      <div className="font-sans text-[#1A1A1A] bg-white">
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