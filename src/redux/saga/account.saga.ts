import { takeLatest, race, put } from 'redux-saga/effects';

import constant from '../../common/constant';
import { actionDefaultWithPayloadType, actionDefaultType } from '../../common/type';
import { workerServiceGetAPI } from './service.saga';

type actionSearchUsersType = actionDefaultWithPayloadType & {
  payload?: {
    query: string,
  },
}

function* workerGetProfile(action: actionDefaultType) {
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
    cancel: yield put({ type: constant.LOADING_GLOBAL_HIDE }),
  })
}

function* workerSearchUsers(action: actionSearchUsersType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: `/search/users?per_page=20&query=${action.payload?.query ? action.payload?.query : ''}`,
    typeSuccess: constant.GET_SEARCH_USERS_SUCCESS,
    typeFailure: constant.GET_SEARCH_USERS_FAILURE,
  });
}

export function* watcherSearchUsers(): any {
  yield race({
    response: yield takeLatest(constant.GET_SEARCH_USERS_REQUEST, workerSearchUsers),
    cancel: yield put({ type: constant.LOADING_GLOBAL_HIDE }),
  })
}
