const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/task-03', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Error:", err));


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('todo', todoSchema);
