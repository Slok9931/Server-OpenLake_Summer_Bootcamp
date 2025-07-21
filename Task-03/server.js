const express=require('express');
const app=express();
const mongoose=require('mongoose');
const notes=require('./notes');
const todo=require('./todo');


app.use( express.json());



app.post('/todo',async(req,res)=>{

const todo1= new todo(req.body);

await todo1.save();
res.json(todo1);
});


app.get( '/todo',async(req,res)=>{

    const toto1=await todo.find();
     res.json(todo1);



});



app.put('/todo/:id', async (req, res) => {
  const updated = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


app.delete('/todo/:id', async (req, res) => {
  await todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});




app.post('/note', async (req, res) => {
  const note = new notes(req.body);
  await note.save();
  res.json(note);
});
app.get('/note', async (req, res) => {
  const notes = await notes.find();

  res.json(notes);
});



app.put('/note/:id', async (req, res) => {
  const updated = await notes.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});



app.delete('/note/:id', async (req, res) => {
  await notes.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

app.get('/',async(req,res)=>{
    console.log("mongo db api is working ");
    res.send('work');
    
})


port=3000;
app.listen( port,()=>{
console.log('server is running succesfully');

});

