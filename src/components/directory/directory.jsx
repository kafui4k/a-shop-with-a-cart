import React, { Component } from 'react'

import shop_data from '../data/shop.data'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

export class Directory extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 sections: shop_data
	  }
	}

  render() {
	return (
		<div className='page-contents-listing-menu'>
			{
				this.state.sections.map(section => (
					<MenuItem
						title={section.title}
						items={section.items}
						key={section.id}
					/>
				))
			}
		</div>
	  
	)
  }
}

export default Directory