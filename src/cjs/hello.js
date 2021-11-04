function hello(port) {
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.end('Hello Node');
  })
  server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
  })
}

module.exports = {
  hello
}

