import constant from '../../common/constant';
import { actionDefaultType } from '../../common/type'

export const getListPhoto = (state = constant.initialState, action: actionDefaultType) => {
  switch (action.type) {
    case constant.GET_LIST_PHOTO_REQUEST:
      return Object.assign({}, state, { ...action });
    case constant.GET_LIST_PHOTO_SUCCESS:
      return Object.assign({}, state, { ...action });
    case constant.GET_LIST_PHOTO_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : constant.initialState;
  }
};

export const getListPhotoByUser = (state = constant.initialState, action: actionDefaultType) => {
  switch (action.type) {
    case constant.GET_LIST_PHOTO_BY_USER_REQUEST:
      return Object.assign({}, state, { ...action });
    case constant.GET_LIST_PHOTO_BY_USER_SUCCESS:
      return Object.assign({}, state, { ...action });
    case constant.GET_LIST_PHOTO_BY_USER_FAILURE:
      return Object.assign({}, state, { ...action });
    case constant.CLEAR_DATA_POST_USER_PAGE:
      return constant.initialState;
    default:
      return state ? state : constant.initialState;
  }
};
