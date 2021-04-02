import constant from '../../common/constant';
import { actionDefaultType } from '../../common/type'

export const getProfile = (state = constant.initialState, action: actionDefaultType) => {
  switch (action.type) {
    case constant.GET_PROFILE_REQUEST:
      return Object.assign({}, state, { ...action });
    case constant.GET_PROFILE_SUCCESS:
      return Object.assign({}, state, { ...action });
    case constant.GET_PROFILE_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : constant.initialState;
  }
};

export const searchUsers = (state = constant.initialState, action: actionDefaultType) => {
  switch (action.type) {
    case constant.GET_SEARCH_USERS_REQUEST:
      return Object.assign({}, state, { ...action });
    case constant.GET_SEARCH_USERS_SUCCESS:
      return Object.assign({}, state, { ...action });
    case constant.GET_SEARCH_USERS_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : constant.initialState;
  }
};

export const getProfileByUser = (state = constant.initialState, action: actionDefaultType) => {
  switch (action.type) {
    case constant.GET_PROFILE_BY_USER_REQUEST:
      return Object.assign({}, state, { ...action });
    case constant.GET_PROFILE_BY_USER_SUCCESS:
      return Object.assign({}, state, { ...action });
    case constant.GET_PROFILE_BY_USER_FAILURE:
      return Object.assign({}, state, { ...action });
    case constant.CLEAR_DATA_POST_USER_PAGE:
      return constant.initialState;
    default:
      return state ? state : constant.initialState;
  }
};

