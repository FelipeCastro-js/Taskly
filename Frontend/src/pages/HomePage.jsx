import axios from "axios";
import { useEffect, useState } from "react";
import CardNotes from "../components/CardNotes";
import LoadingScreen from "../components/LoadingScreen";
import ProgressBar from "../components/ProgressBar";

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
            key={task._id}
            title={task.title}
            description={task.description}
            date={"Oct 22, 2025"}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
