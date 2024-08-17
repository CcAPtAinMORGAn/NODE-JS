const http=require('http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const fileContent=fs.readFileSync('formyash.html')

const server=http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end(fileContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});