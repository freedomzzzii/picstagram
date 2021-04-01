import { combineReducers } from 'redux';

import { getProfile } from './account.reducer';

import { loading } from './loading.reducer';

import { getListPhoto } from './photo.reducers';

export default combineReducers({
  // loading
  loading,
  // account
  getProfile,
  // photo
  getListPhoto,
});
