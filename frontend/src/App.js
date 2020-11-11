import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import Home from './pages/home/Home.page';
import Login from './pages/user/Login.page';
import Register from './pages/user/Register.page';
import Profile from './pages/user/Profile.page';
import Shop from './pages/shop/Shop.page';
import ProductDetails from './pages/shop/ProductDetails.page';
import Cart from './pages/shop/Cart.page';
import Checkout from './pages/shop/Checkout.page';
import PlaceOrder from './pages/shop/PlaceOrder.page';
import OrderDetails from './pages/shop/OrderDetails.page';
import UserList from './pages/admin/UserList.page';
import UserEdit from './pages/admin/UserEdit.page';
import ProductList from './pages/admin/ProductList.page';
import ProductEdit from './pages/admin/ProductEdit.page';
import OrderList from './pages/admin/OrderList.page';

function App() {
	return (
		<Router>
			<Header />
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/shop/:category" component={Shop} />
				<Route exact path="/search/:keyword" component={Shop} />
				<Route exact path="/page/:pageNumber" component={Shop} />
				<Route
					exact
					path="/search/:keyword/page/:pageNumber"
					component={Shop}
				/>
				<Route path="/product/:id" component={ProductDetails} />
				<Route path="/cart" component={Cart} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/placeorder" component={PlaceOrder} />
				<Route path="/order/:id" component={OrderDetails} />
				<Route exact path="/admin/userlist" component={UserList} />
				<Route exact path="/admin/userlist/:pageNumber" component={UserList} />
				<Route path="/admin/user/:id/edit" component={UserEdit} />
				<Route exact path="/admin/productlist" component={ProductList} />
				<Route
					path="/admin/productlist/:pageNumber"
					component={ProductList}
					exact
				/>
				<Route path="/admin/product/:id/edit" component={ProductEdit} />
				<Route exact path="/admin/orderlist" component={OrderList} />
				<Route
					path="/admin/orderlist/:pageNumber"
					component={OrderList}
					exact
				/>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
