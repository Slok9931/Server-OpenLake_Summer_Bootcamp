const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGO_URL = "mongodb://localhost:27017/openlake_taskify_app";
const PORT = 5000;

const todoRoutes = require('./Routes/todoRoutes');
const noteRoutes = require('./Routes/noteRoute')

app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/notes', noteRoutes);

//connect local mongodb database
mongoose.connect(MONGO_URL).then(()=>{
    console.log("Successfully connected to MongoDB database");
})
.catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

app.get("/", (req, res)=>{
    res.send("we are learning REST API Basics");
})

app.listen(PORT, ()=>{
    console.log(`server is started at port ${PORT}`);
})