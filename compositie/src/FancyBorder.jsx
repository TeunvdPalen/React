import React, { Component } from "react";
import "./FancyBorder.css"

class FancyBorder extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="FancyBorder">
				<h2>{this.props.title}</h2>
				{this.props.children}
			</div>
		);
	}
}

export default FancyBorder;