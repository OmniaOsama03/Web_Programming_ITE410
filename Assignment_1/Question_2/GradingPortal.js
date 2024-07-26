function calculateGrades() 
{
    //Extracting the student scores, explicitly casting them to int, and storing them in an array
    let scores = 
    [
        parseInt(document.getElementById('score1').value),
        parseInt(document.getElementById('score2').value),
        parseInt(document.getElementById('score3').value),
        parseInt(document.getElementById('score4').value)
    ];

    //Capturing the div where my resulting table will be placed
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    //Using the some method to check if any of the user missed to enter a value.
    if (scores.some(isNaN)) 
    {
        resultDiv.innerHTML = 'Please enter valid numbers for all scores.';
        return; //Stopping execution if any value is Nan
    }

    
    //Iterating through the scores array to find the maximum value
    let bestScore = scores[0];

    for (let i = 1; i < scores.length; i++) 
    {
        if (scores[i] > bestScore) 
        {
            bestScore = scores[i]; // Update bestScore if current score is higher
        }
    }

    //Calculating the corresponding grades using map
    let grades = scores.map(n => 
    {
        if (n >= bestScore - 10) return 'A';
        if (n >= bestScore - 20) return 'B';
        if (n >= bestScore - 30) return 'C';
        if (n >= bestScore - 40) return 'D';
        return 'F';
    });

    //Finally, display results in a table, where each row contains
    resultDiv.innerHTML = `
        <table>
            <tr>
                <th>Student</th>
                <th>Score</th>
                <th>Grade</th>
            </tr>

            <tr>
                <td>Student 1</td>
                <td>${scores[0]}</td>
                <td>${grades[0]}</td>
            </tr>

            <tr>
                <td>Student 2</td>
                <td>${scores[1]}</td>
                <td>${grades[1]}</td>
            </tr>

            <tr>
                <td>Student 3</td>
                <td>${scores[2]}</td>
                <td>${grades[2]}</td>
            </tr>

            <tr>
                <td>Student 4</td>
                <td>${scores[3]}</td>
                <td>${grades[3]}</td>
            </tr>

        </table>
    `;
}
