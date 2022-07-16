import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';
import './CartIcon.styles.jsx';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.styles.jsx';

const CartIcon = () => {
	const dispatch = useDispatch()
	const cartCount = useSelector(selectCartCount)
	const isCartOpen = useSelector(selectCartIsOpen)

	const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

	return (
		<CartIconContainer onClick={toogleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon;