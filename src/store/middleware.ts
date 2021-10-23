import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware: any) => [
  ...getDefaultMiddleware({
    thunk: false,
  }),
  sagaMiddleware,
];

export default middleware;
