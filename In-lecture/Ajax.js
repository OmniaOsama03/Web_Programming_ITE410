console.log("Hello! We're practicing Ajax.");

let button_1 = document.getElementById('Button-1');
let button_2 = document.getElementById('Button-2');
let button_3 = document.getElementById('Button-3');

button_1.addEventListener('click', clickHandler1); //On click, the clickHandler method is called

function clickHandler1()
{
    console.log("BUTTON 1 HAS BEEN CLICKED! ");
}

//Create an object of XHR for communication
const xhr = new XMLHttpRequest();

//Now we open the request. 3 parameters: The request type, where the data is being read from, true/false for whether request type is asynchronous
xhr.open('GET', 'Test.txt', true);

xhr.onprogress = function()
{
    console.log("on progress ");
}

xhr.onload = function()
{
    console.log("This is response text! ");
}

//Request is ready! Now to send the request!
xhr.send();