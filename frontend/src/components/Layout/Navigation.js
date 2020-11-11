import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../data/categories.data';

const Navigation = () => {
	const navbarLinks = useRef(null);
	const handleNavbarButton = (e) => {
		navbarLinks.current.classList.toggle('collapse');
	};

	return (
		<section className="menu">
			<nav className="navbar navigation">
				<div className="container">
					<div className="navbar-header">
						<h2 className="menu-title">Main Menu</h2>
						<button
							type="button"
							className="navbar-toggle collapsed"
							onClick={(e) => {
								handleNavbarButton(e);
							}}
						>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>

					<div
						ref={navbarLinks}
						className="navbar-collapse collapse text-center"
					>
						<ul className="nav navbar-nav">
							<li>
								<NavLink
									onClick={(e) => {
										handleNavbarButton(e);
									}}
									activeClassName="is-active"
									exact
									className="nav-link"
									to={`/shop`}
								>
									All items
								</NavLink>
							</li>
							{categories.map(({ id, title, linkUrl }) => (
								<li key={id}>
									<NavLink
										onClick={(e) => {
											handleNavbarButton(e);
										}}
										activeClassName="is-active"
										exact
										className="nav-link"
										to={`/${linkUrl}`}
									>
										{title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navigation;
