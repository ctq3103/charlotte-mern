import {
	CART_ADD_ITEM_FAIL,
	CART_ADD_ITEM_SUCCESS,
	CART_CHANGE_QUANTITY,
	CART_REMOVE_ITEM,
	CART_RESET,
	CART_SAVE_PAYMENT_METHOD,
	CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cart.contants';
import { addItemToCart, changeQty, removeItemFromCart } from './cart.utils';

export const cartReducer = (
	state = {
		cartItems: [],
		shippingAddress: {},
		paymentMethod: 'paypal',
		error: false,
	},
	action
) => {
	switch (action.type) {
		case CART_RESET: {
			return {
				cartItems: [],
			};
		}
		case CART_ADD_ITEM_SUCCESS:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
				error: false,
			};
		case CART_ADD_ITEM_FAIL:
			return {
				...state,
				error: true,
			};
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CART_CHANGE_QUANTITY:
			return {
				...state,
				cartItems: changeQty(state.cartItems, action.payload),
			};
		case CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};
		default:
			return state;
	}
};
