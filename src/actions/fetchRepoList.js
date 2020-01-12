import {
    REPO_DETAILS_API
} from '../constants';
import {
    REPO_LIST_SUCCESS,
    REPO_LIST_FAIL,
} from './types';

export const fetchRepoList = () => {

    return (dispatch) => {
        fetch(REPO_DETAILS_API)
        .then(res => res.json())
        .then(posts => dispatch({
            type: REPO_LIST_SUCCESS,
            payload: posts
            })
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