import { takeLatest, race, put } from 'redux-saga/effects';

import constant from '../../common/constant';
import { actionDefaultWithPayloadType } from '../../common/type';
import { workerServiceGetAPI } from './service.saga';

type actionGetListPhotoType = actionDefaultWithPayloadType & {
  payload?: {
    query: string,
  },
}

function* workerGetListPhoto(action: actionGetListPhotoType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: `/photos/random?count=10`,
    typeSuccess: constant.GET_LIST_PHOTO_SUCCESS,
    typeFailure: constant.GET_LIST_PHOTO_FAILURE,
  });
}

export function* watcherGetListPhoto(): any {
  yield race({
    response: yield takeLatest(constant.GET_LIST_PHOTO_REQUEST, workerGetListPhoto),
    cancel: yield put({ type: constant.LOADING_GLOBAL_HIDE }),
  })
}
