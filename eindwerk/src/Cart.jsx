import CartPopupItem from './CartPopupItem';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Cart({ cart }) {
	const [totaal, setTotaal] = useState(0);

	useEffect(() => {
		totaalBerekenen();
	});

	const totaalBerekenen = () => {
		let totaal = 0;
		cart.map(item => {
			if (item.saus !== '') {
				let temp = item.aantal * (item.prijs + 0.5);
				totaal += temp;
			} else {
				let temp = item.aantal * item.prijs;
				totaal += temp;
			}
		});
		setTotaal(totaal);
	};

	return (
		<table className='table-fixed border-collapse	w-full'>
			<tr>
				<th className='w-7/12 text-left text-lg'>Naam</th>
				<th className='w-2/12 text-center text-lg'>Prijs</th>
				<th className='w-2/12 text-center text-lg'>Aantal</th>
				<th className='w-2/12 text-center text-lg'>Totaal</th>
				<th className='w-1/12 text-center text-lg'></th>
			</tr>
			<CartPopupItem />
			<tr>
				<td colSpan={3} className='text-xl font-bold'>
					Totaal
				</td>
				<td className='table-cell text-center text-xl font-bold'>{totaal}€</td>
				<td></td>
			</tr>
		</table>
	);
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps, null)(Cart);
