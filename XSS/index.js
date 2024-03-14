const express = require('express');
const xss = require('xss');

const app = express();

app.get('/', (req, res) => {
    const userInput = "<script>alert('XSS attack!');</script>"

    const sanitizedInput = xss(userInput);
    res.send(`Sanitised input:${sanitizedInput}`);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})