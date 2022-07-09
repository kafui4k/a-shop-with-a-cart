import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import SideBar from '../../components/sidebar/sidebar.component'
import ReviewProductItem from '../review-product-item/review-product-item'

import products_data from '../../components/data/products.data'

import './review-product.styles.scss'

function ReviewProduct () {
	const [itemData, setItemData] = useState([])
	
	let params = useParams();

	// console.log(params.productId)

	useEffect(() => {
		fetchProductItem()
	}, [])

	const fetchProductItem = () => {
		setItemData(products_data)
	}

	return (
		<div className='product-page'>
			<SideBar />
			
			{
				itemData
					.filter(item => item.productId === params.productId)
					.map(item => (<ReviewProductItem key={item.id} item={item} />))
			}
		</div>
	)
}

export default ReviewProduct