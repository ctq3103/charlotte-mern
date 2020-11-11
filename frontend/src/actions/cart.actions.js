import axios from 'axios';
import { toast } from 'react-toastify';
import {
	CART_ADD_ITEM_FAIL,
	CART_ADD_ITEM_SUCCESS,
	CART_CHANGE_QUANTITY,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METHOD,
	CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cart.contants';
import { isExceededMaxQty } from '../reducers/cart.utils';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);

	const {
		cart: { cartItems },
	} = getState();

	if (isExceededMaxQty(cartItems, id, qty)) {
		dispatch({
			type: CART_ADD_ITEM_FAIL,
		});
		toast.error('You have exceeded maximum quantity for this product');
		return;
	}

	dispatch({
		type: CART_ADD_ITEM_SUCCESS,
		payload: {
			productId: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});
	toast.dark(`💖Successfully added ${qty} item to your cart!`);
};

export const removeFromCart = (id) => (dispatch) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});
	toast.dark(`💎 Successfully removed items from your cart!`);
};

export const changeItemQty = (item, qty) => async (dispatch) => {
	dispatch({
		type: CART_CHANGE_QUANTITY,
		payload: {
			...item,
			qty: qty,
		},
	});
};

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({
		type: CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	});
};

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({
		type: CART_SAVE_PAYMENT_METHOD,
		payload: data,
	});
};
