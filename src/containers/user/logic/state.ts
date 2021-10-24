import { IUser, IError } from 'types';

const getUser = localStorage.getItem("user")
const user =  getUser ? JSON.parse(getUser) : null;

export interface IUserState {
  item: IUser | null;
  hasFetched: boolean;
  error: IError | null;
  registeredSuccess: boolean;
  loginSuccess: boolean;
  loginOrRegister: boolean;
}

const initialState: IUserState = {
  item: user,
  hasFetched: true,
  error: null,
  registeredSuccess: false,
  loginSuccess: false,
  loginOrRegister: false
};

export default initialState;
