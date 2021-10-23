import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'containers';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
