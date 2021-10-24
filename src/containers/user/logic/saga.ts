import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { IUser } from 'types';
import { AuthService } from 'services';
import credentials from '../../../types/credentials';

const a = () => {
  throw new Error();
};

function* signInWorker({payload: { credentials }}: ReturnType<typeof actions.signIn>) {
  try {
    const user: IUser = yield call(() => AuthService.signInUser(credentials));
    yield put(actions.setUser({ user }));
  } catch (error) {
    yield put(actions.setError({ error: { message: 'Wrong data.' } }));
  }
}
function* signUpWorker({payload: { credentials }}: ReturnType<typeof actions.signUp>) {
  try {
    const user: IUser = yield call(AuthService.signUpUser, credentials);
    yield put(actions.setUser({ user }));
  } catch (error) {
    yield put(actions.setError({ error: { message: 'Wrong data.' } }));
  }
}

function* signInWatcher() {
  yield takeEvery(actionsTypes.SIGN_IN, signInWorker);
}

function* signUpWatcher() {
  yield takeEvery(actionsTypes.SIGN_IN, signUpWorker);
}

function* saga() {
  yield all([
    signInWatcher(),
    signUpWatcher(),
  ]);
}

export default saga;
