import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({itemdata}) => {
  return (
	<>
	<section className='cartpage-item'>
		<div className='cartpage-item-pair'>
			<img className='image-container' src={`${itemdata.imageUrl}`} alt='item' />
			<div className='product-item-data'>
				<span className='product-name'>{itemdata.name}</span>
				<span className='remove-product-option'>Remove</span>
			</div>
		</div>
		<div className='price'>GHS {itemdata.price}</div>
		<div className='quantity'>
			<input type='number' value='2' />
		</div>
		<div className='total'>
			<span>GHS {itemdata.price * itemdata.quantity}</span>
		</div>
	</section>
	</>
  )
}

export default CartItem