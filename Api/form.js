const http = require("http");
const fs = require("fs");
const path = require("path"); // import core module for working with file and directory paths
const querystring = require("querystring"); // import core module for parsing and formatting URL query strings

const filePath = path.join(__dirname, "..", "Html", "form.html"); // Use path.join() to construct the file path

const server = http.createServer((req, resp) => {
  // console.log("request received", resp.url);
  // console.log("request received", req.url);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.end("Internal Server Error");
      return;
    } else if (req.url === "/submit" && req.method === "POST") {
      const chunkData = [];
      let formData = {};
      req.on("data", (chunk) => {
        chunkData.push(chunk);
        // console.log("Received data chunk:", chunk);
        // console.log("data:", data);
        // use on method to listen for data events and collect the incoming data chunks
      });
      console.log("chunkData:", chunkData);
      req.on("end", () => {
        // use on method to listen for end event and process the complete request body
        // Concatenate the collected data chunks using Buffer.concat() and convert to string
        let rawData = Buffer.concat(chunkData).toString(); 
        console.log("rawData:", rawData);
        // Parse the raw data into an object using querystring.parse()
        formData = querystring.parse(rawData); 
        console.log("formData:", formData);
        console.log("formData:", formData.name);
        let dataString =
          "My name is " +
          formData.name +
          " and my email is " +
          formData.email;

          // Write the form data to create a new text file using fs.writeFileSync() and path.join()
        fs.writeFileSync( 
          path.join(__dirname, "..", "Html", formData.name + ".txt"),
          dataString,
        ); 
        console.log("File Created");

        // You can now access the form data using formData object
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(`
                <div id="successModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">
        <div class="glass-card bg-slate-900/90 border-emerald-500/30 rounded-3xl p-8 max-w-md w-full text-center relative animate-modal shadow-2xl">
            <div class="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                <i class="fa-solid fa-check text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Message Received!</h3>
            <p>Name: ${formData.name}</p>
            <p>Email: ${formData.email}</p>
            <p>Message: ${formData.address}</p>
            <p class="text-slate-300 text-sm mb-6 leading-relaxed">
                Thank you for reaching out. We have received your inquiry and will get back to you shortly.
            </p>
            <button 
                id="closeModalBtn" 
                class="w-full py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-700 transition-colors"
            >
                Close Window
            </button>
        </div>
    </div>
                `);
        resp.end();
      });

      //         resp.writeHead(200, { "Content-Type": "text/html" });
      //         resp.write(`
      //             <div id="successModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">
      //     <div class="glass-card bg-slate-900/90 border-emerald-500/30 rounded-3xl p-8 max-w-md w-full text-center relative animate-modal shadow-2xl">
      //         <div class="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
      //             <i class="fa-solid fa-check text-3xl"></i>
      //         </div>
      //         <h3 class="text-2xl font-bold text-white mb-2">Message Received!</h3>
      //         <p>Name: ${formData.name}</p>
      //         <p>Email: ${formData.email}</p>
      //         <p>Message: ${formData.message}</p>
      //         <p class="text-slate-300 text-sm mb-6 leading-relaxed">
      //             Thank you for reaching out. We have received your inquiry and will get back to you shortly.
      //         </p>
      //         <button
      //             id="closeModalBtn"
      //             class="w-full py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-700 transition-colors"
      //         >
      //             Close Window
      //         </button>
      //     </div>
      // </div>
      //             `);
      //         resp.end();
    } else {
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
    }
  });
});

server.listen(3000);
