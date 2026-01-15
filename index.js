const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: Home page
app.get('/home', (req, res) => {
  res.send('This is home page');
});

// Route 2: Contact us page
app.get('/contactus', (req, res) => {
  res.send('Contact us at contact@contact.com');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
