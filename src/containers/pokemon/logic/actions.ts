import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const getPokemon = createAction<actionsTypes.TGetPokemon>(actionsTypes.GET_POKEMON);
export const setPokemon = createAction<actionsTypes.TSetPokemon>(actionsTypes.SET_POKEMON);
