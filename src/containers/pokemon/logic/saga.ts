import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemon } from 'types';

const a = (id: string) => {
  return {
    name: 'string',
    ability: 'string',
    photo: 'string',
  };
};

function* getPokemonWorker({ payload: { id } }: ReturnType<typeof actions.getPokemon>) {
  try {
    const pokemon: IPokemon = yield call(a, id);
    yield put(actions.setPokemon({ pokemon }));
  } catch (error) {
    console.error(error);
  }
}

function* getPokemonWatcher() {
  yield takeEvery(actionsTypes.GET_POKEMON, getPokemonWorker);
}

function* saga() {
  yield all([getPokemonWatcher()]);
}

export default saga;
