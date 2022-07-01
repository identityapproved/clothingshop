import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.jsx';
import Category from '../Category/Category.jsx';
import './ShopPage.styles.scss';


const ShopPage = () => {


	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	)
}

export default ShopPage