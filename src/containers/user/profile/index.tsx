import React from 'react';
import { UserPage } from 'components';
import { useAppSelector } from 'store';
import { Redirect } from 'react-router';
import { Routes } from 'common';

const UserContainer = () => {
  const user = useAppSelector((state) => state.user.item);

  return user ? <UserPage user={user} /> : <Redirect to={Routes.SIGN_IN} />;
};

export default UserContainer;
