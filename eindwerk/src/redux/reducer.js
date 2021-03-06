import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from './actions';

const initialState = {
	cart: [],
	toggleCart: false,
	totaal: 0,
};

function snackApp(state = initialState, action) {
	if (action.type === ADD_TO_CART) {
		return {
			...state,
			cart: [
				...state.cart,
				{
					naam: action.naam,
					prijs: parseInt(action.prijs),
					sausWaarde: action.sausWaarde,
					saus: action.saus,
					aantal: action.aantal,
				},
			],
		};
	}

	if (action.type === REMOVE_FROM_CART) {
		return {
			...state,
			cart: state.cart.filter((item, itemIndex) => itemIndex !== action.index),
		};
	}

	if (action.type === TOGGLE_CART) {
		return {
			...state,
			toggleCart: action.toggle,
		};
	}
	return state;
}

export default snackApp;
