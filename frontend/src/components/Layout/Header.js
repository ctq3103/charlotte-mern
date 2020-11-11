import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Reusable/Logo';
import UserDropdown from '../Dropdown/UserDropdown';
import CartDropdown from '../Dropdown/CartDropdown';
import SearchDropdown from '../Dropdown/SearchDropdown';

function Header() {
	const location = useLocation();

	return (
		<section className="top-header">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-xs-12 ">
						<div className="contact-number">
							<i className="tf-ion-ios-telephone"></i>
							<span>0123-123-1234</span>
						</div>
					</div>
					<div className="col-md-4 col-xs-12 ">
						<Logo />
					</div>
					<div className="col-md-4 col-xs-12 ">
						<ul className="top-menu text-right list-inline">
							<SearchDropdown />
							<UserDropdown key="user-dropdown" />
							{location.pathname !== '/placeorder' && (
								<CartDropdown key="cart-dropdown" />
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
