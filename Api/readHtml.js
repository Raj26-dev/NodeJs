const http = require("http");
const fs = require("fs");
const path = require("path"); // import core module for working with file and directory paths


const server = http.createServer((req, resp) => {
    //path.join() method is used to join multiple path segments into a single path. It takes care of the correct path separators based on the operating system, ensuring that the resulting path is valid and platform-independent.
  fs.readFile(path.join(__dirname, "..", "Html", "index.html"), "utf8", (err, data) => {
    if (err) {
        console.error("Error reading HTML file:", err);
      resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.write("Error reading HTML file");
      resp.end();
      return;
    } 
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
    
  });
});

server.listen(3002);
