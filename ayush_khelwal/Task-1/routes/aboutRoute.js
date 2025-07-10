
const express = require('express');

const aboutRouter = express.Router();

aboutRouter.get('/',(req,res,next)=>{
  res.send('This is the about page');
})

module.exports = aboutRouter;