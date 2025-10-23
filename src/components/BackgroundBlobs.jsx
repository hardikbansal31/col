import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  const blobs = [
    { color: "#60A5FA", size: 400, x: -200, y: -100, duration: 14 }, // blue
    { color: "#F472B6", size: 350, x: 250, y: -150, duration: 18 }, // pink
    { color: "#A78BFA", size: 450, x: -100, y: 200, duration: 20 }, // violet
    { color: "#34D399", size: 300, x: 200, y: 250, duration: 16 }, // green
  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen blur-[120px] opacity-60"
          style={{
            background: blob.color,
            width: blob.size,
            height: blob.size,
          }}
          animate={{
            x: [blob.x, -blob.x, blob.x],
            y: [blob.y, -blob.y, blob.y],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
