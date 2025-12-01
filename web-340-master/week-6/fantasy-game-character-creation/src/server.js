const http = require("http");
const url = require("url");

let createdCharacter = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // POST /create-character
  if (req.method === "POST" && parsedUrl.pathname === "/create-character") {
    const { class: charClass, gender, fact } = parsedUrl.query;

    createdCharacter = { class: charClass, gender, fact };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdCharacter));
    return;
  }

  // POST /confirm-character
  if (req.method === "POST" && parsedUrl.pathname === "/confirm-character") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Character creation confirmed!");
    return;
  }

  // GET /view-character
  if (req.method === "GET" && parsedUrl.pathname === "/view-character") {
    if (!createdCharacter) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("No character created.");
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdCharacter));
    return;
  }

  // Default 404
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found.");
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

module.exports = server;
