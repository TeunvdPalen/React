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
						<h1>{bier.bier}</h1>
						<p>Brouwerij: {bier.brouwerij}</p>
						{this.props.toon && <p>Alcholpercentage {bier.alchol}</p>}
					</div>
					)
				})}
				
			</div>
		);
	}
}

export default Bier;