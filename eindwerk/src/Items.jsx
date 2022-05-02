import React from 'react';
import data from './redux/data';
import Item from './Item';

function Items() {
	const categorieen = data.categorieen;

	return (
		<div>
			<div>
				{categorieen.map((categorie, itemIndex) => (
					<div key={itemIndex}>
						<h1 className='text-4xl font-bold mt-12'>{categorie.naam}</h1>
						<div>
							{categorie.producten.map((item, itemIndex) => (
								<Item key={itemIndex} naam={item.naam} prijs={item.prijs} sausWaarde={item.sauskeuze} index={itemIndex} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Items;
