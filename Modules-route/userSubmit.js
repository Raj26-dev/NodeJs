const querystring = require("querystring");

function userSubmit(req, res) {
  const chunkData = [];

  req.on("data", (chunk) => {
    chunkData.push(chunk);
  });

  req.on("end", () => {
    const rawData = Buffer.concat(chunkData).toString();
    const formData = querystring.parse(rawData);

    res.write(`
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
    res.end();
  });
}

module.exports = userSubmit;
