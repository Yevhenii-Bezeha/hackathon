import { createReducer } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemonState } from './state';
import initialState from './state';

const reducer = createReducer<IPokemonState>(initialState, {
  [actionsTypes.GET_POKEMON]: (state) => {
    return { ...state, hasFetched: false };
  },
  [actionsTypes.SET_POKEMON]: (state, { payload }: ReturnType<typeof actions.setPokemon>) => {
    return { ...state, item: payload.pokemon, hasFetched: true };
  },
  [actionsTypes.SET_ERROR]: (state, { payload }: ReturnType<typeof actions.setError>) => {
    return { ...state, error: payload.error, hasFetched: true };
  },
});

export default reducer;
