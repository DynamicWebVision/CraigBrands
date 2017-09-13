var React = require('react');

var ItemListing = React.createClass({


    render: function() {
        if (this.props.new) {
            var newIndicator = <span className="label">New!</span>;
        }
        else {
            var newIndicator = "";
        }

        return (
            <div className="masonry__item col-sm-6 col-md-3" onClick={this.props.handleClick}>
                <div className="product">
                    {newIndicator}
                    <a href="#">
                        <img className="full-img-thumb" alt="Image" src={this.props.thumb} />
                    </a>
                    <a className="block" href="#">
                        <div>
                            <h5>{this.props.title}</h5>
                            <span> {this.props.postedDate}</span>
                        </div>
                        <div>
                            <span className="h4 inline-block">${this.props.price}</span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = ItemListing;