import {Component} from 'react'

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.start,
		}
	}

	increase = () => {
		this.setState(state => ({ count: state.count+1 }))
	}

	decrease = () => {
		if (this.state.count > 0) {
		this.setState(state => ({ count: state.count-1 }))
		}
	}

	reset = () => {
		this.setState({count:this.props.start})
	}

	render() {
		return (
			<div>
				<button onClick={this.increase}>+</button>
				<button onClick={this.decrease}>-</button>
				<button onClick={this.reset}>Reset</button>
				<p>You clicked {this.state.count} times!</p>
			</div>
		);
	}
}
export default Counter;