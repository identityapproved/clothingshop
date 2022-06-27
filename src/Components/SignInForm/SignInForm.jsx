import React, { useContext, useState } from 'react'
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignInForm.styles.scss'
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';

// import { getRedirectResult } from 'firebase/auth'

const defaultFormField = {
	email: '',
	password: '',
}

const SignInForm = () => {
	const [formField, setFormField] = useState(defaultFormField);
	const { email, password } = formField;
	const { setCurrentUser } = useContext(UserContext)

	const resetFormFields = () => {
		setFormField(defaultFormField)
	}

	const onHandleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password);

			setCurrentUser(user)

			resetFormFields()
		} catch (error) {
			switch (error.code) {

				case 'auth/wrong-password':
					alert('incorrect password for email')
					break;

				case 'auth/user-not-found':
					alert('no user associated with this email')
					break;

				default:
					console.log(error);
			}
		}
	}

	const onHandleChange = (event) => {
		const { name, value } = event.target;

		setFormField({ ...formField, [name]: value })
	}

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user)
	}

	/* 	useEffect(async () => {
			const response = await getRedirectResult(auth)
	
			if (response) {
				const userDocRef = await createUserDocumentFromAuth(response.user)
			}
		}, []) */

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign In With Email And Password</span>

			<form onSubmit={onHandleSubmit} >

				<FormInput label='Email' required type="email" onChange={onHandleChange} name='email' value={email} />

				<FormInput label='Password' required type="password" onChange={onHandleChange} name='password' value={password} />

				<div className="buttons-container">
					<Button type='submit'>Sign In</Button>

					<Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
					{/* <button onClick={signInWithGoogleRedirect}>Sign In With Google</button> */}
				</div>
			</form>

		</div>
	)
}

export default SignInForm;