import { IPokemon } from 'types';

export const GET_POKEMON = 'POKEMON:GET_POKEMON';
export const SET_POKEMON = 'POKEMON:SET_POKEMON';

export type TGetPokemon = {
  id: string;
};

export type TSetPokemon = {
  pokemon: IPokemon;
};
