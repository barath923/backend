const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sql, connect } = require('./db');

const app = express();
const port = 3000;

app.use(cors({
  origin: '*'
}));

// app.use(cors());
app.use(bodyParser.json());

connect(); // connect to DB at startup

// Endpoint to handle user input from frontend
app.post('/api/save', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  try {
    const result = await sql.query`INSERT INTO Users (Name) VALUES (${name})`;
    res.json({ message: 'Name saved successfully' });
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).json({ message: 'Database error' });
  }
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Backend API running on port ${port}`);
  console.log(`Accessible at http://192.168.2.4:${port} within the same VNet`);
});
