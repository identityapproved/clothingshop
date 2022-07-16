import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => {
	return state.categories
};

export const selectCategories = createSelector([selectCategoriesReducer], (categoriesSlice) => {
	return categoriesSlice.categories
})

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
	return categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
});