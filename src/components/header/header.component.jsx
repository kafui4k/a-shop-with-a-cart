import React from 'react'
import CartIcon from '../cart-icon/cart-icon.component'

import './header.styles.scss'

function Header() {
  return (
	<div className='header'>
		<div className='header-logo-container'>
			<input type='search' placeholder='Search' />
		</div>
		<div className='options'>
			<CartIcon className='option' />
		</div>
	</div>
  )
}

export default Header