const express = require("express");
const router = express.Router();
const Note = require("../Models/Note");

// Create
router.post("/", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Read One
router.get("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).send("Not found");
  res.json(note);
});

// Update
router.put("/:id", async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(note);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted successfully" });
});

module.exports = router;
