import React from 'react'
import Directory from '../components/directory/directory'

import './homepage.styles.scss'

function HomePage() {
  return (
	<div className='homepage'>
		<div className='nav-side-bar'>
			<ul className='nav-items'>
				<li>Home</li>
				<li>Books</li>
			</ul>
		</div>
		<div className='page-contents'>
			<h3>Featured</h3>
			<Directory />
		</div>
	</div>
  )
}

export default HomePage