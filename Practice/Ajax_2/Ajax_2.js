function displayInfo()
{
    var div = document.getElementById('myDiv');

    var xhr = new XMLHttpRequest();

    xhr.open('GET', "Ajax_2.json", true);

    xhr.onload = function()
    {
        var data = JSON.parse(xhr.responseText);

        var message = '';

        data.forEach(n => message += `<p> Name : ${n.name}, Age: ${n.age}, Secret: ${n.secret}</p>`);

        div.insertAdjacentHTML("afterend", message);
    }

    xhr.send()
}