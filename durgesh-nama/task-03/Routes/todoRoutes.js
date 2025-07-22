const express = require("express");
const router = express.Router();
const Todo = require("../Models/Todo");

// Create
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Read One
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).send("Not found");
  res.json(todo);
});

// Update
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(todo);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted successfully" });
});

module.exports = router;
