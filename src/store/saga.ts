import { all } from '@redux-saga/core/effects';
import pokemonSaga from 'containers/pokemon/logic/saga';

function* saga() {
  yield all([pokemonSaga()]);
}

export default saga;
