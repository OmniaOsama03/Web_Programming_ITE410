//Create a function that returns an object, stringifies it, and sends it in the response

let http = require('http');

let server = http.createServer(function(req, res)
{
    if(req.url == "/greet")
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write("Hello there! This is sent from Omnia's simple server!");
        res.end();

    }else if(req.url == "/createObject")
    {
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.write(createObj());
        res.end()

    }else
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write("oooooo invalid request");
        res.end()

    }
})

server.listen(4444);

function createObj()
{
    let student = 
    {
        name : "Omnia",
        age : 20, 
        major : "Software Engineering"
    };

    return JSON.stringify(student);
}

