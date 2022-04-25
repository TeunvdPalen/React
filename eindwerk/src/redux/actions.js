//  action types

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// other constants

// action creators

export function addToCart(index, naam, prijs, saus) {
	return { type: ADD_TO_CART, index, naam, prijs, saus}
}

export function removeFromCart(index) {
	return { type: REMOVE_FROM_CART, index}
}