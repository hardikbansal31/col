import { motion } from "framer-motion";

// A reusable, minimal SVG of a lotus flower
const LotusFlower = ({ color }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Top Petal */}
    <path d="M50 0 L40 30 C40 30 20 40 50 60 C80 40 60 30 60 30 L50 0 Z" />
    {/* Middle Petal Layer */}
    <path
      d="M50 65 C20 75 20 100 20 100 L80 100 C80 100 80 75 50 65 Z"
      opacity="0.8"
    />
    {/* Bottom Petal Layer */}
    <path
      d="M20 100 C25 80 40 70 50 65 C60 70 75 80 80 100 L20 100 Z"
      opacity="0.6"
    />
  </svg>
);

// Configuration for each animated lotus
const lotuses = [
  {
    color: "#EC4899", // Pink
    size: 250,
    initial: { x: "-10vw", y: "80vh", rotate: -45 },
    animate: { x: "110vw", y: "10vh" },
    transition: { duration: 30, delay: 0 },
  },
  {
    color: "#06B6D4", // Cyan
    size: 300,
    initial: { x: "110vw", y: "70vh", rotate: 25 },
    animate: { x: "-10vw", y: "20vh" },
    transition: { duration: 35, delay: 7 },
  },
  {
    color: "#A78BFA", // Violet
    size: 280,
    initial: { x: "40vw", y: "110vh", rotate: 60 },
    animate: { x: "70vw", y: "-10vh" },
    transition: { duration: 40, delay: 15 },
  },
  {
    color: "#F97316", // Orange
    size: 220,
    initial: { x: "100vw", y: "0vh", rotate: -15 },
    animate: { x: "-20vw", y: "90vh" },
    transition: { duration: 28, delay: 20 },
  },
];

export default function BackgroundLotuses() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {lotuses.map((lotus, i) => (
        <motion.div
          key={i}
          className="absolute mix-blend-lighten opacity-30"
          style={{
            width: lotus.size,
            height: lotus.size,
          }}
          initial={lotus.initial}
          animate={lotus.animate}
          transition={{
            ...lotus.transition,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* This inner div adds a gentle wobble animation */}
          <motion.div
            className="w-full h-full"
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <LotusFlower color={lotus.color} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
