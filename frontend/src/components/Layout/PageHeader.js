import React from 'react';

const PageHeader = ({ children }) => {
	return (
		<section className="page-header">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="content">
							<h1 className="page-name">{children}</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageHeader;
