import { all } from '@redux-saga/core/effects';
import pokemonSaga from 'containers/pokemon/logic/saga';
import pokemonsSaga from 'containers/pokemons/logic/saga';

function* saga() {
  yield all([pokemonSaga(), pokemonsSaga()]);
}

export default saga;
