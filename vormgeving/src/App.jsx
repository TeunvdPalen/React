import React, { Component } from "react";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}
	state = { 
		awesome: false,
		input: '',
	}

	toggleAwesomeness = () => {
		this.setState(prevState => {
			return { awesome: !prevState.awesome };
		});
	}
	
	render() { 
		let titleClasses = "App__Title";
		if (this.state.awesome === true) {
			titleClasses += " App__Title--awesome";
		}

		let inputStyles = "input"
		if (this.state.input.length > 0 && this.state.input.length < 10) {
			inputStyles += " error"
		}
		if (this.state.input.length >= 10) {
			inputStyles += " valid"
		}

		let buttonStyle = {
			color: this.state.awesome ? 'chartreuse' : 'aqua',
			borderColor: this.state.awesome ? 'chartreuse' : 'aqua',
			backgroundColor: 'black',
		}

		return ( 
			<div className="App__AppContainer">
				<button style={buttonStyle} onClick={this.toggleAwesomeness}>
					{this.state.awesome ? 'Make less awesome' : 'Make more awesome'}
				</button>
				<h1 className={titleClasses}>Vormgeving react</h1>
				<input 
					value={this.state.input} 
					onChange={(e) => this.setState({input: e.target.value})}
					className={inputStyles}
				/>
			</div>
		);
	}
}

export default App;