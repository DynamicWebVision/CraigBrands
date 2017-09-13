/**
 * Created by Brian on 9/28/2016.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');

function flipDisplayFilters() {
    var action = {
        type: 'flip_display_filters'
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    flipDisplayFilters: flipDisplayFilters
};

