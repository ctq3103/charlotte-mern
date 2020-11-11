import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/user.actions';
import Message from '../../components/Reusable/Message';
import Loading from '../../components/Reusable/Loading';

const Login = ({ history, location }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const user = useSelector((state) => state.userLogin);
	const { loading, userInfo, error } = user;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<section className="signin-page account">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="block text-center">
							<h2 className="text-center">Welcome Back</h2>
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
								<div className="text-center">
									<button type="submit" className="btn btn-main text-center">
										Login
									</button>
								</div>
							</form>
							<p className="mt-20">
								New in this site ?
								<Link
									to={redirect ? `/register?redirect=${redirect}` : '/register'}
								>
									{' '}
									Create New Account
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
