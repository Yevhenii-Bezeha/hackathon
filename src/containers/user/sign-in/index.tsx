import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { SignInPage } from 'components';
import { ICredentials } from 'types';
import { signIn } from '../logic/actions';
import { Redirect } from 'react-router';
import { Routes } from 'common';

const SignInContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onSignIn = (credentials: ICredentials) => {
    dispatch(signIn({ credentials }));
  };

  const user = useAppSelector((state) => state.user.item);

  return user ? <Redirect to={Routes.HOME} /> : <SignInPage onSignIn={onSignIn} />;
};

export default SignInContainer;
