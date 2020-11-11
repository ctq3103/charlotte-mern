import React from 'react';
import { useSelector } from 'react-redux';
import OrderSummary from '../../components/Checkout/OrderSummary';
import PageHeader from '../../components/Layout/PageHeader';

const PlaceOrder = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const {
		shippingAddress: { address, city, postalCode, country },
		paymentMethod,
	} = cart;

	return (
		<>
			<PageHeader>Place Order</PageHeader>
			<div className="page-wrapper">
				<div className="checkout shopping">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="block billing-details">
									<h4 className="widget-title">Shipping Details</h4>
									<p>
										<strong>Address:</strong> {address}, {city} {postalCode},{' '}
										{country}
									</p>
									<div className="mt-40">
										<h4 className="widget-title">Payment Method</h4>
										<p style={{ textTransform: 'capitalize' }}>
											{paymentMethod}
										</p>
									</div>
									<button
										onClick={() => history.push('/checkout')}
										className="btn btn-solid-border btn-main mt-20"
									>
										Edit details
									</button>
								</div>
							</div>
							<div className="col-md-4">
								<OrderSummary key="order-summary" enablePlaceOrderBtn />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PlaceOrder;
