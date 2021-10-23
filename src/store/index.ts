import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import IRootState from './state';

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware: any) => [
  ...getDefaultMiddleware({
    thunk: false,
  }),
  sagaMiddleware,
];

const store = configureStore({
  middleware,
  reducer,
});

sagaMiddleware.run(saga);

export type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
