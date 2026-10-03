const http = require("http");

const apiData =[
    {
        name: "Raj Gomeshwar",
        age: 33,
        city: "Pune",
    },
    {
        name: "Rohini Gomeshwar",
        age: 32,
        city: "Rajnandagon",
    },
    {
        name: "Om Gomeshwar",
        age: 23,
        city: "Pune",
    }
]

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
//   res.write(apiData);// if we write apiData directly it will give error because it is an object and we need to convert it into string using JSON.stringify() method
  res.write(JSON.stringify(apiData));
  res.end();
});

server.listen(3003);