import { all, fork } from 'redux-saga/effects';
import { userSaga } from './user/saga';

export default function* rootSaga() {
  try {
    yield all([fork(userSaga)]);
  } catch (error) {
    throw new Error(`Error in rootSaga ${error}`);
  }
}
