import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUser } from '../../actions/user.actions';
import Loading from '../../components/Reusable/Loading';
import Message from '../../components/Reusable/Message';
import { USER_UPDATE_RESET } from '../../constants/user.constants';

const UserEdit = ({ match, history }) => {
	const dispatch = useDispatch();
	const userId = match.params.id;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false || '');

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userUpdate = useSelector((state) => state.userUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = userUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: USER_UPDATE_RESET });
			history.push('/admin/userlist');
		} else {
			if (!user.name || user._id !== userId) {
				dispatch(getUserDetails(userId));
			} else {
				setName(user.name);
				setEmail(user.email);
				setIsAdmin(user.isAdmin);
			}
		}
	}, [history, user, dispatch, userId, successUpdate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateUser({ _id: userId, name, email, isAdmin }));
	};

	return (
		<section className="signin-page account">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="block text-center">
							<h2 className="text-center">Edit User</h2>
							{errorUpdate && (
								<Message type="alert-danger">
									<i className="tf-ion-close-circled"></i>
									{errorUpdate}
								</Message>
							)}
							{loadingUpdate && <Loading />}
							{error && (
								<Message type="alert-danger">
									<i className="tf-ion-close-circled"></i>
									{error}
								</Message>
							)}
							{loading && <Loading />}
							{user && (
								<form onSubmit={submitHandler} className="text-left clearfix">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Name"
											autoComplete="off"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											placeholder="Email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<input
											type="checkbox"
											id="isAdmin-checkbox"
											name="isAdmin"
											checked={isAdmin}
											onChange={(e) => setIsAdmin(e.target.checked)}
										/>
										<label
											htmlFor="isAdmin-checkbox"
											style={{ paddingLeft: '10px', fontWeight: 'normal' }}
										>
											Is Admin
										</label>
									</div>

									<div className="text-center">
										<button type="submit" className="btn btn-main text-center">
											Update
										</button>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserEdit;
