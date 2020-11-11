import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchDropdown = () => {
	const history = useHistory();
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};

	return (
		<li className="dropdown search dropdown-slide">
			<div className="dropdown-icon">
				<i className="tf-ion-ios-search-strong"></i>
			</div>
			<ul className="dropdown-menu search-dropdown">
				<li>
					<form onSubmit={submitHandler} style={{ display: 'flex' }}>
						<input
							type="search"
							className="form-control"
							placeholder="Search..."
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<button className="btn btn-small btn-icon">
							<i className="tf-ion-ios-search-strong"></i>
						</button>
					</form>
				</li>
			</ul>
		</li>
	);
};

export default SearchDropdown;
