import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../../actions/order.actions';
import PageHeader from '../../components/Layout/PageHeader';
import Loading from '../../components/Reusable/Loading';
import Message from '../../components/Reusable/Message';
import Pagination from '../../components/Layout/Pagination';

const OrderList = ({ history, match }) => {
	const pageNumber = match.params.pageNumber;

	const dispatch = useDispatch();

	const orderList = useSelector((state) => state.orderList);
	const { loading, error, orders, pages, page } = orderList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listOrders(pageNumber));
		} else {
			history.push('/login');
		}
	}, [dispatch, history, userInfo, pageNumber]);

	return (
		<>
			<PageHeader>Orders</PageHeader>
			{loading && <Loading />}
			<section className="user-dashboard page-wrapper">
				<div className="container">
					<div className="row">
						{error && (
							<Message type="alert-danger">
								<i className="tf-ion-close-circled"></i>
								{error}
							</Message>
						)}
						{orders && (
							<div className="col-md-12">
								<div className="dashboard-wrapper user-dashboard">
									<div className="table-responsive">
										<table className="table">
											<thead>
												<tr>
													<th>ID</th>
													<th>User</th>
													<th>Date</th>
													<th>Total</th>
													<th>Paid</th>
													<th>Delivered</th>
												</tr>
											</thead>
											<tbody>
												{orders.map((order) => (
													<tr key={order._id}>
														<td>
															<Link to={`/order/${order._id}`}>
																#{order._id}
															</Link>
														</td>

														<td>{order.user.name}</td>
														<td>{order.createdAt.substring(0, 10)}</td>
														<td>${order.totalPrice}</td>
														<td>
															{order.isPaid ? (
																<p>{order.paidAt.substring(0, 10)}</p>
															) : (
																<span className="label label-danger">
																	Not Paid
																</span>
															)}
														</td>
														<td>
															{order.isDelivered ? (
																<p>{order.deliveredAt.substring(0, 10)}</p>
															) : (
																<span className="label label-danger">
																	Not Delivered
																</span>
															)}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						)}
						<Pagination
							orders={orders}
							pages={pages}
							page={page}
							isAdmin={true}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default OrderList;
