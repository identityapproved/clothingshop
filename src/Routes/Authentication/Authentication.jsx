import React from 'react'
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import SignInForm from '../../Components/SignInForm/SignInForm';
import './Authentication.styles.scss'

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignUpForm />
			<SignInForm />
		</div>
	)
}

export default Authentication