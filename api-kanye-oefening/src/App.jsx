import React, { Component } from "react";

class App extends Component {
	state = { loading: true, quote: null }

	componentDidMount = () => {
		this.loadQuote()
	}

	loadQuote = () => {
		this.setState({loading: true})
		fetch('https://api.kanye.rest/')
			.then(res => res.json())
			.then(data => this.setState({loading: false, quote:data.quote}))
	}

	render() { 
		return ( 
			<div>
				<h1>Kanye says</h1>
				{this.state.loading ? <p>...</p> : <p>{this.state.quote}</p> }
				<button onClick={this.loadQuote}>Kanye says</button>
			</div>
		);
	}
}

export default App;