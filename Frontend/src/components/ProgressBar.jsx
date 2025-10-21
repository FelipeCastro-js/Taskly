import { motion } from "framer-motion";

function ProgressBar({ total, completed }) {
  const progress = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
      <div className="flex justify-between mb-3">
        <h3 className="text-gray-200 font-semibold">Progress Overview</h3>
        <span className="text-accent font-bold">{progress.toFixed(0)}%</span>
      </div>
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
          className="h-full bg-linear-to-r from-green-400 to-emerald-500"
        />
      </div>
      <div className="flex justify-between text-gray-400 text-sm mt-2">
        <span>{total} Total</span>
        <span>{completed} Completed</span>
      </div>
    </div>
  );
}

export default ProgressBar;
