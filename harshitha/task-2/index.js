const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT=3000;

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.error("Error connecting to MongoDB:", err);
    });


app.get('/',(req,res)=>{
    res.send('<h1>This is home page connected to mongoDB</h1>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page connected to mongoDB</h1>');
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
