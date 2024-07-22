
const http = require('http');
const port = process.env.PORT || 3000; //This line means: Fetch the port from the process.env file, if it's not there, use 3000
const app = require('./app');

//Use the createServer method:
const server = http.createServer(app);
server.listen(port);