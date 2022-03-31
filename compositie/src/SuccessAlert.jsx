import React, { Component } from "react";
import Alert from "./Alert";

class SuccessAlert extends Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	render() { 
		return ( 
		<Alert title={this.props.title} type="success" >
			{this.props.children}
		</Alert> );
	}
}

export default SuccessAlert;