import { createAction } from '../../utils/reducer/actionCreator.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategories = (categoryArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoryArray)