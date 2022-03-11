import React, { Component } from "react";
import Button from "./Button";

class CounterDisplay extends Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	render() { 
		return ( 
			<p>
				De count is nu {this.props.count} clicks. 
				<Button 
					onClick={this.props.toggle} 
					text={this.props.show ? "Hide button" : "Show buttons"} 
				/>
			</p>
		);
	}
}

export default CounterDisplay;