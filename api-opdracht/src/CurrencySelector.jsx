import React, { Component } from 'react';

class CurrencySelector extends Component {
	state = { 
		loading: true,
		exchangeRates: [],
		currencies: [],
		fromCurrency: "EUR",
		toCurrency: "",
	}

	// this.state.exchangeRates[this.state.fromCurrency] * this.state.exchangeRates[this.state.toCurrency]

	componentDidMount = () => {
		this.setState({loading: true})
		fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=83ec7c5890446bff390e13f29ace47f8&base=EUR`)
			.then(res => res.json())
			.then(data => {
				this.setState({loading: false, exchangeRates: data.rates, currencies: Object.keys(data.rates)});
				console.log(data.rates)
			});
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.fromCurrency !== this.state.fromCurrency) {
			fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=83ec7c5890446bff390e13f29ace47f8&base=${this.state.fromCurrency}`)
			.then(res => res.json())
			.then(data => {
				this.setState({exchangeRates: data.rates});
				console.log(data.rates)
			});
		}
	}

	onChangeHandlerFrom = (e) => {
		this.setState({fromCurrency: e.target.value});
		console.log(this.state.fromCurrency+ ' Onchangefunctie')
	}

	onChangeHandlerTo = (e) => {
		this.state.toCurrency =  e.target.value
		console.log(this.state.toCurrency)
	}

	render() { 
		if (this.state.loading) {
			return <p>Loading...</p>
		}
		return ( 
			<div>
				<p>
					Converts rates from
					<select onChange={this.onChangeHandlerFrom} defaultValue="0">
						<option value="0" disabled>Select currency 1</option>
						{this.state.currencies.map((valuta, i) => {
							return <option key={i} value={valuta}>{valuta}</option>
						})}
					</select>
					to
					<select onChange={this.onChangeHandlerTo} defaultValue="0">
						<option value="0" disabled>Select currency 2</option>
						{this.state.currencies.map((valuta, i) => {
							return <option key={i} value={valuta}>{valuta}</option>
						})}
					</select>
				</p>
			
			</div>
		);
	}
}

export default CurrencySelector;