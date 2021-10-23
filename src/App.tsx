import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'containers';
import 'styles/index.scss';
import PokemonList from 'components/pages/pokemonList';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
      <PokemonList />
    </Provider>
  );
}

export default App;
