import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { Preview, PreviewContainer, Title } from './CategoryPreview.styles';

const CategoryPreview = ({ title, products }) => {
	return (
		<PreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>

			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) =>
						<ProductCard key={product.id} product={product} />
					)
				}
			</Preview>
		</PreviewContainer>
	)
}

export default CategoryPreview