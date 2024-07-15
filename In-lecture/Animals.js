    var animalContainer = document.getElementById("animalInfo");
    var button = document.getElementById("showInfoBtn");
    var pageCounter = 1;

    button.addEventListener("click", function()
    {
    var request = new XMLHttpRequest();
    request.open("GET", "Animals" + pageCounter + ".json", true);
    

    request.onprogress = function() //Optional, runs while the request is processing.
    {
        console.log("Request in progress...");
    };

    request.onload = function() //Runs when the response is being loaded.
    {
        var data = JSON.parse(request.responseText);

        console.log(data[0]); //The data[0] ensures we're only accessing the first object
        renderHTML(data);
    };

    
    request.send();
    pageCounter ++;

    if(pageCounter > 2)
        {
            button.classList.add("hide-me"); // Hide after the second click
        }

    })

    function renderHTML(data) //To show our data in the container (we'll add p for paragraph)
    {
        var HTMLString = "";

        for(i = 0; i < data.length; i++)
        {
            HTMLString += "<p>" + data[i].name + " is a " + data[i].species + ". </p>"
        }

        animalContainer.insertAdjacentHTML("afterend", HTMLString);
    }


