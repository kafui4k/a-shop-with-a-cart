import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage.component';
import Header from './components/header/header.component';
import ReviewProduct from './pages/products/review-product';
import CartPage from './pages/cart/cartpage';

import './App.css';
import SideBar from './components/sidebar/sidebar.component';

class App extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 cart: [],
		 cartTotal: 0
	  }
	}

	addToCartHandler = (productItem) => {
		let currentCart = this.state.cart;

		// check for same item in cart
		const itemAlreadyExist = this.state.cart.filter(itemExistInCart => 
			itemExistInCart.productId  === productItem.productId)

		if (itemAlreadyExist.length > 0) {
			currentCart.map(itemCurrentlyInCart => 
				itemCurrentlyInCart.id === itemAlreadyExist[0].id ? 
				itemCurrentlyInCart.quantity +=1 :
				currentCart)
		
			this.setState({cart: currentCart})

		} else {
			const item = productItem;
			item.quantity = 1;

			this.setState(prevState => ({
				cart: [...prevState.cart, item]
			}))
		}
	}

	updateCartItemQuantityHandler = (quantity, productId) => {
		const cartItem = this.state.cart;

		if (quantity === 0) {
			const removeItem = cartItem.filter(item => item.productId !== productId)
			this.setState({cart: removeItem})
		} else {
			let productItemUpdate = cartItem.find(item => item.productId === productId);
			productItemUpdate.quantity = quantity;
			cartItem.map(item => item.productId === productId ? productItemUpdate : null)
			this.setState({cart: cartItem})
		}
	}

	removeItemFromCartHandler = (productItemId) => {
		const filterItem = this.state.cart.filter(cartItem => cartItem.productId !== productItemId);
		this.setState({cart: filterItem})
	}

	render() {
		return (
		  <div className="App">
			<Header cartData={this.state.cart}/>
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
						<Route path='/products/:productId' element={<ReviewProduct addToCartHandler={this.addToCartHandler} />} />
						<Route path='/cart' element={<CartPage cartItems={this.state.cart} removeItem={this.removeItemFromCartHandler} updateItemQuantity={this.updateCartItemQuantityHandler} />} />
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
