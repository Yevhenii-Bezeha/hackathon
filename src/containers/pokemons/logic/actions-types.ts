import { IError, INewPokemon, IPokemon } from 'types';

export const GET_POKEMONS = 'POKEMONS:GET_POKEMONS';
export const CREATE_POKEMON = 'POKEMONS:CREATE_POKEMON';
export const ADD_POKEMONS = 'POKEMONS:ADD_POKEMONS';
export const SET_POKEMONS = 'POKEMONS:SET_POKEMONS';
export const INCREMENT_PAGE = 'POKEMONS:INCREMENT_PAGE';
export const SET_PAGE = 'POKEMONS:SET_PAGE';
export const SET_ERROR = 'POKEMONS:SET_ERROR';

export type TSetPokemons = {
  pokemons: IPokemon[];
};

export type TCreatePokemon = {
  pokemon: INewPokemon;
};

export type TAddPokemons = {
  pokemons: IPokemon[];
};

export type TSetError = {
  error: IError;
};

export type TSetPage = {
  page: number;
};
