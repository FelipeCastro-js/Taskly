import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import notesRouter from "./routes/notesRoutes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());

app.use("/api/notes", notesRouter);

const PORT = process.env.PORT || 3001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto http://localhost:${PORT}`);
  });
});
