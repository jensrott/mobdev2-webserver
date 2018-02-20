// Import the protocols
const http = require('http');
const url = require('url');

// Settings
const hostName = '127.0.0.1';
const port = '8080';

// Description of the server
const server = http.createServer((req, resp) => {
  const userAgent = req.headers['user-agent']; // User agent
  const urlParts = url.parse(req.url, true); // Url
  const paramName = (!urlParts.query.name) ? 'New Media Development' : 
  urlParts.query.name;

  
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/html');
  resp.end(`<h1>Hello ${paramName}</h1>
  <p>Your user agent is ${userAgent}</p>`);
});


// Running the server
server.listen(port, hostName, () => {
  console.log(`Node server running at http://
  ${hostName}:${port}/ !`);
});