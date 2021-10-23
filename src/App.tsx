import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'containers';
import 'styles/index.scss';
import PokemonList from 'components/pages/pokemonList';
import Modal from './components/common/modal';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
      <Modal>
        <PokemonList />
      </Modal>
    </Provider>
  );
}

export default App;
