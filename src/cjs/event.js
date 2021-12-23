const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// first
myEmitter.on('event', () => {
  console.log(`first监听`)
});
//second
myEmitter.on('event', (arg1, arg2) => {
  console.log(`second监听${arg1,arg2}`)
})
//third
myEmitter.on('event', (...args) => {
  console.log(`third监听${args.join(',')}`)
})

myEmitter.emit('event', 1, 2, 3, 4, 5);
myEmitter.removeAllListeners('event');