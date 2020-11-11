import React from 'react';

const Footer = () => {
	return (
		<footer className="footer section text-center">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="social-media">
							<li>
								<i className="tf-ion-social-facebook"></i>
							</li>
							<li>
								<i className="tf-ion-social-instagram"></i>
							</li>
							<li>
								<i className="tf-ion-social-twitter"></i>
							</li>
							<li>
								<i className="tf-ion-social-pinterest"></i>
							</li>
						</ul>
						<ul className="footer-menu">
							<li>CONTACT</li>
							<li>SHIPPING</li>
							<li>TERMS OF SERVICE</li>
							<li>PRIVACY POLICY</li>
						</ul>
						<p className="copyright-text">Copyright &copy; Charlotte</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
