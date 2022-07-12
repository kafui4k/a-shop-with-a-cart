import React from 'react'
import Directory from '../../components/directory/directory'

import './homepage.styles.scss'

function HomePage() {
  return (
	<section className='homepage'>
		<span className='homepage-text'>Featured</span>
		<Directory />
	</section>
  )
}

export default HomePage