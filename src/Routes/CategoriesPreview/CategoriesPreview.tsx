import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview';
import Spinner from '../../Components/Spinner/Spinner';
import { selectCategoriesMap, selectCategotiesIsLoading } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategotiesIsLoading);

	return (
		<Fragment>
			{isLoading ?
				(<Spinner />) : (
					Object.keys(categoriesMap).map((title) => {
						const products = categoriesMap[title];
						return (
							<CategoryPreview key={title} products={products} title={title} />
						);
					})
				)}
		</Fragment>
	);
};

export default CategoriesPreview;