import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context';
import Button, { BUTTON_TYPES } from '../Button/Button';
import './ProductCard.styles.jsx'
import { Footer, Name, Price, ProductCartContainer } from './ProductCard.styles.jsx';

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext)

	const addProduct = () => addItemToCart(product)

	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button onClick={addProduct} buttonType={BUTTON_TYPES.inverted}>Add To Card</Button>
		</ProductCartContainer>
	)
}

export default ProductCard