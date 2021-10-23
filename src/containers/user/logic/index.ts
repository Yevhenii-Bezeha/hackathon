import { createReducer } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IUserState } from './state';
import initialState from './state';

const reducer = createReducer<IUserState>(initialState, {
  [actionsTypes.SING_IN]: (state) => {
    return { ...state, hasFetched: false };
  },
  [actionsTypes.SING_OUT]: (state) => {
    return { ...state, item: null };
  },
  [actionsTypes.SET_USER]: (state, { payload }: ReturnType<typeof actions.setUser>) => {
    return { ...state, item: payload.user, hasFetched: true };
  },
  [actionsTypes.SET_ERROR]: (state, { payload }: ReturnType<typeof actions.setError>) => {
    return { ...state, error: payload.error, hasFetched: true };
  },
});

export default reducer;
