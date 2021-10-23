import { IPokemon, IError } from 'types';

export interface IPokemonState {
  item: IPokemon | null;
  errors: IError[];
}

const initialState: IPokemonState = {
  item: null,
  errors: [],
};

export default initialState;
