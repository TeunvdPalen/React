import React, { Component } from 'react';

class PokemonSelector extends Component {
	state = { pokemon: [] }

	componentDidMount = () => {
		fetch('https://pokeapi.co/api/v2/pokemon')
			.then(res => res.json())
			.then(data => this.setState({pokemon:data.results}))
	}

	render() { 
		return ( 
			<select defaultValue="0" onChange={(e) => this.props.onChange(e.target.value)}>

				<option value="0" disabled>Select a pokemon</option>

				{this.state.pokemon.map((p, index) => {
					return <option key={index} value={p.name}>{p.name}</option>
				})}
			</select>
		);
	}
}

export default PokemonSelector;