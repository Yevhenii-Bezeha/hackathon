import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemon } from 'types';
import { PokemonsService } from 'services';
import { ResponseError } from 'helpers';

function* getPokemonsWorker() {
  try {
    const pokemons: IPokemon[] = yield call(PokemonsService.getAll);
    yield put(actions.setPokemons({ pokemons }));
  } catch (error: any) {
    yield put(
      actions.setError({
        error: {
          message: error || 'Pokemons error',
        },
      }),
    );
  }
}

function* getPokemonsWatcher() {
  yield takeEvery(actionsTypes.GET_POKEMONS, getPokemonsWorker);
}

function* saga() {
  yield all([getPokemonsWatcher()]);
}

export default saga;
