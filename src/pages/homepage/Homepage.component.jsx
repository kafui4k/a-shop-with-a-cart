import React from 'react'
import Directory from '../../components/directory/directory'
import SideBar from '../../components/sidebar/sidebar.component'

import './homepage.styles.scss'

function HomePage() {
  return (
	<div className='homepage'>
		<SideBar />
		<div className='page-contents'>
			<h3>Featured</h3>
			<Directory />
		</div>
	</div>
  )
}

export default HomePage