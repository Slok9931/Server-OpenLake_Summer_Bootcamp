
const express = require('express')
const app = express()

// Use the PORT from the .env file, fallback to 3000 if not set
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('you are on home page')
})
app.get("/about",(req,res)=>{
    res.send("you are on about page ")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
