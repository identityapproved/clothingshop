import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Spinner from '../../Components/Spinner/Spinner';
import { selectCategoriesMap, selectCategotiesIsLoading } from '../../store/categories/category.selector';

import { CategoryContainer, Title } from './Category.styles';

type CategoryParams = {
	category: string;
};

const Category = () => {
	const { category } = useParams<CategoryParams>() as CategoryParams;
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategotiesIsLoading);
	const [products, setProducts] = useState(categoriesMap[category]);


	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);


	return (

		<Fragment>
			<Title>{category.toUpperCase()}</Title>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products && products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</CategoryContainer>
			)}
		</Fragment>

	);
};

export default Category;