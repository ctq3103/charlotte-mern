import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../Button/AddToCart';

const ProductItem = ({
	history,
	match,
	product,
	product: { _id, image, name, price, countInStock, status },
}) => {
	return (
		<div className="col-md-4">
			<div className="product-item">
				<div className="product-thumb">
					{countInStock === 0 && <span className="bage">Out Of Stock</span>}
					<Link to={`/product/${_id}`}>
						<img className="img-responsive" src={image} alt="product-img" />{' '}
					</Link>

					<div className="preview-meta">
						<div className="product-content ">
							<h4>{name}</h4>
							<p className="price">${price}</p>
						</div>

						{countInStock > 0 && (
							<AddToCart
								qty={1}
								product={product}
								className="btn btn-main btn-medium"
							>
								<i className="tf-ion-bag" />
							</AddToCart>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
