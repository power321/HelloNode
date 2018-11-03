var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener 1
var listener1 = function listener1() {
    console.log('listener1 start');
}

//listener 2
var listener2 = function listener2() {
    console.log('listener2 start');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " listeners of connection");

//emit connection event
eventEmitter.emit('connection');

//remove listener1
eventEmitter.removeListener('connection', listener1);
console.log('remove listener1');

eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " listeners of connection");

console.log('end');