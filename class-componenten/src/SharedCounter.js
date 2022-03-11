import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import ChangeButtons from "./ChangeButtons";

class SharedCounter extends Component {
	constructor(props) {
		super(props);
	}
	state = { 
		count: 0,
		show: 0
	}

	changeCount = (number) => {
			this.setState((state) => { return { count: state.count + number }})
	}

	toggle = () => {
		this.setState(prevState => {
			return { show: !prevState.show };
		});
	}

	render () {
		return ( 
			<div>
				<CounterDisplay 
					show={this.state.show} 
					toggle={this.toggle}
					count={this.state.count}
				/>

				
				<ChangeButtons 
					count={this.state.count} 
					show={this.state.show} 
					onChange={this.changeCount}	
				/>

				
			</div>
		);
	}
}

export default SharedCounter;