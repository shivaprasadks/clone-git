import {
    PROFILE_DATA_API
} from 'app/constants';
import {
    PROFILE_DATA_FAIL,
    PROFILE_DATA_SUCCESS,
} from './types';
import {
    RepoList,profileData
} from 'app/utils/resposeData';

export const fetchProfileDetials = () => {

    return (dispatch) => {

        dispatch({
            type: PROFILE_DATA_SUCCESS,
            payload: profileData
        });

        // fetch(PROFILE_DATA_API)
        // .then(res => res.json())
        // .then(posts => dispatch({
        //     type: PROFILE_DATA_SUCCESS,
        //     payload: posts
        //     })
        // )
        // .catch(
        //     (error) => {
        //         dispatch({
        //             type: PROFILE_DATA_FAIL,
        //             payload: {}
        //         });
        //     }
        // )
    }
}