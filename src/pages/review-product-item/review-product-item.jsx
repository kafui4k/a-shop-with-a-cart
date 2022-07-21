import React from 'react'
import PropTypes from 'prop-types'

import CustomButton from '../../components/button/button.component'

import './review-product-item.styles.scss'

function ReviewProductItem({addItem, item}) {

	// const {addToCartHandler} = props;

  return (
	<div className='product-page-contents'>
		<div className='product-item'>
			<img src={`${item.imageUrl}`} width='50%' alt='product' />
		</div>
		<div className='product-item-review'>
			<div className='product-item-review-header'>
				<h3>TBSSGH Top Seller Book</h3>
				<span>Tbssgh Shop</span>
			</div>
			<span className='product-item-review-price'>GHS {item.price}</span>
			<input type='number' />
			<div className='product-item-review-buttons'>
				<CustomButton
					type='button'
					className='product-item-review-button primary'
					onClick={() => addItem(item)}
				>ADD TO CART</CustomButton>
				<CustomButton 
					type='button'
				 	className='product-item-review-button normal'
				>BUY IT NOW</CustomButton>
			</div>
			<div className='product-item-review-description'>
				<p className='review-product-description-text'>
					<b>{item.productId}</b> {item.description}
				</p>
			</div>
		</div>
	</div>
  )
}

ReviewProductItem.propTypes = {
	addItem: PropTypes.func,
	item: PropTypes.object
}

export default ReviewProductItem