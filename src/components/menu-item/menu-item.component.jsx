import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './menu-item.styles.scss'

function MenuItem(props) {

	const {items} = props;

  return (
	<>
		{
			items.map(item => 
			<div key={item.id} className='page-contents-listing-menu-item' style={{ backgroundImage: `url(${item.imageUrl})` }}>
					<div className='content'>
						<Link to={`products/${item.productId}`}>
							<h1 className='page-contents-listing-items-title'>{item.name}</h1>
							<span className='page-contents-listings-items-subtitle'>{item.price}</span>
							<span className='page-contents-listings-items-subtitle'>
								Buy Now
							</span>
						</Link>
					</div>
			</div>
  			)
		}
	</>
  )
}

MenuItem.propTypes = {
	items: PropTypes.array
}

export default MenuItem