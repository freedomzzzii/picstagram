import { createAction } from 'redux-actions';

import constant from '../../common/constant';

// clear
const clearPostUser = createAction(constant.CLEAR_DATA_POST_USER_PAGE);

// account
const fetchGetProfile = createAction(constant.GET_PROFILE_REQUEST);
const fetchSearchUsers = createAction(constant.GET_SEARCH_USERS_REQUEST);
const fetchGetProfileByUser = createAction(constant.GET_PROFILE_BY_USER_REQUEST);

// photo
const fetchGetListPhoto = createAction(constant.GET_LIST_PHOTO_REQUEST);
const fetchGetListPhotoByUser = createAction(constant.GET_LIST_PHOTO_BY_USER_REQUEST);

export {
  // clear
  clearPostUser,
  // account
  fetchGetProfile,
  fetchSearchUsers,
  fetchGetProfileByUser,
  // photo
  fetchGetListPhoto,
  fetchGetListPhotoByUser,
};
