/**
 * Created by Brian on 9/25/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var FullItemStore = require('../stores/FullItemStore');

var ItemActionCreators = require('../actions/ItemActionCreators');

var ItemHeader = require('../components/ItemHeader');
var Image = require('../components/Image');

var ItemFullView = React.createClass({
    getInitialState: function() {
        return {
            fullItem: {}
        }
    },

    componentDidMount: function() {

        //Theme Code To Formulate the Slider
        $('.slider').each(function(index){

            var slider = $(this);
            var sliderInitializer = slider.find('ul.slides');
            sliderInitializer.find('>li').addClass('slide');
            var childnum = sliderInitializer.find('li').length;
            var arrows = false;
            var paging = false;
            var timing = 7000;
            var autoplay = true;
            var draggable = mr.sliders.draggable;
            if(slider.attr('data-arrows') === 'true'){
                arrows = true;
            }else{
                arrows = false;
            }
            if(slider.attr('data-autoplay') === 'false'){
                autoplay = false;
            }else{
                autoplay = true;
            }
            if(slider.attr('data-paging') === 'true' && sliderInitializer.find('li').length > 1){
                paging = true;
            }else{
                paging = false;
            }
            if(slider.attr('data-timing')){
                timing = slider.attr('data-timing')*1;
            }
            // Set data attribute to inidicate the number of children in the slider
            slider.attr('data-children',childnum);

            if(childnum < 2){
                draggable = false;
            }

            $(sliderInitializer).flickity({
                cellSelector: '.slide',
                cellAlign: 'left',
                wrapAround: true,
                pageDots: paging,
                prevNextButtons: arrows,
                autoPlay: timing,
                draggable: draggable,
                imagesLoaded: true
            });

            $(sliderInitializer).on('scroll.flickity', function( event, progress ) {
                if(slider.find('.is-selected').hasClass('controls--dark')){
                    slider.addClass('controls--dark');
                }else{
                    slider.removeClass('controls--dark');
                }
            });
        });
    },
    componentDidUpdate: function() {
        //Theme Code To Formulate the Slider
        $('.slider').each(function(index){

            var slider = $(this);
            var sliderInitializer = slider.find('ul.slides');
            sliderInitializer.find('>li').addClass('slide');
            var childnum = sliderInitializer.find('li').length;
            var arrows = false;
            var paging = false;
            var timing = 7000;
            var autoplay = true;
            var draggable = mr.sliders.draggable;
            if(slider.attr('data-arrows') === 'true'){
                arrows = true;
            }else{
                arrows = false;
            }
            if(slider.attr('data-autoplay') === 'false'){
                autoplay = false;
            }else{
                autoplay = true;
            }
            if(slider.attr('data-paging') === 'true' && sliderInitializer.find('li').length > 1){
                paging = true;
            }else{
                paging = false;
            }
            if(slider.attr('data-timing')){
                timing = slider.attr('data-timing')*1;
            }
            // Set data attribute to inidicate the number of children in the slider
            slider.attr('data-children',childnum);

            if(childnum < 2){
                draggable = false;
            }

            $(sliderInitializer).flickity({
                cellSelector: '.slide',
                cellAlign: 'left',
                wrapAround: true,
                pageDots: paging,
                prevNextButtons: arrows,
                autoPlay: timing,
                draggable: draggable,
                imagesLoaded: true
            });

            $(sliderInitializer).on('scroll.flickity', function( event, progress ) {
                if(slider.find('.is-selected').hasClass('controls--dark')){
                    slider.addClass('controls--dark');
                }else{
                    slider.removeClass('controls--dark');
                }
            });
        });
    },
    componentWillUnMount: function() {
        console.log('IFV - Component Will UnMOunt Remove DC');
    },
    componentWillMount: function() {
        this.setState({
            fullItem: FullItemStore.getCurrentFullItem()
        });
    },
    componentWillReceiveProps: function() {
        this.setState({
            fullItem: FullItemStore.getCurrentFullItem()
        });
        console.log(FullItemStore.getCurrentFullItem());
    },
    componentWillUpdate: function() {
        this.setState({
            fullItem: FullItemStore.getCurrentFullItem()
        });
    },
    backToList: function() {
        ItemActionCreators.backToList();
    },

    render: function() {
        console.log(this.state.fullItem);

        var ItemImage = this.state.fullItem.item_image.map(function(image) {
            return (
                <li>
                    <Image key={image.id} url={image.main}></Image>
                </li>
            );
        });

        var trueValue = "true";
        var url = 'https://houston.craigslist.org/fuo/d'+this.state.fullItem.craigslist_url;
        var backToList = this.backToList;

        return (
            <div>
                <ItemHeader title={this.state.fullItem.title} handleClick={() => backToList()}></ItemHeader>
                <section className="space--lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 col-md-6">
                                <div className="slider border--round boxed--border" data-paging={trueValue} data-arrows={trueValue}>
                                    <ul className="slides">
                                        {ItemImage}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-5 col-md-4 col-md-offset-1">
                                <div className="text-block">
                                    <span className="h4 inline-block">${this.state.fullItem.price}</span>
                                </div>
                                <p>
                                    {this.state.fullItem.description}
                                </p>
                                <div className="boxed boxed--border">
                                    <div>
                                        <strong>
                                            Manufacturer:
                                        </strong>
                                        <span>{this.state.fullItem.manufacturer}</span>
                                    </div>
                                    <div>
                                        <strong>
                                            Condition:
                                        </strong>
                                        <span>{this.state.fullItem.item_condition}</span>
                                    </div>
                                    <div>
                                        <strong>
                                            Dimensions:
                                        </strong>
                                        <span>{this.state.fullItem.dimensions}</span>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-8">
                                    <a className="btn btn--primary" target="_blank" href={url}>
                                        <span className="btn__text">View Ad</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        );
    }
});

module.exports = ItemFullView;