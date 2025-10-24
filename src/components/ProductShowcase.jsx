import { motion } from "framer-motion";

const products = [
  {
    name: "Acrylic Colors",
    color: "from-pink-500 to-orange-400",
    shadow: "0px 0px 20px rgba(244,114,182,0.3)",
    image: "", // add actual paths later
  },
  {
    name: "Wood Coatings",
    color: "from-blue-500 to-cyan-400",
    shadow: "0px 0px 20px rgba(96,165,250,0.3)",
    image: "",
  },
  {
    name: "Industrial Paints",
    color: "from-green-400 to-lime-500",
    shadow: "0px 0px 20px rgba(74,222,128,0.3)",
    image: "",
  },
  // {
  //   name: "Decorative Shades",
  //   color: "from-purple-500 to-pink-500",
  //   shadow: "0px 0px 20px rgba(192,132,252,0.3)",
  //   image: "",
  // },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="px-4 py-16 bg-[#0f0f0f] text-white">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          Products
        </span>
      </h2>

      {/* Changed to a flex container for responsive centering */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.03,
              boxShadow: p.shadow,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            // Made card width responsive and larger
            className="w-full max-w-xs bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20"
          >
            {/* Image Area */}
            <div className="w-full aspect-[16/9] overflow-hidden bg-[#111] flex items-center justify-center">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-r ${p.color} opacity-30`}
                />
              )}
            </div>

            {/* Product Name */}
            <div className="p-4 flex items-center justify-center text-center">
              <h3 className="text-base font-medium tracking-wide hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-400 transition">
                {p.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
