import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { CategoriesContext } from '../../context/categories.context'

import { CategoryContainer, Title } from './Category.styles.jsx'

const Category = () => {
	const { category } = useParams()
	const { categoriesMap } = useContext(CategoriesContext)
	const [products, setProducts] = useState(categoriesMap[category])

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [categoriesMap, category])


	return (
		<Fragment>
			<Title>{category.toUpperCase()}</Title>
			<CategoryContainer>
				{products && products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</CategoryContainer>
		</Fragment>

	)
}

export default Category