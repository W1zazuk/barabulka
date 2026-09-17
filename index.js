const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/blamba', (req, res) => {
  res.send('Sasison!');
});

app.get('/palusha', (req, res) => {
  res.send('Vaptaki!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});