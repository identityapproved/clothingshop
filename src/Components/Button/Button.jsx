import React from 'react'
import './Button.styles.scss'

const BUTTON_TYPES = {
	google: 'google-sign-in',
	inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPES[buttonType]}`}
			{...otherProps}
		>{children}</button>
	)
}

export default Button