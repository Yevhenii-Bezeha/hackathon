import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const getPokemons = createAction(actionsTypes.GET_POKEMONS);
export const setPokemons = createAction<actionsTypes.TSetPokemons>(actionsTypes.SET_POKEMONS);
export const setError = createAction<actionsTypes.TSetError>(actionsTypes.SET_ERROR);
export const incrementPage = createAction(actionsTypes.INCREMENT_PAGE);
export const setPage = createAction<actionsTypes.TSetPage>(actionsTypes.SET_PAGE);
export const createPokemon = createAction<actionsTypes.TCreatePokemon>(actionsTypes.CREATE_POKEMON);
export const addPokemons = createAction<actionsTypes.TAddPokemons>(actionsTypes.ADD_POKEMONS);
