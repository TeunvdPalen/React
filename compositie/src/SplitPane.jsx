import React, { Component } from "react";
import "./SplitPane.css"

class SplitPane extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="SplitPane">
				<div>
					{this.props.left}
				</div>
				<div>
					{this.props.right}
				</div>
			</div>
		);
	}
}

export default SplitPane;