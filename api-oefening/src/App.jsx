import React, { Component } from "react";
import PokemonDetail from "./PokemonDetail";
import PokemonSelector from "./PokemonSelector";


class App extends Component {
	state = { selectedPokemon: null }

	selectedPokemon = (name) => {
		this.setState({selectedPokemon:name})
	}

	render() { 
		return ( 
			<div>
				<PokemonSelector onChange={this.selectedPokemon} />
				{this.state.selectedPokemon != null && <PokemonDetail selectedPokemon={this.state.selectedPokemon}/>}
			</div>
		);
	}
}

export default App;