import React from 'react'
import Button from '../Button/Button';
import './ProductCard.styles.scss'

const ProductCard = ({ product: { name, imageUrl, price } }) => {
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted'>Add To Card</Button>
		</div>
	)
}

export default ProductCard