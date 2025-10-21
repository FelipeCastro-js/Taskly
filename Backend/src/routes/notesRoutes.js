import express from "express";
import Note from "../models/noteModel.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error al obtener las notas", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);

    if (!note) return res.status(404).json({ message: "Nota no encontrada" });

    res.status(200).json(note);
  } catch (error) {
    console.error("Error al obtener nota por id ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = new Note({ title, description });

    // Save note database
    const savedNote = await note.save();
    if (savedNote) {
      res
        .status(201)
        .json({ message: "Nota creada correctamente", note: savedNote });
    }
  } catch (error) {
    console.log("Error al crear la nota", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findByIdAndDelete(id);
    if (!note)
      return res
        .status(404)
        .json({ message: "No se encontro la nota que desea eliminar" });
    res.status(200).json({ message: "Nota exitosamente eliminada" });
  } catch (error) {
    console.log("Error al crear la nota", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// UPDATE

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updateNote)
      return res
        .status(404)
        .json({ message: "No se pudo actualizar correctamente" });
    res
      .status(200)
      .json({ message: "Nota actualizada con exito", note: updateNote });
  } catch (error) {
    console.log("Error al actualizar", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
