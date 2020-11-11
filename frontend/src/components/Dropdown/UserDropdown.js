import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/user.actions';

const UserDropdown = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state) => state.userLogin);
	const { userInfo } = user;

	const logoutHandler = () => {
		dispatch(logout());
		history.push('/');
	};

	return (
		<li className="dropdown dropdown-slide">
			{userInfo ? (
				<>
					<div className="dropdown-icon">
						<span>Hello, {userInfo.name}</span>
					</div>

					<div className="dropdown-menu">
						{userInfo.isAdmin ? (
							<>
								<div className="media">
									<Link to="/admin/userlist">
										<h5>Users</h5>
									</Link>
								</div>
								<div className="media">
									<Link to="/admin/productlist">
										<h5>Products</h5>
									</Link>
								</div>
								<div className="media">
									<Link to="/admin/orderlist">
										<h5>Orders</h5>
									</Link>
								</div>
							</>
						) : (
							<div className="media">
								<Link to="/profile">
									<h5>Profile</h5>
								</Link>
							</div>
						)}

						<div
							className="media"
							style={{
								color: '#000',
								cursor: 'pointer',
								borderTop: '1px solid #dedede',
							}}
							onClick={logoutHandler}
						>
							<h5>Logout</h5>
						</div>
					</div>
				</>
			) : (
				<Link to="/login">
					<span>Login</span>
				</Link>
			)}
		</li>
	);
};

export default UserDropdown;
