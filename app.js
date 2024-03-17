const express = require('express');
const app = express();

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Helo, World!'); // Replace this with your desired response
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
