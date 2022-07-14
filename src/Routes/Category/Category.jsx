import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { selectCategoriesMap } from '../../store/categories/category.selector'

import { CategoryContainer, Title } from './Category.styles.jsx'

const Category = () => {
	const { category } = useParams()
	const categoriesMap = useSelector(selectCategoriesMap)
	console.log("~ categoriesMap", categoriesMap)
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