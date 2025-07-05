
const express = require('express');

const app = express();
const Port = 3005;
const aboutRouter = require('./routes/aboutRoute')

app.use(aboutRouter);

app.listen(Port,()=>{
  console.log(`Server is running on port ${Port}`);
}
)