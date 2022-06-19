import React from 'react'
import './CategoryItem.styles.scss'

const CategoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	console.log("~ imageUrl", imageUrl)
	return (
		<div className="category-container" >
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	)
}

export default CategoryItem