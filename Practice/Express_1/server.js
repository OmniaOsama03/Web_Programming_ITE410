let http = require('http');
let app = require('./app.js');

let port  = process.env.PORT || 3000;

let server = http.createServer(app);
server.listen(port);