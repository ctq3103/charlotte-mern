import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
	productCreateReducer,
	productDeleteReducer,
	productDetailsReducer,
	productListReducer,
	productReviewCreateReducer,
	productUpdateReducer,
} from './reducers/product.reducers';
import { cartReducer } from './reducers/cart.reducers';
import {
	userDeleteReducer,
	userDetailsReducer,
	userListReducer,
	userLoginReducer,
	userRegisterReducer,
	userUpdateProfileReducer,
	userUpdateReducer,
} from './reducers/user.reducers';
import {
	myOrderListReducer,
	orderCreateReducer,
	orderDeliverReducer,
	orderDetailsReducer,
	orderListReducer,
	orderPayReducer,
} from './reducers/order.reducers';

const rootPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'user'],
	blacklist: ['orderDetails'],
};

const cartPersistConfig = {
	key: 'cart',
	storage,
	blacklist: ['error'],
};

const userLoginPersistConfig = {
	key: 'user',
	storage,
	blacklist: ['error'],
};

const reducer = persistReducer(
	rootPersistConfig,
	combineReducers({
		productList: productListReducer,
		productDetails: productDetailsReducer,
		productDelete: productDeleteReducer,
		productCreate: productCreateReducer,
		productUpdate: productUpdateReducer,
		productReviewCreate: productReviewCreateReducer,
		cart: persistReducer(cartPersistConfig, cartReducer),
		userLogin: persistReducer(userLoginPersistConfig, userLoginReducer),
		userRegister: userRegisterReducer,
		userDetails: userDetailsReducer,
		userUpdateProfile: userUpdateProfileReducer,
		orderCreate: orderCreateReducer,
		orderDetails: orderDetailsReducer,
		orderPay: orderPayReducer,
		orderDeliver: orderDeliverReducer,
		myOrderList: myOrderListReducer,
		orderList: orderListReducer,
		userList: userListReducer,
		userDelete: userDeleteReducer,
		userUpdate: userUpdateReducer,
	})
);

// const reducer = combineReducers({
// 	productList: productListReducer,
// 	productDetails: productDetailsReducer,
// 	cart: persistReducer(cartPersistConfig, cartReducer),
// 	userLogin: persistReducer(userLoginPersistConfig, userLoginReducer),
// 	userRegister: userRegisterReducer,
// 	userDetails: userDetailsReducer,
// 	userUpdateProfile: userUpdateProfileReducer,
// 	orderCreate: orderCreateReducer,
// 	orderDetails: orderDetailsReducer,
// 	orderPay: orderPayReducer,
// 	myOrderList: myOrderListReducer,
// });

const initialState = {};

const middlewares = [thunk];
export const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
