import React from 'react'

import './menu-item.styles.scss'

function MenuItem(props) {

	const {items} = props;

  return (
	<>
		{
			items.map(item => 
			<div key={item.id} className='page-contents-listing-menu-item' style={{ backgroundImage: `url(${item.imageUrl})` }}>
				<div className='content'>
					<h1 className='page-contents-listing-items-title'>{item.name}</h1>
					<span className='page-contents-listings-items-subtitle'>{item.price}</span>
					<span className='page-contents-listings-items-subtitle'>Buy Now</span>
				</div>
			</div>
  			)
		}
	</>
  )
}

export default MenuItem