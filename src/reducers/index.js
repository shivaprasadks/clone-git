import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { profileData } from './profileData';
import { repoList } from './repoList';

export default combineReducers({
  posts: postReducer,
  profileData :  profileData,
  repoList : repoList,
});