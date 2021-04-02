import { combineReducers } from 'redux';

import { getProfile, searchUsers, getProfileByUser } from './account.reducer';

import { loading } from './loading.reducer';

import { getListPhoto, getListPhotoByUser } from './photo.reducers';

export default combineReducers({
  // loading
  loading,
  // account
  getProfile,
  searchUsers,
  getProfileByUser,
  // photo
  getListPhoto,
  getListPhotoByUser,
});
