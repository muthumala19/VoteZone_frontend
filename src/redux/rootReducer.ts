import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/slice';
import electionReducer from './election/slice';

const rootReducer = combineReducers({
  user: userReducer,
  election: electionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
