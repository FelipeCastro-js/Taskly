import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { useEffect, useState } from "react";

function NoteForm({ onSubmit, initialDate }) {
  const [task, setTask] = useState(initialDate);

  useEffect(() => {
    setTask(initialDate);
  }, [initialDate]);

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
    <div className="flex flex-col items-center justify-center py-10">
      {/* Card animada sin fondo adicional */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-base-300 rounded-3xl max-w-3xl mx-auto p-10 shadow-[0_0_25px_rgba(0,0,0,0.35)] hover:shadow-[0_0_45px_rgba(0,0,0,0.5)] transition-all duration-500 border border-base-200"
      >
        {/* Halo animado sutil */}
        <motion.div
          className="absolute -inset-1 bg-linear-to-r from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl opacity-30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <div className="relative">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent tracking-wide flex items-center justify-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/939/939581.png"
              alt="note icon"
              className="w-8 h-8"
            />
            Create a New Note
          </h2>

          <label
            htmlFor="title"
            className="block text-sm text-gray-400 font-medium mb-2"
          >
            Note Title
          </label>
          <input
            className="block w-full mb-6 input input-bordered input-lg rounded-xl bg-base-200/90 focus:ring-2 focus:ring-primary/70 focus:outline-none placeholder-gray-500 transition-all duration-200 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            placeholder="Enter note title..."
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="description"
            className="block text-sm text-gray-400 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            className="textarea textarea-bordered textarea-lg w-full mb-8 rounded-xl bg-base-200/90 focus:ring-2 focus:ring-accent/70 focus:outline-none resize-y placeholder-gray-500 transition-all duration-200 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]"
            name="description"
            id="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Write your note here..."
            rows="4"
            required
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              backgroundColor: "hsl(var(--p))",
              color: "white",
              boxShadow: "0px 0px 25px rgba(147,51,234,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="btn btn-primary w-full lg:btn-lg rounded-xl font-semibold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Save className="w-5 h-5" />
            Save Note
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}

export default NoteForm;
