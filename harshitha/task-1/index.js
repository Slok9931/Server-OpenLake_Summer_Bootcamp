const express = require('express');
const app = express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.send('welcome to main page');
});
app.get('/about',(req,res)=>{
    res.send('welcome to about page');
});
app.listen(PORT,()=>{
    console.log(`server is running successfully on http://localhost:${PORT}`);
});