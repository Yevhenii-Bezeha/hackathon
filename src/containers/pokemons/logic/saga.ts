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
    {
      id: 'stri3ng',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: 'st56756ring',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: '78',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: '45',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: 'fghfhs4',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: '5555',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: 'dfg5',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: 'gfngdfs',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: 'gfjnf',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: 'fgdf',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: '34',
      name: 'string',
      ability: 'string',
      photo: 'string',
    },
    {
      id: '222352',
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
