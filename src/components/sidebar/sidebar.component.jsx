import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.styles.scss'

function SideBar() {
  return (
	<section className='nav-side-bar'>
		<ul className='nav-items'>
			<li><Link to='/'>Home</Link></li>
			<li>Books</li>
		</ul>
	</section>
  )
}

export default SideBar