import { put, call, all, takeLatest } from 'typed-redux-saga/macro';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
	try {
		const categoryArray = yield* call(getCategoriesAndDocuments);
		yield* put(fetchCategoriesSuccess(categoryArray));
	} catch (error) {
		yield* put(fetchCategoriesFailed(error as Error));
	}
}

export function* onFetchCategories() {
	yield* takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync
	);
}

export function* categoriesSaga() {
	yield* all([call(onFetchCategories)]);
}