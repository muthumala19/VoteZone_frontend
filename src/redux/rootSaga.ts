import { all, fork } from 'redux-saga/effects';
import { userSaga } from './user/saga';
import { electionSaga } from './election/saga';

export default function* rootSaga() {
  try {
    yield all([fork(userSaga), fork(electionSaga)]);
  } catch (error) {
    throw new Error(`Error in rootSaga ${error}`);
  }
}
