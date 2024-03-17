// Import the required modules
const http = require('http');

// Define the port number
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello, Wrld!\n');
});

// Start listening for incoming requests on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
