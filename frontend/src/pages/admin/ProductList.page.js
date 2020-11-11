import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	createProduct,
	deleteProduct,
	listProducts,
} from '../../actions/product.actions';
import PageHeader from '../../components/Layout/PageHeader';
import Pagination from '../../components/Layout/Pagination';
import Loading from '../../components/Reusable/Loading';
import Message from '../../components/Reusable/Message';
import { PRODUCT_CREATE_RESET } from '../../constants/product.contants';

const ProductList = ({ history, match }) => {
	const dispatch = useDispatch();
	const pageNumber = match.params.pageNumber || 1;

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, pages, page } = productList;

	const productDelete = useSelector((state) => state.productDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = productDelete;

	const productCreate = useSelector((state) => state.productCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		product: createdProduct,
	} = productCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		dispatch({ type: PRODUCT_CREATE_RESET });

		if (!userInfo.isAdmin) {
			history.push('/login');
		}
		if (successCreate) {
			history.push(`/admin/product/${createdProduct._id}/edit`);
		} else {
			dispatch(listProducts('', pageNumber));
		}
	}, [
		dispatch,
		history,
		userInfo,
		successCreate,
		successDelete,
		createdProduct,
		pageNumber,
	]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteProduct(id));
		}
	};

	const createProductHandler = () => {
		dispatch(createProduct());
	};

	return (
		<>
			<PageHeader>Products</PageHeader>

			<section className="user-dashboard page-wrapper">
				<div className="container">
					{loading && <Loading />}
					{error && (
						<Message type="alert-danger">
							<i className="tf-ion-close-circled"></i>
							{error}
						</Message>
					)}
					{loadingDelete && <Loading />}
					{errorDelete && (
						<Message type="alert-danger">
							<i className="tf-ion-close-circled"></i>
							{errorDelete}
						</Message>
					)}
					{loadingCreate && <Loading />}
					{errorCreate && (
						<Message type="alert-danger">
							<i className="tf-ion-close-circled"></i>
							{errorCreate}
						</Message>
					)}
					<div className="row">
						<div className="col-md-12">
							<button
								type="submit"
								className="btn btn-main text-center"
								onClick={createProductHandler}
							>
								Add New Product
							</button>
						</div>
					</div>
					<div className="row">
						{products && (
							<div className="col-md-12">
								<div className="dashboard-wrapper user-dashboard">
									<div className="table-responsive">
										<table className="table">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Price</th>
													<th>Category</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												{products.map((product) => (
													<tr key={product._id}>
														<td>#{product._id}</td>
														<td>{product.name}</td>
														<td>${product.price}</td>
														<td style={{ textTransform: 'capitalize' }}>
															{product.category}
														</td>
														<td>
															<div
																className="btn-group"
																role="group"
																style={{ display: 'flex' }}
															>
																<button
																	type="button"
																	className="btn btn-default"
																	onClick={() =>
																		history.push(
																			`/admin/product/${product._id}/edit`
																		)
																	}
																>
																	<i
																		className="tf-pencil2"
																		aria-hidden="true"
																	></i>
																</button>
																<button
																	type="button"
																	className="btn btn-default"
																	onClick={() => deleteHandler(product._id)}
																>
																	<i
																		className="tf-ion-close"
																		aria-hidden="true"
																	></i>
																</button>
															</div>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						)}
						<Pagination
							products={products}
							pages={pages}
							page={page}
							isAdmin={true}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductList;
