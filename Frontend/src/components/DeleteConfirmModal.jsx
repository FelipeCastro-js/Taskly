import { AnimatePresence, motion } from "framer-motion";

function DeleteConfirmModal({ isOpen, onCancel, onConfirm, noteTitle }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-md w-full p-8 text-center"
          >
            {/* Decorative gradient glow */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-red-500/20 to-pink-500/10 -z-10 blur-3xl"></div>

            {/* Header */}
            <h2 className="text-3xl font-extrabold mb-4 text-red-400">
              Delete this note?
            </h2>

            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              The note{" "}
              <span className="font-semibold text-white">“{noteTitle}”</span>{" "}
              will be permanently deleted.
              <br />
              This action{" "}
              <span className="text-red-400">cannot be undone.</span>
            </p>

            {/* Illustration */}
            <div className="mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5951/5951758.png"
                alt="Delete illustration"
                className="mx-auto w-28 h-28 drop-shadow-lg"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={onCancel}
                className="px-6 py-2 rounded-xl border border-gray-400/40 text-gray-200 hover:bg-white/10 transition-all hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-6 py-2 rounded-xl bg-linear-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DeleteConfirmModal;
