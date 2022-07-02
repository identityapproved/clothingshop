import React from 'react'
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import SignInForm from '../../Components/SignInForm/SignInForm';
import { AuthenticationContainer } from './Authentication.styles.jsx';

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SignUpForm />
			<SignInForm />
		</AuthenticationContainer>
	)
}

export default Authentication