import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/actionCreator.utils';

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
}

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
}

const clearCartItem = (cartItems, productToDelete) => {
	return cartItems.filter((item) => item.id !== productToDelete.id)
}

export const CartContext = createContext({
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
	isCartOpen: false,
	setIsCartOpen: () => { },
	addItemToCart: () => { },
	removeItemFromCart: () => { },
})

const INITIAL_STATE = {
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
	isCartOpen: false,
}

const CART_ACTION_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload
			}

		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			}

		default:
			throw new Error(`Unhandled type of ${type} in cartReducer.`)

	}
}

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
	const { cartItems, cartCount, cartTotal, isCartOpen } = state;

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0)

		const newCartTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0)

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartTotal: newCartTotal
			}))
	}

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd)
		updateCartItemsReducer(newCartItems)
	}

	const removeItemFromCart = (productToRemove) => {
		const newCartItems = removeCartItem(cartItems, productToRemove)
		updateCartItemsReducer(newCartItems)
	}

	const clearItemFromCart = (productToDelete) => {
		const newCartItems = clearCartItem(cartItems, productToDelete)
		updateCartItemsReducer(newCartItems)
	}

	const setIsCartOpen = (boolean) => {
		dispatch(
			createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
		)
	}

	const value = {
		cartItems,
		cartCount,
		cartTotal,
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}