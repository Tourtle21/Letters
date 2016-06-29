
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
			deg: 90,
			index: 1,
			color: ['black','red', 'blue', 'orange', 'purple', 'green','yellow','pink']
		}
	},
	changeColor: function() {
		if (this.state.index < 7) {
			this.setState({
				index: this.state.index + 1
			})
		} else {
			this.setState({
				index: 0
			})
		}
		document.getElementById('center').style.color = this.state.color[this.state.index]
		console.log(document.getElementById('center').style.col)
	},
	rotate: function() {
		this.setState({
			deg: this.state.deg + 90
		})
		document.getElementById('center').style.webkitTransform = 'rotate(' + this.state.deg +'deg)';
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