import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'containers';
import 'styles/index.scss';

const App = (): JSX.Element => {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
