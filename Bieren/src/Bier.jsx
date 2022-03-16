import React, { Component } from 'react';

class Bier extends Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	render() { 
		return ( 
			<div>
				{this.props.bierLijst.map((bier, i) => {
					return (
					<div key={i}>
						<h1>
							{bier.bier} 
							<button 
								onClick={() => this.props.onDelete(bier)}>
								Verwijder Bier
							</button>
						</h1>
						<p>Brouwerij: {bier.brouwerij}</p>
						{this.props.toon && 
							<p>Alcholpercentage: 
								<button 
									onClick={() => this.props.onChange(-1, bier)}>
									-
								</button> 
								{bier.alchol} 
								<button 
									onClick={() => this.props.onChange(1, bier)}>
									+
								</button> 
							</p>
						}
					</div>
					)
				})}
				
			</div>
		);
	}
}

export default Bier;