
const express = require('express');
const {default:mongoose} = require('mongoose');

const app = express();
const Port = 3003;
const aboutRouter = require('./routes/aboutRoute')
const mongo_url = "mongodb://localhost/3003"

app.use(aboutRouter);


mongoose.connect(mongo_url).then(()=> {
  console.log("mongodb is connected");
app.listen(Port,()=>{
  console.log(`Server is running on port ${Port}`);
}
)
}).catch(error => {
  console.log("mongodb is not connected",error);
})
