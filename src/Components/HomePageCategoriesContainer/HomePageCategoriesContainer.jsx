import React from 'react'
import HomePageCategory from '../HomePageCategory/HomePageCategory'
import './HomePageCategoriesContainer.styles.scss'

const CategoriesContainer = ({ categories }) => {
	return (
		<div className="home-page-categories-container ">
			{categories.map((category) => (
				<HomePageCategory
					key={category.id}
					category={category}
				/>
			))}
		</div>
	)
}

export default CategoriesContainer