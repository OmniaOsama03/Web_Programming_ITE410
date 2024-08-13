let http = require('http');

var server = http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type' : "text/plain"});
    res.write('Hello! This is some practice to remember the syntax');
    res.end();
}).listen(3000);