import React from 'react'

import './cart-item.styles.scss'

const CartItem = () => {
  return (
	<>
	<section className='cartpage-item'>
		<div className='cartpage-item-pair'>
			<img className='image-container' src='https://pbs.twimg.com/media/Eg0Rpo3XgAEF-om.jpg' alt='item' />
			<div className='product-item-data'>
				<span className='product-name'>Product Name</span>
				<span className='remove-product-option'>Remove</span>
			</div>
		</div>
		<div className='price'>GHS 50.00</div>
		<div className='quantity'>
			<input type='number' value='2' />
		</div>
		<div className='total'>
			<span>GHS 40.00</span>
		</div>
	</section>

	<section className='cartpage-item'>
		<div className='cartpage-item-pair'>
			<img className='image-container' src='https://pbs.twimg.com/media/Eg0Rpo3XgAEF-om.jpg' alt='item' />
			<div className='product-item-data'>
				<span className='product-name'>Product Name</span>
				<span className='remove-product-option'>Remove</span>
			</div>
		</div>
		<div className='price'>GHS 50.00</div>
		<div className='quantity'>
			<input type='number' value='2' />
		</div>
		<div className='total'>
			<span>GHS 40.00</span>
		</div>
	</section>
	</>
  )
}

export default CartItem