import React, { Component } from "react";
import CurrencyAmount from "./CurrencyAmount";
import CurrencySelector from "./CurrencySelector";

class App extends Component {
	state = { amount: 0 }



	calculate = (value) => {
		this.amount(value)
	}

	render() { 
		return ( 
			<div>
				<h1>Currency rate converter</h1>
				<CurrencySelector />
				<CurrencyAmount onclick={this.calculate}/>
			</div>
		);
	}
}

export default App;