//Fetching the elements I need
var myButton = document.getElementById("SpecialButton");
var myContainer = document.getElementById("SpecialContainer");
var counter = 0;

myButton.addEventListener("click", function()
{
    //create the XHR object
    var request = new XMLHttpRequest();

    //configure
    request.open("GET","AjaxPractice1.json", true);

    request.onload = function()
    {
        var data = JSON.parse(request.responseText);

        var message = "<p> Here's a special fact about " + data[counter].name +  " who is " + data[counter].age + " years old! : "
        + data[counter].secret + "</p>";
        
        myContainer.insertAdjacentHTML("afterend", message);

        counter++;
        if(counter >= data.length)
            {
                myButton.classList.add("poof");
            }
        
    }

    request.send();
  
})