const fs = require('fs'); // core module
fs.writeFileSync("raj.txt", "Hello World"); // write file
const path = require('path'); // core module
console.log(path.join(__dirname, "raj.txt")); // join path
const  os = require('os'); // core module
console.log(os.userInfo());
console.log(os.hostname());

const {log} = require('console'); // custom module
log("This is a custom log message.");
log(process.pid); // process id
log(process.version); // process version
log(process.cwd()); // process current working directory

// core module and global object module
// core module will have to import it using require and 
// global object module is available without importing it, we no need to import it. 