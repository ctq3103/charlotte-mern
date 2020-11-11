import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/product.actions';
import Pagination from '../Layout/Pagination';
import Loading from '../Reusable/Loading';
import Message from '../Reusable/Message';
import ProductItem from './ProductItem';

const ProductList = ({ category, keyword, pageNumber }) => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber, category));
	}, [dispatch, keyword, pageNumber, category]);

	return (
		<section className="products section">
			<div className="container">
				<div className="row">
					{loading && <Loading />}
					{error && (
						<Message type="alert-danger">
							<i className="tf-ion-close-circled"></i>
							{error}
						</Message>
					)}

					{products &&
						products.map((product) => (
							<ProductItem key={product._id} product={product} />
						))}
				</div>
				{!loading && !error && (
					<Pagination
						products={products}
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				)}
			</div>
		</section>
	);
};

export default ProductList;
