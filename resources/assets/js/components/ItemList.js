/**
 * Created by Brian on 9/25/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var ItemStore = require('../stores/ItemStore');
var BrandStore = require('../stores/BrandStore');
var CookieStore = require('../stores/CookieStore');

var ItemActionCreators = require('../actions/ItemActionCreators');
var CookieActionCreators = require('../actions/CookieActionCreators');

var ItemListing = require('../components/ItemListing');
var ItemFilters = require('../components/ItemFilters');
var LoadingSection = require('../components/LoadingSection');

var ItemList = React.createClass({
    getInitialState: function() {
        return {
            items: ItemStore.getCurrentItems(),
            fullItem: {},
            itemsLoading: ItemStore.getItemsLoading()
        }
    },

    componentDidMount: function() {

    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function() {
        var currentBrand = BrandStore.getCurrentBrand();
        var cookieName = currentBrand+'_items';

        this.setState({
            items: ItemStore.getCurrentItems(),
            itemsLoading: ItemStore.getItemsLoading(),
            loadedItems: CookieStore.getCookie(cookieName),
            currentBrand: currentBrand
        });
    },
    componentWillUpdate: function() {

    },
    componentWillUnMount: function() {

    },
    onDataChange: function() {

    },
    componentWillMount: function() {
        var currentBrand = BrandStore.getCurrentBrand();
        var cookieName = currentBrand+'_items';

        this.setState({
            items: ItemStore.getCurrentItems(),
            itemsLoading: ItemStore.getItemsLoading(),
            loadedItems: CookieStore.getCookie(cookieName),
            currentBrand: currentBrand
        });
    },
    viewFullItem: function(item) {
        ItemActionCreators.viewFullItem(item);
    },

    render: function() {

        if (this.state.itemsLoading) {
            return (
                <div>
                    <ItemFilters></ItemFilters>
                    <LoadingSection></LoadingSection>
                </div>
                );
        }
        else {
            var viewFullItem = this.viewFullItem;

            var itemList = this.state.items.map(function(item) {
                return (
                    <ItemListing key={item.id} handleClick={() => viewFullItem(item)} title={item.title} new={item.new}
                                 thumb={item.thumb} price={item.price} postedDate={item.posted_date}></ItemListing>
                );
            });

            return(
                <div>
                    <ItemFilters></ItemFilters>
                    {itemList}
                </div>
            );
        }
        cookie.save('alreadyViewedItems',itemIds, {});
    }
});

module.exports = ItemList;