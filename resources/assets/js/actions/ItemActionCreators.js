/**
 * Created by Brian on 9/28/2016.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');

 function loadBrandItems(brandId) {
     var action = {
       type: 'items_call_to_serve'
     };
     AppDispatcher.dispatch(action);


     $.ajax('/items/'+brandId).done(function(data) {
         var action = {
             type: 'load_brand_items',
             items: data,
             brand: brandId
         };
         AppDispatcher.dispatch(action);
     });
 }

 function viewFullItem(item) {
     var action = {
         type: 'view_full_item',
         item: item
     }
     AppDispatcher.dispatch(action);
 }

 function backToList() {
     var action = {
         type: 'back_to_list'
     }
     AppDispatcher.dispatch(action);
 }

 module.exports = {
     loadBrandItems: loadBrandItems,
     viewFullItem: viewFullItem,
     backToList: backToList
 };

