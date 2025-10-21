import { Route, Routes } from "react-router-dom";
import CreateNotePage from "./pages/CreateNotePage";
import EditNotePage from "./pages/EditNotePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-3.5">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createNote" element={<CreateNotePage />} />
        <Route path="/editNote/:id" element={<EditNotePage />} />
      </Routes>
    </div>
  );
}

export default App;
