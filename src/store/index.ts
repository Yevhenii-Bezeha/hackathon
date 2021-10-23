import { configureStore } from '@reduxjs/toolkit';
import middleware from './middleware';
import reducer from './reducer';

const store = configureStore({
  middleware,
  reducer,
});

export default store;
