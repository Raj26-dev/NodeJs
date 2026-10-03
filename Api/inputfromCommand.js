// console.log("process:", process);// process is a global object in Node.js that provides information about, and control over, the current Node.js process. It can be used to get information about the environment, handle signals, and manage the lifecycle of the application.

// console.log("process.version:", process.version);// process.version is a property of the process object in Node.js that returns the version of Node.js currently running. It is useful for checking compatibility and ensuring that your application runs on the intended version of Node.js.

// console.log("process.argv:", process.argv); // process.argv is an array that contains the command-line arguments passed when the Node.js process was launched. The first element is the path to the Node.js executable, the second element is the path to the JavaScript file being executed, and any subsequent elements are additional command-line arguments provided by the user. This allows developers to customize the behavior of their applications based on user input from the command line.

// console.log("process.argv:", process.argv[3]); // This line logs the fourth command-line argument (index 3) passed to the Node.js process. It allows developers to access specific user-provided input from the command line, which can be used to modify the application's behavior or configuration based on that input.

console.log("raj:");
// console.log("process.env:", process.env);// process.env is an object that contains the user environment. It provides access to environment variables, which can be used to configure the behavior of applications. For example, you can use process.env to access variables like PATH, HOME, or custom variables defined in your system or application.

// console.log("process.env.OS:", process.env.OS);// process.env.OS is an environment variable that typically indicates the operating system on which the Node.js process is running. It can be useful for writing platform-specific code or for debugging purposes.

// console.log("process.env.USERNAME:", process.env.USERNAME);// process.env.USERNAME is an environment variable that typically contains the username of the currently logged-in user on the operating system. It can be useful for personalizing applications or for logging and auditing purposes.

// get dynamic port from process.argv[2] and process.argv[3]
// const port = process.argv[2] || 3000;
// console.log("process.argv:", process.argv);
// console.log("Port:", port);

// create a server and run on dynamic port
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write(`<h1>Dynamic Port number : ${port}</h1>`);
//   res.write("<p>This server is running on a dynamic port specified via command-line arguments.</p>");
//   res.end();
// });

// server.listen(port);

// create a server and run on dynamic port using process.env.PORT
const http = require("http");

const port = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise default to 3000

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`<h1>Dynamic Port number : ${port}</h1>`);
  res.write("<p>This server is running on a dynamic port specified via environment variables.</p>");
  res.end();
});

server.listen(port);
// console.log("process.env.PORT:", port); // Log the PORT environment variable to the console