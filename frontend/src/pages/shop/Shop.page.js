import React from 'react';
import PageHeader from '../../components/Layout/PageHeader';
import ProductList from '../../components/Products/ProductList';

const Shop = ({ match }) => {
	return (
		<>
			{match.params.category ? (
				<PageHeader>{match.params.category}</PageHeader>
			) : (
				<PageHeader>All Items</PageHeader>
			)}

			<ProductList
				category={match.params.category}
				keyword={match.params.keyword}
				pageNumber={match.params.pageNumber}
			/>
		</>
	);
};

export default Shop;
