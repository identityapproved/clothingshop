import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { CartDropdownContainer, CartItems, EmptyMessage } from './CartDropdown.styles.jsx';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)
	const navigate = useNavigate()

	const goToCheckout = () => navigate('/checkout')

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (cartItems.map((item) => {
					return <CartItem key={item.id} cartItem={item} />
				})) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckout}>CHECKOUT</Button>
		</CartDropdownContainer>
	)
}

export default CartDropdown