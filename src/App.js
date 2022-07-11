import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage.component';
import Header from './components/header/header.component';
import ReviewProduct from './pages/products/review-product';

import './App.css';

class App extends Component {
	render() {
		return (
		  <div className="App">
			<Header />
			<div className='shop-title'>
				<h1>TBSSGH</h1>
			</div>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products/:productId' element={<ReviewProduct />} />
				<Route path='*' element={
					<div className='404-page-not-found' style={{ padding: '1rem'}}>
						<h1>404 Page Not Found</h1>
						<p>The Page you're requesting does not exist. Click <Link to='/'>here</Link> to return to shopping</p>
					</div>
				}>
				</Route>
			</Routes>
		  </div>
		);
	}
}

export default App;
