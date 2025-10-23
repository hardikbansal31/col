import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold mb-6"
      >
        Crafted with Passion & Precision
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400 leading-relaxed"
      >
        At ColorAids, we believe color is more than just visual — it's an
        experience. We combine innovation, technology, and design to deliver
        shades that inspire creativity and durability.
      </motion.p>
    </section>
  );
}
