import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import ReviewProductItem from '../review-product-item/review-product-item'

import products_data from '../../components/data/products.data'

import './review-product.styles.scss'

function ReviewProduct (props) {
	const [itemData, setItemData] = useState([])
	
	let params = useParams();

	const {addToCartHandler} = props;

	useEffect(() => {
		fetchProductItem()
	}, [])

	const fetchProductItem = () => {
		setItemData(products_data)
	}

	return (
		<>	
			{
				itemData
					.filter(item => item.productId === params.productId)
					.map(item => (<ReviewProductItem addItem={addToCartHandler} key={item.id} item={item} />))
			}
		</>
	)
}

ReviewProduct.propTypes = {
	addToCartHandler: PropTypes.func
}

export default ReviewProduct