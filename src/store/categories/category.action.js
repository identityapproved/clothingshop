import { createAction } from '../../utils/reducer/actionCreator.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategoriesMap = (categoryMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap)