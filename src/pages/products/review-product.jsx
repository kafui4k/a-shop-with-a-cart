import React, { Component } from 'react'
import SideBar from '../../components/sidebar/sidebar.component'

import './review-product.styles.scss'

class ReviewProduct extends Component {

  render() {
	return (
		<div className='product-page'>
			<SideBar />
			<div className='product-page-contents'>
				<div className='product-item'>
					<img src='https://cdn.shopify.com/s/files/1/0535/0385/2738/products/20210315-DSCF0604_470x.jpg?v=1615851222' alt='product' />
				</div>
				<div className='product-item-review'>
					<div className='product-item-review-header'>
						<h3>TBSSGH Top Seller Book</h3>
						<span>Tbssgh Shop</span>
					</div>
					<span product-item-review-price>GHS35.00</span>
					<div className='product-item-review-buttons'>
						<button type='submit' className='product-item-review-button primary'>ADD TO CART</button>
						<button type='submit' className='product-item-review-button normal'>BUY IT NOW</button>
					</div>
					<div className='product-item-review-description'>
						<p className='review-product-description-text'>
							Now TBSSGH Top Seller Books can help your daily decision, much 
							like anything else like a healthy diet. Dont skip this book if 
							you wanna hit the road running ASAP. in a grand style. Ask?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
  }
}

export default ReviewProduct