import { combineReducers } from 'redux';
import { profileData } from './profileData';
import { repoList } from './repoList';

export default combineReducers({
  profileData :  profileData,
  repoList : repoList,
});