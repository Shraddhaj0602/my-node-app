const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Sample data
let users = [
  { id: 1, name: 'Shraddha' },
  { id: 2, name: 'Sakshi' }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
