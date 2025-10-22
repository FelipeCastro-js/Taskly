import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NoteForm from "../components/NoteForm";

function CreateNotePage() {
  const navigate = useNavigate();

  const handleCreate = async (note) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/notes`,
        note
      );

      if (response.status !== 201) {
        throw new Error("Failed to create the note");
      }

      toast.success("✅ Note created successfully!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      setTimeout(() => navigate("/"), 1000); // smooth transition
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-accent">
        Create a New Note
      </h1>
      <NoteForm
        onSubmit={handleCreate}
        initialDate={{ title: "", content: "" }}
      />
    </div>
  );
}

export default CreateNotePage;
