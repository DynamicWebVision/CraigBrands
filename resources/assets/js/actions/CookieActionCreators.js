/**
 * Created by Brian on 9/28/2016.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');

function storeCookie(cookieName, cookieValue, daysStored) {
    var action = {
        type: 'store_cookie',
        cookie_name: cookieName,
        cookie_value: cookieValue,
        days_stored: daysStored
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    storeCookie: storeCookie
};

