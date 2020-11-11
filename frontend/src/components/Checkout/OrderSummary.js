import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createOrder } from '../../actions/order.actions';
import RemoveFromCart from '../Button/RemoveFromCart';
import Message from '../Reusable/Message';

const OrderSummary = ({ enableRemoveBtn, enablePlaceOrderBtn }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success, error } = orderCreate;

	cart.subTotal = cartItems
		.reduce((acc, item) => acc + item.qty * item.price, 0)
		.toFixed(2);
	cart.totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
	cart.shippingPrice = (cart.subTotal > 500 ? 0 : 20).toFixed(2);
	cart.totalPrice = (
		Number(cart.subTotal) + Number(cart.shippingPrice)
	).toFixed(2);

	useEffect(() => {
		if (success) {
			history.push(`/order/${order._id}`);
		}
	}, [history, success, order]);

	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				shippingPrice: cart.shippingPrice,
				subTotal: cart.subTotal,
				totalPrice: cart.totalPrice,
				paymentMethod: cart.paymentMethod,
			})
		);
	};

	return (
		<div className="product-checkout-details">
			<div className="block">
				<h4 className="widget-title">Order Summary</h4>
				{cartItems &&
					cartItems.map((item) => (
						<div key={item.productId} className="media product-card">
							<Link className="pull-left" to={`/product/${item.productId}`}>
								<img
									className="media-object"
									src={item.image}
									alt={item.name}
								/>
							</Link>
							<div className="media-body">
								<h4 className="media-heading">
									<Link to={`/product/${item.productId}`}>{item.name}</Link>
								</h4>
								<p className="price">
									{item.qty} x ${item.price}
								</p>
								{enableRemoveBtn && (
									<RemoveFromCart product={item} className="remove btn">
										<i className="tf-ion-close"></i>
									</RemoveFromCart>
								)}
							</div>
						</div>
					))}

				<ul className="summary-prices">
					<li>
						<span>Subtotal: ({cart.totalItems} items)</span>
						<span className="price">${cart.subTotal}</span>
					</li>
					<li>
						<span>Shipping:</span>
						<span>${cart.shippingPrice}</span>
					</li>
				</ul>
				<div className="summary-total">
					<span>Total</span>
					<span>${cart.totalPrice}</span>
				</div>
				{/* <div className="verified-icon">
					<img src="images/shop/verified.png" alt="" />
				</div> */}
				{error && (
					<Message type="alert-danger">
						<i className="tf-ion-close-circled"></i>
						{error}
					</Message>
				)}
				{enablePlaceOrderBtn && (
					<button
						type="submit"
						className="btn btn-main mt-40"
						onClick={placeOrderHandler}
					>
						Place Order
					</button>
				)}
			</div>
		</div>
	);
};

export default OrderSummary;
