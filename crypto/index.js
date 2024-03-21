const express = require('express');

const app = express();

const crypto = require('crypto');

const data = 'Hello world';

const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log('Encrypted Data', hash)

app.listen(3000, () => {
    console.log("server is listening");
})