//btw, the below is a faster way to create our server, in comparison to the long procedure we did before.
let express = require('express');
let app = express();

let mongoose = require('mongoose');

app.listen(3001, () =>
{
    console.log('Server is running on port ' + 3001);
})

//connect through connection string + specify desired db
mongoose.connect('mongodb://localhost:27017/student')

//create a schema
let studentSchema = new mongoose.Schema(
    {
        name : String,
        age : Number
    }
)

//create the model (specify collection name)

let studentModel = mongoose.model("students_new", studentSchema);

//Now, you've connected to mongoose. Time to create some endpoints
app.get('/getStudents', (req, res, next) =>
{
    studentModel.find({}).then(function(students)
{
    res.json(students);

}).catch(function(err)
{
    console.log(err);
})
}) //find, then run method. If error occur -> catch

//try this in postman.