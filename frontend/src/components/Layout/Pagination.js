import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({
	pages,
	page,
	isAdmin = false,
	keyword = '',
	products,
	orders,
	users,
}) => {
	return (
		pages > 1 && (
			<div className="text-center">
				{products && (
					<ul className="pagination post-pagination">
						{[...Array(pages).keys()].map((x) => (
							<li key={x} className={x + 1 === page ? 'active' : ''}>
								<Link
									to={
										!isAdmin
											? keyword
												? `/search/${keyword}/page/${x + 1}`
												: `/page/${x + 1}`
											: `/admin/productlist/${x + 1}`
									}
								>
									{x + 1}
								</Link>
							</li>
						))}
					</ul>
				)}

				{orders && (
					<ul className="pagination post-pagination">
						{[...Array(pages).keys()].map((x) => (
							<li key={x} className={x + 1 === page ? 'active' : ''}>
								<Link
									to={!isAdmin ? `/page/${x + 1}` : `/admin/orderlist/${x + 1}`}
								>
									{x + 1}
								</Link>
							</li>
						))}
					</ul>
				)}

				{users && (
					<ul className="pagination post-pagination">
						{[...Array(pages).keys()].map((x) => (
							<li key={x} className={x + 1 === page ? 'active' : ''}>
								<Link
									to={!isAdmin ? `/page/${x + 1}` : `/admin/userlist/${x + 1}`}
								>
									{x + 1}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		)
	);
};

export default Pagination;
