import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/Cart/CartItem';
import EmptyCart from '../../components/Cart/EmptyCart';
import PageHeader from '../../components/Layout/PageHeader';

const Cart = ({ match, location, history }) => {
	const productId = match.params.id;
	const qty = location.search && Number(location.search.split('=')[1]);
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
		}
	}, [dispatch, productId, qty]);

	const checkoutHandler = () => {
		history.push('/login?redirect=checkout');
	};

	return (
		<>
			<PageHeader>Cart</PageHeader>
			{cartItems.length === 0 && <EmptyCart />}
			{cartItems.length > 0 && (
				<div className="page-wrapper">
					<div className="cart shopping">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="block">
										<div className="product-list">
											<table className="table">
												<thead>
													<tr>
														<th>Item </th>
														<th>Total Quantity</th>
														<th>Price</th>
														<th>Remove</th>
													</tr>
												</thead>
												<tbody>
													{cartItems.map((item) => (
														<CartItem item={item} key={item.productId} />
													))}
												</tbody>
											</table>

											<button
												onClick={checkoutHandler}
												className="btn btn-main pull-right"
											>
												Checkout
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
