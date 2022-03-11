import React, { Component } from 'react';

class Leerlingen extends Component {
	constructor(props) {
		super(props);
	}
	state = { 
		leerlingen: ['ienne', 'nele', 'christof'],
		input: ''
	}

	deleteStudent = (index) => {
		this.setState(prevState => {
			return { leerlingen: prevState.leerlingen.filter((item, itemIndex) => index !== itemIndex) };
		});
	}

	addStudent = (naam) => {
		if (naam.length) {
			this.setState(prevState => {
				return { 
					input: '',
					leerlingen: [...prevState.leerlingen, naam] 
				};
			});
		}
	}

	handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			this.addStudent(this.state.input)
		}
	}
	render() { 
		return ( 
			<div>
				<input onKeyDown={this.handleKeyDown} onChange={(e) => this.setState({input:e.target.value})} value={this.state.input} />
				{this.state.input.length > 0 && <button onClick={() => this.addStudent(this.state.input)}>Add</button>}
				{this.state.leerlingen.length > 0 ?	<ul>
					{this.state.leerlingen.map((leerling, index) => {
						return (
							<li key={index}>
							{leerling}
							<button onClick={() => this.deleteStudent(index)}>&times;</button>
							</li>
						)
					})}
					</ul> : <p>No students yet...</p>}
					
			</div>
		);
	}
}

export default Leerlingen;