import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { SignInPage } from 'components';
import { ICredentials } from 'types';
import { signIn, signUp } from '../logic/actions';
import { Redirect } from 'react-router';
import { Routes } from 'common';

const SignInContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onSignIn = (credentials: ICredentials) => {
    dispatch(signIn({ credentials }));
  };

  const onSignUp = (credentials: ICredentials) => {
    dispatch(signUp({ credentials }));
  };

  const user = useAppSelector((state) => state.user.item);
console.log(user);
  return user ? <Redirect to={Routes.HOME} /> : <SignInPage onSignIn={onSignIn} onSignUp={onSignUp} />;
};

export default SignInContainer;
