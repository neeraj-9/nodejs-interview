const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();

// Define the CORS options
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:5770', `https://mydomain.com/*`], // Whitelist theclient's domains
    methods: 'GET POST PUT',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // Use the cors middleware with your options

// Your route handlers and other middleware go here

app.get('/', (req, res) => {
    res.send("Active");
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});