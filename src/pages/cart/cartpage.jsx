import React from 'react'
import CustomButton from '../../components/button/button.component';
import CartItem from '../../components/cartitem/cart-item.component'

import './cartpage.styles.scss'

const CartPage = (props) => {

	const { cartItems, removeItem, updateItemQuantity } = props;

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
		{cartItems.map(cartItem => <CartItem key={cartItem.id} itemdata={cartItem} removeItem={removeItem} updateItemQuantity={updateItemQuantity} />)}
		
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
					<CustomButton
						className='transactions-button primary'
					>re</CustomButton>
					<CustomButton
						className='transactions-button primary'
					>continue shopping</CustomButton>
				</div>
				<CustomButton
					className='checkout-button normal'
				>checkout</CustomButton>
			</div>
		</div>
	</div>
)
}

export default CartPage