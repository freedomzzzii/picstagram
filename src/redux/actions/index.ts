import { createAction } from 'redux-actions';

import constant from '../../common/constant';

// score
const fetchGetProfile = createAction(constant.GET_PROFILE_REQUEST);

// photo
const fetchGetListPhoto = createAction(constant.GET_LIST_PHOTO_REQUEST);

export {
  // score
  fetchGetProfile,
  fetchGetListPhoto,
};
