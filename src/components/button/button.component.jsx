import React from 'react'

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

export default CustomButton