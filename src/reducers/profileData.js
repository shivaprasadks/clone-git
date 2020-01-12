import {
    PROFILE_DATA_SUCCESS,
    PROFILE_DATA_FAIL
} from '../actions/types'

export const profileData = (state = {}, action) => {
    switch(action.type){
        case PROFILE_DATA_SUCCESS :
            return action.payload;
        case PROFILE_DATA_FAIL : 
            return {};
        default: 
            return state;
    }
}