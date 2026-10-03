const http = require("http"); // import core module for creating server

// http.createServer((req,res)=> {
//     res.write("<h1>Hello, World!111</h1>, <p>This is a simple paragraph.</p>");
//     res.end();
// }).listen(3002); // listen on port 3002 mean give a port number to the server to listen for incoming requests

const age = 23;
const Dates = new Date().getFullYear();
const serverRrsponse = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // set header for the response to be of type html
  res.write(
    `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Sample Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px auto;
            max-width: 800px;
            padding: 0 20px;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            margin-top: 30px;
        }
        ul {
            background-color: #f8f9fa;
            padding: 20px 40px;
            border-radius: 5px;
        }
        li {
            margin-bottom: 8px;
        }
    </style>
</head>
<body>

    <!-- Main Title Heading -->
    <h1>Welcome to My Sample Page</h1>

    <!-- First Paragraph -->
    <p>
        This is a simple HTML template designed to show how headings, paragraphs, 
        and lists work together to structure content on a webpage. HTML provides 
        the basic framework for website development.
    </p>

    <!-- Subheading -->
    <h2>Key Web Technologies</h2>
    <h2> Age is : ${age}</h2>
    <h2> Date is : ${Dates}</h2>
    <h2> Age is : ` +
      age +
      `</h2>
    <h2> Date is : ` +
      new Date() +
      `</h2>

    <!-- Paragraph introducing the list -->
    <p>
        To build modern web applications, developers use three core languages 
        that work in harmony:
    </p>

    <!-- Unordered List -->
    <ul>
        <li><strong>HTML:</strong> Handles the structure and layout of the page.</li>
        <li><strong>CSS:</strong> Controls the styling, colors, and responsive design.</li>
        <li><strong>JavaScript:</strong> Adds interactivity and dynamic behavior.</li>
    </ul>

    <!-- Final Paragraph -->
    <p>
        By combining these technologies, you can create anything from simple personal 
        blogs to complex interactive web applications.
    </p>

</body>
</html>
        `,
  );
  res.end();
});

serverRrsponse.listen(3002);
