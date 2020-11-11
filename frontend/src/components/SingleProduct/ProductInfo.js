import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../actions/product.actions';
import { PRODUCT_CREATE_REVIEWS_RESET } from '../../constants/product.contants';
import AddToCart from '../Button/AddToCart';
import Loading from '../Reusable/Loading';
import Message from '../Reusable/Message';
import Rating from './Rating';

function ProductInfo({ history, match }) {
	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch({ type: PRODUCT_CREATE_REVIEWS_RESET });
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	return (
		<>
			{loading && <Loading />}
			{error && (
				<Message type="alert-danger">
					<i class="tf-ion-close-circled"></i>
					{error}
				</Message>
			)}
			{product && (
				<div className="row mt-20">
					<div className="col-md-5">
						<img
							className="img-responsive"
							src={product.image}
							alt="product-img"
						/>
					</div>
					<div className="col-md-7">
						<div className="single-product-details">
							<h2>{product.name}</h2>
							<p className="product-price">${product.price}</p>

							<p
								className="product-description mt-20"
								dangerouslySetInnerHTML={{ __html: product.description }}
							/>

							<div className="product-status">
								<span>Status:</span>
								<ul>
									<li>
										{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
									</li>
								</ul>
							</div>
							<div className="product-status">
								<span>Rating:</span>
								<ul>
									<li>
										<Rating value={product.rating} />
									</li>
								</ul>
							</div>

							<div className="product-category">
								<span>Categories:</span>
								<ul>
									<li>{product.category}</li>
								</ul>
							</div>

							{product.countInStock > 0 && (
								<>
									<div className="product-quantity">
										<span>Quantity:</span>
										<select
											className="product-quantity-slider form-control"
											value={qty}
											onChange={(e) => setQty(Number(e.target.value))}
										>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</select>
									</div>
									<AddToCart
										qty={qty}
										product={product}
										className="btn btn-main mt-40"
									>
										Add To Cart
									</AddToCart>
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProductInfo;
