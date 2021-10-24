import { IUser, IError } from 'types';

const existingUser = localStorage.getItem('user');
const user = existingUser ? JSON.parse(existingUser) : null;

export interface IUserState {
  item: IUser | null;
  hasFetched: boolean;
  error: IError | null;
}

const initialState: IUserState = {
  item: user,
  hasFetched: true,
  error: null,
};

export default initialState;
