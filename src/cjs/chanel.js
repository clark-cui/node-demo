module.exports = function chanel() {
  const EventEmitter = require('events').EventEmitter;
  const chanel = new EventEmitter();
  chanel.on('join', () => {
    console.log('Welcome!')
  })
  let count = 0;
  let timer = setInterval(() => {
    chanel.emit('join');
    if (count > 10) {
      clearInterval(timer);
    }
    count += 1;
  }, 200)
}