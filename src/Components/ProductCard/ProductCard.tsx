import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/category.types';
import Button, { BUTTON_TYPES } from '../Button/Button';
import './ProductCard.styles';
import { Footer, Name, Price, ProductCartContainer } from './ProductCard.styles';

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, imageUrl, price } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProduct = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button onClick={addProduct} buttonType={BUTTON_TYPES.inverted}>Add To Card</Button>
		</ProductCartContainer>
	);
};

export default ProductCard;