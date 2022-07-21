import React from 'react'
import PropTypes from 'prop-types'

import './button.styles.scss'

const CustomButton = ({type, className, onClick, children}) => {

  return (
	<button
		type={type}
		className={className}
		onClick={onClick}
	>{children}</button>
  )
}

CustomButton.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	children: PropTypes.any.isRequired
}

CustomButton.defaultProps = {
	type: 'button'
}

export default CustomButton