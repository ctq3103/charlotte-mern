import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import OrderSummary from '../../components/Checkout/OrderSummary';
import PageHeader from '../../components/Layout/PageHeader';

const Checkout = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems, checkoutDetails } = cart;

	return (
		<>
			<PageHeader>Checkout</PageHeader>
			<div className="page-wrapper">
				<div className="checkout shopping">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<CheckoutForm
									key="checkout-form"
									checkoutDetails={checkoutDetails}
								/>
							</div>
							<div className="col-md-4">
								<OrderSummary
									enableRemoveBtn
									key="order-summary"
									cartItems={cartItems}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
