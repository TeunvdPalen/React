import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			naam: '',
			brouwerij: '',
			alchol: '',
		}
	}

	handleChangeNaam = (e) => {
    this.setState({
      naam: e.target.value
    })
  }

	handleChangeBrouwerij = (e) => {
    this.setState({
      brouwerij: e.target.value
    })
  }

	handleChangeAlchol = (e) => {
    this.setState({
      alchol: e.target.value
    })
  }
	
	submit = (e) => {
		e.preventDefault()
		if (this.state.naam.length && this.state.brouwerij.length && this.state.brouwerij.length) {
			this.props.toevoegen(this.state.naam, this.state.brouwerij, this.state.alchol)
			this.resetInput()
		}
	}

	resetInput = () => {
		this.setState({ 
			naam: '',
			brouwerij: '',
			alchol: '',
		});
	}

	render() { 
		return ( 
			<form onSubmit={this.submit}>
				<label htmlFor="naam">Naam: </label>
				<input 
					value={this.state.naam}
					onChange={this.handleChangeNaam}
					type="text" name="naam" id="naam"/><br />

				<label htmlFor="brouwerij">Brouwerij: </label>
				<input 
					value={this.state.brouwerij} 
					onChange={this.handleChangeBrouwerij}
					type="text" name="brouwerij"  id="brouwerij"/><br />

				<label htmlFor="alchol">Alcoholpercentage: </label>
				<input 
					value={this.state.alchol} 
					onChange={this.handleChangeAlchol}
					type="number" name="alchol" id="alchol" /><br />

				<input type="submit" value="toevoegen" />
			</form>
		);
	}
}

export default Form;