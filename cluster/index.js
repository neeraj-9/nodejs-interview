const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Primary process ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else {
    const server = http.createServer((req, res) => {
        if (req.url === '/') {

            res.writeHead(200);
            res.end('Hello, world!\n');

        }
        if (req.url === '/hi') {
            res.writeHead(200);
            res.end(`Worker with pid: ${process.pid} handled the request`)
        }
    })

    server.listen('8080', () => {
        console.log('Server running on 8080')
    })

    console.log(`Worker ${process.pid} started`);
}