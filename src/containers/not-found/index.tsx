import React from 'react';
import { ErrorPage } from 'components';

const NotFoundContainer = () => {
  return <ErrorPage status={404} message="Such a page does not exist." />;
};

export default NotFoundContainer;
