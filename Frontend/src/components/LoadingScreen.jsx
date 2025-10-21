import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated ring */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="relative w-28 h-28 mb-10"
      >
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-b-accent"></div>
        <div className="absolute inset-4 rounded-full bg-gray-800 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-xl font-bold text-accent tracking-widest"
          >
            TF
          </motion.span>
        </div>
      </motion.div>

      {/* App name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold tracking-tight mb-4"
      >
        Taskfly
      </motion.h1>

      {/* Animated gradient line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "6rem" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-[2px] bg-linear-to-r from-accent to-purple-500 rounded-full mb-6"
      />

      {/* Animated text dots */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="text-gray-400 text-sm tracking-wide"
      >
        Loading your workspace...
      </motion.p>

      {/* Soft fade-in background or particles (optional aesthetic touch) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
      </motion.div>
    </div>
  );
}
