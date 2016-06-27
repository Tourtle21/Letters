"use strict";

var React = require("react");
var Center = require("./center/Center.js");
var LetterList = require("./LetterList/LetterList");


var App = React.createClass({
	getInitialState: function() {
		return {
			letter: ""
		}
	},
	display: function(letter) {
		console.log({letter}.letter.letter)
		this.setState({
			letter: {letter}.letter.letter
		})
	},

	render: function() {
		return (
			<div>
				<LetterList 
					display={this.display}
				/>
				<div id="controlBar"></div>
				<Center 
					letter={this.state.letter}
				/>
			</div>
		)
	}
});

module.exports = App;

