const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello Node');
})
server.listen(port, () => {
  // %s占位
  console.log('serer listening on http://localhost:%s', port);
})