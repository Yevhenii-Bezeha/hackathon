import { Navigation } from 'components';
import React from 'react';
import { useAppSelector } from 'store';

const NavigationContainer = () => {
  const user = useAppSelector((state) => state.user.item);

  return <Navigation user={user} />;
};

export default NavigationContainer;
