import { combineReducers } from 'redux';

import { getProfile, searchUsers } from './account.reducer';

import { loading } from './loading.reducer';

import { getListPhoto } from './photo.reducers';

export default combineReducers({
  // loading
  loading,
  // account
  getProfile,
  searchUsers,
  // photo
  getListPhoto,
});
