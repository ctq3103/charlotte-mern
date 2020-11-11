import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cart.actions';

const AddToCart = ({ children, product, qty, ...restProps }) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, Number(qty)));
	};

	return (
		<button {...restProps} onClick={addToCartHandler}>
			{children}
		</button>
	);
};

export default AddToCart;
