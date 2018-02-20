/*** Importing The Protocols ***/
const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
// const url = require('url');

/*** Settings ***/
const nodeEnv = (process.env.NODE_ENV) ? process.env.NODE_ENV :
'development';
if(nodeEnv !== 'production') {
  console.log('Do some development stuff!');
}
const hostName = '127.0.0.1';
// const hostName = '10.5.140.46';
const port = '8080';

/*** Adding Middleware !!Important!! ***/
app.use(express.static(path.join(__dirname, 'client/build'))); // To link to the client map, now we can see our cat ! :)
app.use(logger('dev')); // Show the routes in the cmd-line
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // We can now work with big objects

/*** Routes ***/
app.get('/', (req, res) => {
  res.send('Hello Express Yes! :)');
});

/* Students routes */
app.get('/students', (req, res) => {
  res.json([
    {
      "name": "Olivier",
      "lastName": "De Pauw",
      "eq": 140,
      "iq": 118
    },
    {
      "name": "Philippe",
      "lastName": "Parent",
      "eq": 66,
      "iq": 168
    }
  ]);
});

app.get('/students/:studentId', (req, res) => {
  res.json([
    {
      "name": "Olivier",
      "lastName": "De Pauw",
      "eq": 140,
      "iq": 118
    }
  ]);
});

/* Posts routes */
app.get('/posts', (req, res) => {
  res.json([
    {
      "name": "Post 1",
      "message": "Test message 1",
      "id": 1,
      "timestamp": new Date()
    },
    {
      "name": "Post 2",
      "message": "Test message 2",
      "id": 2,
      "timestamp": new Date()
    }
  ]);
});

app.get('/posts/:postId', (req, res) => {
  res.json([
    {
      "name": "Post 1",
      "message": "Test message 1",
      "id": 1,
      "timestamp": new Date()
    }
  ]);
});

/*** Middlewares errors handling ***/
app.use((req, res, next) => {
  const err = new Error('Page Not found!');
  err.status = 400;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
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

/*** Running the server ***/
server.listen(port, hostName, () => {
  console.log(`Node server running at http://${hostName}:${port}/ !`);
});