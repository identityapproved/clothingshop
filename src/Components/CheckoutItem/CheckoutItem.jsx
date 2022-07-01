import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './CheckoutItem.styles.scss'

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

	const deleteCartItemHandler = () => clearItemFromCart(cartItem)
	const addCartItemHandler = () => addItemToCart(cartItem)
	const removeCartItemHandler = () => removeItemFromCart(cartItem)

	return (
		<div className='checkout-item-container'>
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className="arrow" onClick={removeCartItemHandler}>&#10094;</div>
				<span className='value'>{quantity}</span>
				<div className="arrow" onClick={addCartItemHandler}>&#10095;</div>
			</span>
			<span className='price'>{price}</span>
			<span className='remove-button' onClick={deleteCartItemHandler}>&#10005;</span>
		</div>
	)
}

export default CheckoutItem