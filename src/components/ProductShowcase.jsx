import { motion } from "framer-motion";

const products = [
  { name: "Acrylic Colors", color: "from-pink-500 to-orange-400" },
  { name: "Wood Coatings", color: "from-blue-500 to-cyan-400" },
  { name: "Industrial Paints", color: "from-green-400 to-lime-500" },
  { name: "Decorative Shades", color: "from-purple-500 to-pink-500" },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="px-6 py-20 bg-[#0f0f0f]">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          Products
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`rounded-2xl bg-gradient-to-br ${p.color} p-[2px]`}
          >
            <div className="bg-[#0f0f0f] rounded-2xl p-6 h-full flex items-center justify-center text-lg font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-400 transition">
              {p.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
