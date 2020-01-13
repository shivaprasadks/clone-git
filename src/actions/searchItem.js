import {
    UPDATE_FILTERED_DATA,
} from './types';
import {
    filterData
} from 'app/utils/repoParser';
export const searchItem = (searchText) => {
    return (dispatch , getState) => {
        const {repoList, filterValue}  = getState();
       dispatch({
           type: UPDATE_FILTERED_DATA,
           payload: filterData(repoList, filterValue, searchText)
       });
    }
}