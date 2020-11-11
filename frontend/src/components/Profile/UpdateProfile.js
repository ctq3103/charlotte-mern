import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../../actions/user.actions';
import Loading from '../Reusable/Loading';
import Message from '../Reusable/Message';

const UpdateProfile = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, user, error } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
			if (!user.name) {
				dispatch(getUserDetails('profile'));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, user, history, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }));
		}
	};

	return (
		<div className="block my-profile">
			<h4 className="widget-title">Update My Account</h4>
			{message && (
				<Message type="alert-danger">
					<i className="tf-ion-close-circled"></i>
					{message}
				</Message>
			)}
			{error && (
				<Message type="alert-danger">
					<i className="tf-ion-close-circled"></i>
					{error}
				</Message>
			)}
			{success && (
				<Message type="alert-success">
					<i class="tf-ion-thumbsup"></i>
					<span>Well done!</span> Your profile has been updated!
				</Message>
			)}
			{loading && <Loading />}
			<form onSubmit={submitHandler} className="text-left clearfix">
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Username"
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
						type="password"
						className="form-control"
						placeholder="Password"
						autoComplete="off"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						placeholder="Confirm Password"
						autoComplete="off"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-main text-center">
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateProfile;
