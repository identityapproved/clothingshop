import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { CategoriesContext } from '../../context/categories.context'

import './Category.styles.scss'

const Category = () => {
	const { category } = useParams()
	const { categoriesMap } = useContext(CategoriesContext)
	const [products, setProducts] = useState(categoriesMap[category])

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [categoriesMap, category])


	return (
		<Fragment>
			<h2 className='category-title'>{category.toUpperCase()}</h2>
			<div className="category-container">
				{products && products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</Fragment>

	)
}

export default Category