import React from 'react';
import ProductInfo from '../../components/SingleProduct/ProductInfo';
import Review from '../../components/SingleProduct/Review';

const ProductDetails = ({ match }) => {
	return (
		<section className="single-product">
			<div className="container">
				<ProductInfo match={match} />
				<Review match={match} />
			</div>
		</section>
	);
};

export default ProductDetails;
