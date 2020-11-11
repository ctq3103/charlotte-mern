import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	deliverOrder,
	getOrderDetails,
	payOrder,
} from '../../actions/order.actions';
import PageHeader from '../../components/Layout/PageHeader';
import Loading from '../../components/Reusable/Loading';
import Message from '../../components/Reusable/Message';
import {
	ORDER_CREATE_RESET,
	ORDER_DELIVER_RESET,
	ORDER_PAY_RESET,
} from '../../constants/order.constants';

const OrderDetails = ({ match }) => {
	const dispatch = useDispatch();
	const orderId = match.params.id;

	const [sdkReady, setSdkReady] = useState(false);

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const orderPay = useSelector((state) => state.orderPay);
	const { loading: loadingPay, success: successPay } = orderPay;

	const orderDeliver = useSelector((state) => state.orderDeliver);
	const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

	useEffect(() => {
		const addPayPalScript = async () => {
			const { data: clientId } = await axios.get('/api/config/paypal');

			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
			script.async = true;
			script.addEventListener('load', function () {
				setSdkReady(true);
			});
			document.body.appendChild(script);
		};

		if (!order || successPay || successDeliver) {
			dispatch({ type: ORDER_PAY_RESET });
			dispatch({ type: ORDER_DELIVER_RESET });
			dispatch(getOrderDetails(orderId));
		} else if (!order.isPaid) {
			if (!window.paypal) {
				addPayPalScript();
			} else {
				setSdkReady(true);
			}
		}
	}, [dispatch, successPay, successDeliver, order, orderId]);

	const successPaymentHandler = (paymentResult) => {
		dispatch(payOrder(orderId, paymentResult));
	};

	const deliverHandler = () => {
		dispatch(deliverOrder(order));
	};

	return (
		<>
			<PageHeader>Order Details</PageHeader>
			<div className="page-wrapper">
				<>
					{loading && <Loading />}
					{error && (
						<Message type="alert-danger">
							<i class="tf-ion-close-circled"></i>
							{error}
						</Message>
					)}

					{order && (
						<div className="checkout shopping">
							<div className="container">
								<div className="row">
									<div className="col-md-8">
										<div className="block billing-details">
											<h4 className="widget-title">Order ID </h4>
											<p>
												<strong>ID:</strong> {orderId}
											</p>
											<h4 className="widget-title mt-50">
												Shipping Details{' '}
												{order.isDelivered ? (
													<span className="label label-primary">Completed</span>
												) : (
													<span className="label label-danger">
														Not Delivered
													</span>
												)}
											</h4>
											<p>
												<strong>Name:</strong> {order.user.name}
											</p>
											<p>
												<strong>Email:</strong>{' '}
												<a href={`mailto:${order.user.email}`}>
													{order.user.email}
												</a>
											</p>
											<p>
												<strong>Address:</strong>{' '}
												{order.shippingAddress.address},{' '}
												{order.shippingAddress.city}{' '}
												{order.shippingAddress.postalCode},{' '}
												{order.shippingAddress.country}
											</p>
											{order.isDelivered ? (
												<p>Delivered on {order.deliveredAt.substring(0, 10)}</p>
											) : null}
											<div className="mt-50">
												<h4 className="widget-title">
													Payment Method{' '}
													{order.isPaid ? (
														<span className="label label-primary">
															Completed
														</span>
													) : (
														<span className="label label-danger">Not Paid</span>
													)}
												</h4>
												<p style={{ textTransform: 'capitalize' }}>
													{order.paymentMethod}
												</p>
												{order.isPaid ? (
													<p>Paid on {order.paidAt.substring(0, 10)}</p>
												) : null}
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="product-checkout-details">
											<div className="block">
												<h4 className="widget-title">Order Summary</h4>
												<ul className="summary-prices">
													<li>
														<span>Subtotal:</span>
														<span>${order.subTotal}</span>
													</li>
													<li>
														<span>Shipping:</span>
														<span>${order.shippingPrice}</span>
													</li>
												</ul>
												<div className="summary-total">
													<span>Total</span>
													<span>${order.totalPrice}</span>
												</div>
											</div>
										</div>
										{!order.isPaid && (
											<div>
												{loadingPay && <Loading />}
												{!sdkReady ? (
													<Loading />
												) : (
													<PayPalButton
														amount={order.totalPrice}
														onSuccess={successPaymentHandler}
													/>
												)}
											</div>
										)}
										{loadingDeliver && <Loading />}
										{userInfo.isAdmin && order.isPaid && !order.isDelivered && (
											<div>
												<button
													type="button"
													className="btn btn-main"
													style={{ width: '100%' }}
													onClick={deliverHandler}
												>
													Mark As Delivered
												</button>
											</div>
										)}
									</div>
								</div>

								<div className="row">
									<div className="col-md-8">
										<div className="block">
											<div className="product-list">
												<h4 className="widget-title">List of items</h4>
												<table className="table">
													<thead>
														<tr>
															<th>Item</th>
															<th>Quantity</th>
															<th>Unit Price</th>
															<th>Total</th>
														</tr>
													</thead>
													<tbody>
														{order.orderItems.map((item) => (
															<tr key={item.productId}>
																<td>
																	<div className="product-info">
																		<img
																			width="80"
																			src={item.image}
																			alt={item.name}
																		/>
																		<Link to={`/product/${item.productId}`}>
																			{item.name}
																		</Link>
																	</div>
																</td>
																<td>{item.qty}</td>
																<td>${item.price}</td>
																<td>${item.price * item.qty}</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</>
			</div>
		</>
	);
};

export default OrderDetails;
