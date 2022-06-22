import React, { useState } from 'react'

const defaultFormField = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpForm = () => {
	const [formField, setFormField] = useState(defaultFormField);
	const { displayName, email, password, confirmPassword } = defaultFormField;

	const onHandleSubmit = async (event) => {
		event.preventDefault();
	}

	const onHandleChange = (event) => {
		const { name, value } = event.target;

		setFormField({ ...formField, [name]: value })
	}

	return (
		<div className="form-container">
			<h1>Sign Up With Email</h1>

			<form onSubmit={() => onHandleSubmit()} >
				<label>Display Name</label>
				<input required type="text" onChange={onHandleChange} name='displayName' value={displayName} />

				<label>Email</label>
				<input required type="email" onChange={onHandleChange} name='email' value={email} />

				<label>Password</label>
				<input required type="password" onChange={onHandleChange} name='password' value={password} />

				<label>Confirm password</label>
				<input required type="password" onChange={onHandleChange} name='confirmPassword' value={confirmPassword} />

				<button type='submit'>Sign Up</button>
			</form>

		</div>
	)
}

export default SignUpForm