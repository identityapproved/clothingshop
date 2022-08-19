import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/actionCreator.utils';
import { CategoryItem } from '../categories/category.types';
import { CartItem, CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
	const isExist = cartItems.find((item) => {
		return item.id === productToAdd.id;
	});

	if (isExist) {
		return cartItems.map((item) =>
			item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
	const currentItem = cartItems.find((item) => {
		return item.id === productToRemove.id;
	});

	if (currentItem && currentItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== currentItem.id);
	}

	return cartItems.map((item) =>
		item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
	);
};

const clearCartItem = (cartItems: CartItem[], productToDelete: CartItem): CartItem[] => {
	return cartItems.filter((item) => item.id !== productToDelete.id);
};


export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
	const newCartItems = removeCartItem(cartItems, productToRemove);
	return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], productToDelete: CartItem) => {
	const newCartItems = clearCartItem(cartItems, productToDelete);
	return setCartItems(newCartItems);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));