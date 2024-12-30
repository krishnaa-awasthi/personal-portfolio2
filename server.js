const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require('fs');
app.post('/contact', (req, res) => {
    const userData = `Name: ${req.body.name}, Email: ${req.body.email}, Phone: ${req.body.phone}, Subject: ${req.body.subject}, Message: ${req.body.message}\n`;

    // Append data to a file
    fs.appendFile('submissions.txt', userData, (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            console.log('Data saved successfully!');
            res.send('Form submitted successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
