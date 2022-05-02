import React from "react";
import data from "./redux/data";
import {useState} from 'react';
import {connect} from 'react-redux'
import {addToCart} from "./redux/actions";



function Item({naam, prijs, sausWaarde, index, onSave}) {
	const sauzen = data.sauzen
	const [aantalItem, setAantalItem] = useState(0)
	const [keuzenSaus, setSaus] = useState('')
	const [isActive, setIsActive] = useState(false);

	const aantal = (waarde, index) => {
		if ((aantalItem + waarde) < 0) {
			setAantalItem(0)
		} else {
			setAantalItem(aantalItem + waarde)
		}
	}

	const save = () => {
		onSave(naam, prijs, sausWaarde, keuzenSaus, aantalItem)
	}

	return (
		<div className="container bg-slate-400 pl-4 my-3">
			<div className=" flex justify-between" onClick={() => setIsActive(!isActive)}>
				<h2 className="text-lg font-semibold pt-2">{naam}</h2>
				<button className="bg-orange-400 px-2">{isActive ? '-' : '+'}</button>
			</div>
			<div>
				<p className="text-white text-lg pb-2">€ {prijs}</p>
				
			</div>
			<div>
				{isActive && <div className="pb-4">
					{sausWaarde && <div className="pb-4">
							<h2 className="text-base font-semibold">Sauzen</h2>
							<select name="sauzen" id="sauzen" onChange={(e) => setSaus(e.target.value)} value={keuzenSaus} className='px-1 py-1'>
								<option value='' disabled key='Geen saus'>-- Kies een saus --</option>
								{sauzen.map((saus, itemIndex) => <option key={itemIndex} value={saus.naam}>{saus.naam} - €{saus.prijs}</option>)}
							</select>
						</div>
					}
						<button onClick={() => aantal(-1)} className="bg-slate-600 text-white px-3 py-1 mx-2">-</button>
						<input type="number" placeholder="0" min="0" onChange={(e) => setAantalItem(Math.abs(e.target.value))} value={aantalItem} className="placeholder:italic placeholder:text-slate-400 w-12 px-2 py-1"/>
						<button onClick={() => aantal(1)} className="bg-slate-600 text-white px-3 py-1 mx-2">+</button>
						<button onClick={save} className="bg-orange-400 text-white px-3 py-1">Voeg Toe</button>
					</div>}
				
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return { onSave: (naam, prijs, sausWaarde, saus, aantal) => dispatch(addToCart(naam, prijs, sausWaarde, saus, aantal))}
}

export default connect(null, mapDispatchToProps)(Item)