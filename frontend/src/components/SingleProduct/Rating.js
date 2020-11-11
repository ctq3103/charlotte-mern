import React from 'react';

const Rating = ({ value }) => {
	return (
		<div className="rating">
			<span>
				<i
					className={
						value >= 1
							? 'tf-ion-android-star'
							: value >= 0.5
							? 'tf-ion-android-star-half'
							: 'tf-ion-android-star-outline'
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 2
							? 'tf-ion-android-star'
							: value >= 1.5
							? 'tf-ion-android-star-half'
							: 'tf-ion-android-star-outline'
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 3
							? 'tf-ion-android-star'
							: value >= 2.5
							? 'tf-ion-android-star-half'
							: 'tf-ion-android-star-outline'
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 4
							? 'tf-ion-android-star'
							: value >= 3.5
							? 'tf-ion-android-star-half'
							: 'tf-ion-android-star-outline'
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 5
							? 'tf-ion-android-star'
							: value >= 4.5
							? 'tf-ion-android-star-half'
							: 'tf-ion-android-star-outline'
					}
				></i>
			</span>
			{/* <span>{text && text}</span> */}
		</div>
	);
};

export default Rating;
