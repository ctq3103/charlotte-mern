import React from 'react';

const Message = ({ type, children }) => {
	return (
		<div className={`alert ${type} alert-common`} role="alert">
			{children}
		</div>
	);
};

export default Message;
