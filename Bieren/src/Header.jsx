import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	state = {  }

	render() { 
		return ( 
			<div>
				<h1>Bieren</h1>
				<h2>Er zijn veel bieren in België.</h2>
				<button onClick={this.props.toggle}>Toon alcoholpercentage</button>
			</div>
		);
	}
}

export default Header;