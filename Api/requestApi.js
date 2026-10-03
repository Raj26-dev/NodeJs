const http = require("http");

const server = http.createServer((req, res) => {
//   console.log("URL:", req.url); // log the requested URL to the console
//   console.log("Host:", req.headers.host); // log the host header to the console
console.log("Method:", req.method); // log the HTTP method to the console
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
  } else if (req.url === "/login") {
    res.write("<h1>Login Page</h1>");
  } else {
    res.write("<h1>404 Page Not Found</h1>");
  }
  res.end();
});

server.listen(3004);
