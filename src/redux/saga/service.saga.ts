import { put } from 'redux-saga/effects';

import constant from '../../common/constant';

type actionServiceGetTypes = {
  pathAPI: string,
  typeSuccess: string,
  typeFailure: string,
};

export function* workerServiceGetAPI(action: actionServiceGetTypes): any {
  try {
    yield put({ type: constant.LOADING_GLOBAL_SHOW });

    const response = yield fetch(`${constant.host}${action.pathAPI}`, {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${constant.accessToken}`,
        'Accept-Version': 'v1',
      }),
      method: 'GET',
    });
    const data = yield response.json();

    switch (response.status) {
      case 200:
        yield put({ type: action.typeSuccess, data, status: response.status });
        return yield put({ type: constant.LOADING_GLOBAL_HIDE });
      case 500:
        yield put({ type: action.typeFailure, data: null, status: response.status });
        return yield put({ type: constant.LOADING_GLOBAL_HIDE });
      default:
        yield put({ type: action.typeFailure, data: null, status: response.status });
        return yield put({ type: constant.LOADING_GLOBAL_HIDE });
    }
  } catch (error) {
    yield put({ type: constant.LOADING_GLOBAL_HIDE });
    return yield put({
      type: action.typeFailure,
      data: null,
      status: error.status ? error.status : error,
      dateTime: new Date(),
    });
  }
}
