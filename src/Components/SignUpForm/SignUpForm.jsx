import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.styles.scss'

const defaultFormField = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpForm = () => {
	const [formField, setFormField] = useState(defaultFormField);
	const { displayName, email, password, confirmPassword } = formField;


	const resetFormFields = () => {
		setFormField(defaultFormField)
	}

	const onHandleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords must be the same')
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password)

			await createUserDocumentFromAuth(user, { displayName })

			resetFormFields()
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use')
			} else {
				console.log('user creation encountered an error', error)
			}
		}
	}

	const onHandleChange = (event) => {
		const { name, value } = event.target;

		setFormField({ ...formField, [name]: value })
	}

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign Up With Email And Password</span>

			<form onSubmit={onHandleSubmit} >
				<FormInput label='Display Name' required type="text" onChange={onHandleChange} name='displayName' value={displayName} />

				<FormInput label='Email' required type="email" onChange={onHandleChange} name='email' value={email} />

				<FormInput label='Password' required type="password" onChange={onHandleChange} name='password' value={password} />

				<FormInput label='Confirm password' required type="password" onChange={onHandleChange} name='confirmPassword' value={confirmPassword} />

				<Button type='submit'>Sign Up</Button>
			</form>

		</div>
	)
}

export default SignUpForm;