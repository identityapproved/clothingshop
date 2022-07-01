import { createContext, useEffect, useState } from 'react';

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
	isCartOpen: false,
	setIsCartOpen: () => { },
	cartItems: [],
	addItemToCart: () => { },
	removeItemFromCart: () => { },
	cartCount: 0,
	cartTotal: 0
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0)
	const [cartTotal, setCartTotal] = useState(0)

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
		setCartCount(newCartCount)
	}, [cartItems])

	useEffect(() => {
		const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
		setCartTotal(newCartTotal)
	}, [cartItems])


	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd))
	}

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeCartItem(cartItems, productToRemove))
	}

	const clearItemFromCart = (productToDelete) => {
		setCartItems(clearCartItem(cartItems, productToDelete))
	}

	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, cartCount, clearItemFromCart, cartTotal };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}