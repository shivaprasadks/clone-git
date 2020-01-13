import {
    UPDATE_FILTER_VALUE,
    RESET_FILTER_VALUE,
} from 'app/actions/types'

export const filterData = (state = {
    repoType:  'All',
    language: 'All'
}, action) => {
    switch(action.type){
        case UPDATE_FILTER_VALUE :
            return action.payload;
        case RESET_FILTER_VALUE : 
            return state;
        default: 
            return state;
    }
}