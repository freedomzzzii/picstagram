import { all } from 'redux-saga/effects';

import { watcherGetProfile, watcherSearchUsers } from './account.saga';

import { watcherGetListPhoto } from './photo.saga';

export default function* rootSaga() {
  yield all([
    // account
    watcherGetProfile(),
    watcherSearchUsers(),
    // photo
    watcherGetListPhoto(),
  ]);
}
