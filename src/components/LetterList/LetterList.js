"use strict";

var React = require("react");
var Letters = require("../../mockApi/letterData").letters;

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
			<div id="letters">
				{Letters.map(this.LettersBox, this)}
			</div>
		)
	}
})

module.exports = LetterList;