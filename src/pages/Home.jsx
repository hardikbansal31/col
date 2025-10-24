// src/pages/Home.jsx
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase.jsx";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import BackgroundBlobs from "../components/BackgroundBlobs.jsx";
import KeyPeople from "../components/KeyPeople.jsx";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0f0f0f]">
      {/* animated blobs */}
      <div className="absolute inset-0 z-0">
        <BackgroundBlobs />
      </div>

      {/* content layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ProductShowcase />
        <KeyPeople />
        <Footer />
      </div>
    </div>
  );
}
