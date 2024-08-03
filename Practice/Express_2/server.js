// server.js or app.js (your main server file)
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// Sample data to return
const events = 
[
    { id: 1, name: 'Event 1', date: '2024-08-10' },
    { id: 2, name: 'Event 2', date: '2024-08-15' }
];

// Define the /getEvents endpoint
app.get('/getEvents', (req, res, next) => 
{
    //here
    res.json(events);
});

// Start the server
const PORT = process.env.PORT || 8008;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});