import axios from "axios";
import { toast } from "react-toastify";
import NoteForm from "../components/NoteForm";

function CreateNotePage() {
  const handleCreate = async (note) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/api/notes`, note)
        .then((res) => {
          if (res.status !== 201) {
            throw new Error("Error create new note");
          }
          toast.success("Note create with exit!", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "colored",
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NoteForm
        onSubmit={handleCreate}
        initialDate={{ title: "", content: "" }}
      />
    </div>
  );
}

export default CreateNotePage;
