const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Home Page!</h1>');
});
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});