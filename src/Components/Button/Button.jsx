import React from 'react'
import { BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton } from './Button.styles'

export const BUTTON_TYPES = {
	base: 'base',
	google: 'google-sign-in',
	inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPES.base) => ({
	[BUTTON_TYPES.base]: BaseButton,
	[BUTTON_TYPES.google]: GoogleSignInButton,
	[BUTTON_TYPES.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton
			disabled={isLoading}
			{...otherProps}
		>{isLoading ? <ButtonSpinner /> : children}</CustomButton>
	)
}

export default Button