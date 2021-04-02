import { takeLatest } from 'redux-saga/effects';

import constant from '../../common/constant';
import { actionDefaultWithPayloadType, actionDefaultType } from '../../common/type';
import { workerServiceGetAPI } from './service.saga';

type actionGetListPhotoByUserType = actionDefaultWithPayloadType & {
  payload?: {
    username: string,
  },
}

function* workerGetListPhoto(action: actionDefaultType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: '/photos/random?count=10',
    typeSuccess: constant.GET_LIST_PHOTO_SUCCESS,
    typeFailure: constant.GET_LIST_PHOTO_FAILURE,
  });
}

export function* watcherGetListPhoto(): any {
  yield takeLatest(constant.GET_LIST_PHOTO_REQUEST, workerGetListPhoto);
}


function* workerGetListPhotoByUser(action: actionGetListPhotoByUserType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: `/users/${action.payload?.username ? action.payload?.username : ''}/photos?per_page=10&order_by=latest`,
    typeSuccess: constant.GET_LIST_PHOTO_BY_USER_SUCCESS,
    typeFailure: constant.GET_LIST_PHOTO_BY_USER_FAILURE,
  });
}

export function* watcherGetListPhotoByUser(): any {
  yield takeLatest(constant.GET_LIST_PHOTO_BY_USER_REQUEST, workerGetListPhotoByUser);
}
