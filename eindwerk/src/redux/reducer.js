import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
} from './actions'

const initialState = {
	cart: ['']
}

function snackApp(state=initialState, action) {
	if (action.type === ADD_TO_CART) {
		return {
			...state,
			cart: [
				...state.cart,
				{
					naam: action.naam,
					prijs: action.prijs,
					saus: action.saus,
				}
			]
		}
	}

	if (action.type === REMOVE_FROM_CART) {
		return {
			...state,
			cart: state.weights.filter((item, itemIndex) => itemIndex !== action.index)
		}
	}

	return state
}

export default snackApp