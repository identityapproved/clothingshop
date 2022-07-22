import { createAction } from '../../utils/reducer/actionCreator.utils'
import { USER_ACTION_TYPES } from './user.types'

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)

/* SIGN IN */

export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })

export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailed = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, user)

/* SIGN UP */

export const signUpStart = (email, password, displayName) => createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName })

export const signUpSuccess = (user, otherInformation) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, { user, otherInformation })

export const signUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)

/* SIGN OUT */

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)