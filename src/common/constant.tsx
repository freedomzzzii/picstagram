import { initialStateType, initialStateLoadingType } from './type'

type constantTypes = {
  host: string | undefined,
  accessToken: string | undefined,
  LOADING_GLOBAL_SHOW: string,
  LOADING_GLOBAL_HIDE: string,
  GET_PROFILE_REQUEST: string,
  GET_PROFILE_SUCCESS: string,
  GET_PROFILE_FAILURE: string,
  initialState: initialStateType,
  initialLoadingState: initialStateLoadingType,
};

const constant: constantTypes = {
  // environtment variable
  host: process.env.REACT_APP_HOST_API,
  accessToken: process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN,
  // action type
  // - account
  GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE: 'GET_PROFILE_FAILURE',
  // - loading
  LOADING_GLOBAL_SHOW: 'LOADING_GLOBAL_SHOW',
  LOADING_GLOBAL_HIDE: 'LOADING_GLOBAL_HIDE',
  // state redux
  initialState: {},
  initialLoadingState: {
    count: 0,
  },
};

export default constant;
