"use strict";

var React = require("react");
var Letters = require("../mockApi/letterData");


var App = React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<Letters />
				</div>
			</div>
		)
	}
});

module.exports = App;

