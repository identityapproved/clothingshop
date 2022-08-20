import React, { FC } from 'react';
import { CartItem as CartItemType } from '../../store/cart/cart.types';
import { Details, Image, ItemContainer, Name } from './CartItem.styles';

type CartItemProps = {
	cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<ItemContainer>
			<Image src={imageUrl} alt={`${name}`} />
			<Details>
				<Name>{name}</Name>
				<span>{quantity} x ${price}</span>
			</Details>
		</ItemContainer>
	);
};

export default CartItem;