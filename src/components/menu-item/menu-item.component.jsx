import React from 'react'

import './menu-item.styles.scss'

function MenuItem(props) {

	const {title, imageUrl} = props;

  return (
	<div className='page-contents-listing-menu-item' style={{ backgroundImage: `url(${imageUrl})` }}>
		<div className='content'>
			<h1 className='page-contents-listing-items-title'>{title}</h1>
			<span className='page-contents-listings-items-subtitle'>Buy Now</span>
		</div>
	</div>
  )
}

export default MenuItem