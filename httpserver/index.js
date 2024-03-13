const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Active!\n');
    }

    if (req.url === '/hello') {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Hello from nodejs!\n');
    }
    if (req.url === '/badrequest') {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('400 error!\n');
    }
    if (req.url === '/serverIssue') {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 error!\n');
    }

});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
