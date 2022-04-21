import React, { Component } from 'react';

//  api access 081eba5635083d237f963cb496c049c6
//  api access 83ec7c5890446bff390e13f29ace47f8
class CurrencySelector extends Component {
	state = { 
		loading: true,
		exchangeRates: [],
		currencies: [],
		fromCurrency: "",
		toCurrency: "",
		input: '',
		uitkomst: 0,
		error: ""
	}

	handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			this.bereken()
		}
	}

	bereken = () => {
		console.log('click')
		if (this.state.input > 0) {
			let temp = this.state.exchangeRates[this.state.fromCurrency] * this.state.exchangeRates[this.state.toCurrency]
		temp = Math.floor((temp * parseInt(this.state.input))*100 ) / 100
		this.setState({uitkomst: temp})
		this.setState({error: ""})
		} else {
			this.setState({error: "Put in a value"})
		}
	}

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
	}

	onChangeHandlerTo = (e) => {
		this.setState({toCurrency: e.target.value})
	}

	render() { 
		if (this.state.loading) {
			return <p>Loading...</p>
		}
		return ( 
			<div>
				<p>
					Converts rates from
					<select className='currency-select' onChange={this.onChangeHandlerFrom} defaultValue="0">
						<option value="0" disabled>Select currency 1</option>
						{this.state.currencies.map((valuta, i) => {
							return <option key={i} value={valuta}>{valuta}</option>
						})}
					</select>
					to
					<select className='currency-select' onChange={this.onChangeHandlerTo} defaultValue="0">
						<option value="0" disabled>Select currency 2</option>
						{this.state.currencies.map((valuta, i) => {
							return <option key={i} value={valuta}>{valuta}</option>
						})}
					</select>
				</p>
				<div>
					<label className='bold'> {this.state.fromCurrency}
					<input type="number" className='currency-amount' onKeyDown={this.handleKeyDown} onChange={(e) => this.setState({input:e.target.value})} value={this.state.input}/>
					</label>
					<button onClick={this.bereken}> Bereken</button>
					<p className='error'>{this.state.error}</p>
				</div>
				<p className='result'>
					{this.state.uitkomst}  {this.state.toCurrency}
				</p>
			</div>
		);
	}
}

export default CurrencySelector;