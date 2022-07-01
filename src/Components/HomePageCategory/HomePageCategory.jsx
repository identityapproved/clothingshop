import React from 'react'
import './HomePageCategory.styles.scss'

const HomePageCategory = ({ category }) => {
	const { title, imageUrl } = category;

	return (
		<div className="home-page-category-container" >
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="home-page-category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	)
}

export default HomePageCategory