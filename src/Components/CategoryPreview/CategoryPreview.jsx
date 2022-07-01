import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.styles.scss'

const CategoryPreview = ({ title, products }) => {
	return (
		<div className='category-preview-container'>
			<h2>
				<Link to={title} className='title'>{title.toUpperCase()}</Link>
			</h2>
			<div className="preview">
				{products
					.filter((_, index) => index < 4)
					.map((product) =>
						<ProductCard key={product.id} product={product} />
					)
				}
			</div>
		</div>
	)
}

export default CategoryPreview