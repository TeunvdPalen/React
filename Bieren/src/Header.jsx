import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	state = {};

	render() {
		return (
			<div>
				<h1 className='text-2xl font-bold'>Bieren</h1>
				<h2 className='text-xl'>Er zijn veel bieren in België.</h2>
				<button className='focus:ring' onClick={this.props.toggle}>
					Toon alcoholpercentage
				</button>
			</div>
		);
	}
}

export default Header;
