var React = require('react');

var ItemHeader = React.createClass({
    render: function() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <a className="btn btn--primary btn--icon" href="javascript:void(0);" onClick={this.props.handleClick} >
                                <span className="btn__text"><i className="fa fa-chevron-circle-left"></i>Back to List</span>
                            </a>
                            <h1>{this.props.title}</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
});

module.exports = ItemHeader;