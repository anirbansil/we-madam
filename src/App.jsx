import { Routes, Route } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollManager from "./lib/ScrollManager"
import Home from "./pages/Home"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cream-100">
        <ScrollManager />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
