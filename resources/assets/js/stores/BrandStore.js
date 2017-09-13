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

var brands = [];
var selectedBrand = 1;

function setBrandItems(setBrands) {
    brands = setBrands;
}

function setCurrentBrand(brand) {
    selectedBrand = brand;
}

function emitChange() {
    BrandStore.emit('change');
}

var BrandStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    getBrands: function() {
        return brands;
    },
    getCurrentBrand: function() {
        return selectedBrand;
    }
});

function handleAction(action) {
    if (action.type === 'load_brands') {
        setBrandItems(action.brands);
        emitChange();
    }
    if (action.type === 'set_current_brand') {
        setCurrentBrand(action.current_brand);
        emitChange();
    }
}


BrandStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = BrandStore;