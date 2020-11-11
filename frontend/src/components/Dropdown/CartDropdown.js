import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import RemoveFromCart from '../Button/RemoveFromCart';

const CartDropdown = () => {
	const history = useHistory();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const subTotal = cartItems
		.reduce((acc, item) => acc + item.qty * item.price, 0)
		.toFixed(2);
	const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

	const checkoutHandler = () => {
		history.push('/login?redirect=checkout');
	};

	return (
		<li className="dropdown cart-nav dropdown-slide">
			<div className="dropdown-icon">
				<i className="tf-ion-bag"></i>
				{cartItems.length > 0 && (
					<span className="dropdown-badge">{totalItems}</span>
				)}
			</div>

			<div className="dropdown-menu cart-dropdown">
				{cartItems.length === 0 && <h5>Your cart is empty</h5>}

				{cartItems.length > 0 &&
					cartItems.map((item) => (
						<div key={item.productId} className="media">
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
								<div className="cart-price">
									<span>{item.qty} x</span>
									<span>{item.price}</span>
								</div>
								<h5>
									<strong>${item.qty * item.price}</strong>
								</h5>
							</div>
							<RemoveFromCart product={item} className="remove btn">
								<i className="tf-ion-close"></i>
							</RemoveFromCart>
						</div>
					))}
				{cartItems.length > 0 && (
					<>
						<div className="cart-summary">
							<span>Total</span>
							<span className="total-price">${subTotal}</span>
						</div>
						<ul className="text-center cart-buttons">
							<li>
								<Link to="/cart" className="btn btn-small">
									View Cart
								</Link>
							</li>
							<li>
								<button
									onClick={checkoutHandler}
									className="btn btn-small btn-solid-border"
								>
									Checkout
								</button>
							</li>
						</ul>
					</>
				)}
			</div>
		</li>
	);
};

export default CartDropdown;
