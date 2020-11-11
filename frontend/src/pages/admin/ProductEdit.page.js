import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
	listProductDetails,
	updateProduct,
} from '../../actions/product.actions';
import Loading from '../../components/Reusable/Loading';
import Message from '../../components/Reusable/Message';
import { PRODUCT_UPDATE_RESET } from '../../constants/product.contants';

const ProductEdit = ({ match, history }) => {
	const dispatch = useDispatch();
	const productId = match.params.id;

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('');
	const [countInStock, setCountInStock] = useState(0);
	const [uploading, setUploading] = useState(false);
	const [fileName, setFileName] = useState('JPEG, JPG or PNG only');

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = productUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			history.push('/admin/productlist');
		} else {
			if (!product.name || product._id !== productId) {
				dispatch(listProductDetails(productId));
			} else {
				setName(product.name);
				setDescription(product.description);
				setPrice(product.price);
				setCategory(product.category);
				setCountInStock(product.countInStock);
				setImage(product.image);
			}
		}
	}, [history, product, dispatch, productId, successUpdate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProduct({
				_id: productId,
				name,
				description,
				price,
				category,
				countInStock,
				image,
			})
		);
	};

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);
		setFileName(file.name);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};
			const { data } = await axios.post('/api/upload', formData, config);
			setImage(data);
			setUploading(false);
		} catch (error) {
			setUploading(false);
		}
	};

	return (
		<section className="signin-page account">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="block text-center">
							<h2 className="text-center">Edit Product</h2>
							{errorUpdate && (
								<Message type="alert-danger">
									<i className="tf-ion-close-circled"></i>
									{errorUpdate}
								</Message>
							)}
							{loadingUpdate && <Loading />}
							{error && (
								<Message type="alert-danger">
									<i className="tf-ion-close-circled"></i>
									{error}
								</Message>
							)}
							{loading && <Loading />}
							{product && (
								<form onSubmit={submitHandler} className="text-left clearfix">
									<div className="form-group">
										<label>Name</label>

										<input
											type="text"
											className="form-control"
											placeholder="Name"
											autoComplete="off"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label>Description</label>

										<textarea
											className="form-control"
											placeholder="Description"
											value={description}
											onChange={(e) => setDescription(e.target.value)}
											style={{ height: '100px' }}
										/>
									</div>
									<div className="form-group">
										<label>Price</label>

										<input
											type="number"
											className="form-control"
											placeholder="Price"
											min="0"
											value={price}
											onChange={(e) => setPrice(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label>Category</label>

										<select
											className="form-control"
											value={category}
											onChange={(e) => setCategory(e.target.value)}
										>
											<option value="necklaces">Necklaces</option>
											<option value="rings">Rings</option>
											<option value="bracelets">Bracelets</option>
											<option value="earring">Earrings</option>
											<option value="charms">Charms</option>
										</select>
									</div>
									<div className="form-group">
										<label>Count In Stock</label>

										<input
											type="number"
											className="form-control"
											placeholder="Count In Stock"
											min="0"
											value={countInStock}
											onChange={(e) => setCountInStock(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label>Image Link</label>

										<input
											type="text"
											className="form-control"
											placeholder="Image URL"
											value={image}
											onChange={(e) => setImage(e.target.value)}
										/>
									</div>
									<div className="form-group">
										{uploading && <Loading />}
										<label className="btn btn-main btn-small btn-round-full btn-icon">
											<input type="file" onChange={uploadFileHandler} />
											<i
												className="tf-ion-ios-cloud-upload-outline"
												style={{ marginRight: '10px' }}
											></i>
											Upload Image
										</label>
										<span style={{ marginLeft: '10px' }}>{fileName}</span>
									</div>

									<div className="text-center">
										<button type="submit" className="btn btn-main text-center">
											Update
										</button>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductEdit;
