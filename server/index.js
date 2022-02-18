const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api', (req, res) => {
  res.json({ message: 'hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});