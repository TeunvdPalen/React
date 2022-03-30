import React, { Component } from "react";

//  api access 081eba5635083d237f963cb496c049c6
//  api access 83ec7c5890446bff390e13f29ace47f8


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