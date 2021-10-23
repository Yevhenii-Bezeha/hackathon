import { IPokemon, IError } from 'types';

export interface IPokemonsState {
  items: IPokemon[] | null;
  hasFetched: boolean;
  error: IError | null;
}

const initialState: IPokemonsState = {
  items: null,
  hasFetched: false,
  error: null,
};

export default initialState;
