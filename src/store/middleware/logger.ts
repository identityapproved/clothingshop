import { Middleware } from 'redux';
import { RootState } from '../store';

export const logger: Middleware<{}, RootState> = (store) => (next) => (action) => {
	if (!action.type) next(action);

	console.log('type: ', action.type);
	console.log('payload: ', action.payload);
	console.log('currentState: ', store.getState());

	next(action);

	console.log('next state: ', store.getState());
};