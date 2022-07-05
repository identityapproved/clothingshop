import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context';
import './CartIcon.styles.jsx';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.styles.jsx';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

	const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	return (
		<CartIconContainer onClick={toogleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon;