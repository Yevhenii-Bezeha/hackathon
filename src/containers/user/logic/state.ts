import { IUser, IError } from 'types';

export interface IUserState {
  item: IUser | null;
  hasFetched: boolean;
  error: IError | null;
}

const initialState: IUserState = {
  item: null,
  hasFetched: true,
  error: null,
};

export default initialState;
