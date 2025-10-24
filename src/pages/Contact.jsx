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
          className="text-4xl font-bold text-center mb-12"
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            Us
          </span>
        </motion.h1>

        {/* Contact Details Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-300 space-y-3"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Get In Touch
          </h3>
          <p>
            <strong>Phone:</strong> 011-41040972 | 011-42804057 | +91-9810821232
          </p>
          <p>
            <strong>Email:</strong> coloraids@gmail.com | coloraids@yahoo.com
          </p>
          <p>
            <strong>Address:</strong> 677, GH-5 & 7, Paschim Vihar, New Delhi,
            110087
          </p>
        </motion.div>

        {/* Google Maps Iframe Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.579647247494!2d77.0883653753738!3d28.6723249756417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c5631118ed%3A0x83e3952864698882!2sCOLORAIDS!5e0!3m2!1sen!2sin!4v1729754165682!5m2!1sen!2sin"
            className="w-full h-96 rounded-lg border-2 border-white/10"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Coloraids Location"
          ></iframe>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
