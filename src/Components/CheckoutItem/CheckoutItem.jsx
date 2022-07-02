import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './CheckoutItem.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

	const deleteCartItemHandler = () => clearItemFromCart(cartItem)
	const addCartItemHandler = () => addItemToCart(cartItem)
	const removeCartItemHandler = () => removeItemFromCart(cartItem)

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeCartItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addCartItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>$ {price}</BaseSpan>
			<RemoveButton onClick={deleteCartItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	)
}

export default CheckoutItem