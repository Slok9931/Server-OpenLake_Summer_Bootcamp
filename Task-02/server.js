// server.js
const express = require("express");
const app = express();
const Task2 = require("./mongo");

const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("✅ Server is working! Welcome to Task2 API");
});

app.get("/add", (req, res) => {
  res.send("✅ Server is working! Welcome to Task2 API");
});



 
app.post("/add", async (req, res) => {
  try {
    const { name } = req.body;
    const newTask = new Task2({ name });
    await newTask.save();
    res.status(201).send("✅ Data Saved");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error saving data");
  }
});



app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
