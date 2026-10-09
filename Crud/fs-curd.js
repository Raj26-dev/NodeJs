const fs = require("fs");

// writeFileSync() method is used to write data to a file synchronously. It takes two arguments: the file path and the data to be written. If the file does not exist, it will be created. If it already exists, its contents will be overwritten.
// fs.writeFileSync("../fileSystem/output.txt", "Hello, World!", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

// readFileSync() method is used to read the contents of a file synchronously. It takes the file path as an argument and returns the contents of the file as a string. If the file does not exist, it will throw an error.
// const data = fs.readFileSync("../fileSystem/output.txt", "utf8");
// console.log("File contents:", data);

// appendFileSync() method is used to append/update data to a file synchronously. It takes two arguments: the file path and the data to be appended. If the file does not exist, it will be created. If it already exists, the new data will be added to the end of the file.
// fs.appendFileSync("../fileSystem/output.txt", "\nThis is an appended line.", (err) => {
//   if (err) {
//     console.error("Error appending to file:", err); 
//   } else {
//     console.log("Data appended successfully!");
//   }
// });

//delete file using unlinkSync() method is used to delete a file synchronously. It takes the file path as an argument and removes the specified file from the file system. If the file does not exist, it will throw an error.
//  fs.unlinkSync("../fileSystem/output.txt", (err) => {
//   if (err) {
//     console.error("Error deleting file:", err);
//   } else {
//     console.log("File deleted successfully!");
//   }
// });

// crud operation using fs module with command line argument
const operation = process.argv[2]; // process.argv is an array that contains the command-line arguments passed to the Node.js process. The first element (index 0) is the path to the Node.js executable, the second element (index 1) is the path to the script being executed, and subsequent elements (index 2 and onwards) are the additional command-line arguments provided by the user. In this case, process.argv[2] retrieves the third argument, which is expected to be the operation type (e.g., "create", "read", "update", or "delete") that the user wants to perform on a file.

const fileName = process.argv[3]; // process.argv[3] retrieves the fourth argument, which is expected to be the name of the file on which the specified operation will be performed.

const fileContent = process.argv[4]; // process.argv[4] retrieves the fifth argument, which is expected to be the content to be written to the file (in case of create or update operations).

if (operation === "create") {
  fs.writeFileSync(fileName, fileContent, (err) => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log("File created successfully!");
    }
  });
}else if (operation === "read") {
  const data = fs.readFileSync(fileName, "utf8");
  console.log("File contents:", data);
}else if (operation === "update") {
  fs.appendFileSync(fileName, fileContent, (err) => {
    if (err) {
      console.error("Error updating file:", err);
    } else {
      console.log("File updated successfully!");
    }
  });
}else if (operation === "delete") {
  fs.unlinkSync(fileName, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted successfully!");
    }
  });
}else {
  console.log("Invalid operation. Please use 'create', 'read', 'update', or 'delete'.");
};
