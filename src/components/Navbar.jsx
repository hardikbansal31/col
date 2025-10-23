import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0f0f0f]/80 backdrop-blur-md fixed w-full z-50 border-b border-white/10">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
        ColorAids
      </h1>
      <ul className="flex gap-8 text-lg">
        <li>
          <Link to="/" className="hover:text-pink-400 transition">
            Home
          </Link>
        </li>
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
    </nav>
  );
}
