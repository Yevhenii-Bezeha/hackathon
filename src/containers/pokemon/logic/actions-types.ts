import { IError, IPokemon } from 'types';

export const GET_POKEMON = 'POKEMON:GET_POKEMON';
export const SET_POKEMON = 'POKEMON:SET_POKEMON';
export const SET_ERROR = 'POKEMON:SET_ERROR';

export type TGetPokemon = {
  id: string;
};

export type TSetPokemon = {
  pokemon: IPokemon;
};

export type TSetError = {
  error: IError;
};
