import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategories } from '../../store/categories/category.action.js';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.jsx';
import Category from '../Category/Category.jsx';

const ShopPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryArray = await getCategoriesAndDocuments('categories')
			dispatch(setCategories(categoryArray))
		}

		getCategoriesMap()
	}, [])

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	)
}

export default ShopPage