import React from 'react';
import { useHistory } from 'react-router-dom';
import { categories } from '../../data/categories.data';

const Categories = () => {
	const history = useHistory();
	return (
		<section className="product-category section">
			<div className="container">
				<div className="row">
					{categories.map(
						({ id, title, description, imageUrl, linkUrl, size }) => (
							<div key={id} className={size ? 'col-md-6' : 'col-md-4'}>
								<div className="category-box">
									<img src={imageUrl} alt={title} />

									<div className="content-overlay">
										<div className="content">
											<h3>{title.toUpperCase()}</h3>
											<p>{description}</p>
											<button
												onClick={() => history.push(`/${linkUrl}`)}
												className="btn btn-medium btn-main"
											>
												Shop now <i className="tf-ion-ios-arrow-right"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Categories;
