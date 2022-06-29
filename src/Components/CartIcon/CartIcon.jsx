import React, { useContext } from 'react'
import { ReactComponent as Bag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';
import './CartIcon.styles.scss';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

	const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	return (
		<div className='cart-icon-container' onClick={toogleIsCartOpen}>
			<Bag className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	)
}

export default CartIcon;