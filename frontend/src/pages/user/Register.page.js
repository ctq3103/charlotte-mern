import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/user.actions';
import Loading from '../../components/Reusable/Loading';
import Message from '../../components/Reusable/Message';

const Register = ({ history, location }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const user = useSelector((state) => state.userRegister);
	const { loading, userInfo, error } = user;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<section className="signin-page account">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="block text-center">
							<h2 className="text-center">Create Your Account</h2>
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
										Register
									</button>
								</div>
							</form>
							<p className="mt-20">
								Already have an account ?<Link to="/login"> Login</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
