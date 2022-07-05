import React, { Component } from 'react'

import {sections} from '../data/sections.data'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

export class Directory extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 sections: sections
	  }
	}

  render() {
	return (
		<div className='page-contents-listing-menu'>
			{
				this.state.sections.map(section => (
					<MenuItem
						title={section.title}
						imageUrl={section.imageUrl}
						key={section.id}
						linkUrl={section.linkUrl}
					/>
				))
			}
		</div>
	  
	)
  }
}

export default Directory