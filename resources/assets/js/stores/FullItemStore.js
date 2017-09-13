/**
 * Created by boneill on 8/3/17.
 */
/**
 * Created by Brian on 9/28/2016.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ArrayHelpers = require('../utils/ArrayHelpers');

var fullItem = {};

function setFullItem(newFullItem) {
    fullItem = newFullItem;
    console.log(newFullItem);
}

function setFullItemBlank() {
    fullItem = {};
}

function emitChange() {
    console.log('emit change');
    FullItemStore.emit('change');
}

var FullItemStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    getCurrentFullItem: function() {
        return fullItem;
    }
});

function handleAction(action) {
    if (action.type === 'view_full_item') {
        console.log('set full item action');
        setFullItem(action.item);
        emitChange();
    }
    else if (action.type === 'back_to_list') {
        setFullItemBlank();
        emitChange();
    }
}


FullItemStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = FullItemStore;