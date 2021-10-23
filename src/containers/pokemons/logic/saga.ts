import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemon } from 'types';

const a = () => {
  return [
    {
      id: 'string',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
  ];
};

function* getPokemonsWorker() {
  try {
    const pokemons: IPokemon[] = yield call(a);
    yield put(actions.setPokemons({ pokemons }));
  } catch (error) {
    yield put(actions.setError({ error: { message: 'Pokemons error' } }));
  }
}

function* getPokemonsWatcher() {
  yield takeEvery(actionsTypes.GET_POKEMONS, getPokemonsWorker);
}

function* saga() {
  yield all([getPokemonsWatcher()]);
}

export default saga;
