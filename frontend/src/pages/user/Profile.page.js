import React from 'react';
import PageHeader from '../../components/Layout/PageHeader';
import MyOrders from '../../components/Profile/MyOrders';
import UpdateProfile from '../../components/Profile/UpdateProfile';

const Profile = ({ history }) => {
	return (
		<>
			<PageHeader>My Profile</PageHeader>
			<section className="page-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-3" style={{ marginBottom: '50px' }}>
							<UpdateProfile key="update-profile" history={history} />
						</div>
						<div className="col-md-8 col-md-offset-1">
							<MyOrders key="my-order" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Profile;
