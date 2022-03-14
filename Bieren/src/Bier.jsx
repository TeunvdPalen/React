import React, { Component } from 'react';

class Bier extends Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	render() { 
		return ( 
			<div>
				{this.props.bierLijst.map((bier) => {
					return (
					<div>
						<h1>{bier.bier} <button onClick={this.props.delete}>Verwijder Bier</button></h1>
						<p>Brouwerij: {bier.brouwerij}</p>
						{this.props.toon && <p>Alcholpercentage: <button>-</button> {bier.alchol} <button>+</button> </p>}
					</div>
					)
				})}
				
			</div>
		);
	}
}

export default Bier;