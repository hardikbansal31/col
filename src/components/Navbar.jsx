import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left section: Logo + Links */}
        <div className="flex items-center gap-10">
          {/* Brand acts as Home link */}
          <Link
            to="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 hover:opacity-80 transition"
          >
            ColorAids
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-lg">
            <li>
              <Link to="/products" className="hover:text-cyan-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0f0f0f]/95 border-t border-white/10 backdrop-blur-lg"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
