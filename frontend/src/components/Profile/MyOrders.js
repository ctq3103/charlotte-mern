import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listMyOrders } from '../../actions/order.actions';
import { ORDER_DETAILS_RESET } from '../../constants/order.constants';
import Loading from '../Reusable/Loading';
import Message from '../Reusable/Message';

const MyOrders = () => {
	const dispatch = useDispatch();

	const myOrderList = useSelector((state) => state.myOrderList);
	const { loading, error, orders } = myOrderList;

	useEffect(() => {
		dispatch({ type: ORDER_DETAILS_RESET });
		dispatch(listMyOrders());
	}, [dispatch]);

	return (
		<div className="total-order my-profile">
			{loading && <Loading />}
			{error && (
				<Message type="alert-danger">
					<i class="tf-ion-close-circled"></i>
					{error}
				</Message>
			)}
			{orders && (
				<>
					<h4 className="widget-title">My Order List</h4>
					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th>Order ID</th>
									<th>Date</th>
									<th>Total Price</th>
									<th>Paid</th>
									<th>Delivered</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => (
									<tr key={order._id}>
										<td>
											<Link to={`/order/${order._id}`}>#{order._id}</Link>
										</td>
										<td>{order.createdAt.substring(0, 10)}</td>
										<td>${order.totalPrice}</td>
										<td>
											{order.isPaid ? (
												order.paidAt.substring(0, 10)
											) : (
												<span className="label label-danger">Not Paid</span>
											)}
										</td>
										<td>
											{order.isDelivered ? (
												order.deliveredAt.substring(0, 10)
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
				</>
			)}
		</div>
	);
};

export default MyOrders;
