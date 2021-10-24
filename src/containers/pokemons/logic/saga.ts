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

function* createPokemonWorker({
  payload: { pokemon: newPokemon },
}: ReturnType<typeof actions.createPokemon>) {
  try {
    const pokemon: IPokemon = yield call(PokemonsService.create, newPokemon);
    yield put(actions.addPokemons({ pokemons: [pokemon] }));
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

function* createPokemonsWatcher() {
  yield takeEvery(actionsTypes.CREATE_POKEMON, createPokemonWorker);
}

function* saga() {
  yield all([getPokemonsWatcher(), createPokemonsWatcher()]);
}

export default saga;
