import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context';
import Button from '../Button/Button';
import './ProductCard.styles.scss'

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext)

	const addProduct = () => addItemToCart(product)

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button onClick={addProduct} buttonType='inverted'>Add To Card</Button>
		</div>
	)
}

export default ProductCard