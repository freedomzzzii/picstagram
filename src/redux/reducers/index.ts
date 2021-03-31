import { combineReducers } from 'redux';

import { getProfile } from './account.reducer';

import { loading } from './loading.reducer';

export default combineReducers({
  // loading
  loading,
  // account
  getProfile,
});
