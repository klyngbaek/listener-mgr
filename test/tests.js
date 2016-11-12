var test = require('tape');
var Mgr = require('../index.js');
var EventEmitter = require('events');

test('Test basic listener', function (t) {

    var mgr = new Mgr();

    mgr.setTimeout(function() {
        console.log('foo1');
    }, 200);

    mgr.setInterval(function() {
        console.log('foo1');
    }, 200);

    var emitter = new EventEmitter();
    mgr.setListener(emitter, 'data', function() {
        console.log('foo3');
    }, 200);

    mgr.clearAll();
    t.end();

});
