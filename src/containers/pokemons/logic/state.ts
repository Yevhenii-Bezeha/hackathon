import { IPokemon, IError } from 'types';

export interface IPokemonsState {
  items: IPokemon[] | null;
  error: IError | null;
  hasFetched: boolean;
  page: number;
  options: {
    pageSize: number;
  };
}

const initialState: IPokemonsState = {
  items: null,
  hasFetched: false,
  error: null,
  page: 1,
  options: {
    pageSize: 6,
  },
};

export default initialState;
