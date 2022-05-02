import CartPopupItem from "./CartPopupItem"
import { Link } from 'react-router-dom';
import {useState} from 'react';
import {connect} from 'react-redux'

function CartPopup({cart}) {
	const [totaal, setTotaal] = useState(0)

	const totaalBerekenen = () => {
		let totaal = 0
		cart.forEach(item => {
			let temp = item.aantal * item.prijs
			totaal += temp
		});
		setTotaal(totaal)
	}

	return (
		<div className="fixed top-o right-0 text-black w-full min-h-screen grid grid-cols-4">
			<div className="col-span-3 bg-slate-600/50"></div>
			<div className="col-span-1 bg-white">
				<h1 className="text-4xl font-bold text-center">Jouw bestelling</h1>
				<table className="table-fixed border-collapse	w-full">
					<tr>
						<th className="w-7/12 text-center">Naam</th>
						<th className="w-2/12 text-center">Aantal</th>
						<th className="w-2/12 text-center">Totaal</th>
						<th className="w-1/12 text-center"></th>
					</tr>
					<CartPopupItem onChange={totaalBerekenen}/>
					<tr>
						<td>Totaal</td>
						<td></td>
						<td>{totaal}</td>
						<td></td>
					</tr>
				</table>
				<nav className="my-20 text-center">
					<Link to='/Afrekenen' className="text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">Afrekenen</Link>
				</nav>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
	}
}

export default connect(mapStateToProps, null)(CartPopup);