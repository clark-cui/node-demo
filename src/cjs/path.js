// vscode 开启debug current page 打断点即可调试
const path = require('path');
const y = path.basename('C:\\temp\\myfile.html');
const z = path.parse('F:/workspace_github');
const x = path.format({
  root: 'F:/',
  dir: 'F:/',
  base: 'workspace_github'
})
const h = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')