let fs = require('fs');

//Reading a file's content
fs.readFile('myFile.txt', 'utf8', function(err, data)
{
    if(err)
    {
        console.log("An error occured: " + err);
    }else
    {
        console.log("The data in the file: " + data);
    }
})

//Writing to a file
fs.writeFile('myFile.txt', 'This is the written text! Notice how it replaces what I had!', function(err)
{
    if(err)
    {
        console.log("An error occured: " + err);
    }else 
    {
        console.log("The data has been written into the file successfully!");
    }
})

//Appending to a file
fs.appendFile('myFile.txt', "|||| Hello! I don't replace, but I will be appended!", function(err)
{
    if(err)
        {
            console.log("An error occured: " + err);
        }else 
        {
            console.log("The data has been appended to the file successfully!");
        }
})

//Deleting a file

fs.unlink('myFile2.txt', function(err)
{
    if(err)
        {
            console.log("An error occured: " + err);
        }else 
        {
            console.log("The file has been successfully deleted!");
        }
})