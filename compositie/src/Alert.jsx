import React, { Component } from "react";
import "./Alert.css"

class Alert extends Component {
	state = {  }

	render() { 
		let className="Alert";

		if (this.props.type) {
			className += " Alert-"+this.props.type
		}
		return ( 
			<div className={className}>
				<b>{this.props.callout}</b>
				{this.props.children}
			</div>
		);
	}
}

export default Alert;