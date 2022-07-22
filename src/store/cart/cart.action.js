import { createAction } from '../../utils/reducer/actionCreator.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems, productToAdd) => {
	const isExist = cartItems.find((item) => {
		return item.id === productToAdd.id
	});

	if (isExist) {
		return cartItems.map((item) =>
			item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }]
};

const removeCartItem = (cartItems, productToRemove) => {
	const currentItem = cartItems.find((item) => {
		return item.id === productToRemove.id
	});

	if (currentItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== currentItem.id)
	}

	return cartItems.map((item) =>
		item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
	);
};

const clearCartItem = (cartItems, productToDelete) => {
	return cartItems.filter((item) => item.id !== productToDelete.id)
};


export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd)
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

export const removeItemFromCart = (cartItems, productToRemove) => {
	const newCartItems = removeCartItem(cartItems, productToRemove)
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

export const clearItemFromCart = (cartItems, productToDelete) => {
	const newCartItems = clearCartItem(cartItems, productToDelete)
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);