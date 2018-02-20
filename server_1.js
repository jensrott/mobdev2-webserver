// Import the protocol
const http = require('http');

// Settings
const hostName = '127.0.0.1';
const port = '8080';

// Description of the server
const server = http.createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'application/json'); 
  resp.end(JSON.stringify({
    "message": "Hello JSON!",
  }));
});

// Running the server
server.listen(port, hostName, () => {
  console.log(`Node server running at http://
  ${hostName}:${port}/ !`);
});