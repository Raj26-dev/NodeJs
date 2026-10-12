const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
  } catch {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Invalid URL");
    return;
  }

  let file = pathname === "/" ? "index.html" : pathname.slice(1);
  console.log(`Request for ${file} received.`);
//   if (!path.extname(file)) {
//     file += ".html";
//   }

  const htmlDirectory = path.resolve(__dirname, "..", "Html");
  const filePath = path.resolve(htmlDirectory, file);
  const relativePath = path.relative(htmlDirectory, filePath);
  const extension = path.extname(filePath).toLowerCase();

  if (
    relativePath.startsWith(`..${path.sep}`) ||
    relativePath === ".." ||
    path.isAbsolute(relativePath) ||
    ![".html", ".css"].includes(extension)
  ) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }

  const contentType = extension === ".css" ? "text/css" : "text/html";
  console.log(`Request for ${file} received.`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(err.code === "ENOENT" ? 404 : 500, {
        "Content-Type": "text/plain",
      });
      res.end(err.code === "ENOENT" ? "Not found" : "Error loading file");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(3000);
