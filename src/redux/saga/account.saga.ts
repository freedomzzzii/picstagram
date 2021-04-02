import { takeLatest } from 'redux-saga/effects';

import constant from '../../common/constant';
import { actionDefaultWithPayloadType, actionDefaultType } from '../../common/type';
import { workerServiceGetAPI } from './service.saga';

type actionSearchUsersType = actionDefaultWithPayloadType & {
  payload?: {
    query: string,
  },
}
type actionGetProfileByUserType = actionDefaultWithPayloadType & {
  payload?: {
    username: string,
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
  yield takeLatest(constant.GET_PROFILE_REQUEST, workerGetProfile);
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
  yield takeLatest(constant.GET_SEARCH_USERS_REQUEST, workerSearchUsers)
}

function* workerGetProfileByUser(action: actionGetProfileByUserType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: `/users/${action.payload?.username ? action.payload?.username : ''}`,
    typeSuccess: constant.GET_PROFILE_BY_USER_SUCCESS,
    typeFailure: constant.GET_PROFILE_BY_USER_FAILURE,
  });
}

export function* watcherGetProfileByUser(): any {
  yield takeLatest(constant.GET_PROFILE_BY_USER_REQUEST, workerGetProfileByUser);
}
