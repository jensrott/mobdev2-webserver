// Import the protocols
const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');
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


// Important
app.use(express.static(path.join(__dirname, 'client/build'))); // To link to the client map, now we can see our cat ! :)
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Hello Express Yes! :)');
});

/* Middlewares error handling */
app.use((req, res, next) => {
  const err = new Error('Not found!');
  err.status = 400;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send('error');
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