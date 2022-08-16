import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';
import { ReactComponent as Bag } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './CartIcon.styles';

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectCartIsOpen);

	const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={toogleIsCartOpen}>
			<Bag />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;