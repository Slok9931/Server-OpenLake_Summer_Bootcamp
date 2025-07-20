const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const MONGO_URL = "mongodb://localhost:27017/openlake_taskify_app";

app.use(express.json());

//connect local mongodb database
mongoose.connect(MONGO_URL).then(()=>{
    console.log("Successfully connected to MongoDB database");
})
.catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

//create schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

//create model
const User = mongoose.model('User', userSchema);

//craete routing for test database
app.post('/user', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'user saved successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'error saving user', error: err });
  }
});

app.get('/',(req,res)=>{
    res.send("In this task we are doing database setup using mongoose");
})

app.listen(PORT, ()=>{
    console.log(`server is started at PORT ${PORT}`);
});