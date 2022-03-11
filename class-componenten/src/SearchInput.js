import { Component } from "react";

class SearchInput extends Component {
	constructor(props) {
		super(props)

		this.state= {
			searchinput: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			searchinput: e.target.value
		})
	}

	reset = () => {
		this.setState({searchinput:''})
	}

	render() {
		return (
			<div>
				<input onChange={this.handleChange} value={this.state.searchinput} placeholder="Search" />
				{this.state.searchinput.length ? <button onClick={this.reset}>&times;</button> : null}
				{this.state.searchinput.length > 0 && <p>You searched for <b>{this.state.searchinput}</b></p>}
			</div>
		)
	}
}

export default SearchInput