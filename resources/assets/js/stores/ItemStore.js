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
var CookieStore = require('./CookieStore');

var items = [];
var itemIds = [];
var itemsLoading = true;

document.cookie = JSON.stringify();

function setBrandItems(loadedItems, brand) {
    items = loadedItems;
    itemIds = convertArrayObjectsPropertyToArray(loadedItems, 'id');
    itemsLoading = false;
    var cookieName = brand+'_items';

    var viewedItems = CookieStore.getCookie(cookieName);

    for (i = 0; i < items.length; i++) {
        if (viewedItems.indexOf(items[i].id) != 0) {
            items[i].new = false;
        }
        else {
            items[i].new = true;
        }
    }

    CookieStore.storeCookie(cookieName, itemIds, 7);
}

function setFullItem(item) {
    fullItem = item;
}

function setLoadingTrue() {
    itemsLoading = true;
}

function convertArrayObjectsPropertyToArray(array_objects, property) {
    var new_array = [];

    for (i = 0, len = array_objects.length; i < len; i++) {
        new_array.push(array_objects[i][property]);
    }
    return new_array;
}

function setLoadingFalse() {
    itemsLoading = false;
}

function emitChange() {
    ItemStore.emit('change');
}

var ItemStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    getCurrentItems: function() {
        return items;
    },
    getItemIds: function() {
        return items;
    },
    getItemsLoading: function() {
        return itemsLoading;
    }
});

function handleAction(action) {
    if (action.type === 'load_brand_items') {
        setBrandItems(action.items, action.brand);
        emitChange();
    }
    else if (action.type === 'view_full_item') {
        setFullItem(action.items);
        emitChange();
    }
    else if (action.type === 'items_call_to_serve') {
        setLoadingTrue();
        emitChange();
    }
    else if (action.type === 'back_to_list') {
        setLoadingFalse();
    }
    else if (action.type === 'store_viewed_items_cookie') {
        storeViewedItemsCookies(action.items, action.brand);
    }
}

ItemStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = ItemStore;