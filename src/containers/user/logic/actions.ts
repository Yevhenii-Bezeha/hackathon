import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const signIn = createAction<actionsTypes.TSignIn>(actionsTypes.SING_IN);
export const signOut = createAction(actionsTypes.SING_OUT);
export const setUser = createAction<actionsTypes.TSetUser>(actionsTypes.SET_USER);
export const setError = createAction<actionsTypes.TSetError>(actionsTypes.SET_ERROR);
