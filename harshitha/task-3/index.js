const express=require('express');
const mongoose=require('mongoose');

const app=express();
const PORT= 3000;

const TODO_DB_URI='mongodb://localhost:27017/todoDB';
const NOTE_DB_URI='mongodb://localhost:27017/noteDB';

const TodoConnection= mongoose.createConnection(TODO_DB_URI);
const NoteConnection= mongoose.createConnection(NOTE_DB_URI);

const todoSchema = require('./models/todoModel');
const noteSchema = require('./models/noteModel');

const Todo=TodoConnection.model('Todo',todoSchema);
const Note=NoteConnection.model('Note',noteSchema);

app.use(express.json());

Promise.all([
    TodoConnection.asPromise(),
    NoteConnection.asPromise()
])
    .then(()=>{
        console.log("successfully connected to both DataBases");
        app.listen(PORT,()=>{
            console.log(`Server is running on PORT ${PORT}`);
        });
    })
    .catch((err)=>{
        console.log('Error connecting to databases:',err);
    });

app.get('/',(req,res)=>{
    res.send('<h1> Welcome to the Todo and Note Application </h1>');
});

app.post('/todos',async (req,res)=>{
    try{
        const newTodo=new Todo(req.body);
        const savedTodo=await newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch(error){
        res.status(500).json({message:'Error creating todo',error:error.message });
    }
});

app.get('/todos',async (req,res)=>{
    try{
        const query={};
        if (req.query.completed !== undefined) {
            query.completed = req.query.completed === 'true';
        }
        if (req.query.title) {
            query.title = req.query.title;
        }
        if (req.query.description) {
            query.description = req.query.description;
        } 
        const todos=await Todo.find(query);
        res.status(200).json(todos);
    } catch(error){
        res.status(500).json({message:'Error fetching todos',error:error.message});
    }
});



app.put('/todos/:id',async (req,res)=>{
    try{
        const { id }=req.params;
        const updatedTodo=await Todo.findByIdAndUpdate(id, req.body ,{new:true});
        if(!updatedTodo){
            res.status(404).json({message:'Todo not found'});
        }
        res.status(200).json(updatedTodo);
    } catch(error){
        res.status(500).json({message:'Error Updating Todo',error:error.message});
    }
});

app.delete('/todos',async (req,res)=>{
    try{
        const filter=req.body;
        if (Object.keys(filter).length === 0) {
            return res.status(400).json({ 
                message: 'Error: Deletion filter cannot be empty. This would delete all documents.' 
            });
        }
        const result = await Todo.deleteMany(filter);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No todos found matching the criteria' });
        }
        res.status(200).json({ 
            message: `Successfully deleted ${result.deletedCount} todo(s).` 
        });
    } catch (error){
        res.status(500).json({message:'Error deleting todo',error:error.message});
    }
});

app.post('/notes',async (req,res)=>{
    try{
        const newNote=new Note(req.body);
        const savedNote=await newNote.save();
        res.status(201).json(savedNote);
    }
    catch(error){
        res.status(500).json({message:'Error creating note',error:error.message });
    }
});

app.get('/notes',async (req,res)=>{

    try{
        const query={};
        if(req.query.title){
            query.title = req.query.title;
        }
        if(req.query.content){
            query.content = req.query.content;
        }

        const notes=await Note.find(query);
        res.status(200).json(notes);
    } catch(error){
        res.status(500).json({message:'Error fetching notes',error:error.message});
    }
});

app.get('/notes/:id',async (req,res)=>{
    try{
        const { id }=req.params;
        const note=await Note.findById(id);
         
        if(!note){
            return res.status(404).json({message:'note not found'});
        }
        res.status(200).json(note);
    } catch(error){
        res.status(500).json({message:'Error fetching note',error:error.message});
    }
});

app.put('/notes/:id',async (req,res)=>{
    try{
        const { id }=req.params;
        const updatedNote=await Note.findByIdAndUpdate(id, req.body ,{new:true});
        if(!updatedNote){
            res.status(404).json({message:'Note not found'});
        }
        res.status(200).json(updatedNote);
    } catch(error){
        res.status(500).json({message:'Error Updating Note',error:error.message});
    }
});

app.delete('/notes',async (req,res)=>{
    try{
        const filter=req.body;
        if (Object.keys(filter).length === 0) {
            return res.status(400).json({
                message: 'Error: Deletion filter cannot be empty. This would delete all documents.'
            });
        }
        const result=await Note.deleteMany(filter);
        if( result.deletedCount === 0) {
            return res.status(404).json({ message: 'No notes found matching the criteria' });
        }
        res.status(200).json({ 
            message: `Successfully deleted ${result.deletedCount} todo(s).` 
        });
        } catch (error){
        res.status(500).json({message:'Error deleting note',error:error.message});
    }
});