/**
 * ListenerManager for managing events!
 */

module.exports = ListenerManager;

function ListenerManager() {
    this._listenerCount = 0;
    this.timeoutIds     = {};
    this.intervalIds    = {};
    this.listenerInfos  = {};
}

ListenerManager.prototype.clearAll = function () {
    for (var timeoutId in this.timeoutIds) {
        console.log(timeoutId);
        console.log(timeoutId.id);
        // clearTimeout(timeoutId);
    }
    for (var intervalId in this.intervalIds) {
        clearInterval(intervalId);
    }
    for (var listenerId in this.listenerInfos) {
        var info = this.listenerInfos[listenerId];
        info.obj.removeListener(info.event, info.cb);
    }
    this.timeoutIds     = {};
    this.intervalIds    = {};
    this.listenerInfos  = {};
};

ListenerManager.prototype.clearTimeout = function (timeoutId) {
    clearTimeout(timeoutId);
    delete this.timeoutIds[timeoutId];
};
ListenerManager.prototype.setTimeout = function (cb, timeout) {
    var timeoutId = setTimeout(cb, timeout);
    console.log(timeoutId);
    this.timeoutIds[timeoutId] = true;
};

ListenerManager.prototype.clearInterval = function (intervalId) {
    clearInterval(intervalId);
    delete this.timeoutIds[intervalId];
};
ListenerManager.prototype.setInterval = function (cb, interval) {
    var intervalId = setTimeout(cb, interval);
    this.intervalIds[intervalId] = true;
};

ListenerManager.prototype.clearListener = function (listenerId) {
    var listenerInfo = this.listenerInfos[listenerId];
    listenerInfo.obj.removeListener(listenerInfo.event, listenerInfo.cb);
    delete this.listenerInfos[listenerId];

};
ListenerManager.prototype.setListener = function (obj, event, cb) {
    obj.addListener(event, cb);
    var listenerInfo = {
        obj: obj,
        event: event,
        cb: cb
    };
    this.listenerInfos[this._listenerCount++] = listenerInfo;
};

