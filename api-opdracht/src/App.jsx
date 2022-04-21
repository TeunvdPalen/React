import React, { Component } from "react";
import CurrencySelector from "./CurrencySelector";
import './App.css';
class App extends Component {
	state = { 

	}

	render() { 
		return ( 
			<div className="container">
				<h1>Currency rate converter</h1>
				<CurrencySelector />
			</div>
		);
	}
}

export default App;