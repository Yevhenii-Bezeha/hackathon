import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemon } from 'types';
import { PokemonsService } from 'services';

function* getPokemonWorker({ payload: { id } }: ReturnType<typeof actions.getPokemon>) {
  try {
    const pokemon: IPokemon = yield call(PokemonsService.getOne, id);
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
