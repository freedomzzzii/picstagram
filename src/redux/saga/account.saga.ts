import { takeLatest, race, put } from 'redux-saga/effects';

import constant from '../../common/constant';
import { workerServiceGetAPI } from './service.saga';

type actionGetProfileType = {
  type: string,
}

function* workerGetProfile(action: actionGetProfileType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: '/users/freedomzzzii',
    typeSuccess: constant.GET_PROFILE_SUCCESS,
    typeFailure: constant.GET_PROFILE_FAILURE,
  });
}

export function* watcherGetProfile(): any {
  yield race({
    response: yield takeLatest(constant.GET_PROFILE_REQUEST, workerGetProfile),
    cancel: yield put({ 'type': constant.LOADING_GLOBAL_HIDE }),
  })
}
