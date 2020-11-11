import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	createProductReview,
	listProductDetails,
} from '../../actions/product.actions';
import Message from '../Reusable/Message';
import Rating from './Rating';
import { PRODUCT_CREATE_REVIEWS_RESET } from '../../constants/product.contants';

const Review = ({ match }) => {
	const productId = match.params.id;
	const [rating, setRating] = useState(5);
	const [comment, setComment] = useState('');

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const productDetails = useSelector((state) => state.productDetails);
	const { product } = productDetails;

	const productReviewCreate = useSelector((state) => state.productReviewCreate);
	const { success: successReview, error: errorReview } = productReviewCreate;

	useEffect(() => {
		dispatch({ type: PRODUCT_CREATE_REVIEWS_RESET });
		if (successReview) {
			setRating(1);
			setComment('');
			dispatch({ type: PRODUCT_CREATE_REVIEWS_RESET });
		}
		dispatch(listProductDetails(productId));
	}, [successReview, productId, dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			createProductReview(productId, {
				rating,
				comment,
			})
		);
	};

	return (
		<div className="row mt-50">
			<div className="col-md-4 post-comments-form">
				<h4 className="post-sub-heading">Write Your Review</h4>
				{errorReview && <Message type="alert-danger">{errorReview}</Message>}
				{userInfo ? (
					<form onSubmit={submitHandler}>
						<div className="form-group">
							<p>Rating:</p>
							<select
								className="form-control"
								value={rating}
								onChange={(e) => setRating(e.target.value)}
							>
								<option value="5">5 - Excellent</option>
								<option value="4">4 - Very Good</option>
								<option value="3">3 - Good</option>
								<option value="2">2 - Fair</option>
								<option value="1">1 - Poor</option>
							</select>
						</div>
						<div className="form-group">
							<textarea
								value={comment}
								onChange={(e) => setComment(e.target.value)}
								name="text"
								id="text"
								className=" form-control"
								rows="10"
								placeholder="Review"
								maxLength="400"
							></textarea>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-small btn-main ">
								Send review
							</button>
						</div>
					</form>
				) : (
					<Message type="alert-info">
						Please <Link to="/login">sign in</Link> to write a review
					</Message>
				)}
			</div>
			<div className="col-md-7 col-md-offset-1">
				<h4 className="post-sub-heading">Reviews({product.numReviews})</h4>

				<div className=" tab-content patternbg">
					<div className="post-comments">
						{product.reviews.length === 0 && (
							<Message type="alert-info">No reviews</Message>
						)}

						{product.reviews.length > 0 && (
							<ul className="media-list comments-list m-bot-50 clearlist">
								{product.reviews.map((review) => (
									<li className="media" key={review._id}>
										<div className="media-body">
											<div className="comment-info">
												<h4 className="comment-author">{review.name}</h4>

												<time dateTime="2013-04-06T13:53">
													{review.createdAt.substring(0, 10)}
												</time>
											</div>
											<Rating value={review.rating} /> {review.comment}
											<p></p>
										</div>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
