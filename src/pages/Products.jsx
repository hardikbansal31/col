import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundBlobs from "../components/BackgroundBlobs";

const productCategories = [
  {
    title: "Phthalocyanine Pigments",
    description:
      "High-quality phthalocyanine pigments for vibrant and durable color solutions.",
    color: "from-green-400 to-lime-500",
    shadow: "0px 0px 20px rgba(74,222,128,0.3)",
    image: "", // Add your image path here
  },
  {
    title: "Azo Pigments",
    description:
      "Our azo pigments offer excellent lightfastness for diverse industrial applications.",
    color: "from-blue-500 to-cyan-400",
    shadow: "0px 0px 20px rgba(96,165,250,0.3)",
    image: "", // Add your image path here
  },
  {
    title: "Solvent & Polymer Soluble Dyes",
    description:
      "A range of solvent-soluble and polymer-soluble dyes for versatile coloring.",
    color: "from-pink-500 to-orange-400",
    shadow: "0px 0px 20px rgba(244,114,182,0.3)",
    image: "", // Add your image path here
  },
  {
    title: "Coated Calcium & Carbon Blacks",
    description:
      "Coated calcium and carbon blacks for your specific industrial formulations.",
    color: "from-purple-500 to-pink-500",
    shadow: "0px 0px 20px rgba(192,132,252,0.3)",
    image: "", // Add your image path here
  },
];

// Limit slideshow to the first 3 products
const slideshowProducts = productCategories.slice(0, 3);

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideshowProducts.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideshowProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatic slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentProduct = slideshowProducts[currentIndex];

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0f0f0f]">
      {/* Animated blobs */}
      <div className="absolute inset-0 z-0">
        <BackgroundBlobs />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              Product Range
            </span>
          </motion.h1>

          {/* Hero Slideshow Section */}
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] mb-16">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {currentProduct.image ? (
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-r ${currentProduct.color} opacity-40`}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <motion.h2
                key={currentIndex + "title"} // Unique key to re-trigger animation
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold"
              >
                {currentProduct.title}
              </motion.h2>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slideshowProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Cards Grid (displays all products) */}
          <div className="flex flex-wrap justify-center gap-8">
            {productCategories.map((pc, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.03,
                  boxShadow: pc.shadow,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="w-full max-w-xs bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 flex flex-col"
              >
                {/* Image/Thumbnail Area */}
                <div className="w-full aspect-[16/9] overflow-hidden bg-[#111] flex items-center justify-center">
                  {pc.image ? (
                    <img
                      src={pc.image}
                      alt={pc.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-r ${pc.color} opacity-30`}
                    />
                  )}
                </div>

                {/* Content Area */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">{pc.title}</h3>
                  <p className="text-sm text-gray-400">{pc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
