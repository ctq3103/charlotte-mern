import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	saveShippingAddress,
	savePaymentMethod,
} from '../../actions/cart.actions';

const CheckoutForm = ({ checkoutDetails }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [address, setAddress] = useState(
		checkoutDetails ? checkoutDetails.address : ''
	);
	const [city, setCity] = useState(checkoutDetails ? checkoutDetails.city : '');
	const [postalCode, setPostalCode] = useState(
		checkoutDetails ? checkoutDetails.postalCode : ''
	);
	const [country, setCountry] = useState(
		checkoutDetails ? checkoutDetails.country : ''
	);
	const [paymentMethod, setPaymentMethod] = useState(
		checkoutDetails ? checkoutDetails.paymentMethod : 'paypal'
	);

	const disableButton = !address || !city || !postalCode || !country;

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		dispatch(savePaymentMethod(paymentMethod));
		history.push('/placeorder');
	};

	return (
		<>
			<div className="block billing-details">
				<h4 className="widget-title">Shipping Details</h4>
				<form className="checkout-form" onSubmit={submitHandler}>
					<div className="form-group">
						<label htmlFor="user_address">Address</label>
						<input
							type="text"
							className="form-control"
							id="user_address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="checkout-country-code clearfix">
						<div className="form-group">
							<label htmlFor="user_post_code">Postal Code</label>
							<input
								type="text"
								className="form-control"
								id="user_post_code"
								name="postalcode"
								value={postalCode}
								onChange={(e) => setPostalCode(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="user_city">City</label>
							<input
								type="text"
								className="form-control"
								id="user_city"
								name="city"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="user_country">Country</label>
						<input
							type="text"
							className="form-control"
							id="user_country"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</div>

					<div className="mt-40">
						<h4 className="widget-title">Payment Method</h4>
						<div className="form-group">
							<select
								id="choose-method"
								name="payment-method"
								className="form-control"
								value={paymentMethod}
								onChange={(e) => setPaymentMethod(e.target.value)}
							>
								<option value="PayPal">Paypal</option>
								<option value="Stripe">Stripe</option>
							</select>
						</div>
					</div>
					<button
						disabled={disableButton}
						type="submit"
						className="btn btn-main mt-20"
					>
						Continue
					</button>
				</form>
			</div>
			{/* <div className="block">
				<h4 className="widget-title">Payment Method</h4>
				<p>Credit Cart Details (Secure payment)</p> 
				<div className="checkout-product-details">
					<div className="payment">
						<div className="card-details">
							<form className="checkout-form">
								
								<div className="form-group">
									<label htmlFor="card-number">
										Card Number <span className=">*</span>
									</label>
									<input
										id="card-number"
										className="form-control"
										type="tel"
										placeholder="•••• •••• •••• ••••"
									/>
								</div>
								<div className="form-group half-width padding-right">
									<label htmlFor="card-expiry">
										Expiry (MM/YY) <span className=">*</span>
									</label>
									<input
										id="card-expiry"
										className="form-control"
										type="tel"
										placeholder="MM / YY"
									/>
								</div>
								<div className="form-group half-width padding-left">
									<label htmFfor="card-cvc">
										Card Code <span className=">*</span>
									</label>
									<input
										id="card-cvc"
										className="form-control"
										type="tel"
										maxlength="4"
										placeholder="CVC"
									/>
								</div>
								<button className="btn btn-main mt-20">Place Order</button>
							</form>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default CheckoutForm;
