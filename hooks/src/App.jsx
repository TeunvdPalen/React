import React, { Component } from "react";

class App extends Component {
	state = { visible: false, input: '', }

	toggle = () => {
		this.setState((state) => { return { visible: !state.visible }})
	}
	render() { 
		return ( <div>
			<button onClick={this.toggle}>{this.state.visible ? 'Hide' : 'Show'}</button>

			{this.state.visible && <div>
				<input value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} />
				<p>This is jus another text with input: {this.state.input}</p>
			</div>}
		</div> );
	}
}

export default App;