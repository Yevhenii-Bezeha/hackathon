import { IError, IPokemon } from 'types';

export const GET_POKEMONS = 'POKEMONS:GET_POKEMONS';
export const SET_POKEMONS = 'POKEMONS:SET_POKEMONS';
export const INCREMENT_PAGE = 'POKEMONS:INCREMENT_PAGE';
export const SET_PAGE = 'POKEMONS:SET_PAGE';
export const SET_ERROR = 'POKEMONS:SET_ERROR';

export type TSetPokemons = {
  pokemons: IPokemon[];
};

export type TSetError = {
  error: IError;
};

export type TSetPage = {
  page: number;
};
