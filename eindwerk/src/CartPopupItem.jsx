import {connect} from 'react-redux'
import {removeFromCart} from "./redux/actions";

function CartPopupItem({cart, onRemove}) {
		return(
			cart.map((item, itemIndex) => <tr key={itemIndex}>
				<td>{item.naam}{item.sausWaarde && item.saus !== '' ? ' - ' + (item.saus) : ''}</td>
				<td>{item.aantal} x {item.sausWaarde && item.saus !== '' ? item.prijs + 0.5 : item.prijs}€</td>
				<td>{item.sausWaarde && item.saus !== '' ? ((item.prijs + 0.5) * item.aantal) : (item.prijs * item.aantal)}€</td>
				<td><button onClick={() => onRemove(itemIndex)}>x</button></td>
			</tr>)
	)
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onRemove: (index) => dispatch(removeFromCart(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPopupItem);