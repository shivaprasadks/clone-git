import {
    REPO_LIST_SUCCESS,
    REPO_LIST_FAIL,
} from '../actions/types'

export const repoList = (state = [], action) => {
    switch(action.type){
        case REPO_LIST_SUCCESS :
            return action.payload;
        case REPO_LIST_FAIL : 
            return {};
        default: 
            return state;
    }
}