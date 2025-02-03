/* 
"""
Create server with user defined entries.
"""
*/

// http module needed for server request and response
import { createServer } from 'node:http';
import askQuestion from './user_io_utils.js';

// host and port details
let hostname = 'localhost';
let host = '127.0.0.1';
let port = 3000;

// Get user input using await
const choice = await askQuestion('Do you want to add a host of your choice?(Y/N) ');

// check for choice replies
if (choice == 'Y') {
    host = await askQuestion('Specify the host correctly: ');
    port = await askQuestion('Specify the port number correctly: ');
}
else if (choice == 'N') {
    console.log('The hostname and port have been set to default values.')
    console.log('Hostname: localhost');
    console.log(`Host: ${host}`);
    console.log(`Port: ${port}`);
}
else {
    console.log('The choice set is not within correct options. Please enter a valid choice. :(');
    process.exit(0);
}

// Get user input using await
const userName = await askQuestion('Your name please? ');

// welcome response
const nameFunc = (userName) => {
    console.log("---------------------------------------");
    console.log(`Hello! ${userName} ... :)`);
    console.log("---------------------------------------");
};

// server built
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${userName} :)`);
});

server.listen(port, host, () => {
    nameFunc(userName);
    console.log(`Server running at http://${host}:${port}/`);
});

