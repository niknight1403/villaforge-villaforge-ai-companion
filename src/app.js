const express = require('express');
const app = express();
app.use(express.json());

app.post('/process', (req, res) => {
  const { type, content } = req.body;
  if (!type || !content) return res.status(400).json({ error: 'Missing data' });
  res.json({ status: 'success', processed: true, type });
});

module.exports = app;