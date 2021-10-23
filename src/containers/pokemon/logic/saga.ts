import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemon } from 'types';

const a = (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: 'string',
        ability: 'string',
        photo: ',',
      });
    }, 5000);
  });
};

function* getPokemonWorker({ payload: { id } }: ReturnType<typeof actions.getPokemon>) {
  try {
    const pokemon: IPokemon = yield call(a, id);
    yield put(actions.setPokemon({ pokemon }));
  } catch (error: unknown) {
    yield put(actions.setError({ error: { message: 'Pokemon not found' } }));
  }
}

function* getPokemonWatcher() {
  yield takeEvery(actionsTypes.GET_POKEMON, getPokemonWorker);
}

function* saga() {
  yield all([getPokemonWatcher()]);
}

export default saga;
