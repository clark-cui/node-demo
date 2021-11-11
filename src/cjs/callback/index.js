const http = require('http');
const fs = require('fs');
module.exports = function cb(port) {
  http.createServer((req, res) => {
    getTitles(res);
  }).listen(port);

}

function getTitles(res) {
  fs.readFile('./src/cjs/callback/titles.json', (err, data) => {
    if (err) return;
    const title = JSON.parse(data.toString()).title
    getTemplate(JSON.parse(title), res);
  })
}

function getTemplate(titles, res) {
  fs.readFile('./src/cjs/callback/template.html', (err, data) => {
    if (err) return;
    formatHtml(titles, data.toString(), res);
  })
}

function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace('%', titles.join('</li><li>'));
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(html);
}