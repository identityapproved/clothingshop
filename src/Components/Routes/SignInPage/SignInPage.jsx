import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../SignUpForm/SignUpForm';
// import { getRedirectResult } from 'firebase/auth'

const SignInPage = () => {

	// useEffect(async () => {
	// 	const response = await getRedirectResult(auth)

	// 	if (response) {
	// 		const userDocRef = await createUserDocumentFromAuth(response.user)
	// 	}
	// }, [])


	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user)
	}

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In With Google</button>
			<SignUpForm />
			{/* <button onClick={signInWithGoogleRedirect}>Sign In With Google</button> */}
		</div>
	)
}

export default SignInPage