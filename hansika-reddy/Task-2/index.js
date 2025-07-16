const express = require('express');
const mongoose = require('mongoose'); 

const app = express();
const PORT = 3000;


const dbURI = 'mongodb://localhost:27017/hansika-task2-db'; 

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('Successfully connected to MongoDB!');
   
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });



app.get('/', (req, res) => {
  res.send('<h1>This is Homepage of my Task-2</h1>');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

