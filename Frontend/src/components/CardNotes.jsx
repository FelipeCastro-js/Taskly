import { motion } from "framer-motion";
import { SquarePen, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CardNotes({ id, title, description, date }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editNote/${id}`);
  };

  const handleDelete = () => {
    console.log("Delete note with id: ", id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-700 p-6"
    >
      <h2 className="text-2xl font-bold text-accent mb-3">{title}</h2>
      <p className="text-gray-300 mb-5">{description}</p>

      <div className="flex justify-between items-center text-sm text-gray-400">
        <time>{date}</time>
        <div className="flex gap-4">
          <SquarePen
            onClick={handleEdit}
            className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
          />
          <Trash
            onClick={handleDelete}
            className="text-red-400 hover:text-red-300 cursor-pointer transition-colors"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default CardNotes;
