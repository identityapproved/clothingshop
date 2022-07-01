import React, { Fragment, useContext } from 'react'
import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview.jsx';
import { CategoriesContext } from '../../context/categories.context.jsx';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext)

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} products={products} title={title} />
				)
			})}
		</Fragment>
	)
}

export default CategoriesPreview