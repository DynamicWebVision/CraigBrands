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

var CookieStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    getCookie: function(name) {
        var name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                var cookieValue = JSON.parse(c.substring(name.length, c.length));
                console.log(cookieValue);
                return cookieValue;
            }
        }
        return "";
    },
    storeCookie: function(cookieName, value, daysStored) {
        console.log('storking cookie');
        console.log(value);
        var d = new Date();
        d.setTime(d.getTime() + (daysStored*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        var jsonValue = JSON.stringify(value);
        document.cookie = cookieName+"=" + jsonValue + ";" + expires + ";path=/";
    }
});

function handleAction(action) {
    if (action.type === 'store_cookie') {
        storeCookie(action.cookie_name, action.cookie_value, action.days_stored);
    }
}


CookieStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = CookieStore;