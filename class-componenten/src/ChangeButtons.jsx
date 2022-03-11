import React, { Component } from "react";
import Button from "./Button";

class ChangeButtons extends Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	render() { 
		if (!this.props.show) {
			return null;
		} 
		return ( 
		<div>
			<Button onClick={() => this.props.onChange(1)} text="Add one" />
			<Button onClick={() => this.props.onChange(-1)} text="Subtract one" />
			<Button onClick={() => this.props.onChange(-this.props.count)} text="Reset" />
		</div>
		)
	}
}

export default ChangeButtons;