"use strict";

var React = require("react");

var ControlBar = React.createClass({
	render: function() {
		return (
			<div id="controlBar">
				<div id="color"></div>
				<div id="rotate"></div>
				<div id="sound"></div>
				<div onClick={this.props.changeCase}>Aa</div>
			</div>
		)
	}
});

module.exports = ControlBar;