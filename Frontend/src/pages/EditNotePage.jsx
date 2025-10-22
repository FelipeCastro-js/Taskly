import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EditNoteForm from "../components/EditNoteForm";

function EditNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/notes/${id}`
        );
        setNote(response.data);
      } catch (error) {
        console.error(error);
        toast.error("❌ Failed to load the note.", { theme: "colored" });
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async (updatedNote) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/notes/${id}`,
        updatedNote
      );

      if (response.status !== 200) {
        throw new Error("Failed to update the note");
      }

      toast.success("✅ Note updated successfully!", {
        position: "bottom-right",
        autoClose: 2500,
        theme: "colored",
      });

      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-accent text-xl font-semibold">
        Loading note...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <EditNoteForm onSubmit={handleUpdate} initialData={note} />
    </div>
  );
}

export default EditNotePage;
