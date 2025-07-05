const express = require('express');
const app = express();


const indexRouter = require('./index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', indexRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running successfully on http://localhost:${port}`);
});
