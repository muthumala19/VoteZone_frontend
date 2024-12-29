import { call, put, takeLatest } from 'redux-saga/effects';
import { Election, fetchElections, fetchElectionsFailure, fetchElectionsSuccess } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import client from '../../utilities/apolloClient';
import { GET_ELECTIONS } from '../../grapql/election';
import { getGraphQLError } from '../../utilities/types';

export function* watchFetchElections({ payload }: PayloadAction<{ userId: number }>) {
  try {
    console.log('fetchElections', payload);
    const result = yield call(client.query.bind(client), {
      query: GET_ELECTIONS,
    });
    yield put(fetchElectionsSuccess(result.data.getElections));
  } catch (error) {
    console.log('error', error);
    yield put(fetchElectionsFailure(getGraphQLError(error).message));
  }
}

export function* electionSaga() {
  yield takeLatest(fetchElections, watchFetchElections);
}
