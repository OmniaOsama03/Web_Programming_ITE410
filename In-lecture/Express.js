
let express = require('express'); 
//^it won't work alone since express is an external third party. Unlike http, it is in-built.
//So how can we get it? We'll need to use npm.

//let's start a server on a particular port
let app = express();
//app.listen(8998); //8998 is a random port I just used.

//To run it, just use node Express.js, as we've been doing, and run it in a browser using localhost:8998

//To send a function that'll give us some data (other parameters: request & response)

app.listen(8998, function() 
{
    console.log('Server is running on http://localhost:8998');
});

//routing to endpoints: (equivalent of controller class in Springboot)
app.get('/', function(req, res)
{
    res.send("Hello world!");
})

app.get('/engineers', function(req, res)
{
    res.send("Hello world! Engineers are pretty sick! ");
})

//A get endpoint with an id input:
app.get('/engineers/:id', function(req, res)
{
    const id = req.params.id; //So our request has a parameter that's the id

    if(id == 20)
    {
        res.send("Hello there, Omnia!");
    }else
    {
        res.send("Hello there, not Omnia!");
    }
})

//A post endpoint
app.post('/engineers/:id', function(req, res)
{
    const id = req.params.id;

    if(id == 20)
        {
            res.send("Selected record has been updated!");
        }else
        {
            res.send("The id has not been found :(");
        }
})

//A patch endpoint (for small changes)
app.patch('/engineers', function(req, res)
{
    console.log("For now, I don't do anything! How sad.");
})

//A delete endpoint
app.delete('/engineers/:id', function(req, res)
{
    const id = req.params.id;

    if(id == 20)
        {
            res.send("Selected record has been deleted! Goodbye buddy!");
        }else
        {
            res.send("The id has not been found :(");
        }
})



