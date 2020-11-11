import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, listUsers } from '../../actions/user.actions';
import PageHeader from '../../components/Layout/PageHeader';
import Pagination from '../../components/Layout/Pagination';
import Loading from '../../components/Reusable/Loading';
import Message from '../../components/Reusable/Message';

const UserList = ({ history, match }) => {
	const pageNumber = match.params.pageNumber;
	const dispatch = useDispatch();

	const userList = useSelector((state) => state.userList);
	const { loading, error, users, page, pages } = userList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userDelete = useSelector((state) => state.userDelete);
	const { success: successDelete } = userDelete;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers(pageNumber));
		} else {
			history.push('/login');
		}
	}, [dispatch, history, userInfo, successDelete, pageNumber]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteUser(id));
		}
	};

	return (
		<>
			<PageHeader>Users</PageHeader>
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
						{users && (
							<div className="col-md-12">
								<div className="dashboard-wrapper user-dashboard">
									<div className="table-responsive">
										<table className="table">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Email</th>
													<th>Role</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												{users.map((user) => (
													<tr key={user._id}>
														<td>{user._id}</td>
														<td>{user.name}</td>
														<td>
															<a href={`mailto:${user.email}`}>{user.email}</a>
														</td>
														<td>
															{user.isAdmin ? (
																<span className="label label-info">Admin</span>
															) : (
																<span className="label label-warning">
																	User
																</span>
															)}
														</td>
														<td>
															<div
																className="btn-group"
																role="group"
																style={{ display: 'flex' }}
															>
																<button
																	type="button"
																	className="btn btn-default"
																	onClick={() =>
																		history.push(`/admin/user/${user._id}/edit`)
																	}
																>
																	<i
																		className="tf-pencil2"
																		aria-hidden="true"
																	></i>
																</button>
																<button
																	type="button"
																	className="btn btn-default"
																	onClick={() => deleteHandler(user._id)}
																>
																	<i
																		className="tf-ion-close"
																		aria-hidden="true"
																	></i>
																</button>
															</div>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
								<Pagination
									users={users}
									pages={pages}
									page={page}
									isAdmin={true}
								/>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default UserList;
