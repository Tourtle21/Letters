"use strict";

var React = require("react");
var Letters = require("../mockApi/letterData").letters;

var LetterList = React.createClass({
	LettersBox: function(letter) {
		return (
			<div className="btn square" onClick={this.props.display.bind(this, {letter})} key={letter}>
				{letter}
			</div>
		)
	},
	render: function() {
		return (
			{Letters.map(LettersBox, this)}
		)
	}
})

module.exports = LetterList;