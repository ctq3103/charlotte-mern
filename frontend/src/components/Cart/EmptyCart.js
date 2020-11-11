import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
	return (
		<section className="empty-cart page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="block text-center">
							<i className="tf-ion-ios-cart-outline"></i>
							<h2 className="text-center">Your cart is currently empty.</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Inventore, sed.
							</p>
							<Link to="/">
								<button className="btn btn-main mt-20">Return to shop</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmptyCart;
