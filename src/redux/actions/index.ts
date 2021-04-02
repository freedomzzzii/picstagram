import { createAction } from 'redux-actions';

import constant from '../../common/constant';

// account
const fetchGetProfile = createAction(constant.GET_PROFILE_REQUEST);
const fetchSearchUsers = createAction(constant.GET_SEARCH_USERS_REQUEST);

// photo
const fetchGetListPhoto = createAction(constant.GET_LIST_PHOTO_REQUEST);

export {
  // account
  fetchGetProfile,
  fetchSearchUsers,
  // photo
  fetchGetListPhoto,
};
