import React, { FC } from 'react';
import { CategoryItem } from '../../store/categories/category.types';
import ProductCard from '../ProductCard/ProductCard';
import { Preview, PreviewContainer, Title } from './CategoryPreview.styles';

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
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
	);
};

export default CategoryPreview;