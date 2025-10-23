import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            Us
          </span>
        </motion.h1>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full rounded-md bg-[#1a1a1a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full rounded-md bg-[#1a1a1a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Provide your email address"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              className="w-full rounded-md bg-[#1a1a1a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Type your message here"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-medium hover:scale-105 transition"
          >
            Submit Inquiry
          </button>
        </motion.form>

        <div className="mt-12 text-gray-400">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p>Phone: 011-41040972 | 011-42804057 | +91-9810821232</p>{" "}
          
          <p>Address: 677, GH-5 & 7, Paschim Vihar, New Delhi, 110087</p>{" "}
          <p>Email: coloraids@gmail.com | coloraids@yahoo.com</p>{" "}
        </div>
      </section>
      <Footer />
    </div>
  );
}
