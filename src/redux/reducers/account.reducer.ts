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
