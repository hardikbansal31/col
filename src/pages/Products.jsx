import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundBlobs from "../components/BackgroundBlobs";

const productCategories = [
  {
    title: "Phthalocyanine Pigments",
    description:
      "High-quality phthalocyanine pigments for vibrant and durable color solutions in your products.",
    color: "from-green-400 to-lime-500",
  },
  {
    title: "Azo Pigments",
    description:
      "Our azo pigments offer excellent lightfastness and are suitable for diverse industrial applications.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Solvent & Polymer Soluble Dyes",
    description:
      "Explore our range of solvent-soluble and polymer-soluble dyes for versatile coloring solutions.",
    color: "from-pink-500 to-orange-400",
  },
  {
    title: "Coated Calcium & Carbon Blacks",
    description:
      "Coated calcium (5 and 8 micron) and carbon blacks for your specific industrial formulations.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Products() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0f0f0f]">
      {/* animated blobs */}
      <div className="absolute inset-0 z-0">
        <BackgroundBlobs />
      </div>

      {/* content layer */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((pc, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -3 }}
                className={`rounded-2xl bg-gradient-to-br ${pc.color} p-[2px]`}
              >
                <div className="bg-[#0f0f0f] rounded-2xl p-6 h-full flex flex-col justify-between">
                  <h2 className="text-2xl font-semibold mb-4">{pc.title}</h2>
                  <p className="text-gray-400">{pc.description}</p>
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
