import React, { Component } from 'react';
import Header from './Header';
import Bier from './Bier';
import Footer from './Footer';
import Form from './Form';

class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		bieren: [
			{
				bier: 'Duvel',
				brouwerij: 'moordgat',
				alchol: 7,
			},
			{
				bier: 'Vedett',
				brouwerij: 'moordgat',
				alchol: 5,
			},
			{
				bier: 'Jupiler',
				brouwerij: 'AB inbev',
				alchol: 5,
			},
		],
		toon: true,
	};

	toggle_alcoholpercentage = () => {
		this.setState(prevState => {
			return { toon: !prevState.toon };
		});
	};

	bier_toevoegen = (naam, brouwerij, alchol) => {
		this.setState(({ bieren }) => {
			return {
				bieren: [
					...bieren,
					{
						bier: naam,
						brouwerij: brouwerij,
						alchol: parseInt(alchol),
					},
				],
			};
		});
	};

	delete_bier = bier => {
		console.log(bier);
		this.setState(state => {
			let index = state.bieren.indexOf(bier);
			const newlist = state.bieren.filter((item, i) => i !== index);
			return {
				bieren: newlist,
			};
		});
	};

	delete_all = () => {
		console.log('delete');
		this.setState(prevState => {
			return { bieren: [] };
		});
	};

	alcohol_percentage = (number, bier) => {
		console.log(number, 'bier=>', bier);

		this.setState(state => {
			let index = state.bieren.indexOf(bier);
			const newAlchol = this.state.bieren.map((bier, i) => {
				if (i == index) {
					return {
						bier: bier.bier,
						brouwerij: bier.brouwerij,
						alchol: bier.alchol + number,
					};
				} else {
					return bier;
				}
			});
			return {
				bieren: newAlchol,
			};
		});
	};

	render() {
		return (
			<div className='container '>
				<Header toggle={this.toggle_alcoholpercentage} />
				<hr />
				<Form toevoegen={this.bier_toevoegen} />
				<hr />
				<Bier bierLijst={this.state.bieren} toon={this.state.toon} onDelete={this.delete_bier} onChange={this.alcohol_percentage} />
				<hr />
				<Footer onDeleteAll={this.delete_all} />
			</div>
		);
	}
}

export default App;
