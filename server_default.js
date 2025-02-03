/* 
"""
Create server with default entries.
"""
*/

// http module needed for server request and response
import { createServer } from 'node:http';

// host and port details
const hostname = '127.0.0.1';
const port = 3000;

// server built
const server = createServer((req, res) => {
    res.statusCode = 200;
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
