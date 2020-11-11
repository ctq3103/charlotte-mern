const MAX_QUANTITY = 5;

export const isExceededMaxQty = (cartItems, cartItemToAddId, qty) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.productId === cartItemToAddId
	);
	if (existingCartItem && existingCartItem.qty + qty > MAX_QUANTITY)
		return true;
	else return false;
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.productId === cartItemToAdd.productId
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.productId === cartItemToAdd.productId
				? { ...cartItem, qty: cartItem.qty + cartItemToAdd.qty }
				: cartItem
		);
	}

	return [...cartItems, cartItemToAdd];
};

export const removeItemFromCart = (cartItems, cartItemToRemoveId) => {
	return cartItems.filter(
		(cartItem) => cartItem.productId !== cartItemToRemoveId
	);
};

export const changeQty = (cartItems, cartItemToChange) => {
	return cartItems.map((cartItem) =>
		cartItem.productId === cartItemToChange.productId
			? { ...cartItem, qty: cartItemToChange.qty }
			: cartItem
	);
};
