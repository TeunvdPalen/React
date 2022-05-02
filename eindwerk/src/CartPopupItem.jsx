import { connect } from 'react-redux';
import { removeFromCart } from './redux/actions';

function CartPopupItem({ cart, onRemove }) {
	return cart.map((item, itemIndex) => (
		<tr key={itemIndex} className='border-b border-slate-400'>
			<td class='table-cell text-left'>
				{item.naam}
				{item.sausWaarde && item.saus !== '' ? ' - ' + item.saus : ''}
			</td>
			<td class='table-cell text-center'>{item.sausWaarde && item.saus !== '' ? item.prijs + 0.5 : item.prijs}€</td>
			<td class='table-cell text-center'>{item.aantal}</td>
			<td class='table-cell text-center'>{item.sausWaarde && item.saus !== '' ? (item.prijs + 0.5) * item.aantal : item.prijs * item.aantal}€</td>
			<td class='table-cell text-center'>
				<button onClick={() => onRemove(itemIndex)} className='bg-red-200 text-red-600 px-2 rounded-md'>
					&Chi;
				</button>
			</td>
		</tr>
	));
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onRemove: index => dispatch(removeFromCart(index)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPopupItem);
