"use strict";

var React = require("react");
var ColorTool = require("../tools/colorTool")
var RotateTool = require("../tools/rotateTool")

var ControlBar = React.createClass({
	render: function() {
		return (
			<div id="controlBar">
				<ColorTool changeColor= {this.props.changeColor} />
				<RotateTool rotate= {this.props.rotate} />
				<div id="sound"></div>
				<div onClick={this.props.changeCase}>Aa</div>
			</div>
		)
	}
});

module.exports = ControlBar;