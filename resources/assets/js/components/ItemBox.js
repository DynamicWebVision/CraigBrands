/**
 * Created by Brian on 9/25/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var BrandStore = require('../stores/BrandStore');
var ItemStore = require('../stores/ItemStore');
var FullItemStore = require('../stores/FullItemStore');
var FiltersStore = require('../stores/FiltersStore');

var ItemActionCreators = require('../actions/ItemActionCreators');

var ItemFullView = require('../components/ItemFullView');
var ItemList = require('../components/ItemList');

var ItemBox = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            fullItem: {}
        }
    },

    componentDidMount: function() {
        ItemStore.addChangeListener(this.onDataChange);
        BrandStore.addChangeListener(this.onDataChange);
        FullItemStore.addChangeListener(this.onDataChange);
        FiltersStore.addChangeListener(this.onDataChange);
        FullItemStore.addChangeListener(this.onDataChange);
    },
    componentDidUpdate: function() {
        // var currentItems = ItemStore.getCurrentItems();
        //
        // if (currentItems.length > 0) {
        //     var currentBrand = this.state.currentBrand;
        //     var cookieName = currentBrand+'_items';
        //
        //     CookieActionCreators.storeCookie(cookieName, currentItems, 7);
        // }
    },
    componentWillUnMount: function() {
        ItemStore.removeChangeListener(this.onDataChange);
        BrandStore.removeChangeListener(this.onDataChange);
        FullItemStore.removeChangeListener(this.onDataChange);
        FiltersStore.removeChangeListener(this.onDataChange);
        FullItemStore.removeChangeListener(this.onDataChange);
    },
    onDataChange: function() {
        this.setState({
            items: ItemStore.getCurrentItems(),
            fullItem: FullItemStore.getCurrentFullItem()
        });
    },
    componentWillMount: function() {

    },

    viewFullItem: function(item) {
        ItemActionCreators.viewFullItem(item);
    },

    render: function() {
        var viewFullItem = this.viewFullItem;

        if (typeof this.state.fullItem.title == 'undefined') {

            return(
                <div>
                    <ItemList></ItemList>
                </div>
            );
        }

        else {
            return (
                <div>
                    <ItemFullView></ItemFullView>
                </div>

            );
        }
    }
});

module.exports = ItemBox;