import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './cart-item.styles.scss'

const CartItem = ({itemdata, removeItem, updateItemQuantity}) => {
	const [quantity, setQuantity] = useState(itemdata.quantity)

	const quantityValueChange = (event) => {
		const quantityValue = event.target.value;

		setQuantity(quantityValue);
	}

	const decreaseQuantityCount = () => {
		setQuantity( quantity - 1)

		updateItemQuantity(quantity, itemdata.productId)
	}

	const increaseQuantityCount = () => {
		setQuantity( quantity + 1)

		updateItemQuantity(quantity, itemdata.productId)
	}
  return (
	<>
	<section className='cartpage-item'>
		<div className='cartpage-item-pair'>
			<img className='image-container' src={`${itemdata.imageUrl}`} alt='item' />
			<div className='product-item-data'>
				<span className='product-name'>{itemdata.name}</span>
				<span className='remove-product-option'>
					<button type='button' onClick={() => removeItem(itemdata.productId)}>Remove</button>
				</span>
			</div>
		</div>
		<div className='price'>GHS {itemdata.price}</div>
		<div className='quantity'>
			<span className='quantity__button' onClick={decreaseQuantityCount}>-</span>
			<input className='quantity__value' type='text' name='quantity' onChange={(event) => quantityValueChange(event)} value={quantity} />
			<span className='quantity__button' onClick={increaseQuantityCount}>+</span>
		</div>
		<div className='total'>
			<span>GHS {itemdata.price * itemdata.quantity}</span>
		</div>
	</section>
	</>
  )
}

CartItem.propTypes = {
	itemdata: PropTypes.any,
	removeItem: PropTypes.func,
	updateItemQuantity: PropTypes.func
}

export default CartItem