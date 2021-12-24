const fs = require('fs').promises;
async function print(path) {
  const dir = await fs.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
}
print('./xhh/').catch(console.error)