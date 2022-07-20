import React from 'react'
import CartItem from '../../components/cartitem/cart-item.component'

import './cartpage.styles.scss'

const CartPage = (props) => {

	const { cartItems, removeItem } = props;

return (
	<div className='cartpage'>
		<div className='cartpage-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Total</span>
			</div>
		</div>
		{cartItems.map(cartItem => <CartItem key={cartItem.id} itemdata={cartItem} removeItem={removeItem} />)}
		
		<div className='cart-footer'>
			<div className='feed-back'>
				<span className='feed-back-text'>
					Special Instructions for Seller
				</span>
				<textarea className='feed-back-textarea' rows="10" cols="50"></textarea>
			</div>
			<div className='transactions'>
				<span className='subtotal'>Subtotal GHS 40.00</span>
				<span className='notice'>Taxes and shipping calculated at checkout</span>
				<div className='transactions-buttons'>
					<button className='transactions-button primary'>re</button>
					<button className='transactions-button primary'>continue shopping</button>
				</div>
				<button className='checkout-button normal'>checkout</button>
			</div>
		</div>
	</div>
)
}

export default CartPage