var React = require('react');

var Image = React.createClass({
    render: function() {
        return (
            <img alt="Image" src={this.props.url} />
        );
    }
});

module.exports = Image;