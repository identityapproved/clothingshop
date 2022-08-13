import { OtherInformation, UserData } from '../../utils/firebase/firebase.utils';
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/actionCreator.utils';
import { USER_ACTION_TYPES } from './user.types';

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const googleSignInStart = withMatcher((): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

/* SIGN IN */

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string; }>;

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, UserData>;

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withMatcher((user: UserData): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((user: UserData): SignInFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, user));

/* SIGN UP */

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string; }>;

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, { user: UserData; otherInformation: OtherInformation; }>;

export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart => createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName }));

export const signUpSuccess = withMatcher((user: UserData, otherInformation: OtherInformation): SignUpSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, { user, otherInformation }));

export const signUpFailed = withMatcher((error: Error): SignUpFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

/* SIGN OUT */

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;


export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: Error): SignOutFailed => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));