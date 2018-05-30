const http = require('http');
const figlet = require('./figlet')
const hostname = '127.0.0.1';
const port = 8000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.statusMessage = "Error"
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Content-Type', 'text/plain');
  res.end(figlet.createFiglet("Frontend Bootcamp"));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});