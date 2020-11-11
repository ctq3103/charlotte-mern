import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/cart.actions';

const RemoveFromCart = ({ children, product, ...restProps }) => {
	// const history = useHistory();
	const dispatch = useDispatch();

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(product.productId));
	};

	return (
		<button {...restProps} onClick={removeFromCartHandler}>
			{children}
		</button>
	);
};

export default RemoveFromCart;
