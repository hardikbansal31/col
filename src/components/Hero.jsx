import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-6 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-bold mb-4"
      >
        Bring{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          Colors
        </span>{" "}
        to Life
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-400 max-w-xl mb-8"
      >
        Explore the spectrum of possibilities with ColorAids — from vibrant
        coatings to subtle finishes, crafted for creativity.
      </motion.p>
      <motion.a
        href="#products"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-medium"
      >
        Explore Products
      </motion.a>
    </section>
  );
}
