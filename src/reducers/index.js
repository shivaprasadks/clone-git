import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { profileData } from './profileData';

export default combineReducers({
  posts: postReducer,
  profileData :  profileData,
});