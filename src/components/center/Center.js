"use strict";

var React = require("react");

var Center = React.createClass({
	render: function() {
		return (
			<div id="center">
				<div id="letter">
					{this.props.letter}
				</div>
			</div>
		)
	}
})

module.exports = Center;
