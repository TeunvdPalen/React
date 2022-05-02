import CartPopup from './CartPopup';
import Nav from './Nav';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCart } from './redux/actions';

function Header({ cartLength, toggleCart, setCartToggle }) {
	return (
		<div className='bg-gray-800 text-white'>
			<div className='container mx-auto  relative grid grid-cols-4 gap-4 items-center'>
				<Link to='/' className='text-6xl font-bold mr-4 py-5'>
					Frituur
				</Link>
				<Nav />
				<div className='text-right'>
					<button onClick={() => setCartToggle(!toggleCart)} className='text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-2xl font-medium mx-4'>
						Winkelwagen {cartLength}
					</button>
				</div>
			</div>
			{toggleCart && <CartPopup />}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		cartLength: state.cart.length,
		toggleCart: state.toggleCart,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setCartToggle: toggle => dispatch(toggleCart(toggle)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
