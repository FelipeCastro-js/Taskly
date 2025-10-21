import express from "express";

const router = express.Router();

// GET
router.get("/", () => {
  console.log("Enviando una nota");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Id de la nota ${id}`);
});

// POST
router.post("/", (req, res) => {
  const { title, description } = req.body;
  console.log(title, description);
});

// DELETE

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log("Eliminar la nota");
});

// UPDATE

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const editData = req.body;

  console.log(editData);
});

export default router;
