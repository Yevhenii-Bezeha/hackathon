import { all } from '@redux-saga/core/effects';
import pokemonSaga from 'containers/pokemon/logic/saga';
import pokemonsSaga from 'containers/pokemons/logic/saga';
import userSaga from 'containers/user/logic/saga';

function* saga() {
  yield all([pokemonSaga(), pokemonsSaga(), userSaga()]);
}

export default saga;
