const fs = require('fs');
const path = require('path');
// synchronous programming in js out put 1 2 3
// console.log('Hello World!');
// console.log('Hello World!2');
// console.log('Hello World!3');

//asynchronous programming in js out put 1 2 3
// console.log('Hello World!');
// setTimeout(() => {
    //     console.log('Hello World!2');
    // }, 2000);
    // console.log('Hello World!3');
    
    // async programming using fs module 
    
    // fs.readFile(path.join(__dirname, "..", 'fileSystem', 'Surendra.txt'), 'utf-8', (err, data) => {
    //     if (err) {
    //         console.log("error occurred");
    //     } else {
    //         console.log(data);
    //     }
    // });
    // console.log('Hello World!');
    
    // synchronous programming using fs module
    // const data = fs.readFileSync(path.join(__dirname, "..", 'fileSystem', 'Surendra.txt'), 'utf-8');
    // console.log(data);
    // console.log('Hello World!');

// const https = require('https');

// const server = https.createServer((req, res) => {

// });

// const PORT = 3001;

// server.listen(PORT);