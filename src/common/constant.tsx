import { initialStateType, initialStateLoadingType } from './type'

type constantTypes = {
  host: string | undefined,
  accessToken: string | undefined,
  LOADING_GLOBAL_SHOW: string,
  LOADING_GLOBAL_HIDE: string,
  CLEAR_DATA_POST_USER_PAGE: string,
  GET_PROFILE_REQUEST: string,
  GET_PROFILE_SUCCESS: string,
  GET_PROFILE_FAILURE: string,
  GET_SEARCH_USERS_REQUEST: string,
  GET_SEARCH_USERS_SUCCESS: string,
  GET_SEARCH_USERS_FAILURE: string,
  GET_PROFILE_BY_USER_REQUEST: string,
  GET_PROFILE_BY_USER_SUCCESS: string,
  GET_PROFILE_BY_USER_FAILURE: string,
  GET_LIST_PHOTO_REQUEST: string,
  GET_LIST_PHOTO_SUCCESS: string,
  GET_LIST_PHOTO_FAILURE: string,
  GET_LIST_PHOTO_BY_USER_REQUEST: string,
  GET_LIST_PHOTO_BY_USER_SUCCESS: string,
  GET_LIST_PHOTO_BY_USER_FAILURE: string,
  initialState: initialStateType,
  initialLoadingState: initialStateLoadingType,
  pathHome: string,
  pathPostUser: string,
};

const constant: constantTypes = {
  // environtment variable
  host: process.env.REACT_APP_HOST_API,
  accessToken: 'VgWTd0VZoxbCwKRe7iMsO4r2i9so3vyTzBrvXURF6lM',
  // action type
  // - clear
  CLEAR_DATA_POST_USER_PAGE: 'CLEAR_DATA_POST_USER_PAGE',
  // - account
  GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE: 'GET_PROFILE_FAILURE',
  GET_SEARCH_USERS_REQUEST: 'GET_SEARCH_USERS_REQUEST',
  GET_SEARCH_USERS_SUCCESS: 'GET_SEARCH_USERS_SUCCESS',
  GET_SEARCH_USERS_FAILURE: 'GET_SEARCH_USERS_FAILURE',
  GET_PROFILE_BY_USER_REQUEST: 'GET_PROFILE_BY_USER_REQUEST',
  GET_PROFILE_BY_USER_SUCCESS: 'GET_PROFILE_BY_USER_SUCCESS',
  GET_PROFILE_BY_USER_FAILURE: 'GET_PROFILE_BY_USER_FAILURE',
  // - loading
  LOADING_GLOBAL_SHOW: 'LOADING_GLOBAL_SHOW',
  LOADING_GLOBAL_HIDE: 'LOADING_GLOBAL_HIDE',
  // - photo
  GET_LIST_PHOTO_REQUEST: 'GET_LIST_PHOTO_REQUEST',
  GET_LIST_PHOTO_SUCCESS: 'GET_LIST_PHOTO_SUCCESS',
  GET_LIST_PHOTO_FAILURE: 'GET_LIST_PHOTO_FAILURE',
  GET_LIST_PHOTO_BY_USER_REQUEST: 'GET_LIST_PHOTO_BY_USER_REQUEST',
  GET_LIST_PHOTO_BY_USER_SUCCESS: 'GET_LIST_PHOTO_BY_USER_SUCCESS',
  GET_LIST_PHOTO_BY_USER_FAILURE: 'GET_LIST_PHOTO_BY_USER_FAILURE',
  // state redux
  initialState: {},
  initialLoadingState: {
    count: 0,
  },
  // path
  pathHome: '/',
  pathPostUser: '/post/:username',
};

export default constant;
