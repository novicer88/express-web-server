const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World from the Express server');
});

app.listen(3000);
