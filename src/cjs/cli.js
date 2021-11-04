function cli() {
  const [nodePath, scrictPath, name] = process.argv;
  console.log('Hello', name);
}
module.exports = {
  cli
}
//cli();