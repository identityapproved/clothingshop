import { AnyAction } from 'redux';
import { setCartItems, setIsCartOpen } from './cart.action';
import { CartItem } from './cart.types';

export type CartState = {
	readonly cartItems: CartItem[],
	readonly isCartOpen: boolean,
};

const CART_INITIAL_STATE = {
	cartItems: [],
	isCartOpen: false,
};

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: AnyAction
): CartState => {

	if (setCartItems.match(action)) {
		return {
			...state,
			cartItems: action.payload
		};
	}

	if (setIsCartOpen.match(action)) {
		return {
			...state,
			isCartOpen: action.payload,
		};
	}

	return state;

	/* switch (action.type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: action.payload
			};

		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: action.payload,
			};

		default:
			return state; */

};
