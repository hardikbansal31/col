import { motion } from "framer-motion";

const people = [
  {
    name: "Mr. R.S. Gupta",
    image: "", 
  },
  {
    name: "Mr. Manish Gupta",
    image: "",
  },
];

export default function KeyPeople() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#0f0f0f] text-white relative">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Key{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          People
        </span>
      </h2>

      {/* Centered Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {people.map((person, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,255,255,0.1)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
            className="w-56 sm:w-64 h-80 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md cursor-pointer border border-white/10 flex flex-col items-center justify-start"
          >
            {/* Image Container */}
            <div className="w-full aspect-square overflow-hidden bg-[#111] flex items-center justify-center">
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 opacity-30" />
              )}
            </div>

            {/* Name */}
            <div className="p-3 flex-1 flex items-center justify-center">
              <h3 className="text-lg font-semibold text-center">
                {person.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
