import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000; // Use an available port

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/hello') {
        res.end('<h1>Hello world</h1>');
    } else if (req.url === '/goodbye') {
        res.end('Goodbye World');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
