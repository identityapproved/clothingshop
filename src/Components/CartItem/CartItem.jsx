import React from 'react';
import { Details, Image, ItemContainer, Name } from './CartItem.styles';

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<ItemContainer>
			<Image src={imageUrl} alt={`${name}`} />
			<Details>
				<Name>{name}</Name>
				<span>{quantity} x ${price}</span>
			</Details>
		</ItemContainer>
	)
}

export default CartItem