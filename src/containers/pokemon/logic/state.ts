import { IPokemon, IError } from 'types';

export interface IPokemonState {
  item: IPokemon | null;
  hasFetched: boolean;
  error: IError | null;
}

const initialState: IPokemonState = {
  item: null,
  hasFetched: false,
  error: null,
};

export default initialState;
