const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Vercel requires that you export the handler
module.exports = app;
