import {
    REPO_DETAILS_API
} from 'app/constants';
import {
    REPO_LIST_SUCCESS,
    REPO_LIST_FAIL,
    UPDATE_FILTERED_DATA,
} from './types';
import {
    RepoList,profileData
} from 'app/utils/resposeData';
import {
    filterData
} from 'app/utils/repoParser';

export const fetchRepoList = () => {

    return (dispatch,getState) => {
        const { filterValue}  = getState();
        dispatch({
            type: REPO_LIST_SUCCESS,
            payload: RepoList
        })
        dispatch({
            type: UPDATE_FILTERED_DATA,
            payload: filterData(RepoList, filterValue, '')
        });
        // fetch(REPO_DETAILS_API)
        // .then(res => res.json())
        // .then(posts => dispatch({
            // type: REPO_LIST_SUCCESS,
            // payload: posts
            // })
        // )    
        // .catch(
            // (error) => {
                // dispatch({
                    // type: REPO_LIST_FAIL,
                    // payload: {}
                // });
            // }
        // )
    }
}