var React = require('react');

var RadioButtonStyle = React.createClass({
    render: function() {
        var elementId = this.props.name+"_"+this.props.value;
        return (
            <div id={elementId} className={this.props.classes} onClick={this.props.handleClick} >
                <label>{this.props.label}</label>
                <div className="inner"></div>
                <input type="radio" name={this.props.name} value={this.props.value} />
            </div>
        );
    }
});

module.exports = RadioButtonStyle;