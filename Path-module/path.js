// const http = require("http");
const path = require("path");

const file = "../Html/index.html";

console.log(path.extname(file)); // extname use for finding path 
console.log(path.basename(file)); // basename use to find file base name 
console.log(path.dirname(file)); // dirname use to find directory name 
console.log(path.resolve("Html", "index.html")); // path.resolve give whole path name of file 
console.log(path.isAbsolute(file));

//global constant 

console.log("global-dir::", __dirname);
console.log("global-file::", __filename); // filename use for

