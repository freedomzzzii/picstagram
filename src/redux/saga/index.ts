import { all } from 'redux-saga/effects';

import { watcherGetProfile, watcherSearchUsers, watcherGetProfileByUser } from './account.saga';

import { watcherGetListPhoto, watcherGetListPhotoByUser } from './photo.saga';

export default function* rootSaga() {
  yield all([
    // account
    watcherGetProfile(),
    watcherSearchUsers(),
    watcherGetProfileByUser(),
    // photo
    watcherGetListPhoto(),
    watcherGetListPhotoByUser(),
  ]);
}
