import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

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
			</Routes>
		  </div>
		);
	}
}

export default App;
