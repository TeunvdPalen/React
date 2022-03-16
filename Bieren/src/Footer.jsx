import React, { Component } from "react";

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	render() { 
		return ( 
			<div>
				<p>
					Copyright 2022
					<button onClick={this.props.onDeleteAll}>Verwijderen alle bieren</button>
				</p>
			</div>
		);
	}
}

export default Footer;