import React, { Component } from "react";
import CurrencySelector from "./CurrencySelector";

class App extends Component {
	state = { 

	}

	render() { 
		return ( 
			<div>
				<h1>Currency rate converter</h1>
				<CurrencySelector />
			</div>
		);
	}
}

export default App;