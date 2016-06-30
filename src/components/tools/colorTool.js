'use strict';

var React = require("react");

var ColorTool = React.createClass({
	render: function() {
		return (
			<div onClick={this.props.changeColor} id="color"></div>
		)
	}
})

module.exports = ColorTool;
