import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IUser } from 'types';

const a = () => {
  throw new Error();
};

function* signInWorker() {
  try {
    const user: IUser = yield call(a);
    yield put(actions.setUser({ user }));
  } catch (error) {
    yield put(actions.setError({ error: { message: 'Wrong data.' } }));
  }
}

function* signInWatcher() {
  yield takeEvery(actionsTypes.SIGN_IN, signInWorker);
}

function* saga() {
  yield all([signInWatcher()]);
}

export default saga;
