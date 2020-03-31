const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 8000;

http.createServer(function (req, res) {
  const fileName = (req.url === '/') ? '/index.html' : req.url;
  fs.readFile(__dirname + fileName, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(port);

console.log(`Server running at http://localhost:${port}/ ...`);
