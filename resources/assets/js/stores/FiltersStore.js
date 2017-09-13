/**
 * Created by boneill on 8/3/17.
 */
/**
 * Created by Brian on 9/28/2016.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var displayFilters = false;

function flipDisplayFilters() {
    displayFilters = !displayFilters;
}

function emitChange() {
    FiltersStore.emit('change');
}

var FiltersStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    getDisplayFilters: function() {
        return displayFilters;
    }
});

function handleAction(action) {
    if (action.type === 'flip_display_filters') {
        flipDisplayFilters();
        emitChange();
    }
}


FiltersStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = FiltersStore;