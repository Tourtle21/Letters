
var React = require("react");
var Center = require("./center/Center.js");
var LetterList = require("./LetterList/LetterList");
var ControlBar = require("./LetterList/ControlBar")
var Letters = require("../mockApi/letterData").letters;

var App = React.createClass({
	getInitialState: function() {
		return {
			letters: Letters,
			letter: "",
			index: 1,
			color: ['black','firebrick', 'dodgerblue', 'darkorange', 'darkorchid', 'limegreen','gold','deeppink', 'darkturquoise']
		}
	},
	changeColor: function() {
		console.log(this.state.index, this.state.color.length - 1)
		if (this.state.index < this.state.color.length - 1) {
			this.setState({
				index: this.state.index + 1
			})
		} else {
			this.setState({
				index: 0
			})
		}
		console.log(this.state.color[this.state.index])
		document.getElementById('center').style.color = this.state.color[this.state.index]
	},
	rotate: function() {

		document.getElementById('letter').classList.toggle('rotate');
	},
	changeCase: function() {
		newLetters = [];
		var type = true;
		this.setState({
				letters: []
		})
		if (this.state.letter !== this.state.letter.toUpperCase()) {
			this.setState({
				letter: this.state.letter.toUpperCase()
			})
		}
		else {
			this.setState({
				letter: this.state.letter.toLowerCase()
			})
			type = false;
		}
		if (this.state.letters[0] == this.state.letters[0].toLowerCase()) {
			for (var i = 0; i <= this.state.letters.length - 1; i++) {
				newLetters.push(this.state.letters[i].toUpperCase())
			}
		} else {
			for (var i = 0; i <= this.state.letters.length - 1; i++) {
				newLetters.push(this.state.letters[i].toLowerCase())
			}
		}

		this.setState({
			letters: newLetters
		});

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
					letters={this.state.letters}
				/>
				<ControlBar
					changeCase={this.changeCase}
					rotate={this.rotate}
					changeColor={this.changeColor}
				/>
				<Center
					letter={this.state.letter}
				/>
			</div>
		)
	}
});

module.exports = App;

//
