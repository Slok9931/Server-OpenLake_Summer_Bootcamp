const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    res.send("Home page");
})

app.get('/about', (req,res)=>{
    res.send("About page");
})

app.listen(PORT, ()=>{
    console.log(`server is started at port ${PORT}`);
})