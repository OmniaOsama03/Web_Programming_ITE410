
const http = require('http');
const port = process.env.PORT || 3000; //This line means: Fetch the port from the configuration file, if it's not there, use 3000
const app = require('./app');

//Use the http.createServer method to actually create the server:
const server = http.createServer(app); //even if u don't pass app, it'll still create the server, but passing app actually allows us to route everything. App here is the intermediary between the endpoints area and the server.
server.listen(port);