import { AuthError, AuthErrorCodes } from 'firebase/auth';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.styles';
import { SignUpContainer } from './SignUpForm.styles';

const defaultFormField = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
};
const SignUpForm = () => {
	const dispatch = useDispatch();
	const [formField, setFormField] = useState(defaultFormField);
	const { displayName, email, password, confirmPassword } = formField;


	const resetFormFields = () => {
		setFormField(defaultFormField);
	};

	const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords must be the same');
			return;
		}

		try {

			dispatch(signUpStart(email, password, displayName));

			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	};

	const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormField({ ...formField, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign Up With Email And Password</span>

			<form onSubmit={onHandleSubmit} >
				<FormInput label='Display Name' required type="text" onChange={onHandleChange} name='displayName' value={displayName} />

				<FormInput label='Email' required type="email" onChange={onHandleChange} name='email' value={email} />

				<FormInput label='Password' required type="password" onChange={onHandleChange} name='password' value={password} />

				<FormInput label='Confirm password' required type="password" onChange={onHandleChange} name='confirmPassword' value={confirmPassword} />

				<Button type='submit'>Sign Up</Button>
			</form>

		</SignUpContainer>
	);
};

export default SignUpForm;