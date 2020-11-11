import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeItemQty } from '../../actions/cart.actions';
import RemoveFromCart from '../Button/RemoveFromCart';

const CartItem = ({
	item,
	item: { productId, image, name, price, countInStock, qty },
}) => {
	const dispatch = useDispatch();

	return (
		<tr>
			<td>
				<div className="product-info">
					<img width="80" src={image} alt={name} />
					<Link to={`/product/${productId}`}>{name}</Link>
				</div>
			</td>
			<td className="product-quantity">
				<select
					className="product-quantity-slider form-control"
					value={qty}
					onChange={(e) =>
						dispatch(changeItemQty(item, Number(e.target.value)))
					}
				>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</td>
			<td>${qty * price}</td>
			<td style={{ textAlign: 'center' }}>
				<RemoveFromCart product={item} className="btn btn-transparent btn-icon">
					<i className="tf-ion-android-delete"></i>
				</RemoveFromCart>
			</td>
		</tr>
	);
};

export default CartItem;
