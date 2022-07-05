import React from 'react'

import './homepage.styles.scss'

function HomePage() {
  return (
	<div className='homepage'>
		<div className='nav-side-bar'>
			<ul className='nav-items'>
				<li>Home</li>
				<li>Shirts</li>
				<li>Home</li>
				<li>Shirts</li>
			</ul>
		</div>
		<div className='page-contents'>
			<div className='page-contents-listing-menu'>
				<div className='page-contents-listing-menu-item'>
					<div className='content'>
						<h1 className='page-contents-listing-items-title'>Shirts</h1>
						<span className='page-contents-listings-items-subtitle'>$ 45.00</span>
					</div>
				</div>

				<div className='page-contents-listing-menu-item'>
					<div className='content'>
						<h1 className='page-contents-listing-items-title'>Shirts</h1>
						<span className='page-contents-listings-items-subtitle'>$ 45.00</span>
					</div>
				</div>

				<div className='page-contents-listing-menu-item'>
					<div className='content'>
						<h1 className='page-contents-listing-items-title'>Shirts</h1>
						<span className='page-contents-listings-items-subtitle'>$ 45.00</span>
					</div>
				</div>

				<div className='page-contents-listing-menu-item'>
					<div className='content'>
						<h1 className='page-contents-listing-items-title'>Shirts</h1>
						<span className='page-contents-listings-items-subtitle'>$ 45.00</span>
					</div>
				</div>

				<div className='page-contents-listing-menu-item'>
					<div className='content'>
						<h1 className='page-contents-listing-items-title'>Shirts</h1>
						<span className='page-contents-listings-items-subtitle'>$ 45.00</span>
					</div>
				</div>
			
				<div className='page-contents-listing-menu-item'>
					<div className='content'>
						<h1 className='page-contents-listing-items-title'>Shirts</h1>
						<span className='page-contents-listings-items-subtitle'>$ 45.00</span>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default HomePage