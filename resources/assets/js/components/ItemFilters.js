/**
 * Created by Brian on 9/25/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var BrandStore = require('../stores/BrandStore');
var FiltersStore = require('../stores/FiltersStore');

var RadioButtonStyle = require('../components/RadioButtonStyle');
var ItemActionCreators = require('../actions/ItemActionCreators');
var FiltersActionCreators = require('../actions/FiltersActionCreators');
var BrandActionCreators = require('../actions/BrandActionCreators');

var ItemFilters = React.createClass({
    getInitialState: function() {
        return {
            brands: []
        }
    },

    componentDidMount: function() {

    },
    componentDidUpdate: function() {

    },
    componentWillUnMount: function() {

    },
    componentWillReceiveProps: function() {
        this.setState({
            brands: BrandStore.getBrands(),
            showFilters: FiltersStore.getDisplayFilters(),

        });
    },
    componentWillMount: function() {

    },
    onDataChange: function() {

    },
    changeBrandSelection: function(brand) {

        $(".brand-radio").removeClass('checked');
        $("#brand_option_"+brand.id).addClass('checked');

        ItemActionCreators.loadBrandItems(brand.id);
        BrandActionCreators.setCurrentBrand(brand.id);
    },
    flipShowFilters: function() {
        console.log('FLIPPING');
        FiltersActionCreators.flipDisplayFilters();
    },

    render: function() {
        var changeBrandSelection = this.changeBrandSelection;
        var flipShowFilters = this.flipShowFilters;

        console.log(this.state.showFilters);

        if (this.state.showFilters) {
            var className = "input-radio input-radio--innerlabel brand-radio m-l-10 m-t-10 width-150";
            var brandOptions = this.state.brands.map(function(brand) {
                return (
                    <RadioButtonStyle key={brand.id} value={brand.id} classes={className} name="brand_option" label={brand.name} handleClick={() => changeBrandSelection(brand)}></RadioButtonStyle>
                );
            });

            return (
                <div className="col-md-12 m-b-30">
                    <div className="col-md-12 m-b-30">

                    </div>

                    <form>
                        <div className="cta cta--horizontal text-center-xs">
                            <div className="col-sm-2">
                                <h4>Filter Items</h4>
                                <a className="btn btn--icon btn--sm" href="javascript:void(0);" onClick={() => flipShowFilters()}>
                                    <span className="btn__text"><i className="fa fa-compress" aria-hidden="true"></i>Hide Filters</span>
                                </a>
                            </div>
                            <div className="col-sm-10 col-sm-push-1">
                                {brandOptions}
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div className="col-md-12 m-b-30">
                    <a className="btn btn--icon btn--sm" href="javascript:void(0);" onClick={() => flipShowFilters()}>
                        <span className="btn__text"><i className="fa fa-expand" aria-hidden="true"></i>Show Filters</span>
                    </a>
                </div>
            );
        }


    }
});

module.exports = ItemFilters;