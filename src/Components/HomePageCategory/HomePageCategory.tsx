import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomePageCategoriesTypes } from '../HomePageCategoriesContainer/HomePageCategoriesContainer';
import './HomePageCategory.styles';
import { BackgroundImage, Body, CategoryContainer } from './HomePageCategory.styles';

type HomePageCategoryProps = {
	category: HomePageCategoriesTypes;
};

const HomePageCategory: FC<HomePageCategoryProps> = ({ category }) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<CategoryContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</CategoryContainer>
	);
};

export default HomePageCategory;