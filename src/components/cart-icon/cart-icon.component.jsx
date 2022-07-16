import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as ShoppingCartIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

function CartIcon(props) {

	const {cartItemCount} = props;

	const count = cartItemCount.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0,
        )

  return (
	<div className='cart-icon'>
		<ShoppingCartIcon className='shopping-icon' />
		<span className='item-count'>
			<Link to='cart'>Cart ({count})</Link>
		</span>
	</div>
  )
}

export default CartIcon