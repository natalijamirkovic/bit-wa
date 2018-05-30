const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;

const body = {
    name: "Natalija i Barbara",
    way: "Veoma uspesno",
    hobby:"Pokretanje servera",
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.statusMessage = "Error"
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
