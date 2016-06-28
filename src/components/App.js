
var React = require("react");
var Center = require("./center/Center.js");
var LetterList = require("./LetterList/LetterList");
var ControlBar = require("./LetterList/ControlBar")

var App = React.createClass({

	getInitialState: function() {
		return {
			letter: ""
		}
	},
	changeCase: function() {
		console.log(this.state.letter)
		if (this.state.letter == this.state.letter.toUpperCase()) {
			this.setState({
				letter: this.state.letter.toUpperCase() 
			})
		}
		else {
			this.setState({
				letter: this.state.letter.toLowerCase() 
			})
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
				<ControlBar 
					changeCase={this.changeCase}
				/>
				<Center 
					letter={this.state.letter}
				/>
			</div>
		)
	}
});

module.exports = App;

