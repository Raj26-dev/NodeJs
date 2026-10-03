// const {userName, age} = require("./fileSystem/fileCreate.js");
const {userName,age, getUserInfo} = require("./exportFile/data.js");
const colors = require('colors'); // import colors module to add color to the console output
console.log("node.js");
console.log(userName, age);
console.log(getUserInfo("Raj", 34));
console.log(colors.red("Hello, World!")); // red color with underline and bold
