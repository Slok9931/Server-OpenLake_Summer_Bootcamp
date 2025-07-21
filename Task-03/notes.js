
const mongoose=require('mongoose');


const notes1=new mongoose.Schema({

title:String,
content:String,


},{Timestamps:true});

module.exports=mongoose.model('notes',notes1);

