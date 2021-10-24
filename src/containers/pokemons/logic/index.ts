import { createReducer } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemonsState } from './state';
import initialState from './state';

const reducer = createReducer<IPokemonsState>(initialState, {
  [actionsTypes.GET_POKEMONS]: (state) => {
    return { ...state, hasFetched: false };
  },
  [actionsTypes.SET_POKEMONS]: (state, { payload }: ReturnType<typeof actions.setPokemons>) => {
    return { ...state, items: payload.pokemons, hasFetched: true };
  },
  [actionsTypes.SET_ERROR]: (state, { payload }: ReturnType<typeof actions.setError>) => {
    return { ...state, error: payload.error, hasFetched: true };
  },
  [actionsTypes.INCREMENT_PAGE]: (state) => {
    return { ...state, page: state.page + 1 };
  },
  [actionsTypes.SET_PAGE]: (state, { payload }: ReturnType<typeof actions.setPage>) => {
    return { ...state, page: payload.page };
  },
  [actionsTypes.ADD_POKEMONS]: (state, { payload }: ReturnType<typeof actions.addPokemons>) => {
    return { ...state, items: [...(state.items ? state.items : []), ...payload.pokemons] };
  },
});

export default reducer;
