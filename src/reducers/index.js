import { combineReducers } from 'redux';
import { profileData } from './profileData';
import { repoList } from './repoList';
import { filterData } from './filterUpdate';
import { filteredData } from './filteredData';

export default combineReducers({
  profileData :  profileData,
  repoList : repoList,
  filterData : filterData,
  filteredData : filteredData,
});