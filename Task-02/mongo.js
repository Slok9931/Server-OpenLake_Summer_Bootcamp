// mongo.js
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/task2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ Connection Error:", err));


const task2Schema = new mongoose.Schema({
  name: String,
});


const Task2 = mongoose.model("Task2", task2Schema);


module.exports = Task2; 
