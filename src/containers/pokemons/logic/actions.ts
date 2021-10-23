import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const getPokemons = createAction(actionsTypes.GET_POKEMONS);
export const setPokemons = createAction<actionsTypes.TSetPokemons>(actionsTypes.SET_POKEMONS);
export const setError = createAction<actionsTypes.TSetError>(actionsTypes.SET_ERROR);
