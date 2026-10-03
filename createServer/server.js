const http = require('http'); // import core module for creating server

http.createServer((req, res) => { // create server from http module and use createServer method to create server, it takes a callback function with request and response parameters
    // res.writeHead(200, {'Content-Type': 'text/plain'}); // write head with status code 200 and content type as text/plain
    res.write("<h1>Hello, World!111</h1>, <p>This is a simple paragraph.</p>"); // write head with status code 200 and content type as text/plain
    res.end('Hello, World!'); // end the response with 'Hello, World!'
}).listen(3000); // listen on port 3000 mean give a port number to the server to listen for incoming requests

http.createServer((req, res) => { // create server from http module and use createServer method to create server, it takes a callback function with request and response parameters
    // res.writeHead(200, {'Content-Type': 'text/plain'}); // write head with status code 200 and content type as text/plain
    res.write("<h1>Hello, World!3001</h1>, <p>This is a simple paragraph.Server 3001</p>"); // write head with status code 200 and content type as text/plain
    res.end('Hello, World!'); // end the response with 'Hello, World!'
}).listen(3001);