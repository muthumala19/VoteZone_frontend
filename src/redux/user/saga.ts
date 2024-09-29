import { takeLatest } from 'redux-saga/effects';
import { addNewUser, authenticate, login, signup, register, logout } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';

export function* watchLogin() {}

export function* watchAddNewUser() {}

export function* watchAuthenticate() {}

export function* watchSignupUser() {}

export function* watchRegisterUser() {}

export function* watchLogoutUser() {}

export function* userSaga() {
  yield takeLatest(login, watchLogin);
  yield takeLatest(addNewUser, watchAddNewUser);
  yield takeLatest(authenticate, watchAuthenticate);
  yield takeLatest(signup, watchSignupUser);
  yield takeLatest(register, watchRegisterUser);
  yield takeLatest(logout, watchLogoutUser);
}
