import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage.component';
import Header from './components/header/header.component';
import ReviewProduct from './pages/products/review-product';
import CartPage from './pages/cart/cartpage';

import './App.css';
import SideBar from './components/sidebar/sidebar.component';

class App extends Component {
	render() {
		return (
		  <div className="App">
			<Header />
			<div className='shop-title-logo'>
				<img
					src='https://www.nicepng.com/png/detail/918-9187081_book-and-pen-png-book-and-pen-logo.png'
					alt='shop logo' />
				<Link to='/'>
				<h1>TBSSGH</h1>
				</Link>
			</div>
			<div className='main'>
				<SideBar />
				<div className='page-contents'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/products/:productId' element={<ReviewProduct />} />
						<Route path='/cart' element={<CartPage />} />
						<Route path='*' element={
							<div className='404-page-not-found' style={{ padding: '1rem'}}>
								<h1>404 Page Not Found</h1>
								<p>The Page you're requesting does not exist. Click <Link to='/'>here</Link> to return to shopping</p>
							</div>
						}>
						</Route>
					</Routes>
				</div>
			</div>
		  </div>
		);
	}
}

export default App;
