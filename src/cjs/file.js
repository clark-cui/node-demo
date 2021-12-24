//用fs-extra替代fs

const fs = require('fs').promises;
fs.stat('.').then(stats => {
  console.log(stats)
}).catch(e => [
  console.log(e)
])

// promisefy 
const util = require('util');
const fs = require('fs');
const statFunc = util.promisify(fs.stat);
statFunc('.').then(stats => {
  console.log(stats)
}).catch(e => [
  console.log(e)
])

//read file stream
const fs = require('fs');
const rs = fs.createReadStream('./callback/titles.json');
rs.on('open', fd => {
  console.log(`文件描述符 ${fd} 已分配`);
});

rs.on('ready', () => {
  console.log('文件已准备好');
});

rs.on('data', chunk => {
  console.log('读取文件数据:', chunk.toString());
});

rs.on('end', () => {
  console.log('文件读取完成');
});

rs.on('close', () => {
  console.log('文件已关闭');
});

rs.on('error', (err) => {
  console.log('文件读取发生发生异常:', err.stack);
});