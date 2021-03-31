import { createAction } from 'redux-actions';

import constant from '../../common/constant';

// score
const fetchGetProfile = createAction(constant.GET_PROFILE_REQUEST);

export {
  // score
  fetchGetProfile,
};
