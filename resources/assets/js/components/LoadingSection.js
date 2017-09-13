var React = require('react');

var LoadingSection = React.createClass({
    render: function() {
        return (

            <div className="col-md-12 flex-container m-t-20">
                <div className="flex-row">
                    <div className="section-loader"></div>
                </div>
            </div>
        );
    }
});

module.exports = LoadingSection;