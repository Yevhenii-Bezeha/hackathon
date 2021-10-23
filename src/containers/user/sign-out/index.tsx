import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { SignOutPage } from 'components';
import { signOut } from '../logic/actions';
import { Redirect } from 'react-router';
import { Routes } from 'common';

const SignOutContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, []);

  const user = useAppSelector((state) => state.user.item);

  return user ? <SignOutPage /> : <Redirect to={Routes.HOME} />;
};

export default SignOutContainer;
