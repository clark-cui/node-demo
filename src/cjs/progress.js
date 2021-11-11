// need npm download progress
const ProgressBar = require('progress');

module.exports = function progressBar() {
  const bar = new ProgressBar(':bar', {
    total: 10
  });
  const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
      clearInterval(timer);
    }
  }, 100)
}