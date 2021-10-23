import { createReducer } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IPokemonState } from './state';
import initialState from './state';

const reducer = createReducer<IPokemonState>(initialState, {
  [actionsTypes.SET_POKEMON]: (state, { payload }: ReturnType<typeof actions.setPokemon>) => {
    return { ...state, item: payload.pokemon };
  },
});

export default reducer;
