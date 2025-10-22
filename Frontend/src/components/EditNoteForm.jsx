import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function EditNoteForm({ onSubmit, initialData }) {
  const [task, setTask] = useState(initialData);

  useEffect(() => {
    setTask(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-linear-to-b from-base-300/90 to-base-200/80 backdrop-blur-lg rounded-2xl max-w-3xl mx-auto p-10 shadow-[0_0_25px_rgba(147,51,234,0.2)] mt-12 border border-gray-700/30"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-primary/20 via-accent/10 to-transparent rounded-2xl blur-2xl opacity-60 pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-8 text-center text-primary tracking-wide drop-shadow-sm"
      >
        ✏️ Edit Your Note
      </motion.h2>

      {/* Title input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label
          htmlFor="title"
          className="block text-sm text-gray-400 font-medium mb-2"
        >
          Note Title
        </label>
        <input
          className="block w-full mb-6 input input-bordered input-lg rounded-xl bg-base-100/70 focus:ring-2 focus:ring-primary/70 focus:outline-none placeholder-gray-400"
          placeholder="Enter note title..."
          type="text"
          id="title"
          name="title"
          value={task.title || ""}
          onChange={handleChange}
          required
        />
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label
          htmlFor="description"
          className="block text-sm text-gray-400 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          className="textarea textarea-bordered textarea-lg w-full mb-8 rounded-xl bg-base-100/70 focus:ring-2 focus:ring-accent/70 focus:outline-none resize-y placeholder-gray-400"
          name="description"
          id="description"
          value={task.description || ""}
          onChange={handleChange}
          placeholder="Write your note here..."
          rows="4"
          required
        ></textarea>
      </motion.div>

      {/* Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="btn btn-primary w-full lg:btn-lg rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-200"
      >
        💾 Save Changes
      </motion.button>
    </motion.form>
  );
}

export default EditNoteForm;
