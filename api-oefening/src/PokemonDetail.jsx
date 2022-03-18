import React, { Component } from "react";

class PokemonDetail extends Component {
	state = { 
		loading: true,
		data: {}
	}

	componentDidMount = () => {
		this.loadPokemon(this.props.selectedPokemon)
	}

	componentDidUpdate = () => {
		this.loadPokemon(this.props.selectedPokemon)
	}

	loadPokemon = (name) => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then(res => res.json())
			.then(data => this.setState({loading: false, data}))
	}

	render() { 
		if (this.state.loading) {
			return <p>Loading...</p>
		}
		return ( 
			<div>
				<h1>{this.state.data.name}</h1>
				<div>
					<img src={this.state.data.sprites.front_default} alt="front" />
					<img src={this.state.data.sprites.back_default} alt="back" />
				</div>
				<ul>
					<li>Weight: {this.state.weight} hg</li>
					<li>Height: {this.state.height} dm</li>
				</ul>
			</div>
		);
	}
}

export default PokemonDetail;