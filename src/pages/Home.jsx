// src/pages/Home.jsx
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase.jsx";
import AboutSection from "../components/AboutSection";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductShowcase />
      {/* <Footer /> */}
    </div>
  );
}
