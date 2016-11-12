var Mgr = require('../index.js');
var EventEmitter = require('events');

var mgr = new Mgr();

var emitter = new EventEmitter();
mgr.setListener(emitter, 'data', function(data) {
    console.log(data);
}, 200);

mgr.setTimeout(function() {
    emitter.emit('data', 'foo1');
}, 500);

mgr.setTimeout(function() {
    emitter.emit('data', 'foo2');
}, 1000);

mgr.setInterval(function() {
    emitter.emit('data', 'foo3');
}, 200);


setTimeout(function() {
    mgr.clearAll();
}, 5000);
