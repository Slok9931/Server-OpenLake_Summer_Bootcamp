const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// POST: Create a user
app.post('/users', async (req,res)=>{
  const {name,email}=req.body;

  try{
    const user= new User({name,email});
    await user.save();
    res.status(201).json({message: 'user saved successfully',user: user})
  }
  catch{
    res.status(500).json({message: 'error saving user',error:err});
  }
})


// GET: Home route
app.get('/', (req, res) => {
  res.send(" MongoDB setup using Mongoose is successful!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
