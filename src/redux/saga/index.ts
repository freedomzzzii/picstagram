import { all } from 'redux-saga/effects';

import { watcherGetProfile } from './account.saga';

export default function* rootSaga() {
  yield all([
    // account
    watcherGetProfile(),
  ]);
}
