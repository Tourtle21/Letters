'use strict';

var React = require("react");

var RotateTool = React.createClass({
	render: function() {
		return (
			<div onClick={this.props.rotate} id="rotate"></div>
		)
	}
})

module.exports = RotateTool;