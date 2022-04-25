import React from 'react';
import data from "./redux/data";
import Item from './Item';


function Items() {
	const categorieen = data.categorieen

	const snacks = categorieen[0]
	const broodjes = categorieen[1]
	const frieten = categorieen[2]

	const click = () => {
		console.log(categorieen)
		console.log(snacks)
		console.log(broodjes)
		console.log(frieten)
		console.log(snacks.producten)
	}

	return (
		<div>
			<button onClick={click}>test</button>
			<h1 className='text-2xl'>{snacks.naam}</h1>
			<div>
				{snacks.producten.map((item, itemIndex) => <Item key={itemIndex} naam={item.naam} prijs={item.prijs} saus={item.sauskeuze} index={itemIndex} />)}
			</div>
		</div>
	)
}

export default Items;