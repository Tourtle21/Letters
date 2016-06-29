"use strict";

var React = require("react");

var Center = React.createClass({
	render: function() {
		return (
			<div id="center">{this.props.letter}</div>
		)
	}
})

module.exports = Center;