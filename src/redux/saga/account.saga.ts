import { take, fork, race, takeLatest, put } from 'redux-saga/effects';
import { Action } from 'redux-actions';

import constant from '../../common/constant';
import { workerServiceGetAPI } from './service.saga';

type actionGetBestScoreType = {
  type: string,
}

function* workerGetProfile(action: actionGetBestScoreType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: '/users/freedomzzzii',
    typeSuccess: constant.GET_PROFILE_SUCCESS,
    typeFailure: constant.GET_PROFILE_FAILURE,
  });
}

export function* watcherGetProfile(): any {
  const action: actionGetBestScoreType = yield take(constant.GET_PROFILE_REQUEST);
  yield fork(workerGetProfile, action);
  // yield race({
  //   response: yield takeLatest(constant.GET_PROFILE_REQUEST, workerGetProfile),
  //   cancel: yield put({ 'type': constant.LOADING_GLOBAL_HIDE }),
  // })
}
