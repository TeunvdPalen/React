import React, { Component } from 'react';

class CurrencySelector extends Component {
	state = { loading: true, exchange: [] }

	componentDidMount = () => {
		this.setState({loading: true})
		fetch('http://api.exchangeratesapi.io/v1/latest?access_key=081eba5635083d237f963cb496c049c6&base=EUR')
			.then(res => res.json())
			.then(data => this.setState({loading: false, exchange:data.rates}))
	}

	render() { 
		// if (this.state.exchange) {
		// 	return <p>Loading...</p>
		// }
		return ( 
			<div>
				<span>this data from API {this.state.exchange}</span>
				<p>
					Converts rates from
					<select defaultValue="0">
						<option value="0" disabled>Select currency 1</option>
						<option id='euro' value="1">EUR</option>
						<option id='czk' value="1">CZK</option>
					</select>
					to
					<select defaultValue="0">
						<option value="0" disabled>Select currency 2</option>
						{Object.keys(this.state.exchange).map(valuta => {
							return <option value={valuta.rates}>{valuta.rates}</option>
						})}
					</select>
					this.state.exchange[this.state.sleceted_rate]
				</p>
			</div>
		);
	}
}

export default CurrencySelector;