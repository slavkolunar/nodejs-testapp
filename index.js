require('dotenv').config();

const express = require('express');
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/', itemRoutes);

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API running on port ${PORT}`);
});