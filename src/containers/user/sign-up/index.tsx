import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { SignUpPage } from 'components';
import { ICredentials } from 'types';
import { signUp } from '../logic/actions';
import { Redirect } from 'react-router';
import { Routes } from 'common';

const SignUpContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onSignUp = (credentials: ICredentials) => {
    dispatch(signUp({ credentials }));
  };

  const user = useAppSelector((state) => state.user.item);

  return user ? <Redirect to={Routes.HOME} /> : <SignUpPage onSignUp={onSignUp} />;
};

export default SignUpContainer;
