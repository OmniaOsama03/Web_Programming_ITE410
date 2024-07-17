var http = require('http');

/*http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Hello! This is an HTTP program!\n");
    res.write("Here is another message.\n");
    res.write("And one more for good measure.\n");
    res.end();
}).listen(8080)
*/

//Create a function that returns an object, stringifies it, and sends it in the response

http.createServer(function(req, res) {
    // Set the Content-Type to 'application/json' for a JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let studentObj = createObject();
    res.write(studentObj);
    res.end();
}).listen(8888, function() {
    console.log('Server is listening on port 9000');
});

function createObject() {
    let student = {
        name: "Omnia Osama Ahmed",
        age: 20,
        major: "Software Engineering"
    };
    return JSON.stringify(student);
}



