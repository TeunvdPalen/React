import React, { Component } from "react";

//  api access 081eba5635083d237f963cb496c049c6


class CurrencyAmount extends Component {
	state = { input: '' }
	render() { 
		return ( 
			<div>
				<input type="number" onChange={(e) => this.setState({input:e.target.value})} value={this.state.input}/>
				<button onClick={this.calculate}> Bereken</button>
			</div>
		);
	}
}

export default CurrencyAmount;