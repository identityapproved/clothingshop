import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.styles.scss'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)
	const navigate = useNavigate()

	const goToCheckout = () => navigate('/checkout')

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => {
					return <CartItem key={item.id} cartItem={item} />
				})}
			</div>
			<Button onClick={goToCheckout}>CHECKOUT</Button>
		</div>
	)
}

export default CartDropdown