import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App(): JSX.Element {
  return <Provider store={store}></Provider>;
}

export default App;
