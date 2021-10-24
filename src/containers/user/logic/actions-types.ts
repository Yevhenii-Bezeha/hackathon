import { ICredentials, IError, IUser } from 'types';

export const SIGN_IN = 'USER:SIGN_IN';
export const SIGN_UP = 'USER:SIGN_UP'
export const SING_OUT = 'USER:SING_OUT';
export const SET_USER = 'USER:SET_USER';
export const SET_ERROR = 'USER:SET_ERROR';

export type TSignIn = {
  credentials: ICredentials;
};
export type TSignUp = {
  email: ICredentials;
  password: ICredentials;
};

export type TSetUser = {
  user: IUser;
};

export type TSetError = {
  error: IError;
};
