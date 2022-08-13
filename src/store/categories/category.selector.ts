import { createSelector } from 'reselect';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoriesReducer = (state): CategoriesState => {
	return state.categories;
};

export const selectCategories = createSelector([selectCategoriesReducer], (categoriesSlice) => {
	return categoriesSlice.categories;
});

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
	return categories.reduce((acc, category): CategoryMap => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {} as CategoryMap);
});

export const selectCategotiesIsLoading = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.isLoading);