const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

  let file = "/index.html";
// let file = pathname === "/" ? "index.html" : pathname.slice(1);

  if (req.url !== "/") {
    file = req.url;
  }
  console.log(`Request for ${file} received.`);
  // async header file use 
  // let collectheader;
  // fs.readFile("../Html/header.html", "utf8",(err, headerdata)=> {
  //    if (err) {
  //         res.writeHead(500, { "Content-Type": "text/plain" });
  //         res.end("Error loading Header.html");
  //         return false;
  //       }
        
  //      collectheader = headerdata ;
  // })

  // sync method 
  let collectheader = fs.readFileSync("../Html/header.html", "utf8")
  if (req.url !== "/style.css" ) {
    fs.readFile(`../Html/${file}`,
      "utf8",
      (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error loading index.html");
          return false;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(collectheader+""+data);
        res.end(); 
      },
    );
  } else if (req.url === "/style.css") {
    fs.readFile("../Html/style.css", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading style.css");
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
