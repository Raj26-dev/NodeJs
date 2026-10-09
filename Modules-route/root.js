const http = require('http');
const userForm = require('./userForm');
const userSubmit = require('./userSubmit');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url === '/submit' && req.method === 'POST') {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
       return userSubmit(req, res);
        
    }else{
        // res.writeHead(200, { 'Content-Type': 'text/html' });

        userForm(req, res);
    }
    // res.write('Hello, World!');
    res.end();
});

// const PORT = 3004;  
server.listen(3004);