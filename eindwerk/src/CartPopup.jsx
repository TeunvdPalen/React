import Cart from './Cart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCart } from './redux/actions';

function CartPopup({ toggleCart, setCartToggle }) {
	return (
		<div className='fixed top-o right-0 text-black w-full min-h-screen grid grid-cols-6'>
			<div onClick={() => setCartToggle(!toggleCart)} className='col-span-4 bg-slate-600/50'></div>
			<div className='col-span-2 bg-white px-4'>
				<h1 className='text-4xl font-bold text-center my-4'>Jouw bestelling</h1>
				<Cart />
				<nav className='my-20 text-center'>
					<Link to='/Afrekenen' onClick={() => setCartToggle(!toggleCart)} className='text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium'>
						Afrekenen
					</Link>
				</nav>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		toggleCart: state.toggleCart,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setCartToggle: toggle => dispatch(toggleCart(toggle)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
