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
    <form
      onSubmit={handleSubmit}
      className="bg-base-300 rounded-2xl max-w-3xl mx-auto p-10 shadow-lg mt-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-base-content">
        📝 Create a New Note
      </h2>

      <input
        className="block w-full mb-6 input input-bordered input-lg rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
        placeholder="Note title"
        type="text"
        id="title"
        name="title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <textarea
        className="textarea textarea-bordered textarea-lg resize-y w-full mb-8 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
        name="description"
        id="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Write your note here..."
        rows="4"
        required
      ></textarea>

      <button
        type="submit"
        className="btn btn-primary w-full lg:btn-lg rounded-xl shadow-md hover:scale-105 transition-all"
      >
        Save Note
      </button>
    </form>
  );
}

export default NoteForm;
