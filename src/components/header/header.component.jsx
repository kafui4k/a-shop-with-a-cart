import React from 'react'
import PropTypes from 'prop-types'
import CartIcon from '../cart-icon/cart-icon.component'

import './header.styles.scss'

function Header(props) {

	const {cartData} = props;

  return (
	<div className='header'>
		<div className='search-container'>
			<input type='search' placeholder='Search' />
		</div>
		<div className='options'>
			<CartIcon className='option' cartItemCount={cartData} />
		</div>
	</div>
  )
}

Header.propTypes = {
	cartData: PropTypes.array.isRequired
}

export default Header