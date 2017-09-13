/**
 * Created by Brian on 9/28/2016.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');

function loadBrands() {
    $.ajax('/brands').done(function(data) {
        var action = {
            type: 'load_brands',
            brands: data
        };
        AppDispatcher.dispatch(action);
    });
}

function setCurrentBrand(brand) {
    var action = {
        type: 'set_current_brand',
        current_brand: brand
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    loadBrands: loadBrands,
    setCurrentBrand: setCurrentBrand
};

