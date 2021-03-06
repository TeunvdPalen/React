//  action types

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

// other constants

// action creators

export function addToCart(naam, prijs, sausWaarde, saus, aantal) {
	return { type: ADD_TO_CART, naam, prijs, sausWaarde, saus, aantal };
}

export function removeFromCart(index) {
	return { type: REMOVE_FROM_CART, index };
}

export function toggleCart(toggle) {
	return { type: TOGGLE_CART, toggle };
}
