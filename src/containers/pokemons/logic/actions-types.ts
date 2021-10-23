import { IError, IPokemon } from 'types';

export const GET_POKEMONS = 'POKEMONS:GET_POKEMONS';
export const SET_POKEMONS = 'POKEMONS:SET_POKEMONS';
export const SET_ERROR = 'POKEMONS:SET_ERROR';

export type TSetPokemons = {
  pokemons: IPokemon[];
};

export type TSetError = {
  error: IError;
};
