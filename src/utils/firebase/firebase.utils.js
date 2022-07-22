// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey)
	const batch = writeBatch(db);

	objectsToAdd.forEach((obj) => {
		const docRef = doc(collectionRef, obj.title.toLowerCase())
		batch.set(docRef, obj)
	})

	await batch.commit();
	console.log('done')
}

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map(docSnapshot => docSnapshot.data());

}

export const createUserDocumentFromAuth = async (userAuth, otherInformation) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...otherInformation
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userSnapshot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
			unsubscribe();
			resolve(userAuth)
		},
			reject
		)
	})
}