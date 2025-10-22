import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CardNotes from "../components/CardNotes";
import LoadingScreen from "../components/LoadingScreen";
import ProgressBar from "../components/ProgressBar";
import formatData from "../utils/formatDate";

const apiUrl = import.meta.env.VITE_API_URL;

function HomePage() {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/notes`);
        setTask(response.data);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/notes/${id}`);
      if (response.status === 200) {
        setTask((prevTask) => prevTask.filter((t) => t._id !== id));

        toast.success("🗑️ Note deleted successfully!", {
          position: "bottom-right",
          autoClose: 2500,
          theme: "colored",
        });
      } else {
        throw new Error("Delete failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong deleting the note.", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const total = task.length;
  const completed = task.filter((t) => t.completed).length;

  if (loading) return <LoadingScreen />;

  return (
    <div className="space-y-8 py-10">
      <h1 className="text-4xl font-extrabold text-center text-accent">
        Taskfly
      </h1>
      <p className="text-center text-gray-400">
        Organize your life, one task at a time
      </p>

      <ProgressBar total={total} completed={completed} />

      <div className="grid md:grid-cols-2 gap-6">
        {task.map((task) => (
          <CardNotes
            id={task._id}
            title={task.title}
            description={task.description}
            date={formatData(task.createdAt)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
