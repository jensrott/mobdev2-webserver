// Import the protocols
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
// const url = require('url');

// Settings
const nodeEnv = (process.env.NODE_ENV) ? process.env.NODE_ENV :
'development';
if(nodeEnv !== 'production') {
  console.log('Do some development stuff!');
}

const hostName = '127.0.0.1';
const port = '8080';

app.get('/', (req, res) => {
  res.send('Hello Express Yes! :)');
});

app.use((req, res, next) => {
  res.status(404)
     .send('404 - Hello is it me you are looking for?'); // Later we display a page
});

/* Description of the server
const server = http.createServer((req, resp) => {
  const userAgent = req.headers['user-agent']; // User agent
  const urlParts = url.parse(req.url, true); // Url
  const paramName = (!urlParts.query.name) ? 'New Media Development' : // Check if there is a name
  urlParts.query.name;


  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/html');
  resp.end(`<h1>Hello ${paramName}</h1>
  <p>Your user agent is ${userAgent}</p>
  <p>I'm a watcher!</p>`);
});
*/

// Running the server
server.listen(port, hostName, () => {
  console.log(`Node server running at http://
  ${hostName}:${port}/ !`);
});