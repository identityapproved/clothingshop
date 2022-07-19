import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/actionCreator.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoryArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoryArray)

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart())

	try {
		const categoryArray = await getCategoriesAndDocuments('categories')
		dispatch(fetchCategoriesSuccess(categoryArray))
	} catch (error) {
		dispatch(fetchCategoriesFailed(error))
	}
}