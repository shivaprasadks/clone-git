import {
    REPO_DETAILS_API
} from 'app/constants';
import {
    REPO_LIST_SUCCESS,
    REPO_LIST_FAIL,
    UPDATE_FILTERED_DATA,
} from './types';

import {
    filterData
} from 'app/utils/repoParser';

export const fetchRepoList = () => {

    return (dispatch,getState) => {
        const { filterValue}  = getState();
       
        fetch(REPO_DETAILS_API)
        .then(res => res.json())
        .then(posts => {
                dispatch({
                    type: REPO_LIST_SUCCESS,
                    payload: posts
                })
                dispatch({
                    type: UPDATE_FILTERED_DATA,
                    payload: filterData(posts, filterValue, '')
                });
            }
        )    
        .catch(
            (error) => {
                dispatch({
                    type: REPO_LIST_FAIL,
                    payload: {}
                });
            }
        )
    }
}